export const domainRegex = /^(?!-)[A-Za-z0-9-]{1,63}(?<!-)(\.[A-Za-z]{2,})+$/; // Regex to validate domain names
export const secretHeaderName = 'X-Secret-Header'; // Header name for secret key