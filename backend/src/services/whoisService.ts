import whois from 'whois';
import { WhoisData } from '../../../shared/types/whoisData';
import { getDomainGeolocation } from './geoService';

function lookupDomain(domain: string): Promise<WhoisData> {
    return new Promise((resolve, reject) => {
        whois.lookup(domain, {}, async (err: Error | null, data: string) => {
            if (err) {
                reject(err);
                return;
            }

            try {
                const parsedData: WhoisData = {
                    domainInformation: {},
                    registrarInformation: {},
                    registrantContact: {},
                    adminContact: {},
                    techContact: {},
                    geolocationData: {}
                };

                parseWhoisData(data, parsedData);
                
                const geoData = await getDomainGeolocation(domain);
                parsedData.geolocationData = geoData;

                resolve(parsedData);
            } catch (error) {
                reject(error);
            }
        });
    });
}

function parseWhoisData(data: string, parsedData: WhoisData) {
    if (typeof data === 'string') {
        const lines = data.split('\n');

        lines.forEach(line => {
            const [rawKey, ...values] = line.split(':').map(s => s.trim());
            if (!rawKey || values.length === 0) return;

            const key = trimString(rawKey);
            const value = values.join(':');

            if (key.includes('domain_name')) parsedData.domainInformation.domainName = value;
            else if (key.includes('registry_domain_id')) parsedData.domainInformation.registryDomainId = value;
            else if (key.includes('updated_date')) parsedData.domainInformation.updatedDate = value;
            else if (key.includes('creation_date')) parsedData.domainInformation.creationDate = value;
            else if (key.includes('registrar_registration_expiration_date')) parsedData.domainInformation.expirationDate = value;
            else if (key.includes('domain_status')) parsedData.domainInformation.domainStatus = value;
            else if (key.includes('name_server')) parsedData.domainInformation.nameServer = value;
            else if (key.includes('dnssec')) parsedData.domainInformation.dnssec = value;

            // Registrar Information
            else if (key.includes('registrar_whois_server')) parsedData.registrarInformation.registrarWhoisServer = value;
            else if (key.includes('registrar_url')) parsedData.registrarInformation.registrarUrl = value;
            else if (key.includes('registrar')) parsedData.registrarInformation.registrar = value;
            else if (key.includes('registrar_iana_id')) parsedData.registrarInformation.registrarIanaId = value;
            else if (key.includes('registrar_abuse_contact_email')) parsedData.registrarInformation.abuseContactEmail = value;
            else if (key.includes('registrar_abuse_contact_phone')) parsedData.registrarInformation.abuseContactPhone = value;

            // Registrant Contact
            else if (key.includes('registrant_name')) parsedData.registrantContact.name = value;
            else if (key.includes('registrant_organization')) parsedData.registrantContact.organization = value;
            else if (key.includes('registrant_street')) parsedData.registrantContact.street = value;
            else if (key.includes('registrant_city')) parsedData.registrantContact.city = value;
            else if (key.includes('registrant_state_province')) parsedData.registrantContact.stateProvince = value;
            else if (key.includes('registrant_postal_code')) parsedData.registrantContact.postalCode = value;
            else if (key.includes('registrant_country')) parsedData.registrantContact.country = value;
            else if (key.includes('registrant_phone')) parsedData.registrantContact.phone = value;
            else if (key.includes('registrant_phone_ext')) parsedData.registrantContact.phoneExt = value;
            else if (key.includes('registrant_fax')) parsedData.registrantContact.fax = value;
            else if (key.includes('registrant_fax_ext')) parsedData.registrantContact.faxExt = value;
            else if (key.includes('registrant_email')) parsedData.registrantContact.email = value;

            // Admin Contact
            else if (key.includes('admin_name')) parsedData.adminContact.name = value;
            else if (key.includes('admin_organization')) parsedData.adminContact.organization = value;
            else if (key.includes('admin_street')) parsedData.adminContact.street = value;
            else if (key.includes('admin_city')) parsedData.adminContact.city = value;
            else if (key.includes('admin_state_province')) parsedData.adminContact.stateProvince = value;
            else if (key.includes('admin_postal_code')) parsedData.adminContact.postalCode = value;
            else if (key.includes('admin_country')) parsedData.adminContact.country = value;
            else if (key.includes('admin_phone')) parsedData.adminContact.phone = value;
            else if (key.includes('admin_phone_ext')) parsedData.adminContact.phoneExt = value;
            else if (key.includes('admin_fax')) parsedData.adminContact.fax = value;
            else if (key.includes('admin_fax_ext')) parsedData.adminContact.faxExt = value;
            else if (key.includes('admin_email')) parsedData.adminContact.email = value;

            // Tech Contact
            else if (key.includes('tech_name')) parsedData.techContact.name = value;
            else if (key.includes('tech_organization')) parsedData.techContact.organization = value;
            else if (key.includes('tech_street')) parsedData.techContact.street = value;
            else if (key.includes('tech_city')) parsedData.techContact.city = value;
            else if (key.includes('tech_state_province')) parsedData.techContact.stateProvince = value;
            else if (key.includes('tech_postal_code')) parsedData.techContact.postalCode = value;
            else if (key.includes('tech_country')) parsedData.techContact.country = value;
            else if (key.includes('tech_phone')) parsedData.techContact.phone = value;
            else if (key.includes('tech_phone_ext')) parsedData.techContact.phoneExt = value;
            else if (key.includes('tech_fax')) parsedData.techContact.fax = value;
            else if (key.includes('tech_fax_ext')) parsedData.techContact.faxExt = value;
            else if (key.includes('tech_email')) parsedData.techContact.email = value;
        });
    }
}

function trimString(data: string): string {
    return data.toLowerCase().replace(/[^a-z0-9]/g, '_');
}

export { lookupDomain }; 