import axios from "axios";
import { WhoisData } from '../../shared/types/whoisData.ts';

const API_URL = import.meta.env.REACT_APP_API_URL || "http://localhost:5000";

export async function fetchWhois(domain: string): Promise<WhoisData> {
    try {
        const response = await axios.get(`${API_URL}/api/whois/${domain}`);
        return response.data as WhoisData;
    } catch (error) {
        console.error("Error fetching WHOIS data:", error);
        throw error;
    }
}