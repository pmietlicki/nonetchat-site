import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import i18n from './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Technology from './components/Technology';
import Security from './components/Security';
import Screenshots from './components/Screenshots';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Component for the main landing page content
const HomePage = () => (
  <main>
    <Hero />
    <Features />
    <Technology />
    <Security />
    <Screenshots />
    <FAQ />
    <CTA />
  </main>
);

const AppContent = () => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
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
