import { WhoisData } from '../../../shared/types/whoisData';
import { WhoisService } from './whoisService';
import { Firestore } from '@google-cloud/firestore';

class WhoisServiceCacheProxy extends WhoisService {
    firestore = new Firestore();

    async lookupDomain(domain: string): Promise<WhoisData> {
        try {
            // Check Firestore cache
            const cacheDoc = this.firestore.collection('whoisCache').doc(domain);            
            const cachedData = await cacheDoc.get();
            if (cachedData.exists) {
                console.log(`Cache hit for domain: ${domain}`);
                return cachedData.data() as WhoisData;
            }

            console.log(`Cache miss for domain: ${domain}`);

            const data = await super.lookupDomain(domain);

            // Store the result in Firestore cache
            await cacheDoc.set(data, { merge: true });
            console.log(`Stored data in cache for domain: ${domain}`);

            return data;
        } catch (error: any) {
            throw new Error(`Failed to lookup domain: ${domain}. Error: ${error.message}`);
        }
    }
}

export { WhoisServiceCacheProxy as WhoisServiceProxy };