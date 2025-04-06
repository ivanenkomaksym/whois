import React, { useState, ChangeEvent, FC } from 'react';

interface WhoIsFormProps {
    onSearch: (domain: string) => void;
}

const WhoIsForm: FC<WhoIsFormProps> = ({ onSearch }) => {
    const [domain, setDomain] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDomain(e.target.value);
    };

    return (
        <div>
            <input 
                type="text" 
                value={domain} 
                onChange={handleChange}
                placeholder="Enter domain (example.com)" 
            />
            <button onClick={() => onSearch(domain)}>Check</button>
        </div>
    );
};

export default WhoIsForm;
