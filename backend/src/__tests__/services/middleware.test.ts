import request from 'supertest';
import app from '../../app';
import { verifySecret } from '../../middlewares/verifySecretMiddleware';

jest.mock('../../middlewares/verifySecretMiddleware', () => ({
    verifySecret: jest.fn((req, res, next) => next()),
}));

describe('verifySecretMiddleware', () => {
    it('should call verifySecret middleware', async () => {
        await request(app).get('/api/some-endpoint');
        expect(verifySecret).toHaveBeenCalled();
    });

    it('should return 401 if verifySecret fails', async () => {
        (verifySecret as jest.Mock).mockImplementationOnce((req, res) => {
            res.status(401).send('Unauthorized');
        });

        const response = await request(app).get('/api/some-endpoint');
        expect(response.status).toBe(401);
        expect(response.text).toBe('Unauthorized');
    });

    it('should allow request to proceed if verifySecret succeeds', async () => {
        const response = await request(app).get('/api/some-endpoint');
        expect(response.status).not.toBe(401);
    });
});