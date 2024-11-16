const Joi = require('joi');

const withdrawSchema = Joi.object({
    amount: Joi.number().positive().required().messages({
        'number.base': '"amount" should be a number',
        'number.positive': '"amount" should be a positive number',
        'any.required': '"amount" is required'
    }),
    cardType: Joi.string().valid('debit', 'credit').required().messages({
        'any.required': '"cardType" is required',
        'string.valid': '"cardType" must be either "debit" or "credit"'
    }),
    bankId: Joi.string().required().messages({
        'any.required': '"bankId" is required'
    })
});

module.exports = withdrawSchema;
