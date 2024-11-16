let accounts = [
    { accountId: '123456789', balance: 1000, bankId: 'bankA', cardLimit: 500, creditLimit: 1000 }, // Account from Bank A
    { accountId: '987654321', balance: 500, bankId: 'bankB', cardLimit: 300, creditLimit: 500 }   // Account from Bank B
];

const processWithdrawal = ({ accountId, amount, cardType, bankId }) => {
    // Find the account associated with the given accountId
    const account = accounts.find(acc => acc.accountId === accountId);
    if (!account) {
        return { error: 'Account not found' };
    }

    const isSameBank = account.bankId === bankId;
    const commission = isSameBank ? 0 : 2; // Commission (2 units if from a different bank)
    const totalAmount = amount + commission;

    // Check if the amount exceeds the card's limit
    if (amount > account.cardLimit) {
        return { error: 'Amount exceeds your card limit' };
    }

    // For debit card, check if the requested amount does not exceed the available balance
    if (cardType === 'debit' && account.balance - amount < 0) {
        return { error: 'Insufficient funds in your account' };
    }

    // Check if the account has enough balance after commission (after debit or credit card checks)
    if (account.balance - totalAmount < 0) {
        return { error: 'Insufficient funds after commission' };
    }

    // For credit card, check if the requested amount is within the balance plus available credit
    if (cardType === 'credit' && (account.balance + account.creditLimit - amount < 0)) {
        return { error: 'Insufficient funds including credit limit' };
    }

    // Perform the withdrawal
    account.balance -= totalAmount;

    return { success: true, remainingBalance: account.balance, commission };
};


const resetAccounts = () => {
    accounts = [
        { accountId: '123456789', balance: 1000, bankId: 'bankA', cardLimit: 500, creditLimit: 1000 },
        { accountId: '987654321', balance: 500, bankId: 'bankB', cardLimit: 300, creditLimit: 500 }
    ];
};

module.exports = { processWithdrawal, resetAccounts };

