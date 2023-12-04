import { tollRepository } from "../repositories/toll.repository.js";
import tax from "../utils/tax.js";

async function create(plaque) {
    const result = await tollRepository.verify(plaque) //verificar se existe a placa, e se existir retornar o valor de passage_fee e accumulated_passages
    let accumulated_passages = 0;
    let passage_fee = 0
    if (result.rows.length > 0) {
        accumulated_passages = result.rows[0].accumulated_passages + 1;
        passage_fee = result.rows[0].passage_fee;
    }

    const discount = accumulated_passages !== 0 ? tax(accumulated_passages) : 7.90;
    await tollRepository.create(plaque, discount, accumulated_passages)
}

async function getAllCars() {
    return await tollRepository.getAll()
}

async function getVehicleByPlaque(plaque) {
    const result = await tollRepository.getByPlaque(plaque);
    if (result.rows.length === 0) throw new Error("Veículo não encontrado.");  
    return result.rows;
}

async function updatePlaque(id, newPlaque) {
    const historyResult = await tollRepository.getById(id);
    let accumulated_passages = 0;
    let passage_fee = 0

    if (historyResult.rows.length > 0) {
        accumulated_passages = historyResult.rows[0].accumulated_passages + 1;
        passage_fee = historyResult.rows[0].passage_fee;
    }

    const discount = accumulated_passages !== 0 ? tax(accumulated_passages) : 7.90;

    await tollRepository.updatePassageData(id, newPlaque, discount, accumulated_passages);
}
export const tollService = { create, getAllCars, getVehicleByPlaque, updatePlaque }