import { getDomainGeolocation } from "../../services/geoService";
import { lookupDomain } from "../../services/whoisService";
import { WhoisData } from "../../../../shared/types/whoisData";
import whois from 'whois';

// Mock the `whois.lookup` method to avoid making real network requests
jest.mock('whois', () => ({
    lookup: jest.fn(),
}));
jest.mock('../../services/geoService');

describe('lookupDomain', () => {
    it('should resolve with parsed WHOIS data when lookup is successful', async () => {
        const domain = 'google.com';
        
        // Mock the data returned by whois.lookup
        const mockWhoisData = `Domain Name: GOOGLE.COM
Registrant Name: Google LLC
Creation Date: 1997-09-15T00:00:00Z
Registrar: MarkMonitor Inc.`;

        // Mocking the implementation of whois.lookup to return mock data
        (whois.lookup as jest.Mock).mockImplementation((domain, options, callback) => {
            callback(null, mockWhoisData); // Simulate success with mock data
        });

        const result: WhoisData = await lookupDomain(domain);

        // Check that the result is parsed correctly
        expect(result.domainInformation.domainName).toBe('GOOGLE.COM');
        expect(result.registrantContact.name).toBe('Google LLC');
        expect(result.domainInformation.creationDate).toBe('1997-09-15T00:00:00Z');
        expect(result.registrarInformation.registrar).toBe('MarkMonitor Inc.');
    });

    it('should reject when whois.lookup returns an error', async () => {
        const domain = 'google.com';
        
        // Mocking the implementation of whois.lookup to simulate an error
        const mockError = new Error('WHOIS request failed');
        (whois.lookup as jest.Mock).mockImplementation((domain, options, callback) => {
            callback(mockError, ''); // Simulate failure with an error
        });

        // Try to call lookupDomain and expect it to reject with the error
        await expect(lookupDomain(domain)).rejects.toThrow('WHOIS request failed');
    });

    it('should handle invalid WHOIS data gracefully', async () => {
        const domain = 'google.com';

        // Mocking the implementation of whois.lookup with invalid data (not a string)
        const mockInvalidData = null; // Simulating invalid data
        (whois.lookup as jest.Mock).mockImplementation((domain, options, callback) => {
            callback(null, mockInvalidData);
        });

        const mockGeoData = {
            ipAddress: '1.2.3.4',
            country: 'Mockland',
            city: 'Mock City'
        };

        const mockedGetGeo = getDomainGeolocation as jest.MockedFunction<typeof getDomainGeolocation>;
        mockedGetGeo.mockResolvedValue(mockGeoData);

        // Try to call lookupDomain and expect it to resolve with an empty object
        const expectedResult: WhoisData = {
            domainInformation: {},
            registrarInformation: {},
            registrantContact: {},
            adminContact: {},
            techContact: {},
            geolocationData: mockGeoData
        };
        
        const result: WhoisData = await lookupDomain(domain);
        expect(result).toEqual(expectedResult); // Expecting an empty WhoisData object   
    });
});