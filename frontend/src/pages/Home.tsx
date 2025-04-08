import React, { useState } from 'react';
import WhoisForm from '../components/WhoIsForm';
import WhoisResult from '../components/WhoIsResult';
import { fetchWhois } from "../api";
import { WhoisData } from '../../../shared/types/whoisData';
import '../styles/Home.css'; // Assuming you have a CSS file for styles

export default function Home() {
    const [whoisData, setWhoisData] = useState<WhoisData | null>(null);

    async function handleSearch(domain: string) {
        const res = await fetchWhois(domain);
        setWhoisData(res);
    }

    return (
        <div className="home-container">
            <WhoisForm onSearch={handleSearch} />
            <WhoisResult result={whoisData} />
        </div>
    );
}
