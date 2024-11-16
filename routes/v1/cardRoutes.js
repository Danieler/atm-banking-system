const express = require('express');
const router = express.Router();
const { activateCardController, changePinController, modifyLimitController } = require('../../controllers/v1/cardOperations');

const authMiddleware = require('../../middlewares/authMiddleware');

// Activate card
router.post('/:cardNumber/activate', authMiddleware, activateCardController);

// Change PIN
router.post('/:cardNumber/changePin', authMiddleware, changePinController);

// Modify withdrawal limit
router.post('/:cardNumber/modifyLimit', authMiddleware, modifyLimitController);

module.exports = router;
