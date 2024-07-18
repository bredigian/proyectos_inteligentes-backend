import { $connect, $disconnect } from "./services/prisma.service"

import Express from "express"
import ProductsRouter from "./routes/products.route"
import { config } from "dotenv"
import cors from "cors"

config()

const app = Express()

app.use(cors())
app.use(Express.json())

$connect()

app.use("/products", ProductsRouter)

app.get("/", (_, res) => {
  res.json({ message: "Proyectos Inteligentes's API" })
})

process.on("SIGINT", async () => {
  await $disconnect()
  process.exit(0)
})

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () =>
  console.log(`Proyectos Inteligentes's API at PORT ${PORT}`)
)

export default app
