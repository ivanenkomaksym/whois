import React from 'react';
import { WhoisData } from '../../../shared/types/whoisData.ts';
import '../styles/WhoIsResult.css';

export default function WhoisResult({ result }: { result: WhoisData | null }) {
  if (!result) return null;

  return (
    <div className="whois-container">
      {/* Domain Information Table */}
      <table className="whois-table">
        <thead>
          <tr>
            <th colSpan={2} className="table-header">Domain Information</th>
          </tr>
        </thead>
        <tbody>
          {result.domainInformation.domainName && (
            <tr>
              <td><strong>Domain</strong></td>
              <td>{result.domainInformation.domainName}</td>
            </tr>
          )}
          {result.domainInformation.creationDate && (
            <tr>
              <td><strong>Creation Date</strong></td>
              <td>{result.domainInformation.creationDate}</td>
            </tr>
          )}
          {result.domainInformation.updatedDate && (
            <tr>
              <td><strong>Updated Date</strong></td>
              <td>{result.domainInformation.updatedDate}</td>
            </tr>
          )}
          {result.domainInformation.expirationDate && (
            <tr>
              <td><strong>Expiration Date</strong></td>
              <td>{result.domainInformation.expirationDate}</td>
            </tr>
          )}
          {result.domainInformation.domainStatus && (
            <tr>
              <td><strong>Domain Status</strong></td>
              <td>{result.domainInformation.domainStatus}</td>
            </tr>
          )}
          {result.domainInformation.nameServer && (
            <tr>
              <td><strong>Name Server</strong></td>
              <td>{result.domainInformation.nameServer}</td>
            </tr>
          )}
          {result.domainInformation.dnssec && (
            <tr>
              <td><strong>DNSSEC</strong></td>
              <td>{result.domainInformation.dnssec}</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Registrar Information Table */}
      <table className="whois-table">
        <thead>
          <tr>
            <th colSpan={2} className="table-header">Registrar Information</th>
          </tr>
        </thead>
        <tbody>
          {result.registrarInformation.registrar && (
            <tr>
              <td><strong>Registrar</strong></td>
              <td>{result.registrarInformation.registrar}</td>
            </tr>
          )}
          {result.registrarInformation.registrarWhoisServer && (
            <tr>
              <td><strong>Registrar WHOIS Server</strong></td>
              <td>{result.registrarInformation.registrarWhoisServer}</td>
            </tr>
          )}
          {result.registrarInformation.registrarUrl && (
            <tr>
              <td><strong>Registrar URL</strong></td>
              <td>{result.registrarInformation.registrarUrl}</td>
            </tr>
          )}
          {result.registrarInformation.registrarIanaId && (
            <tr>
              <td><strong>Registrar IANA ID</strong></td>
              <td>{result.registrarInformation.registrarIanaId}</td>
            </tr>
          )}
          {result.registrarInformation.abuseContactEmail && (
            <tr>
              <td><strong>Abuse Contact Email</strong></td>
              <td>{result.registrarInformation.abuseContactEmail}</td>
            </tr>
          )}
          {result.registrarInformation.abuseContactPhone && (
            <tr>
              <td><strong>Abuse Contact Phone</strong></td>
              <td>{result.registrarInformation.abuseContactPhone}</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Registrant Contact Table */}
      <table className="whois-table">
        <thead>
          <tr>
            <th colSpan={2} className="table-header">Registrant Contact</th>
          </tr>
        </thead>
        <tbody>
          {result.registrantContact.name && (
            <tr>
              <td><strong>Name</strong></td>
              <td>{result.registrantContact.name}</td>
            </tr>
          )}
          {result.registrantContact.organization && (
            <tr>
              <td><strong>Organization</strong></td>
              <td>{result.registrantContact.organization}</td>
            </tr>
          )}
          {result.registrantContact.street && (
            <tr>
              <td><strong>Street</strong></td>
              <td>{result.registrantContact.street}</td>
            </tr>
          )}
          {result.registrantContact.city && (
            <tr>
              <td><strong>City</strong></td>
              <td>{result.registrantContact.city}</td>
            </tr>
          )}
          {result.registrantContact.stateProvince && (
            <tr>
              <td><strong>State/Province</strong></td>
              <td>{result.registrantContact.stateProvince}</td>
            </tr>
          )}
          {result.registrantContact.postalCode && (
            <tr>
              <td><strong>Postal Code</strong></td>
              <td>{result.registrantContact.postalCode}</td>
            </tr>
          )}
          {result.registrantContact.country && (
            <tr>
              <td><strong>Country</strong></td>
              <td>{result.registrantContact.country}</td>
            </tr>
          )}
          {result.registrantContact.phone && (
            <tr>
              <td><strong>Phone</strong></td>
              <td>{result.registrantContact.phone}</td>
            </tr>
          )}
          {result.registrantContact.phoneExt && (
            <tr>
              <td><strong>Phone Ext</strong></td>
              <td>{result.registrantContact.phoneExt}</td>
            </tr>
          )}
          {result.registrantContact.fax && (
            <tr>
              <td><strong>Fax</strong></td>
              <td>{result.registrantContact.fax}</td>
            </tr>
          )}
          {result.registrantContact.faxExt && (
            <tr>
              <td><strong>Fax Ext</strong></td>
              <td>{result.registrantContact.faxExt}</td>
            </tr>
          )}
          {result.registrantContact.email && (
            <tr>
              <td><strong>Email</strong></td>
              <td>{result.registrantContact.email}</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Admin Contact Table */}
      <table className="whois-table">
        <thead>
          <tr>
            <th colSpan={2} className="table-header">Admin Contact</th>
          </tr>
        </thead>
        <tbody>
          {result.adminContact.name && (
            <tr>
              <td><strong>Name</strong></td>
              <td>{result.adminContact.name}</td>
            </tr>
          )}
          {result.adminContact.organization && (
            <tr>
              <td><strong>Organization</strong></td>
              <td>{result.adminContact.organization}</td>
            </tr>
          )}
          {result.adminContact.street && (
            <tr>
              <td><strong>Street</strong></td>
              <td>{result.adminContact.street}</td>
            </tr>
          )}
          {result.adminContact.city && (
            <tr>
              <td><strong>City</strong></td>
              <td>{result.adminContact.city}</td>
            </tr>
          )}
          {result.adminContact.stateProvince && (
            <tr>
              <td><strong>State/Province</strong></td>
              <td>{result.adminContact.stateProvince}</td>
            </tr>
          )}
          {result.adminContact.postalCode && (
            <tr>
              <td><strong>Postal Code</strong></td>
              <td>{result.adminContact.postalCode}</td>
            </tr>
          )}
          {result.adminContact.country && (
            <tr>
              <td><strong>Country</strong></td>
              <td>{result.adminContact.country}</td>
            </tr>
          )}
          {result.adminContact.phone && (
            <tr>
              <td><strong>Phone</strong></td>
              <td>{result.adminContact.phone}</td>
            </tr>
          )}
          {result.adminContact.phoneExt && (
            <tr>
              <td><strong>Phone Ext</strong></td>
              <td>{result.adminContact.phoneExt}</td>
            </tr>
          )}
          {result.adminContact.fax && (
            <tr>
              <td><strong>Fax</strong></td>
              <td>{result.adminContact.fax}</td>
            </tr>
          )}
          {result.adminContact.faxExt && (
            <tr>
              <td><strong>Fax Ext</strong></td>
              <td>{result.adminContact.faxExt}</td>
            </tr>
          )}
          {result.adminContact.email && (
            <tr>
              <td><strong>Email</strong></td>
              <td>{result.adminContact.email}</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Tech Contact Table */}
      <table className="whois-table">
        <thead>
          <tr>
            <th colSpan={2} className="table-header">Tech Contact</th>
          </tr>
        </thead>
        <tbody>
          {result.techContact.name && (
            <tr>
              <td><strong>Name</strong></td>
              <td>{result.techContact.name}</td>
            </tr>
          )}
          {result.techContact.organization && (
            <tr>
              <td><strong>Organization</strong></td>
              <td>{result.techContact.organization}</td>
            </tr>
          )}
          {result.techContact.street && (
            <tr>
              <td><strong>Street</strong></td>
              <td>{result.techContact.street}</td>
            </tr>
          )}
          {result.techContact.city && (
            <tr>
              <td><strong>City</strong></td>
              <td>{result.techContact.city}</td>
            </tr>
          )}
          {result.techContact.stateProvince && (
            <tr>
              <td><strong>State/Province</strong></td>
              <td>{result.techContact.stateProvince}</td>
            </tr>
          )}
          {result.techContact.postalCode && (
            <tr>
              <td><strong>Postal Code</strong></td>
              <td>{result.techContact.postalCode}</td>
            </tr>
          )}
          {result.techContact.country && (
            <tr>
              <td><strong>Country</strong></td>
              <td>{result.techContact.country}</td>
            </tr>
          )}
          {result.techContact.phone && (
            <tr>
              <td><strong>Phone</strong></td>
              <td>{result.techContact.phone}</td>
            </tr>
          )}
          {result.techContact.phoneExt && (
            <tr>
              <td><strong>Phone Ext</strong></td>
              <td>{result.techContact.phoneExt}</td>
            </tr>
          )}
          {result.techContact.fax && (
            <tr>
              <td><strong>Fax</strong></td>
              <td>{result.techContact.fax}</td>
            </tr>
          )}
          {result.techContact.faxExt && (
            <tr>
              <td><strong>Fax Ext</strong></td>
              <td>{result.techContact.faxExt}</td>
            </tr>
          )}
          {result.techContact.email && (
            <tr>
              <td><strong>Email</strong></td>
              <td>{result.techContact.email}</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Geolocation Data Table */}
      <table className="whois-table">
        <thead>
          <tr>
            <th colSpan={2} className="table-header">Geolocation Data</th>
          </tr>
        </thead>
        <tbody>
          {result.geolocationData.ipAddress && (
            <tr>
              <td><strong>IP Address</strong></td>
              <td>{result.geolocationData.ipAddress}</td>
            </tr>
          )}
          {result.geolocationData.country && (
            <tr>
              <td><strong>Country</strong></td>
              <td>{result.geolocationData.country}</td>
            </tr>
          )}
          {result.geolocationData.city && (
            <tr>
              <td><strong>City</strong></td>
              <td>{result.geolocationData.city}</td>
            </tr>
          )}
          {result.geolocationData.latitude && (
            <tr>
              <td><strong>Latitude</strong></td>
              <td>{result.geolocationData.latitude}</td>
            </tr>
          )}
          {result.geolocationData.longitude && (
            <tr>
              <td><strong>Longitude</strong></td>
              <td>{result.geolocationData.longitude}</td>
            </tr>
          )}
          {result.geolocationData.isp && (
            <tr>
              <td><strong>ISP</strong></td>
              <td>{result.geolocationData.isp}</td>
            </tr>
          )}
          {result.geolocationData.organization && (
            <tr>
              <td><strong>Organization</strong></td>
              <td>{result.geolocationData.organization}</td>
            </tr>
          )}
          {result.geolocationData.asn && (
            <tr>
              <td><strong>ASN</strong></td>
              <td>{result.geolocationData.asn}</td>
            </tr>
          )}
          {result.geolocationData.region && (
            <tr>
              <td><strong>Region</strong></td>
              <td>{result.geolocationData.region}</td>
            </tr>
          )}
          {result.geolocationData.regionName && (
            <tr>
              <td><strong>Region Name</strong></td>
              <td>{result.geolocationData.regionName}</td>
            </tr>
          )}
          {result.geolocationData.zip && (
            <tr>
              <td><strong>Zip</strong></td>
              <td>{result.geolocationData.zip}</td>
            </tr>
          )}
          {result.geolocationData.timezone && (
            <tr>
              <td><strong>Timezone</strong></td>
              <td>{result.geolocationData.timezone}</td>
            </tr>
          )}
          {result.geolocationData.countryCode && (
            <tr>
              <td><strong>Country Code</strong></td>
              <td>{result.geolocationData.countryCode}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
