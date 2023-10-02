import React from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../../../i18n/i18n';
import Select from '../base/select/Select';

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();

    const handleChange = (value: string) => {
        i18n.changeLanguage(value);
    };

    return (
        <Select
            value={i18n.languages}
            onChange={handleChange}
            options={languages.map((l) => {
                return { value: l.code, label: l.label };
            })}
        />
    );
};

export default LanguageSelector;
