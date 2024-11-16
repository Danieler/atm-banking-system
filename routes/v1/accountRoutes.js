const express = require('express');
const router = express.Router();
const accountController = require('../../controllers/v1/accountController');

router.get('/:accountId', accountController.getAccountDetails);

module.exports = router;