import { Router } from "express"
import validateSchema from "../middlewares/schema.middleware.js"
import { flightsController } from "../controllers/flights.controllers.js"
import validatePage from "../middlewares/validatePage.middleware.js"
import { tripSchema } from "../schemas/toll.schema.js"

const tollRouter = Router()

tollRouter.post("/", validateSchema(tripSchema), )
tollRouter.get("/", )

export default tollRouter