import React, { useState, ChangeEvent, FC } from 'react';
import '../styles/WhoisForm.css'; // Assuming you have a CSS file for styles

interface WhoIsFormProps {
    onSearch: (domain: string) => void;
}

const WhoIsForm: FC<WhoIsFormProps> = ({ onSearch }) => {
    const [domain, setDomain] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDomain(e.target.value);
    };

    return (
        <form onSubmit={(e) => {
            e.preventDefault(); onSearch(domain);
        }}>
            <div className="whois-container">
                <div className="whois-form">
                    <input
                        type="text"
                        value={domain}
                        onChange={handleChange}
                        placeholder="Enter domain (example.com)"
                    />
                    <button onClick={() => onSearch(domain)}>Check</button>
                </div>
            </div >
        </form>
    );
};

export default WhoIsForm;
