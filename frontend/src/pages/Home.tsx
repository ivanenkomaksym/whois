import React, { useState } from 'react';
import WhoisForm from '../components/WhoIsForm';
import WhoisResult from '../components/WhoIsResult';
import { fetchWhois } from "../api";
import { WhoisData } from '../../../shared/types/whoisData';

export default function Home() {
    const [whoisData, setWhoisData] = useState<WhoisData | null>(null);

    async function handleSearch(domain: string) {
        const res = await fetchWhois(domain);
        setWhoisData(res);
    }

    return (
        <div>
            <h1>WHOIS Lookup</h1>
            <WhoisForm onSearch={handleSearch} />
            <WhoisResult result={whoisData} />
        </div>
    );
}
