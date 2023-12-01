import express from "express"
import "express-async-errors"
import cors from "cors"

import { errorHandler } from "./middlewares/error.handler.js"
import tollRouter from "./routes/index.router.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(tollRouter)
app.use(errorHandler)

const PORT = 4000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))