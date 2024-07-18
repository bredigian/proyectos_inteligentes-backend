import { Request, Response } from "express"

import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"
import { ProductType } from "@prisma/client"
import { ProductsTypesService } from "../services/products-types.service"

export const ProductsTypesController = {
  getAll: async (_: Request, res: Response) => {
    try {
      return res
        .status(200)
        .json({ data: await ProductsTypesService.getAll(), ok: true })
    } catch (e) {
      console.error(e)
      return res.status(500).json({
        ok: false,
        message: (e as Error).message,
        statusCode: 500,
        name: "Internal Server Error",
      })
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const payload: ProductType = req.body

      return res
        .status(201)
        .json({ data: await ProductsTypesService.create(payload), ok: true })
    } catch (e) {
      console.error(e)
      if (e instanceof PrismaClientKnownRequestError) {
        return res.status(409).json({
          ok: false,
          message: e.message,
          name: e.name,
          prismaCode: e.code,
          statusCode: 409,
        })
      }
      return res.status(500).json({
        ok: false,
        message: (e as Error).message,
        statusCode: 500,
        name: "Internal Server Error",
      })
    }
  },
}
