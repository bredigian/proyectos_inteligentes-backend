-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "typeId" VARCHAR(127) NOT NULL
);

-- CreateTable
CREATE TABLE "ProductType" (
    "id" VARCHAR(127) NOT NULL,
    "name" VARCHAR(255) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ProductType_id_key" ON "ProductType"("id");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ProductType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
