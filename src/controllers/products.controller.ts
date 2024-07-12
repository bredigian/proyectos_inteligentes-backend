import { Request, Response } from "express"

import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"
import { Product } from "@prisma/client"
import { ProductsService } from "../services/products.service"

export const ProductsController = {
  getAll: async (_: Request, res: Response) => {
    try {
      return res.status(200).json(await ProductsService.getAll())
    } catch (e) {
      console.error(e)
      return res.status(500).json({
        message: (e as Error).message,
        statusCode: 500,
        name: "Internal Server Error",
      })
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const payload: Product = req.body

      return res.status(201).json(await ProductsService.create(payload))
    } catch (e) {
      console.error(e)
      if (e instanceof PrismaClientKnownRequestError) {
        return res.status(409).json({
          message: e.message,
          name: e.name,
          prismaCode: e.code,
          statusCode: 409,
        })
      }
      return res.status(500).json({
        message: (e as Error).message,
        statusCode: 500,
        name: "Internal Server Error",
      })
    }
  },
}
