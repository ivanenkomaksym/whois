import express from 'express';
import cors from 'cors';
import whoisRoutes from './routes/whois';
import { rateLimit } from 'express-rate-limit';
import { verifySecret } from './middlewares/verifySecretMiddleware';

const app = express();
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
    windowMs: 5 * 1000, // 5 seconds
    max: 5, // Limit each IP to 2 requests per windowMs
    message: 'Too many requests, please try again later.',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);

app.use((req, res, next) => {
    verifySecret(req, res, next);
})

app.use('/api', whoisRoutes);

export default app;
