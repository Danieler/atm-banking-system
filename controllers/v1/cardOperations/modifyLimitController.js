const { modifyLimit } = require('../../../models/cardModel');

const modifyLimitController = (req, res) => {
    const { cardNumber } = req.params;
    const { withdrawalLimit } = req.body;

    const response = modifyLimit(cardNumber, withdrawalLimit);

    if (response.error) {
        return res.status(400).json({ error: response.error });
    }

    return res.json({ message: response.message });
};

module.exports = modifyLimitController;
