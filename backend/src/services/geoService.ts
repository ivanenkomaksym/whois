import { GeolocationData } from "../../../shared/types/geolocationData";
import dns from 'dns';

function getDomainGeolocation(domain: string): Promise<GeolocationData> {
    return getIPAddress(domain)
        .then(ipAddresses => {
            console.log('IP Addresses:', ipAddresses);
            if (ipAddresses.length > 0) {
                return getGeolocation(ipAddresses[0]); // Get geolocation for the first IP address
            } else {
                throw new Error('No IP addresses found for domain');
            }
        })
        .catch(error => {
            console.error('Error in getDomainGeolocation:', error);
            throw error;
        });
}

function getIPAddress(domain: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        dns.resolve4(domain, (err, addresses) => {
            if (err) {
                reject(err);
            } else {
                resolve(addresses); // Returns an array of IPv4 addresses
            }
        });
    });
}

async function getGeolocation(ip: string): Promise<GeolocationData> {
    try {
        const response = await fetch(`http://ip-api.com/json/${ip}`);
        const data = await response.json();
        return {
            ipAddress: data.query,
            country: data.country,
            countryCode: data.countryCode,
            region: data.region,
            regionName: data.regionName,
            city: data.city,
            zip: data.zip,
            latitude: data.lat,
            longitude: data.lon,
            timezone: data.timezone,
            isp: data.isp,
            organization: data.org,
            asn: data.as,
        };
    } catch (error) {
        console.error('Error fetching geolocation:', error);
    }
    return {} as GeolocationData; // Return an empty object in case of error
}

export { getDomainGeolocation }; 