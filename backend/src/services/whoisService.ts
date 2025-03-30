import whois from 'whois';

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

function trimString(data: string): string {
    return data.toLowerCase().replace(/[^a-z0-9]/g, '_');
}

export { lookupDomain, WhoisData }; 