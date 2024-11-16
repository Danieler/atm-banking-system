const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.get('/:accountId', accountController.getAccountDetails);

module.exports = router;