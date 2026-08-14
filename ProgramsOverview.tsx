import { useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import AdmissionsHero from './components/AdmissionsHero';
import AdmissionsValue from './components/AdmissionsValue';
import AdmissionsForm from './components/AdmissionsForm';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Admissions() {
  useScrollReveal();

  useEffect(() => {
    document.title = 'Admissions & Enrollment | Acumen Career Academy — Cybersecurity Training Augusta, Georgia';
  }, []);

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main>
        <AdmissionsHero />
        <AdmissionsValue />
        <AdmissionsForm />
      </main>
      <Footer />
    </div>
  );
}
