import React, { useState, ChangeEvent, FC } from 'react';
import '../styles/WhoIsForm.css';

interface WhoIsFormProps {
    onSearch: (domain: string) => void;
}

const WhoIsForm: FC<WhoIsFormProps> = ({ onSearch }) => {
    const [domain, setDomain] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDomain(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevent page reload
        onSearch(domain);
    };

    return (
        <div className="whois-container">
            <form className="whois-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={domain}
                    onChange={handleChange}
                    placeholder="Enter domain (example.com)"
                />
                <button type="submit">Check</button>
            </form>
        </div>
    );
};

export default WhoIsForm;
