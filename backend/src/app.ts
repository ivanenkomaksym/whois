import express from 'express';
import cors from 'cors';
import whoisRoutes from './routes/whois';
import { verifySecret } from './middlewares/verifySecretMiddleware';

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    verifySecret(req, res, next);
})

app.use('/api', whoisRoutes);

export default app;
