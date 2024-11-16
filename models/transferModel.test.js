const { processTransfer, resetAccounts } = require('./transferModel'); // Adjust the import based on the file path

describe('processTransfer', () => {

    beforeEach(() => {
        // Reset accounts before each test to ensure a clean state
        resetAccounts();
    });

    test('should transfer money successfully between accounts of the same bank', () => {
        const result = processTransfer('123456789', 200, '1111', 'bankA', 'GB29NWBK60161331926821');

        expect(result.error).toBeUndefined();  // No error should occur
        expect(result.message).toBe('Successfully transferred 200 from account 123456789 to GB29NWBK60161331926821. Commission: 0');
        expect(result.newSourceBalance).toBe(800); // Source account balance after transfer
        expect(result.newDestinationBalance).toBe(900); // Destination account balance after transfer
    });

    test('should return an error if source account is not found', () => {
        const result = processTransfer('000000000', 200, '1111', 'bankA', 'GB29NWBK60161331926821');

        expect(result.error).toBe('Source account not found');
    });

    test('should return an error if card does not belong to the source account', () => {
        const result = processTransfer('123456789', 200, '9999', 'bankA', 'GB29NWBK60161331926821');

        expect(result.error).toBe('Card does not belong to source account');
    });

    test('should return an error if the bank ID is from a different bank', () => {
        const result = processTransfer('123456789', 200, '1111', 'bankB', 'GB29NWBK60161331926821');

        expect(result.error).toBe('BankId is from a different bank');
    });

    test('should return an error if destination IBAN is invalid', () => {
        const result = processTransfer('123456789', 200, '1111', 'bankA', 'INVALIDIBAN123');

        expect(result.error).toBe('Invalid destination IBAN');
    });

    test('should return an error if source account has insufficient funds for the transfer', () => {
        const result = processTransfer('123456789', 1200, '1111', 'bankA', 'GB29NWBK60161331926821');

        expect(result.error).toBe('Insufficient funds for transfer');
    });

    test('should return an error if source account has insufficient funds after commission', () => {
        // Transfer between different banks with a commission
        const result = processTransfer('123456789', 1000, '1111', 'bankA', 'GB29NWBK60161331926820');

        expect(result.error).toBe('Insufficient funds after commission');
    });

    test('should successfully transfer money between accounts of different banks and apply commission', () => {
        const result = processTransfer('123456789', 200, '1111', 'bankA', 'GB29NWBK60161331926820');

        expect(result.error).toBeUndefined();  // No error should occur
        expect(result.message).toBe('Successfully transferred 200 from account 123456789 to GB29NWBK60161331926820. Commission: 2');
        expect(result.newSourceBalance).toBe(798); // Source account balance after transfer and commission
        expect(result.newDestinationBalance).toBe(700); // Destination account balance after transfer
    });

});

