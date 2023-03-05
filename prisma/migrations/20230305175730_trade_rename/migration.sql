/*
  Warnings:

  - You are about to drop the `KryptoTrade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CollectionToKryptoTrade` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "KryptoTrade" DROP CONSTRAINT "KryptoTrade_userId_fkey";

-- DropForeignKey
ALTER TABLE "_CollectionToKryptoTrade" DROP CONSTRAINT "_CollectionToKryptoTrade_A_fkey";

-- DropForeignKey
ALTER TABLE "_CollectionToKryptoTrade" DROP CONSTRAINT "_CollectionToKryptoTrade_B_fkey";

-- DropTable
DROP TABLE "KryptoTrade";

-- DropTable
DROP TABLE "_CollectionToKryptoTrade";

-- CreateTable
CREATE TABLE "Trade" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "exchange" TEXT NOT NULL,
    "baseAsset" TEXT NOT NULL,
    "quoteAsset" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "fee" DOUBLE PRECISION,
    "feeAsset" TEXT,
    "notes" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Trade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CollectionToTrade" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CollectionToTrade_AB_unique" ON "_CollectionToTrade"("A", "B");

-- CreateIndex
CREATE INDEX "_CollectionToTrade_B_index" ON "_CollectionToTrade"("B");

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionToTrade" ADD CONSTRAINT "_CollectionToTrade_A_fkey" FOREIGN KEY ("A") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionToTrade" ADD CONSTRAINT "_CollectionToTrade_B_fkey" FOREIGN KEY ("B") REFERENCES "Trade"("id") ON DELETE CASCADE ON UPDATE CASCADE;
