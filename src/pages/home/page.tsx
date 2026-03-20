import { useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import Hero from './components/Hero';
import AuthorityStrip from './components/AuthorityStrip';
import StatsSection from './components/StatsSection';
import ProgramsOverview from './components/ProgramsOverview';
import CareerOutcomes from './components/CareerOutcomes';
import EmployerDemandSection from './components/EmployerDemandSection';
import CtaSection from './components/CtaSection';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  useEffect(() => {
    document.title = 'Acumen Career Academy | Cybersecurity Training Augusta, Georgia';
  }, []);

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main>
        <Hero />
        <AuthorityStrip />
        <StatsSection />
        <ProgramsOverview />
        <CareerOutcomes />
        <EmployerDemandSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
