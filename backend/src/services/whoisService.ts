import whois from 'whois';
import dns from 'dns';

interface WhoisData {
    [key: string]: string;
}

function lookupDomain(domain: string): Promise<WhoisData> {
    return new Promise((resolve, reject) => {
        try {
            whois.lookup(domain, {}, (err: Error | null, data: string) => {
                if (err) {
                    reject(err);
                    return;
                }

                try {
                    // Parse the WHOIS data into a structured object
                    const parsedData: WhoisData = typeof data === 'string'
                        ? data.split('\n').reduce((acc: WhoisData, line: string) => {
                            const [key, ...values] = line.split(':').map(s => s.trim());
                            if (key && values.length > 0) {
                                acc[trimString(key)] = values.join(':');
                            }
                            return acc;
                        }, {})
                        : {};  // In case the `data` is not a string (or invalid data)

                    resolve(parsedData);
                } catch (error) {
                    reject(error);
                }
            })

        } catch (error) {
            console.error('Error in lookupDomain:', error);
            reject(error);
        }
    });
}

function getDomainGeolocation(domain: string): Promise<any> {
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

async function getGeolocation(ip: string) {
    try {
        const response = await fetch(`http://ip-api.com/json/${ip}`);
        const data = await response.json();
        return data; // Returns JSON with location info
    } catch (error) {
        console.error('Error fetching geolocation:', error);
    }
}

function trimString(data: string): string {
    return data.toLowerCase().replace(/[^a-z0-9]/g, '_');
}

export { lookupDomain, WhoisData, getDomainGeolocation }; 