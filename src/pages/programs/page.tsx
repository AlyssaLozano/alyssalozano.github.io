import { useEffect, useMemo } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ProgramsHero from './components/ProgramsHero';
import ProgramComparison from './components/ProgramComparison';
import ProgramFaq from './components/ProgramFaq';
import SchemaOrg from '../../components/feature/SchemaOrg';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { programFaqs } from '../../mocks/programs';

export default function Programs() {
  useScrollReveal();

  useEffect(() => {
    document.title = 'Programs | Acumen Career Academy — Security+ & CySA+ Cybersecurity Training';
  }, []);

  const faqSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: programFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    }),
    []
  );

  return (
    <div className="min-h-screen bg-navy-900">
      <SchemaOrg schema={faqSchema} />
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
