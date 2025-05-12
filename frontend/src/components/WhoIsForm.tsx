import React, { useState, ChangeEvent, FC } from 'react';
import '../styles/WhoIsForm.css';
import { domainRegex } from "../../../shared/types/consts.ts";

interface WhoIsFormProps {
    onSearch: (domain: string) => void;
}

const WhoIsForm: FC<WhoIsFormProps> = ({ onSearch }) => {
    const [domain, setDomain] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDomain(e.target.value);
        setError(null); // Clear error on change
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevent page reload
        const errors = validate({ domain });
        if (errors.domain) {
            setError(errors.domain);
            return;
        }
        setError(null);
        onSearch(domain);
    };

    const validate = (values: any) => {
        const errors: any = {};
        if (!values.domain) {
            errors.domain = 'Required';
        } else if (!domainRegex.test(values.domain)) {
            errors.domain = 'Invalid domain format';
        }
        return errors;
    };

    return (
        <div className="whois-container">
            <form className="whois-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={domain}
                    onChange={handleChange}
                    placeholder="Enter domain (example.com)"
                    className={error ? 'input-error' : ''}
                />
                <button type="submit">Check</button>
                {error && <div className="error-message">{error}</div>}
            </form>
        </div>
    );
};

export default WhoIsForm;
