import httpStatus from "http-status"
import { tollService } from "../services/toll.service.js"

async function create(req, res) {
    const { plate } = req.body
    const result = await tollService.create(plate)
    res.status(httpStatus.OK).send(result)
}

async function allCars(req, res) {
    const cars = await tollService.getAllCars()
    res.status(httpStatus.OK).send(cars);
}

async function getByPlate(req, res) {
    const { plate } = req.params;
    const vehicle = await tollService.getVehicleByPlate(plate);
    res.status(httpStatus.OK).send(vehicle);
}

async function updatePlate(req, res) {
    const { id, plate } = req.body;
    console.log(id, plate)
    await tollService.updatePlate(id, plate);
    res.status(httpStatus.OK).send('Placa atualizada com sucesso!');
}

export const tollController = { create, allCars, getByPlate, updatePlate }

