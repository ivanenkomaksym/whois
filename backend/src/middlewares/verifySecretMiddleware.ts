import { secretHeaderName } from "../../../shared/types/consts";

function verifySecret(req: {
    headers: any; method: any;
}, res: any, next: () => void) {
    console.log("Verifying secret header...");
    const secretHeader = req.headers[secretHeaderName.toLocaleLowerCase()];
    if (!secretHeader) {
        console.log("No secret header found.");
        return res.status(401).json({ error: 'Unauthorized' });
    } else if (secretHeader !== process.env.AUTH_SECRET_KEY) {
        console.log("Invalid secret header.");
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
}

export { verifySecret };