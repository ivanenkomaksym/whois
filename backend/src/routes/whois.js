const express = require('express');
const { lookupDomain } = require('../services/whoisService');

const router = express.Router();

router.get('/whois/:domain', async (req, res) => {
    try {
        const { domain } = req.params;
        const data = await lookupDomain(domain);
        res.json({ source: 'live', data });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching WHOIS data' });
    }
});

module.exports = router;
