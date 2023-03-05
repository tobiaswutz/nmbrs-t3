import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const tradesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const userId = ctx.session?.user?.id;
    if (!userId) {
      // Wenn keine Session-Daten vorhanden sind, werfen Sie einen Fehler
      throw new Error("User not authenticated");
    }

    const trades = await ctx.prisma.trade.findMany({
      where: {
        userId,
      },
    });

    return trades;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
