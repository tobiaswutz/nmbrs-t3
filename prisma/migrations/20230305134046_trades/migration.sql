-- CreateTable
CREATE TABLE "KryptoTrade" (
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

    CONSTRAINT "KryptoTrade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CollectionToKryptoTrade" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Collection_name_key" ON "Collection"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_CollectionToKryptoTrade_AB_unique" ON "_CollectionToKryptoTrade"("A", "B");

-- CreateIndex
CREATE INDEX "_CollectionToKryptoTrade_B_index" ON "_CollectionToKryptoTrade"("B");

-- AddForeignKey
ALTER TABLE "KryptoTrade" ADD CONSTRAINT "KryptoTrade_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionToKryptoTrade" ADD CONSTRAINT "_CollectionToKryptoTrade_A_fkey" FOREIGN KEY ("A") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionToKryptoTrade" ADD CONSTRAINT "_CollectionToKryptoTrade_B_fkey" FOREIGN KEY ("B") REFERENCES "KryptoTrade"("id") ON DELETE CASCADE ON UPDATE CASCADE;
