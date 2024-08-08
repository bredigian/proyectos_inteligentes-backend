import { ContactController } from "../controllers/contact.controller"
import { Router } from "express"

const router = Router()

router.post("/", ContactController.contactUs)
router.post("/quote", ContactController.projectQuote)
router.post("/quote/custom", ContactController.projectCustomQuote)

export default router
