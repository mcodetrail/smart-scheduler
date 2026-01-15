import { z } from "zod";
import bcrypt from "bcryptjs";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "@/server/api/trpc";

export const authRouter = createTRPCRouter({
  /**
   * Register a new nurse user
   */
  register: publicProcedure
    .input(
      z.object({
        username: z.string().min(3).max(50),
        password: z.string().min(6),
        name: z.string().min(2).max(100),
        email: z.string().email().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Check if username already exists
      const existingUser = await ctx.db.user.findUnique({
        where: { username: input.username },
      });

      if (existingUser) {
        throw new Error("Username già in uso");
      }

      // Check if email already exists (if provided)
      if (input.email) {
        const existingEmail = await ctx.db.user.findUnique({
          where: { email: input.email },
        });

        if (existingEmail) {
          throw new Error("Email già in uso");
        }
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(input.password, 10);

      // Create user
      const user = await ctx.db.user.create({
        data: {
          username: input.username,
          password: hashedPassword,
          name: input.name,
          email: input.email,
          role: "nurse",
        },
        select: {
          id: true,
          username: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
        },
      });

      return user;
    }),

  /**
   * Get current user info
   */
  me: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    return user;
  }),

  /**
   * Get all nurses (for admin)
   */
  getAllNurses: protectedProcedure.query(async ({ ctx }) => {
    const nurses = await ctx.db.user.findMany({
      where: { role: "nurse" },
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
        createdAt: true,
      },
      orderBy: { name: "asc" },
    });

    return nurses;
  }),
});
