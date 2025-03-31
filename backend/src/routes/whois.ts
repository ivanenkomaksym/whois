import express, {Request, Response} from 'express';
import { lookupDomain, getDomainGeolocation } from '../services/whoisService';

const router = express.Router();

router.get('/whois/:domain', async (req: Request, res: Response) => {
    try {
        const { domain } = req.params;
        console.log('WHOIS domain:', domain);
        const data = await lookupDomain(domain);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching WHOIS data' });
    }
});

router.get('/whois/:domain/geolocation', async (req: Request, res: Response) => {
    try {
        const { domain } = req.params;
        console.log('WHOIS domain:', domain);
        const data = await getDomainGeolocation(domain);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching WHOIS data' });
    }
});

export default router;
