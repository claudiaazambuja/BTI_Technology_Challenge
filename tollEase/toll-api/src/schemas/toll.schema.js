import joiBase from "joi";
import joiDate from "@joi/date";
const joi = joiBase.extend(joiDate);

export const plaqueSchema = joi.object({
    plaque: joi.string()
        .pattern(/^[A-Za-z]{3}-\d{1}[A-Za-z]?\d{2,3}$/) // Aceita tanto letras maiúsculas quanto minúsculas
        .required()
        .messages({
            'string.base': `"Número de placa" deve ser uma string.`,
            'string.pattern.base': `O formato da placa deve ser AAA-1234 ou AAA-1a23.`,
            'any.required': `O campo "Número de placa" é obrigatório.`
        })
});
