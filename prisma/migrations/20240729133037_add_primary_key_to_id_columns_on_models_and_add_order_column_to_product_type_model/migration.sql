-- AlterTable
ALTER TABLE "Product" ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ProductType" ADD COLUMN     "order" SERIAL NOT NULL,
ADD CONSTRAINT "ProductType_pkey" PRIMARY KEY ("id");
