const Joi = require('joi');

const transferSchema = Joi.object({
    destinationIban: Joi.string().length(22).required().messages({
        'string.base': 'Destination IBAN must be a string.',
        'string.length': 'IBAN must have exactly 22 characters.',
        'any.required': 'Destination IBAN is required.',
    }),
    amount: Joi.number().positive().required().messages({
        'number.base': 'Amount must be a number.',
        'number.positive': 'Amount must be greater than 0.',
        'any.required': 'Amount is required.',
    }),
});

module.exports = transferSchema;