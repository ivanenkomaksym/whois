import express from 'express';
import cors from 'cors';
import whoisRoutes from './routes/whois';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', whoisRoutes);

export default app;
