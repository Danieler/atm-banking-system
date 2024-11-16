const { processTransfer } = require('../../../models/transferModel');
const transferController = (req, res) => {
    const { accountId } = req.params;
    const { amount, cardId, bankId, destinationIban } = req.body;

    const result = processTransfer(accountId, amount, cardId, bankId, destinationIban);

    if (result.error) {
        return res.status(400).json({ error: result.error });
    }

    return res.status(200).json({
        message: result.message,
        newBalance: result.newBalance
    });
};
module.exports = transferController;
