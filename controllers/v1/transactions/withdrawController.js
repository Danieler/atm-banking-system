const { processWithdrawal } = require('../../../models/withdrawModel');

const withdrawMoney = (req, res) => {
    const {accountId} = req.params;
    const {amount, cardType, bankId} = req.body;

    const result = processWithdrawal({accountId, amount, cardType, bankId});

    if (result.error) {
        return res.status(400).json({error: result.error});
    }

    res.json({
        message: `Successfully withdrew ${amount} from account ${accountId}. Commission applied: ${result.commission}`,
        remainingBalance: result.remainingBalance
    });
};

module.exports = {withdrawMoney};
