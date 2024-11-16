const Joi = require('joi');

const cardSchema = Joi.object({
    // Validates the card number (should be a string and match a specific length or format)
    cardNumber: Joi.string().length(16).required().messages({
        'string.base': 'Card number must be a string.',
        'string.length': 'Card number must have exactly 16 characters.',
        'any.required': 'Card number is required.',
    }),

    // Pin is required for activate and changePin actions and must be a string of a certain length
    pin: Joi.string().length(4).when('action', { is: Joi.valid('activate', 'changePin'), then: Joi.required() }).messages({
        'string.base': 'PIN must be a string.',
        'string.length': 'PIN must have exactly 4 characters.',
        'any.required': 'PIN is required for this action.',
    }),

    // Withdrawal limit is required only for modifyLimit action and must be a number greater than 0
    withdrawalLimit: Joi.number().greater(0).when('action', { is: 'modifyLimit', then: Joi.required() }).messages({
        'number.base': 'Withdrawal limit must be a number.',
        'number.greater': 'Withdrawal limit must be greater than 0.',
        'any.required': 'Withdrawal limit is required for this action.',
    }),
});

module.exports = cardSchema;
