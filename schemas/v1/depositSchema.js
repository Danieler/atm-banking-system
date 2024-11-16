const Joi = require('joi');

const depositSchema = Joi.object({
    amount: Joi.number().positive().required().messages({
        'number.base': 'Amount must be a number.',
        'number.positive': 'Amount must be greater than 0.',
        'any.required': 'Amount is required.',
    }),

    cardId: Joi.string().alphanum().length(4).required().messages({
        'string.base': 'Card ID must be a string.',
        'string.alphanum': 'Card ID must be alphanumeric.',
        'string.length': 'Card ID must have exactly 4 characters.',
        'any.required': 'Card ID is required.',
    }),

    bankId: Joi.string().required().messages({
        'any.required': '"bankId" is required'
    })
});

module.exports = depositSchema;
