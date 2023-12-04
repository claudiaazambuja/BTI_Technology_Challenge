import httpStatus from "http-status"
import { tollService } from "../services/toll.service.js"

async function create(req, res) {
    const { plaque } = req.body
    await tollService.create(plaque)
    res.sendStatus(httpStatus.OK)
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
    const { id } = req.params;
    const { newPlaque } = req.body;
    await tollService.updatePlaque(id, newPlaque);
    res.status(httpStatus.OK).send('Placa atualizada com sucesso!');
}

export const tollController = { create, allCars, getByPlaque, updatePlaque }

