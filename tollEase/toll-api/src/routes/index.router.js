import { Router } from "express"
import validateSchema from "../middlewares/schema.middleware.js"
import { plaqueSchema, putPaqueSchema } from "../schemas/toll.schema.js"
import { tollController } from "../controllers/toll.controller.js"


const tollRouter = Router()

tollRouter.post("/", validateSchema(plaqueSchema), tollController.create )
tollRouter.get("/", tollController.allCars)
tollRouter.get("/:plaque", tollController.getByPlaque )
tollRouter.put("/", validateSchema(putPaqueSchema ), tollController.updatePlaque )

export default tollRouter