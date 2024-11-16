const Joi = require('joi');

const transferSchema = Joi.object({
    amount: Joi.number().positive().required().messages({
        'number.base': 'Amount must be a number.',
        'number.positive': 'Amount must be greater than 0.',
        'any.required': 'Amount is required.',
    }),
    cardId: Joi.string().length(4).pattern(/^[0-9]+$/).required().messages({
        'string.base': 'Card number must be a string.',
        'string.length': 'Card number must be exactly 4 digits.',
        'string.pattern.base': 'Card number must only contain digits.',
        'any.required': 'Card number is required.',
    }),
    bankId: Joi.string().required().messages({
        'any.required': '"bankId" is required'
    }),
    destinationIban: Joi.string().length(22).required().messages({
        'string.base': 'Destination IBAN must be a string.',
        'string.length': 'IBAN must have exactly 22 characters.',
        'any.required': 'Destination IBAN is required.',
    }),
});

module.exports = transferSchema;
