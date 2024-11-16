const { processDeposit, resetAccounts } = require('./depositModel'); // Ruta al modelo que contiene el proceso

describe('processDeposit', () => {
    // Reiniciar las cuentas antes de cada test
    beforeEach(() => {
        resetAccounts();
    });

    test('should deposit successfully when all conditions are met', () => {
        const result = processDeposit('123456789', 500, '1111', 'bankA');

        expect(result.error).toBeUndefined();  // No debe haber error
        expect(result.message).toBe('Successfully deposited 500 to account 123456789');
        expect(result.newBalance).toBe(1500); // El nuevo balance debe ser 1500
    });

    test('should return an error if account is not found', () => {
        const result = processDeposit('000000000', 500, '1111', 'bankA');

        expect(result.error).toBe('Account not found');
    });

    test('should return an error if card does not match the account', () => {
        const result = processDeposit('123456789', 500, '9999', 'bankA');

        expect(result.error).toBe('Card does not match account');
    });

    test('should return an error if the bank does not match', () => {
        const result = processDeposit('123456789', 500, '1111', 'bankB');

        expect(result.error).toBe('Cannot deposit from a different bank');
    });

    test('should not allow a deposit with a negative or zero amount', () => {
        const result = processDeposit('123456789', -500, '1111', 'bankA');

        expect(result.error).toBe('Amount must be greater than 0');
    });
});
