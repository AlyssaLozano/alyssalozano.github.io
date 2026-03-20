import { Link } from 'react-router-dom';

const enrollSteps = [
  { num: '01', title: 'Submit Application', desc: 'Complete the online form + $150 non-refundable application fee' },
  { num: '02', title: 'Admissions Conversation', desc: 'A brief call with an advisor to confirm fit and readiness' },
  { num: '03', title: 'Enrollment Agreement', desc: 'Review and sign your enrollment agreement, confirm tuition' },
  { num: '04', title: 'Cohort Confirmation', desc: 'Receive your start date and welcome materials for launch' },
];

export default function CtaSection() {
  return (
    <>
      {/* Enrollment Process */}
      <section className="py-24 bg-navy-900 grid-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 reveal-element">
            <p className="font-mono text-gold text-xs tracking-widest mb-3">HOW IT WORKS</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-ice">
              Enrollment in 4 Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enrollSteps.map((step, i) => (
              <div key={step.num} className="relative reveal-element" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="glass-card gold-border-glow p-7 h-full">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gold bg-gold/5 mb-5">
                    <span className="font-mono text-gold font-bold text-sm">{step.num}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-ice mb-2">{step.title}</h3>
                  <p className="font-sans text-steel text-sm leading-relaxed">{step.desc}</p>
                </div>
                {/* Connector */}
                {i < enrollSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 -right-3 z-10">
                    <i className="ri-arrow-right-line text-gold/30 text-xl" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* Decorative blobs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-gold/4 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-gold/3 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="reveal-element">
            <p className="font-mono text-gold text-xs tracking-widest mb-5">NEXT COHORT FORMING NOW</p>
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-ice mb-6 leading-tight">
              Ready to Begin?
            </h2>
            <p className="font-sans text-steel text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Join the next cohort of cybersecurity professionals. Seats are limited — 
              we keep cohort sizes small by design.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <a
                href="mailto:info@acumencareeracademy.com"
                className="btn-gold px-8 py-4 rounded-full text-base font-semibold flex items-center gap-2 cursor-pointer"
              >
                Start Your Application <i className="ri-arrow-right-up-line" />
              </a>
              <Link
                to="/programs"
                className="btn-outline-gold px-8 py-4 rounded-full text-base cursor-pointer"
              >
                Explore Programs First
              </Link>
            </div>
            <p className="font-mono text-steel/60 text-xs">
              Questions? Reach us at{' '}
              <a href="mailto:info@acumencareeracademy.com" className="text-gold hover:text-gold-light transition-colors cursor-pointer">
                info@acumencareeracademy.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
