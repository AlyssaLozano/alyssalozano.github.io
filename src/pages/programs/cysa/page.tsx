import { useEffect, useMemo } from 'react';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import CysaHero from './components/CysaHero';
import CysaModules from './components/CysaModules';
import CysaRoles from './components/CysaRoles';
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

export default function CysaPage() {
  useScrollReveal();

  useEffect(() => {
    document.title =
      'Cybersecurity Operations Analyst Skills Program | Acumen Career Academy — SOC Training Augusta, GA';
  }, []);

  const schema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Cybersecurity Operations Analyst Skills Program',
      description:
        'An intensive 8-week hands-on instructor-led program preparing students for SOC analyst roles and the CompTIA CySA+ (CS0-003) certification. Covers SIEM platform operations, EDR and SOAR tooling, the MITRE ATT&CK and Cyber Kill Chain frameworks, phishing analysis, network traffic analysis with Wireshark and Zeek, and incident response. Concludes with a full host monitoring and incident simulation capstone. Online synchronous format, approximately 15 hours per week. GNPEC-authorized institution in Augusta, Georgia.',
      url: 'https://acumencareeracademy.com/programs/cybersecurity-operations-analyst',
      courseCode: 'CYSA-CS0-003',
      educationalCredentialAwarded: 'CompTIA CySA+ CS0-003 Exam Readiness',
      timeRequired: 'PT120H',
      courseMode: 'online',
      inLanguage: 'en-US',
      provider: PROVIDER,
      about: [
        { '@type': 'Thing', name: 'Security Operations Center (SOC) Operations' },
        { '@type': 'Thing', name: 'SIEM, EDR, and SOAR Platforms' },
        { '@type': 'Thing', name: 'MITRE ATT\u0026CK Framework' },
        { '@type': 'Thing', name: 'Cyber Kill Chain' },
        { '@type': 'Thing', name: 'Network Traffic Analysis' },
        { '@type': 'Thing', name: 'Phishing Analysis and IOC Extraction' },
        { '@type': 'Thing', name: 'Incident Response and Documentation' },
      ],
      teaches: [
        'Threat detection and alert triage in a SOC environment',
        'SIEM platform operations and log analysis',
        'EDR tool proficiency and endpoint forensics',
        'SOAR automation and playbook execution',
        'Network traffic analysis using Wireshark and Zeek',
        'Phishing header analysis and payload examination',
        'MITRE ATT&CK and Cyber Kill Chain application',
        'Incident simulation and blue team response',
      ],
      coursePrerequisites:
        'Foundational networking and security knowledge recommended; motivated career-changers encouraged to apply',
      syllabusSections: [
        { '@type': 'Syllabus', name: 'Module 01 — Blue Team Foundations', description: 'Defensive mindset, threat landscape, analyst workflows' },
        { '@type': 'Syllabus', name: 'Module 02 — SOC Team Internals', description: 'Tier structures, escalation, shift operations, documentation' },
        { '@type': 'Syllabus', name: 'Module 03 — Core SOC Solutions', description: 'SIEM platforms, EDR systems, SOAR automation' },
        { '@type': 'Syllabus', name: 'Module 04 — Cyber Defense Frameworks', description: 'MITRE ATT&CK, Cyber Kill Chain, Diamond Model' },
        { '@type': 'Syllabus', name: 'Module 05 — Phishing Analysis', description: 'Header analysis, payload examination, IOC extraction' },
        { '@type': 'Syllabus', name: 'Module 06 — Network Traffic Analysis', description: 'Wireshark, Zeek, anomaly detection, protocol analysis' },
        { '@type': 'Syllabus', name: 'Module 07 — Network Security Monitoring', description: 'IDS/IPS, signature tuning, alert triage' },
        { '@type': 'Syllabus', name: 'Module 08 — Host Monitoring & Capstone', description: 'Log analysis, endpoint forensics, full incident simulation' },
      ],
      offers: {
        '@type': 'Offer',
        name: 'Direct Enrollment (Self-Pay)',
        price: '4500',
        priceCurrency: 'USD',
        url: 'https://acumencareeracademy.com/admissions',
        availability: 'https://schema.org/InStock',
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        duration: 'P8W',
        courseWorkload: 'PT120H',
        location: {
          '@type': 'VirtualLocation',
          url: 'https://acumencareeracademy.com/programs/cybersecurity-operations-analyst',
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
        <CysaHero />
        <CysaModules />
        <CysaRoles />
        <ProgramCrossLink current="cysa" />
      </main>
      <Footer />
    </div>
  );
}
