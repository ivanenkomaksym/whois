import React, { useState } from 'react';
import WhoisForm from '../components/WhoIsForm.tsx';
import WhoisResult from '../components/WhoIsResult.tsx';
import { fetchWhois } from "../api.ts";
import { WhoisData } from '../../../shared/types/whoisData.ts';
import '../styles/Home.css';

export default function Home() {
    const [whoisData, setWhoisData] = useState<WhoisData | null>(null);

    async function handleSearch(domain: string) {
        const res = await fetchWhois(domain);
        setWhoisData(res);
    }

    return (
        <div className="home-container">
            <WhoisForm onSearch={handleSearch} />
            {whoisData && <WhoisResult result={whoisData} />}
        </div>
    );
}
