import React from 'react';
import { useTranslation } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t('terms_title')}</h1>
      <p className="mb-4">
        {t('terms_intro')}
      </p>
      <h2 className="text-2xl font-bold mb-2">{t('terms_use')}</h2>
      <p className="mb-4">
        {t('terms_use_desc')}
      </p>
      <h2 className="text-2xl font-bold mb-2">{t('terms_ip')}</h2>
      <p className="mb-4">
        {t('terms_ip_desc')}
      </p>
      <h2 className="text-2xl font-bold mb-2">{t('terms_termination')}</h2>
      <p className="mb-4">
        {t('terms_termination_desc')}
      </p>
      <h2 className="text-2xl font-bold mb-2">{t('terms_contact')}</h2>
      <p className="mb-4">
        {t('terms_contact_desc')} <a href="mailto:contact@nonetchat.com" className="text-blue-500">contact@nonetchat.com</a>.
      </p>
    </div>
  );
};

export default Terms;