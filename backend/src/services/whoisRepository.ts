import { WhoisData } from '../../../shared/types/whoisData';

export interface IWhoisRepository {
    lookupDomain(domain: string): Promise<WhoisData>;
}
