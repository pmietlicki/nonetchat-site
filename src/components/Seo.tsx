import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import i18n from '../i18n';

const Seo = () => {
  const location = useLocation();
  const currentLang = i18n.language;
  const siteUrl = 'https://nonetchat.com'; // Replace with your actual domain

  const languages = Object.keys(i18n.options.resources || {});

  const getCanonicalUrl = () => {
    const lang = currentLang === 'en' ? '' : `/${currentLang}`;
    return `${siteUrl}${lang}${location.pathname}`;
  };

  return (
    <Helmet>
      <link rel="canonical" href={getCanonicalUrl()} />
      {languages.map(lang => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${siteUrl}${lang === 'en' ? '' : `/${lang}`}${location.pathname}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${siteUrl}${location.pathname}`}
      />
    </Helmet>
  );
};

export default Seo;
