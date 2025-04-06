import React from 'react';
import { WhoisData } from '../../../shared/types/whoisData';

export default function WhoisResult( { result }: { result: WhoisData | null }) {
    if (!result) return null;
    
    return (
        <div>
            <h1>WHOIS Data</h1>
            <h2>Domain information</h2>
            <p><strong>Domain:</strong> {result.domainInformation.domainName}</p>
            <p><strong>Creation Date:</strong> {result.domainInformation.creationDate}</p>
            <p><strong>Updated Date:</strong> {result.domainInformation.updatedDate}</p>
            <p><strong>Expiration Date:</strong> {result.domainInformation.expirationDate}</p>
            <p><strong>Domain Status:</strong> {result.domainInformation.domainStatus}</p>
            <p><strong>Name Server:</strong> {result.domainInformation.nameServer}</p>
            <p><strong>DNSSEC:</strong> {result.domainInformation.dnssec}</p>

            <h2>Registrar information</h2>
            <p><strong>Registrar:</strong> {result.registrarInformation.registrar}</p>
            <p><strong>Registrar WHOIS Server:</strong> {result.registrarInformation.registrarWhoisServer}</p>
            <p><strong>Registrar URL:</strong> {result.registrarInformation.registrarUrl}</p>
            <p><strong>Registrar IANA ID:</strong> {result.registrarInformation.registrarIanaId}</p>
            <p><strong>Abuse Contact Email:</strong> {result.registrarInformation.abuseContactEmail}</p>
            <p><strong>Abuse Contact Phone:</strong> {result.registrarInformation.abuseContactPhone}</p>

            <h2>Registrant contact</h2>
            <p><strong>Name:</strong> {result.registrantContact.name}</p>
            <p><strong>Organization:</strong> {result.registrantContact.organization}</p>
            <p><strong>Street:</strong> {result.registrantContact.street}</p>
            <p><strong>City:</strong> {result.registrantContact.city}</p>
            <p><strong>State/Province:</strong> {result.registrantContact.stateProvince}</p>
            <p><strong>Postal Code:</strong> {result.registrantContact.postalCode}</p>
            <p><strong>Country:</strong> {result.registrantContact.country}</p>
            <p><strong>Phone:</strong> {result.registrantContact.phone}</p>
            <p><strong>Phone Ext:</strong> {result.registrantContact.phoneExt}</p>
            <p><strong>Fax:</strong> {result.registrantContact.fax}</p>
            <p><strong>Fax Ext:</strong> {result.registrantContact.faxExt}</p>
            <p><strong>Email:</strong> {result.registrantContact.email}</p>

            <h2>Admin contact</h2>
            <p><strong>Name:</strong> {result.adminContact.name}</p>
            <p><strong>Organization:</strong> {result.adminContact.organization}</p>
            <p><strong>Street:</strong> {result.adminContact.street}</p>
            <p><strong>City:</strong> {result.adminContact.city}</p>
            <p><strong>State/Province:</strong> {result.adminContact.stateProvince}</p>
            <p><strong>Postal Code:</strong> {result.adminContact.postalCode}</p>
            <p><strong>Country:</strong> {result.adminContact.country}</p>
            <p><strong>Phone:</strong> {result.adminContact.phone}</p>
            <p><strong>Phone Ext:</strong> {result.adminContact.phoneExt}</p>
            <p><strong>Fax:</strong> {result.adminContact.fax}</p>
            <p><strong>Fax Ext:</strong> {result.adminContact.faxExt}</p>
            <p><strong>Email:</strong> {result.adminContact.email}</p>

            <h2>Tech contact</h2>
            <p><strong>Name:</strong> {result.techContact.name}</p>
            <p><strong>Organization:</strong> {result.techContact.organization}</p>
            <p><strong>Street:</strong> {result.techContact.street}</p>
            <p><strong>City:</strong> {result.techContact.city}</p>
            <p><strong>State/Province:</strong> {result.techContact.stateProvince}</p>
            <p><strong>Postal Code:</strong> {result.techContact.postalCode}</p>
            <p><strong>Country:</strong> {result.techContact.country}</p>
            <p><strong>Phone:</strong> {result.techContact.phone}</p>
            <p><strong>Phone Ext:</strong> {result.techContact.phoneExt}</p>
            <p><strong>Fax:</strong> {result.techContact.fax}</p>
            <p><strong>Fax Ext:</strong> {result.techContact.faxExt}</p>
            <p><strong>Email:</strong> {result.techContact.email}</p>

            <h2>Geolocation data</h2>
            <p><strong>IP Address:</strong> {result.geolocationData.ipAddress}</p>
            <p><strong>Country:</strong> {result.geolocationData.country}</p>
            <p><strong>City:</strong> {result.geolocationData.city}</p>
            <p><strong>Latitude:</strong> {result.geolocationData.latitude}</p>
            <p><strong>Longitude:</strong> {result.geolocationData.longitude}</p>
            <p><strong>ISP:</strong> {result.geolocationData.isp}</p>
            <p><strong>Organization:</strong> {result.geolocationData.organization}</p>
            <p><strong>ASN:</strong> {result.geolocationData.asn}</p>
            <p><strong>Region:</strong> {result.geolocationData.region}</p>
            <p><strong>Region Name:</strong> {result.geolocationData.regionName}</p>
            <p><strong>Zip:</strong> {result.geolocationData.zip}</p>
            <p><strong>Timezone:</strong> {result.geolocationData.timezone}</p>
            <p><strong>Country Code:</strong> {result.geolocationData.countryCode}</p>
        </div>
    );
}
