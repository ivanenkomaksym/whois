import express from 'express';
import bodyParser from 'body-parser';
import router from '../../routes/whois';
import { lookupDomain } from '../../services/whoisService';
import { WhoisData } from '../../../../shared/types/whoisData';
import request from 'supertest';

const app = express();
app.use(bodyParser.json());
app.use(router);

jest.mock('../../services/whoisService');

afterEach(() => {
    jest.clearAllMocks();
});

describe('api', () => {
    it ('should return WHOIS data for a valid domain', async () => {
        const invalidDomain = 'google.com';
                
        // Mock the data returned by whois.lookup
        const expectedResult: WhoisData = {
            domainInformation: {
                domainName: 'GOOGLE.COM'
            },
            registrarInformation: {},
            registrantContact: {},
            adminContact: {},
            techContact: {},
            geolocationData: {}
        };

        // Mocking the implementation of whois.lookup to return mock data
        (lookupDomain as jest.Mock).mockImplementation((domain) => {
            return expectedResult;
        });

        const response = await request(app).get(`/whois/${invalidDomain}`);
        expect(response.status).toBe(200);
        const result: WhoisData = response.body;

        expect(result.domainInformation.domainName).toBe('GOOGLE.COM');
    });

    it('should fail when invalid domain', async () => {
        const invalidDomain = 'invalid_domain';

        const response = await request(app).get(`/whois/${invalidDomain}`);
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Invalid domain format');
    });
});