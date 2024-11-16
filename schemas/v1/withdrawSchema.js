const Joi = require('joi');

const withdrawSchema = Joi.object({
    amount: Joi.number().positive().required().messages({
        'number.base': 'Amount must be a number.',
        'number.positive': 'Amount must be greater than 0.',
        'any.required': 'Amount is required.',
    }),
});

module.exports = withdrawSchema;