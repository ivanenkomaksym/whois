import express, {Request, Response} from 'express';
import { WhoisService } from '../services/whoisService';
import { domainRegex } from '../../../shared/types/consts';

const router = express.Router();

router.get('/whois/:domain', async (req: Request, res: Response) => {
    try {
        const { domain } = req.params;
        if (domainRegex.test(domain) === false) {
            res.status(400).json({ error: 'Invalid domain format' });
            return;
        }

        const whoisRepo = new WhoisService();
        const data = await whoisRepo.lookupDomain(domain);
        res.json(data);
    } catch (detailedError) {
        res.status(400).json({ error: 'Error fetching WHOIS data. ', detailedError: detailedError });
    }
});

export default router;
