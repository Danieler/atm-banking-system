const { activateCard } = require('../../../models/cardModel');
const activateCardController = (req, res) => {
    const { cardNumber } = req.params;
    const { pin } = req.body;

    const response = activateCard(cardNumber, pin);

    if (response.error) {
        return res.status(400).json({ error: response.error });
    }

    return res.json({ message: response.message });
};

module.exports = activateCardController;
