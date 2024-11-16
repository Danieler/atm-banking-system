const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middlewares/authMiddleware');
const validateRequest = require('../../middlewares/validationMiddleware');
const { depositSchema, withdrawSchema, transferSchema } = require('../../schemas/v1');
const { withdrawController, depositController, transferController } = require('../../controllers/v1/transactions');


// Withdrawing money from the account
router.post('/:accountId/withdraw', authMiddleware, validateRequest(withdrawSchema), withdrawController.withdrawMoney);

// Deposit money into the account
router.post('/:accountId/deposit', authMiddleware, validateRequest(depositSchema), depositController.depositMoney);

// Make a transfer
router.post('/:accountId/transfer', authMiddleware, validateRequest(transferSchema), transferController.transferMoney);

module.exports = router;