import { useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import EmployersHero from './components/EmployersHero';
import EmployersContent from './components/EmployersContent';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Employers() {
  useScrollReveal();

  useEffect(() => {
    document.title = 'Employer Partnerships | Acumen Career Academy — Hire Cybersecurity Analysts Augusta, Georgia';
  }, []);

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main>
        <EmployersHero />
        <EmployersContent />
      </main>
      <Footer />
    </div>
  );
}
