import { Request, Response } from "express"
import { TContact, TCustomQuote, TQuote } from "../types/contact.types"
import {
  contactUs,
  projectCustomQuote,
  projectQuote,
} from "../services/contact.service"

export const ContactController = {
  contactUs: async (req: Request, res: Response) => {
    try {
      const payload: TContact = req?.body
      const { name, email, message } = payload
      const isEmpty = !name || !email || !message

      if (isEmpty)
        throw new Error("Los atributos son requeridos o están incompletos.")

      await contactUs(payload)

      return res
        .status(201)
        .json({ message: "Formulario enviado exitosamente." })
    } catch (error) {
      if (error instanceof Error)
        res.status(400).json({ message: error.message })
    }
  },
  projectQuote: async (req: Request, res: Response) => {
    try {
      const payload: TQuote = req?.body
      const { name, email, message, date, phone, services } = payload
      const isEmpty =
        !name || !email || !message || !date || !phone || !services

      if (isEmpty)
        throw new Error("Los atributos son requeridos o están incompletos.")

      await projectQuote(payload)

      return res
        .status(201)
        .json({ message: "Formulario enviado exitosamente." })
    } catch (error) {
      if (error instanceof Error)
        res.status(400).json({ message: error.message })
    }
  },
  projectCustomQuote: async (req: Request, res: Response) => {
    try {
      const payload: TCustomQuote = req?.body
      const { name, email, phone, location, perforations, position } = payload
      const isEmpty =
        !name || !email || !location || !perforations || !phone || !position

      if (isEmpty)
        throw new Error("Los atributos son requeridos o están incompletos.")

      await projectCustomQuote(payload)

      return res
        .status(201)
        .json({ message: "Formulario enviado exitosamente." })
    } catch (error) {
      if (error instanceof Error)
        res.status(400).json({ message: error.message })
    }
  },
}
