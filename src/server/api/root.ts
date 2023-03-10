import { collectionsRouter } from "./routers/collections";
import { exampleRouter } from "./routers/example";
import { tradesRouter } from "./routers/trades";
import { createTRPCRouter } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  collections: collectionsRouter,
  trades: tradesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
