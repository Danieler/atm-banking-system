const depositMoney = (req, res) => {
    const { accountId } = req.params;
    const { amount } = req.body;

    // Logic for verifying that the teller is from the same bank
    res.json({ message: `Successfully deposited ${amount} to account ${accountId}` });
};

module.exports = { depositMoney };