import { Product } from "@prisma/client"
import { prisma } from "./prisma.service"

export const ProductsService = {
  getAll: async () => await prisma.product.findMany(),
  create: async (payload: Product) =>
    await prisma.product.create({ data: payload }),
}
