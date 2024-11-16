const withdrawMoney = (req, res) => {
    const { accountId } = req.params;
    const { amount } = req.body;
    // Logic for checking balance and card limits
    res.json({ message: `Successfully withdrew ${amount} from account ${accountId}` });
};

module.exports = { withdrawMoney };