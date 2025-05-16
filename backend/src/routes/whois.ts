import express, {Request, Response} from 'express';
import { IWhoisRepository } from '../services/whoisRepository';
import { WhoisServiceProxy } from '../services/whoIsServiceCacheProxy';
import { domainRegex } from '../../../shared/types/consts';
import { WhoisService } from '../services/whoisService';

const router = express.Router();

router.get('/whois/:domain', async (req: Request, res: Response) => {
    try {
        const { domain } = req.params;
        if (domainRegex.test(domain) === false) {
            res.status(400).json({ error: 'Invalid domain format' });
            return;
        }

        let whoisRepo: IWhoisRepository = createWhoisService();
        
        const data = await whoisRepo.lookupDomain(domain);
        res.json(data);
    } catch (detailedError) {
        res.status(400).json({ error: 'Error fetching WHOIS data. ', detailedError: detailedError });
    }
});

function createWhoisService() {
    if (process.env.NODE_ENV === 'test') {
        return new WhoisService();
    }
    
    return new WhoisServiceProxy();
}

export default router;
