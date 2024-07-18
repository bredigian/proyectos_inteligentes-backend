import { ProductType } from "@prisma/client"
import { prisma } from "./prisma.service"

export const ProductsTypesService = {
  getAll: async () => await prisma.productType.findMany(),
  create: async (payload: ProductType) =>
    await prisma.productType.create({ data: payload }),
}
