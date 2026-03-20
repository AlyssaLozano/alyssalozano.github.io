import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const includedServices = [
  {
    icon: 'ri-briefcase-4-line',
    title: 'Employment Readiness & Job Placement Support',
    desc: 'Structured career preparation covering professional presence, job search strategy, and active placement support through program completion and beyond.',
  },
  {
    icon: 'ri-file-user-line',
    title: 'Resume Development',
    desc: 'Hands-on resume writing support tailored to cybersecurity roles — formatted for applicant tracking systems and reviewed by industry-aligned staff.',
  },
  {
    icon: 'ri-chat-voice-line',
    title: 'Interview Preparation',
    desc: 'Mock interviews, behavioral question coaching, and technical interview preparation specific to security analyst and SOC analyst hiring processes.',
  },
  {
    icon: 'ri-building-2-line',
    title: 'Employer Connections & Referral Opportunities',
    desc: 'Access to Acumen Career Academy\'s employer network in the federal, defense contracting, healthcare, and financial sectors in the Augusta / CSRA region.',
  },
  {
    icon: 'ri-user-follow-line',
    title: 'Ongoing Case Management & Progress Reporting',
    desc: 'A dedicated point of contact tracks your progress throughout the program, coordinates with your sponsoring workforce agency, and provides required documentation.',
  },
  {
    icon: 'ri-check-double-line',
    title: 'Post-Completion Follow-Up',
    desc: 'Support doesn\'t stop at graduation. We follow up after program completion to assist with job placement, certification scheduling, and employer introductions.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Contact WorkSource Georgia',
    desc: 'Reach out to your local WorkSource Georgia Career Center and ask about WIOA-funded approved training programs. Acumen Career Academy is an approved training provider.',
    icon: 'ri-phone-line',
  },
  {
    num: '02',
    title: 'Determine Eligibility',
    desc: 'A WorkSource case manager will assess your eligibility based on employment status, income, and other program criteria. Acumen Career Academy does not determine WIOA eligibility.',
    icon: 'ri-checkbox-circle-line',
  },
  {
    num: '03',
    title: 'Receive Funding Authorization',
    desc: 'Once approved, your career center issues a training authorization. This authorization is coordinated directly between WorkSource and Acumen Career Academy.',
    icon: 'ri-file-shield-2-line',
  },
  {
    num: '04',
    title: 'Enroll & Begin Training',
    desc: 'With funding secured, you complete enrollment with Acumen Career Academy and begin your cohort on the confirmed start date.',
    icon: 'ri-graduation-cap-line',
  },
];

const faqs = [
  {
    q: 'What is WIOA?',
    a: 'The Workforce Innovation and Opportunity Act (WIOA) is a federal program that provides funding for job training to help Americans gain the skills needed for in-demand careers. WorkSource Georgia administers WIOA funds in the state of Georgia.',
  },
  {
    q: 'Which Acumen program is eligible for workforce-sponsored enrollment?',
    a: 'Currently, the CompTIA Security+ Certification Readiness Program is available under the workforce-sponsored enrollment pathway. Tuition under this pathway is $8,500, which includes the expanded career support services package.',
  },
  {
    q: 'Why is workforce-sponsored tuition higher than direct enrollment?',
    a: 'Workforce-sponsored enrollment includes a structured package of required career support services — employment readiness, resume development, interview prep, employer connections, case management, and post-completion follow-up — in addition to the core training program. These services are required under workforce development guidelines and are reflected in the tuition structure.',
  },
  {
    q: 'Do I need to contact Acumen first or WorkSource first?',
    a: 'We recommend contacting your local WorkSource Georgia Career Center first to determine eligibility. Once funding is confirmed, WorkSource will coordinate enrollment with us. You\'re welcome to submit an inquiry to Acumen at any time — we can help answer questions about the program while you explore funding.',
  },
  {
    q: 'Are exam fees covered under workforce-sponsored enrollment?',
    a: 'Exam fees for CompTIA Security+ are not included in tuition under either enrollment pathway unless explicitly stated in writing in the enrollment agreement. Discuss exam fee coverage with your WorkSource case manager — some workforce programs may offer additional exam support.',
  },
];

