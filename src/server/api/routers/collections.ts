import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const collectionsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return "hello";
    const collections = await ctx.prisma.collection.findMany();
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
