import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
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

function App() {
  const [path, setPath] = React.useState(window.location.pathname);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      window.history.pushState({}, '', href);
      setPath(href);
      window.scrollTo(0, 0); // Scroll to top on page change
    }
  };

  React.useEffect(() => {
    const onLocationChange = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', onLocationChange);
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  let Component;
  switch (path) {
    case '/privacy':
      Component = Privacy;
      break;
    case '/terms':
      Component = Terms;
      break;
    default:
      Component = HomePage;
  }

  return (
    <Suspense fallback="loading">
      <I18nextProvider i18n={i18n}>
        <div className="min-h-screen bg-white flex flex-col">
          <Header onLinkClick={handleLinkClick} />
          <div className="flex-grow">
            <Component />
          </div>
          <Footer onLinkClick={handleLinkClick} />
        </div>
      </I18nextProvider>
    </Suspense>
  );
}

export default App;