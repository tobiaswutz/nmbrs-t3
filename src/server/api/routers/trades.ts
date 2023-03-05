import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const tradesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const trades = await ctx.prisma.trade.findMany();
    return trades;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
