import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const collectionsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const userId = ctx.session?.user?.id;
    if (!userId) {
      // Wenn keine Session-Daten vorhanden sind, werfen Sie einen Fehler
      throw new Error("User not authenticated");
    }

    const collections = await ctx.prisma.collection.findMany({
      where: {
        userId,
      },
    });

    return collections;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});

// import { z } from "zod";
// so wird es mit einem input gemacht
// hello: publicProcedure
//   .input(z.object({ text: z.string() }))
//   .query(({ input }) => {
//     return {
//       greeting: `Hello ${input.text}`,
//     };
//   }),
