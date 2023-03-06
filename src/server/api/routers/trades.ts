import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const tradesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const userId = ctx.session?.user?.id;
    if (!userId) {
      throw new Error("User not authenticated");
    }
    const trades = await ctx.prisma.trade.findMany({
      where: {
        userId,
      },
    });

    return trades;
  }),

  getAllFromCollection: publicProcedure
    .input(z.object({ collectionId: z.number() }))
    .query(async ({ ctx, input }) => {
      const userId = ctx.session?.user?.id;
      if (!userId) {
        throw new Error("User not authenticated");
      }
      const trades = await ctx.prisma.trade.findMany({
        where: {
          userId,
          collections: {
            some: {
              id: input.collectionId,
            },
          },
        },
      });
      return {
        trades,
      };
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
