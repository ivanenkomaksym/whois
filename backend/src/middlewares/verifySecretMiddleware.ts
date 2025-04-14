import { secretHeaderName } from "../consts";

function verifySecret(req: {
    headers: any; method: any;
}, res: any, next: () => void) {
    if (!req.headers[secretHeaderName]) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
}

export { verifySecret };