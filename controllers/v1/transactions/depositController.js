const { processDeposit } = require('../../../models/depositModel');
const depositMoneyController = (req, res) => {
    const { accountId } = req.params;
    const { amount, cardId, bankId } = req.body;

    const result = processDeposit(accountId, amount, cardId, bankId);

    if (result.error) {
        return res.status(400).json({ error: result.error });
    }

    return res.status(200).json({ message: result.message, newBalance: result.newBalance });
};

module.exports = depositMoneyController;
