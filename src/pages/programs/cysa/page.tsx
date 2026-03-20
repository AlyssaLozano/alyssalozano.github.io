import { useEffect } from 'react';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import CysaHero from './components/CysaHero';
import CysaModules from './components/CysaModules';
import CysaRoles from './components/CysaRoles';
import ProgramCrossLink from '../components/ProgramCrossLink';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function CysaPage() {
  useScrollReveal();

  useEffect(() => {
    document.title = 'Cybersecurity Operations Analyst Skills Program | Acumen Career Academy — SOC Training Augusta, GA';
  }, []);

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main>
        <CysaHero />
        <CysaModules />
        <CysaRoles />
        <ProgramCrossLink current="cysa" />
      </main>
      <Footer />
    </div>
  );
}
