import { ProductsController } from "../controllers/products.controller"
import { ProductsTypesController } from "../controllers/products-types.controller"
import { Router } from "express"

const router = Router()

router.get("/", ProductsController.getAll)
router.post("/", ProductsController.create)
router.get("/types", ProductsTypesController.getAll)
router.post("/types", ProductsTypesController.create)

export default router
