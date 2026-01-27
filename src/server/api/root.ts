import { authRouter } from "@/server/api/routers/auth";
import { patientRouter } from "@/server/api/routers/patient";
import { scheduledVisitRouter } from "@/server/api/routers/scheduledVisit";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  patient: patientRouter,
  scheduledVisit: scheduledVisitRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
