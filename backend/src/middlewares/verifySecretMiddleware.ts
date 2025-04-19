import { secretHeaderName } from "../../../shared/types/consts";

function verifySecret(req: {
    headers: any; method: any;
}, res: any, next: () => void) {
    console.log("Verifying secret header...");
    if (!req.headers[secretHeaderName]) {
        console.log("No secret header found.");
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
}

export { verifySecret };