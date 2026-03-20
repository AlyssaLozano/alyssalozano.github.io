import { useEffect } from 'react';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import SecPlusHero from './components/SecPlusHero';
import SecPlusDomains from './components/SecPlusDomains';
import SecPlusTuition from './components/SecPlusTuition';
import SecPlusCta from './components/SecPlusCta';
import ProgramCrossLink from '../components/ProgramCrossLink';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function SecurityPlusPage() {
  useScrollReveal();

  useEffect(() => {
    document.title = 'Security+ Certification Readiness | Acumen Career Academy — Augusta, Georgia Cybersecurity Training';
  }, []);

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main>
        <SecPlusHero />
        <SecPlusDomains />
        <SecPlusTuition />
        <ProgramCrossLink current="secplus" />
        <SecPlusCta />
      </main>
      <Footer />
    </div>
  );
}
