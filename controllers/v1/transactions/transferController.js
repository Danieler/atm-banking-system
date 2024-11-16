const transferMoney = (req, res) => {
    const { accountId } = req.params;
    const { destinationIban, amount } = req.body;
    // IBAN validation and transfer logic
    /*const isIbanValid = validateIban(destinationIban);
    if (!isIbanValid) {
        return res.status(400).json({ error: 'Invalid IBAN' });
    }*/

    res.json({ message: `Successfully transferred ${amount} from account ${accountId} to ${destinationIban}` });
};

module.exports = { transferMoney };