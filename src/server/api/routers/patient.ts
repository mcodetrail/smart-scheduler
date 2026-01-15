import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { AssistanceType } from "generated/prisma";

export const patientRouter = createTRPCRouter({
  /**
   * Create a new patient
   */
  create: protectedProcedure
    .input(
      z.object({
        firstName: z.string().min(2).max(100),
        lastName: z.string().min(2).max(100),
        dateOfBirth: z.date().optional(),
        fiscalCode: z.string().length(16).optional(),
        address: z.string().max(200).optional(),
        houseNumber: z.string().max(5).optional(),
        city: z.string().max(100).optional(),
        postalCode: z.string().max(10).optional(),
        phone1: z.string().max(50),
        phone2: z.string().max(50).optional(),
        assistanceType: z.nativeEnum(AssistanceType).optional(),
        exemptionCode: z.string().max(10),
        notes: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Check if fiscal code already exists
      if (input.fiscalCode) {
        const existingPatient = await ctx.db.patient.findUnique({
          where: { fiscalCode: input.fiscalCode },
        });

        if (existingPatient) {
          throw new Error("Codice fiscale già presente nel sistema");
        }
      }

      const patient = await ctx.db.patient.create({
        data: {
          ...input,
          createdById: ctx.session.user.id,
        },
      });

      return patient;
    }),

  /**
   * Update a patient
   */
  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        firstName: z.string().min(2).max(100),
        lastName: z.string().min(2).max(100),
        dateOfBirth: z.date().optional(),
        fiscalCode: z.string().length(16).optional(),
        address: z.string().max(200).optional(),
        houseNumber: z.string().max(5).optional(),
        city: z.string().max(100).optional(),
        postalCode: z.string().max(10).optional(),
        phone1: z.string().max(50),
        phone2: z.string().max(50).optional(),
        assistanceType: z.nativeEnum(AssistanceType).optional(),
        exemptionCode: z.string().max(10),
        notes: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;

      // Check if fiscal code already exists for another patient
      if (data.fiscalCode) {
        const existingPatient = await ctx.db.patient.findFirst({
          where: {
            fiscalCode: data.fiscalCode,
            NOT: { id },
          },
        });

        if (existingPatient) {
          throw new Error("Codice fiscale già presente nel sistema");
        }
      }

      const patient = await ctx.db.patient.update({
        where: { id },
        data,
      });

      return patient;
    }),

  /**
   * Delete a patient
   */
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.patient.delete({
        where: { id: input.id },
      });

      return { success: true };
    }),

  /**
   * Get a single patient by ID
   */
  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const patient = await ctx.db.patient.findUnique({
        where: { id: input.id },
        include: {
          createdBy: {
            select: {
              id: true,
              name: true,
              username: true,
            },
          },
          appointments: {
            orderBy: { scheduledDate: "desc" },
            take: 10,
            include: {
              createdBy: {
                select: {
                  id: true,
                  name: true,
                  username: true,
                },
              },
              lastModifiedBy: {
                select: {
                  id: true,
                  name: true,
                  username: true,
                },
              },
            },
          },
        },
      });

      if (!patient) {
        throw new Error("Paziente non trovato");
      }

      return patient;
    }),

  /**
   * Get all patients with pagination and search
   */
  getAll: protectedProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(50),
        cursor: z.string().optional(),
        search: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { limit, cursor, search } = input;

      const where = search
        ? {
            OR: [
              { firstName: { contains: search } },
              { lastName: { contains: search } },
              { fiscalCode: { contains: search } },
              { phone1: { contains: search } },
            ],
          }
        : {};

      const patients = await ctx.db.patient.findMany({
        where,
        take: limit + 1,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: [{ lastName: "asc" }, { firstName: "asc" }],
        include: {
          createdBy: {
            select: {
              id: true,
              name: true,
              username: true,
            },
          },
          _count: {
            select: {
              appointments: true,
            },
          },
        },
      });

      let nextCursor: string | undefined = undefined;
      if (patients.length > limit) {
        const nextItem = patients.pop();
        nextCursor = nextItem?.id;
      }

      return {
        patients,
        nextCursor,
      };
    }),

  /**
   * Search patients by name or fiscal code
   */
  search: protectedProcedure
    .input(z.object({ query: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      const patients = await ctx.db.patient.findMany({
        where: {
          OR: [
            { firstName: { contains: input.query } },
            { lastName: { contains: input.query } },
            { fiscalCode: { contains: input.query } },
          ],
        },
        take: 10,
        orderBy: [{ lastName: "asc" }, { firstName: "asc" }],
        select: {
          id: true,
          firstName: true,
          lastName: true,
          fiscalCode: true,
          dateOfBirth: true,
          phone1: true,
        },
      });

      return patients;
    }),
});
