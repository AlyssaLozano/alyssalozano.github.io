import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useEffect } from 'react';

const sections = [
  {
    id: 'licensing',
    icon: 'ri-shield-check-line',
    title: 'Institutional Licensing',
    content: [
      'Acumen Career Academy is authorized by the Georgia Nonpublic Postsecondary Education Commission (GNPEC), located at 2082 East Exchange Place, Suite 220, Tucker, Georgia 30084. Telephone: (770) 414-3300.',
      'GNPEC licensure does not constitute an endorsement of any institution or guarantee the quality of instruction, the legitimacy of any credentials awarded, or the transferability of credits.',
    ],
  },
  {
    id: 'comptia',
    icon: 'ri-copyright-line',
    title: 'CompTIA Trademark Notice',
    content: [
      'Acumen Career Academy is not affiliated with, endorsed by, or authorized by CompTIA, Inc. in any way.',
      'CompTIA Security+® and CompTIA CySA+® are registered trademarks of CompTIA Properties, LLC. All rights reserved.',
      'References to CompTIA certifications are made solely to describe the certification alignment of our programs. Enrollment in or completion of any Acumen Career Academy program does not constitute or imply affiliation with or endorsement by CompTIA.',
    ],
  },
  {
    id: 'outcomes',
    icon: 'ri-bar-chart-line',
    title: 'Certification & Employment Outcomes',
    content: [
      'Completion of any Acumen Career Academy program does not guarantee certification attainment. Students are responsible for independently scheduling, funding, and passing any third-party certification examinations.',
      'Completion of any Acumen Career Academy program does not guarantee employment, job placement, or any specific level of compensation.',
      'Employer connections, referrals, and job placement support services (where applicable) are provided as supplementary resources and do not constitute a guarantee of employment outcomes.',
    ],
  },
  {
    id: 'examfees',
    icon: 'ri-price-tag-3-line',
    title: 'Exam Fees',
    content: [
      'Examination fees for CompTIA Security+, CompTIA CySA+, or any other third-party certification are NOT included in tuition unless explicitly stated in writing in the enrollment agreement at the time of enrollment.',
      'Students are responsible for all costs associated with certification examinations, including voucher purchase, scheduling fees, and any retake fees.',
    ],
  },
  {
    id: 'salary',
    icon: 'ri-money-dollar-circle-line',
    title: 'Salary & Compensation Data',
    content: [
      'All salary figures, compensation ranges, and market data referenced on this website or in any Acumen Career Academy materials are based on publicly available national and regional labor market data from sources including the U.S. Bureau of Labor Statistics, industry salary surveys, and publicly reported job postings.',
      'Individual compensation outcomes will vary significantly based on experience, education, location, employer, clearance status, and other factors. Acumen Career Academy makes no representation or warranty regarding any individual\'s compensation outcomes.',
    ],
  },
  {
    id: 'workforce',
    icon: 'ri-government-line',
    title: 'Workforce-Sponsored Enrollment (WIOA / WorkSource)',
    content: [
      'Workforce-sponsored enrollment through WIOA (Workforce Innovation and Opportunity Act) or WorkSource Georgia programs is subject to the eligibility determination and funding authorization of the sponsoring workforce agency.',
      'Acumen Career Academy does not determine WIOA eligibility. Eligibility is determined exclusively by the student\'s local WorkSource Georgia Career Center or appropriate workforce development agency.',
      'Final enrollment under a workforce-sponsored pathway is contingent upon written authorization from the sponsoring agency. Acumen Career Academy reserves the right to update workforce-sponsored program terms in coordination with applicable workforce guidelines.',
      'Acumen Career Academy is an approved training provider. Approval does not constitute endorsement of any specific enrollment outcome.',
    ],
  },
  {
    id: 'privacy',
    icon: 'ri-lock-2-line',
    title: 'Privacy & Information Collection',
    content: [
      'Information submitted through inquiry, application, or contact forms on this website is collected for the purpose of admissions processing, program communication, and institutional operations.',
      'Acumen Career Academy does not sell or share personal information with third parties for marketing purposes.',
      'Student records are maintained in accordance with applicable state and federal regulations governing nonpublic postsecondary education institutions.',
    ],
  },
  {
    id: 'forteisenhhower',
    icon: 'ri-map-pin-2-line',
    title: 'Proximity Statements — Fort Eisenhower',
    content: [
      'References to proximity to Fort Eisenhower (Formerly Fort Gordon) are made solely to describe the geographic location of Acumen Career Academy\'s service area and the regional employment market.',
      'Acumen Career Academy has no affiliation with, endorsement from, or authorization by the United States Army, Fort Eisenhower, US Army Cyber Command (ARCYBER), or any branch of the United States federal government.',
      'The presence of federal or military installations in the Augusta, Georgia region is cited as a descriptor of regional employment demand and does not imply any institutional relationship.',
    ],
  },
  {
    id: 'website',
    icon: 'ri-global-line',
    title: 'Website Content Disclaimer',
    content: [
      'The content on this website is provided for informational purposes only and is subject to change without notice. Acumen Career Academy reserves the right to modify program offerings, tuition, enrollment requirements, and schedules at any time.',
      'Program details on this website, including tuition, duration, format, and curriculum, reflect current offerings and may differ from materials provided at prior or future dates. The enrollment agreement constitutes the binding record of program terms.',
    ],
  },
];

