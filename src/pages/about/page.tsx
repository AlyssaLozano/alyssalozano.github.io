import { useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import AboutHero from './components/AboutHero';
import FoundingStory from './components/FoundingStory';
import MissionSection from './components/MissionSection';
import PillarsSection from './components/PillarsSection';
import WhyAugusta from './components/WhyAugusta';
import FacultySection from './components/FacultySection';
import RegulatorySection from './components/RegulatorySection';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function About() {
  useScrollReveal();

  useEffect(() => {
    document.title = 'About | Acumen Career Academy — Cybersecurity Training Institution Augusta, Georgia';
  }, []);

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main>
        <AboutHero />
        <FoundingStory />
        <MissionSection />
        <PillarsSection />
        <WhyAugusta />
        <FacultySection />
        <RegulatorySection />
      </main>
      <Footer />
    </div>
  );
}
