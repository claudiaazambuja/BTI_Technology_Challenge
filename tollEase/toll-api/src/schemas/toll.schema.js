export const tripSchema = joi.object({
    trip: joi.number().required().messages({
        'number.base': `"Quantidade de viagens" é um campo do tipo número referente a uma cidade.`,
        'any.required': `O campo "Quantidade de viagens" é obrigatório.`
    }),
 })