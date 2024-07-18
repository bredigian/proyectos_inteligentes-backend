import { Product } from "@prisma/client"
import { prisma } from "./prisma.service"

export const ProductsService = {
  getAll: async (id?: string) =>
    await prisma.product.findMany({ where: { typeId: id } }),
  create: async (payload: Product) =>
    await prisma.product.create({ data: payload }),
}
