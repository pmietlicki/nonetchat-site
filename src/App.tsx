import React, { Suspense } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import i18n from './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import WebApp from './components/WebApp';
import Features from './components/Features';
import Technology from './components/Technology';
import Security from './components/Security';
import Screenshots from './components/Screenshots';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

import Seo from './components/Seo';

// Component for the main landing page content
const HomePage = () => {
  const { t } = useTranslation();
  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'NoNetChat',
    operatingSystem: 'Android',
    applicationCategory: 'CommunicationApplication',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8', // Example value
      ratingCount: '120' // Example value
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  return (
    <main>
      <Helmet>
        <title>{t('hero_title_1') + t('hero_title_2') + t('hero_title_3')}</title>
        <meta name="description" content={t('hero_subtitle')} />
        <script type="application/ld+json">
          {JSON.stringify(softwareAppSchema)}
        </script>
      </Helmet>
      <Hero />
      <WebApp />
      <Features />
      <Technology />
      <Security />
      <Screenshots />
      <FAQ />
      <CTA />
    </main>
  );
};

const AppContent = () => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Seo />
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Suspense fallback="loading">
      <I18nextProvider i18n={i18n}>
        <Router>
          <AppContent />
        </Router>
      </I18nextProvider>
    </Suspense>
  );
}

export default App;
