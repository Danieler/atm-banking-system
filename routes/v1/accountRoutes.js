const express = require('express');
const router = express.Router();
const accountController = require('../../controllers/v1/accountController');
const authMiddleware = require('../../middlewares/authMiddleware');

// View account details
router.get('/:accountId', authMiddleware, accountController.getAccountDetails);

module.exports = router;