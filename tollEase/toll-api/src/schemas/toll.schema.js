import joiBase from "joi";
import joiDate from "@joi/date";
const joi = joiBase.extend(joiDate);

export const plaqueSchema = joi.object({
    plaque: joi.string()
        .pattern(/^[A-Z]{3}-\d{4}$/) // Assumindo um formato padrão AAA-1234, ajuste conforme necessário
        .required()
        .messages({
            'string.base': `"Número de placa" deve ser uma string.`,
            'string.pattern.base': `O formato da placa deve ser AAA-1234.`,
            'any.required': `O campo "Número de placa" é obrigatório.`
        })
});
