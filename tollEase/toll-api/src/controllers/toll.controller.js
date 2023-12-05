import httpStatus from "http-status"
import { tollService } from "../services/toll.service.js"

async function create(req, res) {
    const { plaque } = req.body
    const result = await tollService.create(plaque)
    res.status(httpStatus.OK).send(result)
}

async function allCars(req, res) {
    const cars = await tollService.getAllCars()
    res.status(httpStatus.OK).send(cars);
}

async function getByPlaque(req, res) {
    const { plaque } = req.params;
    const vehicle = await tollService.getVehicleByPlaque(plaque);
    res.status(httpStatus.OK).send(vehicle);
}

async function updatePlaque(req, res) {
    const { id, plaque } = req.body;
    console.log(id, plaque)
    await tollService.updatePlaque(id, plaque);
    res.status(httpStatus.OK).send('Placa atualizada com sucesso!');
}

export const tollController = { create, allCars, getByPlaque, updatePlaque }

