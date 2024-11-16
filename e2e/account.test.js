const request = require('supertest');
const app = require('../app');

describe('GET /api/v1/accounts/:accountId/details', () => {
    it('should return account transactions for a valid accountId', async () => {
        const response = await request(app).get('/api/v1/accounts/123456789');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('accountId', '123456789');
        expect(response.body.transactions).toBeInstanceOf(Array);
        expect(response.body.transactions.length).toBeGreaterThan(0);
        expect(response.body.transactions[0]).toHaveProperty('id');
        expect(response.body.transactions[0]).toHaveProperty('amount');
        expect(response.body.transactions[0]).toHaveProperty('description');
    });

});
