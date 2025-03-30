const express = require('express');
const cors = require('cors');
const whoisRoutes = require('./routes/whois');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', whoisRoutes);

module.exports = app;
