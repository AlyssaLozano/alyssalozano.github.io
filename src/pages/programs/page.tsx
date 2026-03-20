import { useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ProgramsHero from './components/ProgramsHero';
import ProgramComparison from './components/ProgramComparison';
import ProgramFaq from './components/ProgramFaq';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Programs() {
  useScrollReveal();

  useEffect(() => {
    document.title = 'Programs | Acumen Career Academy — Security+ & CySA+ Cybersecurity Training';
  }, []);

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main>
        <ProgramsHero />
        <ProgramComparison />
        <ProgramFaq />
      </main>
      <Footer />
    </div>
  );
}
