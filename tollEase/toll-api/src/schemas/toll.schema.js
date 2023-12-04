import joiBase from "joi"
import joiDate from "@joi/date"
const joi = joiBase.extend(joiDate)

export const plaqueSchema = joi.object({
    plaque: joi.string().required().messages({
        'string.base': `"N[umero de placa" é um campo do tipo número referente a um carro.`,
        'any.required': `O campo "Quantidade de viagens" é obrigatório.`
    })
 })