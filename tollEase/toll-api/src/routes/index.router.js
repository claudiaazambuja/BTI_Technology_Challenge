import { Router } from "express"
import validateSchema from "../middlewares/schema.middleware.js"
import { plaqueSchema } from "../schemas/toll.schema.js"
import { tollController } from "../controllers/toll.controller.js"


const tollRouter = Router()

tollRouter.post("/", validateSchema(plaqueSchema), tollController.create )
tollRouter.get("/", tollController.allCars)
tollRouter.get("/:plaque", tollController.getByPlaque )
tollRouter.put("/:plaque", )

export default tollRouter