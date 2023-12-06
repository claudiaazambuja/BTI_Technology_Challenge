import { tollRepository } from "../repositories/toll.repository.js";
import tax from "../utils/tax.js";

async function create(plate) {
    const result = await tollRepository.verify(plate) //verificar se existe a placa, e se existir retornar o valor de passage_fee e accumulated_passages
    let accumulated_passages = 0;
    let passage_fee = 0
    
    accumulated_passages = result.rows.length > 0 ? (new Date().getDate() === 1 ? 1 : result.rows[0].accumulated_passages + 1) : 0;
    passage_fee = result.rows.length > 0 ? result.rows[0].passage_fee : 0;

    const discount = accumulated_passages !== 0 ? tax(accumulated_passages) : 7.90;
    const operationId = await tollRepository.create(plate, discount, accumulated_passages)

    if (accumulated_passages > 10) {
        await tollRepository.updateDiscountApplied(operationId);
    }
    return {
        id: operationId,
    };
}

async function getAllCars() {
    return await tollRepository.getAll()
}

async function getVehicleByPlate(plate) {
    const result = await tollRepository.getByPlate(plate);
    if (result.rows.length === 0) throw new Error("Veículo não encontrado.");  
    return result.rows;
}

async function updatePlate(id, plate) {
    const historyResult = await tollRepository.getLatestPassageInfoByPlate(plate);
    console.log(historyResult)
    let accumulated_passages = 0;
    let passage_fee = 0
      if (historyResult) {
        accumulated_passages = historyResult.accumulated_passages + 1;
        passage_fee = historyResult.passage_fee;
    }

    console.log(id, plate, accumulated_passages, passage_fee);

    const discount = accumulated_passages !== 0 ? tax(accumulated_passages) : 7.90;
 
    await tollRepository.updatePassageData(id, plate, discount, accumulated_passages);

}
export const tollService = { create, getAllCars, getVehicleByPlate, updatePlate }