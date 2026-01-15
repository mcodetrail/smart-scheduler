import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const appointmentRouter = createTRPCRouter({
  /**
   * Create a new appointment
   */
  create: protectedProcedure
    .input(
      z.object({
        patientId: z.string(),
        scheduledDate: z.date(),
        duration: z.number().min(15).max(480).default(60),
        notes: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const appointment = await ctx.db.appointment.create({
        data: {
          ...input,
          createdById: ctx.session.user.id,
          lastModifiedById: ctx.session.user.id,
          status: "scheduled",
        },
        include: {
          patient: true,
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
      });

      return appointment;
    }),

  /**
   * Update an appointment
   */
  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        patientId: z.string().optional(),
        scheduledDate: z.date().optional(),
        duration: z.number().min(15).max(480).optional(),
        status: z.enum(["scheduled", "completed", "cancelled"]).optional(),
        notes: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;

      const appointment = await ctx.db.appointment.update({
        where: { id },
        data: {
          ...data,
          lastModifiedById: ctx.session.user.id,
        },
        include: {
          patient: true,
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
      });

      return appointment;
    }),

  /**
   * Delete an appointment
   */
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.appointment.delete({
        where: { id: input.id },
      });

      return { success: true };
    }),

  /**
   * Get a single appointment by ID
   */
  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const appointment = await ctx.db.appointment.findUnique({
        where: { id: input.id },
        include: {
          patient: true,
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
      });

      if (!appointment) {
        throw new Error("Appuntamento non trovato");
      }

      return appointment;
    }),

  /**
   * Get appointments for a specific date range
   */
  getByDateRange: protectedProcedure
    .input(
      z.object({
        startDate: z.date(),
        endDate: z.date(),
        nurseId: z.string().optional(), // Filter by specific nurse
        patientId: z.string().optional(), // Filter by specific patient
        status: z.enum(["scheduled", "completed", "cancelled"]).optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { startDate, endDate, nurseId, patientId, status } = input;

      const where = {
        scheduledDate: {
          gte: startDate,
          lte: endDate,
        },
        ...(nurseId && { createdById: nurseId }),
        ...(patientId && { patientId }),
        ...(status && { status }),
      }

      const appointments = await ctx.db.appointment.findMany({
        where,
        orderBy: { scheduledDate: "asc" },
        include: {
          patient: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              phone: true,
              address: true,
              city: true,
            },
          },
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
      });

      return appointments;
    }),

  /**
   * Get all appointments for a patient
   */
  getByPatient: protectedProcedure
    .input(
      z.object({
        patientId: z.string(),
        limit: z.number().min(1).max(100).default(50),
      })
    )
    .query(async ({ ctx, input }) => {
      const appointments = await ctx.db.appointment.findMany({
        where: { patientId: input.patientId },
        take: input.limit,
        orderBy: { scheduledDate: "desc" },
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
      });

      return appointments;
    }),

  /**
   * Get upcoming appointments (next 7 days)
   */
  getUpcoming: protectedProcedure
    .input(
      z.object({
        nurseId: z.string().optional(),
        days: z.number().min(1).max(30).default(7),
      })
    )
    .query(async ({ ctx, input }) => {
      const now = new Date();
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + input.days);

      const where = {
        scheduledDate: {
          gte: now,
          lte: futureDate,
        },
        status: "scheduled" as const,
        ...(input.nurseId && { createdById: input.nurseId }),
      }

      const appointments = await ctx.db.appointment.findMany({
        where,
        orderBy: { scheduledDate: "asc" },
        include: {
          patient: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              phone: true,
              address: true,
              city: true,
            },
          },
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
      });

      return appointments;
    }),

  /**
   * Get appointment statistics
   */
  getStats: protectedProcedure
    .input(
      z.object({
        nurseId: z.string().optional(),
        startDate: z.date(),
        endDate: z.date(),
      })
    )
    .query(async ({ ctx, input }) => {
      const where = {
        scheduledDate: {
          gte: input.startDate,
          lte: input.endDate,
        },
        ...(input.nurseId && { createdById: input.nurseId }),
      }

      const [total, scheduled, completed, cancelled] = await Promise.all([
        ctx.db.appointment.count({ where }),
        ctx.db.appointment.count({ where: { ...where, status: "scheduled" } }),
        ctx.db.appointment.count({ where: { ...where, status: "completed" } }),
        ctx.db.appointment.count({ where: { ...where, status: "cancelled" } }),
      ]);

      return {
        total,
        scheduled,
        completed,
        cancelled,
      };
    }),
});
