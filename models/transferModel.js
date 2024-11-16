// Example accounts with bank, card IDs, and balance
let accounts = [
    { accountId: '123456789', cardIds: ['1111', '2222'], bank: 'bankA', balance: 1000, iban: 'GB29NWBK60161331926819' },
    { accountId: '987654321', cardIds: ['3333'], bank: 'bankB', balance: 500, iban: 'GB29NWBK60161331926820' },
    { accountId: '112233445', cardIds: ['4444'], bank: 'bankA', balance: 700, iban: 'GB29NWBK60161331926821' },
];

const isValidIban = (iban) => {
    // Regular expression to check if IBAN matches the pattern
    const ibanRegex = /^[A-Z]{2}[0-9]{2}[A-Z0-9]{4,30}$/;
    return ibanRegex.test(iban);
};
const processTransfer = (accountId, amount, cardId, bankId, destinationIban) => {
    if (amount <= 0) {
        return { error: 'Amount must be greater than 0' };
    }

    const sourceAccount = accounts.find(acc => acc.accountId === accountId);
    if (!sourceAccount) {
        return { error: 'Source account not found' };
    }

    if (!sourceAccount.cardIds.includes(cardId)) {
        return { error: 'Card does not belong to source account' };
    }

    if (sourceAccount.bank !== bankId) {
        return { error: 'BankId is from a different bank' };
    }

    // Validate destination IBAN
    if (!isValidIban(destinationIban)) {
        return { error: 'Invalid destination IBAN' };
    }

    // Check if source account has enough balance
    if (sourceAccount.balance < amount) {
        return { error: 'Insufficient funds for transfer' };
    }

    // Find the destination account by IBAN
    const destinationAccount = accounts.find(acc => acc.iban === destinationIban);
    if (!destinationAccount) {
        return { error: 'Destination account not found' };
    }

    // Handle commission for transfers to different banks
    const commission = sourceAccount.bank !== destinationAccount.bank ? 2 : 0;

    // Total amount including commission
    const totalAmount = amount + commission;

    // Ensure the source account has enough funds for the total amount (including commission)
    if (sourceAccount.balance < totalAmount) {
        return { error: 'Insufficient funds after commission' };
    }

    // Perform the transfer: deduct amount from source account and add amount to destination account
    sourceAccount.balance -= totalAmount;
    destinationAccount.balance += amount;

    return {
        message: `Successfully transferred ${amount} from account ${accountId} to ${destinationIban}. Commission: ${commission}`,
        newSourceBalance: sourceAccount.balance,
        newDestinationBalance: destinationAccount.balance
    };
};
const resetAccounts = () => {
    accounts = [
        { accountId: '123456789', cardIds: ['1111', '2222'], bank: 'bankA', balance: 1000, iban: 'GB29NWBK60161331926819' },
        { accountId: '987654321', cardIds: ['3333'], bank: 'bankB', balance: 500, iban: 'GB29NWBK60161331926820' },
        { accountId: '112233445', cardIds: ['4444'], bank: 'bankA', balance: 700, iban: 'GB29NWBK60161331926821' },
    ]
};

module.exports = { processTransfer, resetAccounts };
