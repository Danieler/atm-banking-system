let accounts = [
    { accountId: '123456789', balance: 1000, bankId: 'bankA', cardIds: ['1111', '2222'] }, // Account from Bank A with two cards
    { accountId: '987654321', balance: 500, bankId: 'bankB', cardIds: ['3333'] }   // Account from Bank B with one card
];

const processDeposit = (accountId, amount, cardId, bankId) => {
    // Check if the deposit amount is greater than 0
    if (amount <= 0) {
        return { error: 'Amount must be greater than 0' }; // Return error if amount is negative or zero
    }

    const account = accounts.find(acc => acc.accountId === accountId);

    if (!account) {
        return { error: 'Account not found' };
    }

    // Check if the cardId is in the list of cards associated with the account
    if (!account.cardIds.includes(cardId)) {
        return { error: 'Card does not match account' };
    }

    // Check if the bankId matches the account's bankId
    if (account.bankId !== bankId) {
        return { error: 'Cannot deposit from a different bank' };
    }

    account.balance += amount;

    return { message: `Successfully deposited ${amount} to account ${accountId}`, newBalance: account.balance };
};
const resetAccounts = () => {
    accounts = [
        { accountId: '123456789', balance: 1000, bankId: 'bankA', cardIds: ['1111', '2222'] }, // Account from Bank A with two cards
        { accountId: '987654321', balance: 500, bankId: 'bankB', cardIds: ['3333'] }   // Account from Bank B with one card
    ];
};

module.exports = { processDeposit, resetAccounts };
