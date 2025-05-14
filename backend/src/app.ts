import express from 'express';
import cors from 'cors';
import whoisRoutes from './routes/whois';
import { rateLimit } from 'express-rate-limit';
import { verifySecret } from './middlewares/verifySecretMiddleware';
import { RATE_LIMIT_WINDOW, RATE_LIMIT_MAX_REQUESTS, RATE_LIMIT_MESSAGE } from './consts';

const app = express();
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
    windowMs: RATE_LIMIT_WINDOW,
    max: RATE_LIMIT_MAX_REQUESTS,
    message: RATE_LIMIT_MESSAGE,
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);

app.use((req, res, next) => {
    verifySecret(req, res, next);
})

app.use('/api', whoisRoutes);

export default app;