export default function Disclosures() {
  useScrollReveal();

  useEffect(() => {
    document.title = 'Disclosures & Policies | Acumen Career Academy — Augusta, Georgia';
  }, []);

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 bg-navy-900 grid-overlay">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gold/3 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-6 reveal-element">
              <Link to="/" className="font-mono text-steel text-xs hover:text-gold transition-colors cursor-pointer">Home</Link>
              <i className="ri-arrow-right-s-line text-steel/40 text-xs" />
              <span className="font-mono text-gold text-xs">Disclosures & Policies</span>
            </div>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 glass-card border border-gold/30 px-4 py-2 rounded-full mb-6 reveal-element">
                <i className="ri-shield-check-line text-gold text-sm" />
                <span className="font-mono text-gold text-xs tracking-widest">GNPEC LICENSED INSTITUTION</span>
              </div>
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-ice leading-tight mb-6 reveal-element">
                Disclosures<br />
                <span className="gold-text">&amp; Policies</span>
              </h1>
              <p className="font-sans text-steel text-lg leading-relaxed reveal-element">
                Acumen Career Academy is committed to transparency. The following disclosures govern
                institutional representations, enrollment terms, and student rights.
              </p>
            </div>
          </div>
        </section>

        {/* Quick nav */}
        <section className="py-8 bg-navy-950 border-y border-gold/10 sticky top-16 z-30 reveal-element">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="font-mono text-steel text-xs hover:text-gold transition-colors cursor-pointer whitespace-nowrap"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Disclosure sections */}
        <section className="py-16 bg-navy-900">
          <div className="max-w-4xl mx-auto px-6 space-y-10">
            {sections.map((section, i) => (
              <div
                key={section.id}
                id={section.id}
                className="glass-card border border-gold/15 rounded-2xl p-8 reveal-element scroll-mt-32"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <i className={`${section.icon} text-gold`} />
                  </div>
                  <h2 className="font-display text-xl font-bold text-ice">{section.title}</h2>
                </div>
                <div className="space-y-4">
                  {section.content.map((para, j) => (
                    <p key={j} className="font-sans text-steel text-sm leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer note */}
        <section className="py-12 bg-navy-950">
          <div className="max-w-4xl mx-auto px-6 text-center reveal-element">
            <div className="glass-card border border-gold/15 p-8 rounded-2xl">
              <p className="font-mono text-gold text-xs tracking-widest mb-3">QUESTIONS ABOUT THESE DISCLOSURES?</p>
              <p className="font-sans text-steel text-sm leading-relaxed mb-6">
                If you have questions about any of the above disclosures, enrollment terms, or institutional policies,
                please contact our admissions team directly.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-gold px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  Contact Us <i className="ri-arrow-right-line" />
                </Link>
                <Link
                  to="/admissions"
                  className="btn-outline-gold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  Admissions Info
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
