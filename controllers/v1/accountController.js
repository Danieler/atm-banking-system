const getAccountDetails = (req, res) => {
    const accountId = req.params.accountId;

    // Transactions mocks
    const transactions = [
        { id: 1, accountId: '123456789', type: 'deposit', amount: 500, description: 'Deposit at ATM', date: '2024-11-16' },
        { id: 2, accountId: '123456789', type: 'withdrawal', amount: 100, description: 'ATM Withdrawal', date: '2024-11-17' },
        { id: 3, accountId: '987654321', type: 'transfer', amount: 200, description: 'Transfer to account 123456789', date: '2024-11-18' },
        { id: 4, accountId: '123456789', type: 'commission', amount: 10, description: 'Bank commission fee', date: '2024-11-19' },
        { id: 5, accountId: '987654321', type: 'deposit', amount: 1000, description: 'Deposit at Bank Branch', date: '2024-11-20' },
        { id: 6, accountId: '123456789', type: 'transfer', amount: 300, description: 'Transfer to account 987654321', date: '2024-11-21' }
    ];

    const accountTransactions = transactions.filter(transaction => transaction.accountId === accountId);

    res.json({ accountId, transactions: accountTransactions });
};

module.exports = { getAccountDetails };
