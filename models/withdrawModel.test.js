const { processWithdrawal, resetAccounts } = require('./withdrawModel');

// Reset accounts before each test
beforeEach(() => {
    resetAccounts();  // Ensures that the accounts are reset to their initial state before each test
});

describe('processWithdrawal', () => {
    it('should successfully withdraw from the same bank without commission', () => {
        const request = { accountId: '123456789', amount: 200, cardType: 'debit', bankId: 'bankA' };
        const result = processWithdrawal(request);

        // Expect the withdrawal to be successful, with the balance updated
        expect(result.success).toBe(true);
        expect(result.remainingBalance).toBe(800); // 1000 - 200 = 800
        expect(result.commission).toBe(0); // No commission because the bank is the same
    });

    it('should successfully withdraw from a different bank with commission', () => {
        const request = { accountId: '123456789', amount: 200, cardType: 'debit', bankId: 'bankB' };
        const result = processWithdrawal(request);

        // Expect the withdrawal to be successful, with the balance updated
        expect(result.success).toBe(true);
        expect(result.remainingBalance).toBe(798); // 1000 - 200 - 2 (commission) = 798
        expect(result.commission).toBe(2); // Commission because it's a different bank
    });

    it('should fail if the amount exceeds the card limit', () => {
        const request = { accountId: '123456789', amount: 600, cardType: 'debit', bankId: 'bankA' };
        const result = processWithdrawal(request);

        // Expect an error for exceeding the card limit
        expect(result.error).toBe('Amount exceeds your card limit');
    });

    it('should fail if the account does not exist', () => {
        const request = { accountId: 'nonexistent', amount: 200, cardType: 'debit', bankId: 'bankA' };
        const result = processWithdrawal(request);

        // Expect an error for non-existent account
        expect(result.error).toBe('Account not found');
    });
});
