const whois = require('whois');

function lookupDomain(domain) {
    return new Promise((resolve, reject) => {
        whois.lookup(domain, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

module.exports = { lookupDomain };
