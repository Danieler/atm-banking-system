const getAccountDetails = (req, res) => {
    const accountId = req.params.accountId;
    res.json({ message: `Account: ${accountId}` });
};

module.exports = { getAccountDetails };