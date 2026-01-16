import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { AssistanceType } from "generated/prisma";

export const scheduledVisitRouter = createTRPCRouter({
  // Get all scheduled visits for a patient
  getByPatient: protectedProcedure
    .input(z.object({ patientId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.scheduledVisit.findMany({
        where: {
          patientId: input.patientId,
          isActive: true,
        },
        include: {
          createdBy: {
            select: {
              id: true,
              name: true,
              username: true,
            },
          },
          assignedTo: {
            select: {
              id: true,
              name: true,
              username: true,
            },
          },
        },
        orderBy: {
          nextVisitDate: "asc",
        },
      });
    }),

  // Get all scheduled visits by date range (including recurring visits)
  getByDateRange: protectedProcedure
    .input(
      z.object({
        startDate: z.date(),
        endDate: z.date(),
      }),
    )
    .query(async ({ ctx, input }) => {
      // Get all active scheduled visits
      const allVisits = await ctx.db.scheduledVisit.findMany({
        where: {
          isActive: true,
        },
        include: {
          patient: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              address: true,
              houseNumber: true,
              city: true,
              phone1: true,
              assignedTo: {
                select: {
                  id: true,
                  name: true,
                  username: true,
                },
              },
            },
          },
          createdBy: {
            select: {
              id: true,
              name: true,
              username: true,
            },
          },
          assignedTo: {
            select: {
              id: true,
              name: true,
              username: true,
            },
          },
        },
      });

      // Calculate all occurrences within the date range
      const visitsInRange: typeof allVisits = [];

      for (const visit of allVisits) {
        if (!visit.visitFrequency) {
          // One-time visit: check if it falls in the range
          if (
            visit.nextVisitDate >= input.startDate &&
            visit.nextVisitDate <= input.endDate
          ) {
            visitsInRange.push(visit);
          }
        } else {
          // Recurring visit: calculate all occurrences
          let currentDate = new Date(visit.nextVisitDate);

          // If the first occurrence is before the start date, advance to the first occurrence within range
          if (currentDate < input.startDate) {
            const daysDiff = Math.floor(
              (input.startDate.getTime() - currentDate.getTime()) /
                (1000 * 60 * 60 * 24),
            );
            const occurrences = Math.ceil(daysDiff / visit.visitFrequency);
            currentDate = new Date(currentDate);
            currentDate.setDate(
              currentDate.getDate() + occurrences * visit.visitFrequency,
            );
          }

          // Add all occurrences within the range
          while (currentDate <= input.endDate) {
            if (currentDate >= input.startDate) {
              // Create a copy of the visit with the calculated date
              visitsInRange.push({
                ...visit,
                nextVisitDate: new Date(currentDate),
              });
            }
            currentDate = new Date(currentDate);
            currentDate.setDate(currentDate.getDate() + visit.visitFrequency);
          }
        }
      }

      // Sort by date and patient name
      return visitsInRange.sort((a, b) => {
        const dateCompare =
          a.nextVisitDate.getTime() - b.nextVisitDate.getTime();
        if (dateCompare !== 0) return dateCompare;
        return a.patient.lastName.localeCompare(b.patient.lastName);
      });
    }),

  // Create a new scheduled visit
  create: protectedProcedure
    .input(
      z.object({
        patientId: z.string(),
        assistanceType: z.nativeEnum(AssistanceType),
        nextVisitDate: z.date(),
        visitFrequency: z.number().int().positive().optional(),
        notes: z.string().optional(),
        assignedToId: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.scheduledVisit.create({
        data: {
          patientId: input.patientId,
          assistanceType: input.assistanceType,
          nextVisitDate: input.nextVisitDate,
          visitFrequency: input.visitFrequency,
          notes: input.notes,
          assignedToId: input.assignedToId,
          createdById: ctx.session.user.id,
        },
        include: {
          patient: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      });
    }),

  // Update a scheduled visit
  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        assistanceType: z.nativeEnum(AssistanceType).optional(),
        nextVisitDate: z.date().optional(),
        visitFrequency: z.number().int().positive().optional().nullable(),
        notes: z.string().optional().nullable(),
        assignedToId: z.string().optional().nullable(),
        isActive: z.boolean().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.db.scheduledVisit.update({
        where: { id },
        data,
      });
    }),

  // Delete a scheduled visit
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.scheduledVisit.delete({
        where: { id: input.id },
      });
    }),

  // Mark a scheduled visit as completed
  complete: protectedProcedure
    .input(
      z.object({
        scheduledVisitId: z.string(),
        completedDate: z.date(),
        notes: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Get the scheduled visit to copy data
      const scheduledVisit = await ctx.db.scheduledVisit.findUnique({
        where: { id: input.scheduledVisitId },
      });

      if (!scheduledVisit) {
        throw new Error("Scheduled visit not found");
      }

      // Create completed visit record
      const completedVisit = await ctx.db.completedVisit.create({
        data: {
          scheduledVisitId: input.scheduledVisitId,
          patientId: scheduledVisit.patientId,
          completedDate: input.completedDate,
          assistanceType: scheduledVisit.assistanceType,
          notes: input.notes,
          performedById: ctx.session.user.id,
        },
      });

      // Update next visit date if frequency is set
      if (scheduledVisit.visitFrequency) {
        const newNextVisitDate = new Date(scheduledVisit.nextVisitDate);
        newNextVisitDate.setDate(
          newNextVisitDate.getDate() + scheduledVisit.visitFrequency,
        );

        await ctx.db.scheduledVisit.update({
          where: { id: input.scheduledVisitId },
          data: { nextVisitDate: newNextVisitDate },
        });
      }

      return completedVisit;
    }),

  // Get history of completed visits for a patient
  getCompletedByPatient: protectedProcedure
    .input(z.object({ patientId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.completedVisit.findMany({
        where: {
          patientId: input.patientId,
        },
        include: {
          performedBy: {
            select: {
              id: true,
              name: true,
              username: true,
            },
          },
          scheduledVisit: {
            select: {
              id: true,
              assistanceType: true,
            },
          },
        },
        orderBy: {
          completedDate: "desc",
        },
      });
    }),
});
