import { Router } from "express"
import validateSchema from "../middlewares/schema.middleware.js"
import { plateSchema, putPaqueSchema } from "../schemas/toll.schema.js"
import { tollController } from "../controllers/toll.controller.js"


const tollRouter = Router()

tollRouter.post("/", validateSchema(plateSchema), tollController.create )
tollRouter.get("/", tollController.allCars)
tollRouter.get("/:plate", tollController.getByPlate )
tollRouter.put("/", validateSchema(putPaqueSchema ), tollController.updatePlate )

export default tollRouter