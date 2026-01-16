import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

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
        exemptionCode: z.string().max(10),
        assignedToId: z.string().optional(),
        notes: z.string().optional(),
      }),
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
          assignedToId: input.assignedToId || ctx.session.user.id,
          lastAssignedById: ctx.session.user.id,
          lastAssignedAt: new Date(),
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
        firstName: z.string().min(2).max(100).optional(),
        lastName: z.string().min(2).max(100).optional(),
        dateOfBirth: z.date().optional().nullable(),
        fiscalCode: z.string().length(16).optional().nullable(),
        address: z.string().max(200).optional().nullable(),
        houseNumber: z.string().max(5).optional().nullable(),
        city: z.string().max(100).optional().nullable(),
        postalCode: z.string().max(10).optional().nullable(),
        phone1: z.string().max(50).optional(),
        phone2: z.string().max(50).optional().nullable(),
        exemptionCode: z.string().max(10).optional(),
        assignedToId: z.string().optional().nullable(),
        notes: z.string().optional().nullable(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, assignedToId, ...data } = input;

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

      // Check if assignedToId changed
      const currentPatient = await ctx.db.patient.findUnique({
        where: { id },
        select: { assignedToId: true },
      });

      const updateData: any = { ...data };
      
      if (assignedToId !== undefined && assignedToId !== currentPatient?.assignedToId) {
        updateData.assignedToId = assignedToId;
        updateData.lastAssignedById = ctx.session.user.id;
        updateData.lastAssignedAt = new Date();
      }

      const patient = await ctx.db.patient.update({
        where: { id },
        data: updateData,
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
   * Search patients by name, fiscal code, or phone
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
            { phone1: { contains: input.query } },
            { phone2: { contains: input.query } },
          ],
        },
        take: 20,
        orderBy: [{ lastName: "asc" }, { firstName: "asc" }],
        select: {
          id: true,
          firstName: true,
          lastName: true,
          fiscalCode: true,
          dateOfBirth: true,
          phone1: true,
          phone2: true,
          address: true,
          houseNumber: true,
          city: true,
          assignedTo: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

      return patients;
    }),
});
