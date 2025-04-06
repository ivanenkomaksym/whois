import { GeolocationData } from './geolocationData';

export interface DomainInformation {
    domainName?: string;
    registryDomainId?: string;
    updatedDate?: string;
    creationDate?: string;
    expirationDate?: string;
    domainStatus?: string;
    nameServer?: string;
    dnssec?: string;
}

export interface RegistrarInformation {
    registrar?: string;
    registrarWhoisServer?: string;
    registrarUrl?: string;
    registrarIanaId?: string;
    abuseContactEmail?: string;
    abuseContactPhone?: string;
}

export interface ContactInfo {
    name?: string;
    organization?: string;
    street?: string;
    city?: string;
    stateProvince?: string;
    postalCode?: string;
    country?: string;
    phone?: string;
    phoneExt?: string;
    fax?: string;
    faxExt?: string;
    email?: string;
}

export interface WhoisData {
    domainInformation: DomainInformation;
    registrarInformation: RegistrarInformation;
    registrantContact: ContactInfo;
    adminContact: ContactInfo;
    techContact: ContactInfo;
    geolocationData: GeolocationData;
}