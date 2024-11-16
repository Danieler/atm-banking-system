let cards = [
    { cardNumber: '1111', isActive: false, pin: null, withdrawalLimit: 1000 },
    { cardNumber: '2222', isActive: true, pin: '1234', withdrawalLimit: 3000 },
];

const activateCard = (cardNumber, pin) => {
    const card = cards.find(card => card.cardNumber === cardNumber);

    if (!card) {
        return { error: 'Card not found' };
    }

    if (card.isActive) {
        return { error: 'Card is already activated' };
    }

    card.isActive = true;
    card.pin = pin;  // Set the initial PIN
    return { message: 'Card activated successfully' };
};

const changePin = (cardNumber, pin) => {
    const card = cards.find(card => card.cardNumber === cardNumber);

    if (!card) {
        return { error: 'Card not found' };
    }

    if (!card.isActive) {
        return { error: 'Card must be activated before changing the PIN' };
    }

    card.pin = pin;  // Update the PIN
    return { message: 'PIN changed successfully' };
};

const modifyLimit = (cardNumber, withdrawalLimit) => {
    const card = cards.find(card => card.cardNumber === cardNumber);

    if (!card) {
        return { error: 'Card not found' };
    }

    if (!card.isActive) {
        return { error: 'Card must be activated before modifying the limit' };
    }

    const limit = parseFloat(withdrawalLimit);

    if (isNaN(limit) || limit < 500 || limit > 6000) {
        return { error: 'Withdrawal limit must be between 500 and 6000 euros' };
    }

    card.withdrawalLimit = limit;
    return { message: `Withdrawal limit updated to €${limit}` };
};

module.exports = { activateCard, changePin, modifyLimit };