export default function Workforce() {
  useScrollReveal();

  useEffect(() => {
    document.title = 'Workforce Funding & WIOA | Acumen Career Academy — WorkSource Georgia Approved Training';
  }, []);

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative min-h-[58vh] flex items-end overflow-hidden bg-navy-900 grid-overlay pt-28 pb-16">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/4 rounded-full blur-3xl animate-blob pointer-events-none" />
          <div
            className="absolute inset-0 bg-center bg-cover opacity-8 pointer-events-none"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/50 to-navy-900 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 w-full">
            <div className="flex items-center gap-3 mb-6 reveal-element">
              <Link to="/" className="font-mono text-steel text-xs hover:text-gold transition-colors cursor-pointer">Home</Link>
              <i className="ri-arrow-right-s-line text-steel text-xs" />
              <span className="font-mono text-gold text-xs">Workforce Funding</span>
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 glass-card border border-gold/30 px-4 py-2 rounded-full mb-6 reveal-element">
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="font-mono text-gold text-xs tracking-widest">WORKSOURCE GEORGIA · WIOA APPROVED TRAINING</span>
              </div>

              <h1 className="font-display text-5xl lg:text-6xl font-bold text-ice leading-tight mb-6 reveal-element">
                Funded Training.<br />
                <span className="gold-text">Real Careers.</span>
              </h1>

              <p className="font-sans text-steel text-lg leading-relaxed mb-8 reveal-element">
                Eligible students may be able to attend the Security+ Certification Readiness Program
                at no out-of-pocket cost through WorkSource Georgia and WIOA workforce funding.
                The workforce-sponsored pathway includes expanded career support services designed
                to get you employed — not just trained.
              </p>

              <div className="flex flex-wrap gap-4 reveal-element">
                <Link
                  to="/contact"
                  className="btn-gold px-7 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  Ask Us About Funding <i className="ri-arrow-right-line" />
                </Link>
                <a
                  href="https://www.worksourcegeorgia.org"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="btn-outline-gold px-7 py-3.5 rounded-full text-sm cursor-pointer whitespace-nowrap"
                >
                  Find WorkSource Georgia <i className="ri-external-link-line text-xs ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What is WIOA */}
        <section className="py-20 bg-navy-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="reveal-element">
                <span className="font-mono text-gold text-xs tracking-widest mb-3 block">WHAT IS WORKFORCE FUNDING?</span>
                <h2 className="font-display text-4xl font-bold text-ice mb-6 leading-tight">
                  Your Training.<br />
                  <span className="gold-text">Paid For.</span>
                </h2>
                <p className="font-sans text-steel text-base leading-relaxed mb-5">
                  The Workforce Innovation and Opportunity Act (WIOA) is a federal program that funds
                  job training for eligible Americans. In Georgia, these funds are administered through
                  WorkSource Georgia Career Centers located across the state.
                </p>
                <p className="font-sans text-steel text-base leading-relaxed mb-8">
                  If you qualify, WorkSource Georgia can cover your tuition at an approved training
                  provider — like Acumen Career Academy — so you can build a cybersecurity career
                  without taking on debt.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: 'ri-user-line', text: 'Available to eligible unemployed or underemployed individuals' },
                    { icon: 'ri-map-pin-2-line', text: 'Administered locally through WorkSource Georgia Career Centers' },
                    { icon: 'ri-shield-check-line', text: 'Acumen Career Academy is an approved training provider' },
                    { icon: 'ri-government-line', text: 'Federal funding — no repayment required if eligibility is met' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                        <i className={`${item.icon} text-gold text-sm`} />
                      </div>
                      <span className="font-sans text-ice/80 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal-element">
                <div className="glass-card gold-border-glow p-8 rounded-2xl">
                  <span className="font-mono text-gold text-xs tracking-widest mb-4 block">SECURITY+ — WORKFORCE PATHWAY</span>
                  <h3 className="font-display text-2xl font-bold text-ice mb-6">Tuition at a Glance</h3>
                  <div className="space-y-0 divide-y divide-gold/10">
                    <div className="py-3.5 flex items-center justify-between">
                      <span className="font-sans text-steel text-sm">Program</span>
                      <span className="font-sans text-ice text-sm font-medium">Security+ Readiness</span>
                    </div>
                    <div className="py-3.5 flex items-center justify-between">
                      <span className="font-sans text-steel text-sm">Program Length</span>
                      <span className="font-sans text-ice text-sm font-medium">240 Clock Hours</span>
                    </div>
                    <div className="py-3.5 flex items-center justify-between">
                      <span className="font-sans text-steel text-sm">Workforce-Sponsored Tuition</span>
                      <span className="font-display text-gold text-xl font-bold">$8,500</span>
                    </div>
                    <div className="py-3.5 flex items-center justify-between">
                      <span className="font-sans text-steel text-sm">Your Out-of-Pocket (if approved)</span>
                      <span className="font-display text-green-400 text-xl font-bold">$0</span>
                    </div>
                    <div className="py-3.5 flex items-center justify-between">
                      <span className="font-sans text-steel text-sm">Exam Fee</span>
                      <span className="font-mono text-red-400 text-sm">Not Included</span>
                    </div>
                  </div>
                  <p className="font-mono text-steel text-xs mt-5 leading-relaxed">
                    Eligibility and funding authorization determined by WorkSource Georgia.
                    Zero out-of-pocket applies only to approved, funded students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 reveal-element">
              <span className="font-mono text-gold text-xs tracking-widest mb-3 block">WORKFORCE-SPONSORED ENROLLMENT</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-ice mb-4">
                More Than Training
              </h2>
              <p className="font-sans text-steel text-base max-w-2xl mx-auto">
                The workforce-sponsored pathway isn&apos;t just a funding mechanism — it includes a full
                suite of career support services designed to bridge the gap from classroom to employed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {includedServices.map((s, i) => (
                <div
                  key={s.title}
                  className="glass-card border border-gold/15 p-6 rounded-2xl hover:border-gold/30 transition-all duration-300 reveal-element"
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                    <i className={`${s.icon} text-gold text-lg`} />
                  </div>
                  <h3 className="font-display text-base font-bold text-ice mb-2 leading-snug">{s.title}</h3>
                  <p className="font-sans text-steel text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="py-20 bg-navy-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="reveal-element">
                <span className="font-mono text-gold text-xs tracking-widest mb-3 block">HOW IT WORKS</span>
                <h2 className="font-display text-4xl font-bold text-ice mb-4 leading-tight">
                  4 Steps to<br />
                  <span className="gold-text">Funded Enrollment</span>
                </h2>
                <p className="font-sans text-steel text-base leading-relaxed mb-10">
                  The workforce funding process is managed between you, WorkSource Georgia, and Acumen
                  Career Academy. Here&apos;s how it works from start to enrolled.
                </p>

                <div className="space-y-0">
                  {steps.map((step, i) => (
                    <div key={step.num} className="flex gap-5">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0">
                          <i className={`${step.icon} text-gold text-lg`} />
                        </div>
                        {i < steps.length - 1 && (
                          <div className="w-px flex-1 bg-gold/10 mt-3 min-h-8" />
                        )}
                      </div>
                      <div className="pb-7">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="font-mono text-gold/40 text-xs">{step.num}</span>
                          <h3 className="font-sans text-ice font-semibold text-base">{step.title}</h3>
                        </div>
                        <p className="font-sans text-steel text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="reveal-element">
                <span className="font-mono text-gold text-xs tracking-widest mb-3 block">COMMON QUESTIONS</span>
                <h2 className="font-display text-4xl font-bold text-ice mb-8 leading-tight">
                  Workforce Funding<br />FAQs
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <details
                      key={i}
                      className="glass-card border border-gold/15 rounded-xl overflow-hidden group cursor-pointer"
                    >
                      <summary className="flex items-center justify-between px-5 py-4 list-none cursor-pointer">
                        <span className="font-sans text-ice text-sm font-semibold pr-4">{faq.q}</span>
                        <i className="ri-add-line text-gold text-lg shrink-0 group-open:hidden" />
                        <i className="ri-subtract-line text-gold text-lg shrink-0 hidden group-open:block" />
                      </summary>
                      <div className="px-5 pb-5">
                        <p className="font-sans text-steel text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-4xl mx-auto px-6 text-center reveal-element">
            <div className="glass-card gold-border-glow p-12 rounded-2xl">
              <span className="font-mono text-gold text-xs tracking-widest mb-4 block">READY TO EXPLORE?</span>
              <h2 className="font-display text-4xl font-bold text-ice mb-4 leading-tight">
                Start with WorkSource.<br />
                <span className="gold-text">Finish with a Career.</span>
              </h2>
              <p className="font-sans text-steel text-base leading-relaxed max-w-xl mx-auto mb-8">
                Contact your local WorkSource Georgia Career Center to check eligibility,
                or reach out to us directly — we&apos;ll help you understand your options and
                walk you through the process.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-gold px-8 py-4 rounded-full text-sm font-semibold inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  Contact Acumen Career Academy <i className="ri-arrow-right-line" />
                </Link>
                <a
                  href="https://www.worksourcegeorgia.org"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="btn-outline-gold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  Find a WorkSource Career Center <i className="ri-external-link-line text-xs" />
                </a>
              </div>
              <p className="font-mono text-steel text-xs mt-8 leading-relaxed">
                WIOA eligibility determined exclusively by WorkSource Georgia. Acumen Career Academy
                does not guarantee funding approval. Exam fees not included in tuition.
                Completion does not guarantee certification attainment or employment.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
