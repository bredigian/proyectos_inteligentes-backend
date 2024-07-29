import { ProductType } from "@prisma/client"
import { prisma } from "./prisma.service"

export const ProductsTypesService = {
  getAll: async () =>
    await prisma.productType.findMany({ orderBy: { order: "asc" } }),
  create: async (payload: ProductType) =>
    await prisma.productType.create({ data: payload }),
}
