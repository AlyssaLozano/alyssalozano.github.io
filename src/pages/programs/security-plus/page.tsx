import { useEffect, useMemo } from 'react';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import SecPlusHero from './components/SecPlusHero';
import SecPlusDomains from './components/SecPlusDomains';
import SecPlusTuition from './components/SecPlusTuition';
import SecPlusCta from './components/SecPlusCta';
import ProgramCrossLink from '../components/ProgramCrossLink';
import SchemaOrg from '../../../components/feature/SchemaOrg';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

const PROVIDER = {
  '@type': 'EducationalOrganization',
  name: 'Acumen Career Academy',
  url: 'https://acumencareeracademy.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Augusta',
    addressRegion: 'GA',
    addressCountry: 'US',
  },
};

export default function SecurityPlusPage() {
  useScrollReveal();

  useEffect(() => {
    document.title =
      'Security+ Certification Readiness | Acumen Career Academy — Augusta, Georgia Cybersecurity Training';
  }, []);

  const schema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Security+ Certification Readiness Program',
      description:
        'A focused, accelerated 8-week instructor-led program preparing students for the CompTIA Security+ (SY0-701) certification exam. Covers all five exam domains: General Security Concepts (12%), Threats, Vulnerabilities & Mitigations (22%), Security Architecture (18%), Security Operations (28%), and Security Program Management & Oversight (20%). Online synchronous format. GNPEC-authorized institution in Augusta, Georgia.',
      url: 'https://acumencareeracademy.com/programs/security-plus',
      courseCode: 'SECPLUS-SY0-701',
      educationalCredentialAwarded: 'CompTIA Security+ SY0-701 Exam Readiness',
      timeRequired: 'PT240H',
      courseMode: 'online',
      inLanguage: 'en-US',
      provider: PROVIDER,
      about: [
        { '@type': 'Thing', name: 'General Security Concepts' },
        { '@type': 'Thing', name: 'Threats, Vulnerabilities & Mitigations' },
        { '@type': 'Thing', name: 'Security Architecture' },
        { '@type': 'Thing', name: 'Security Operations' },
        { '@type': 'Thing', name: 'Security Program Management & Oversight' },
      ],
      teaches: [
        'CompTIA Security+ SY0-701 exam domain coverage',
        'Threat detection and vulnerability management',
        'Security architecture and design',
        'Incident response and security operations',
        'Governance, risk, and compliance',
      ],
      coursePrerequisites: 'Basic IT familiarity recommended',
      offers: [
        {
          '@type': 'Offer',
          name: 'Direct Enrollment (Self-Pay)',
          price: '4500',
          priceCurrency: 'USD',
          url: 'https://acumencareeracademy.com/admissions',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Workforce-Sponsored Enrollment (WIOA / WorkSource)',
          price: '8500',
          priceCurrency: 'USD',
          url: 'https://acumencareeracademy.com/admissions',
          availability: 'https://schema.org/InStock',
        },
      ],
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        duration: 'P8W',
        courseWorkload: 'PT240H',
        location: {
          '@type': 'VirtualLocation',
          url: 'https://acumencareeracademy.com/programs/security-plus',
        },
        instructor: {
          '@type': 'Person',
          description: 'Industry-experienced cybersecurity professional and credentialed educator',
        },
      },
    }),
    []
  );

  return (
    <div className="min-h-screen bg-navy-900">
      <SchemaOrg schema={schema} />
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
