import { Link } from 'react-router-dom';

export default function SecPlusHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-navy-900 grid-overlay pt-28 pb-16">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/4 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div
        className="absolute inset-0 bg-center bg-cover opacity-8 pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-900/50 to-navy-900 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="flex items-center gap-3 mb-6 reveal-element">
          <Link to="/programs" className="font-mono text-steel text-xs hover:text-gold transition-colors cursor-pointer">Programs</Link>
          <i className="ri-arrow-right-s-line text-steel text-xs" />
          <span className="font-mono text-gold text-xs">Security+ Readiness</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass-card border border-gold/30 px-4 py-2 rounded-full mb-6 reveal-element">
            <span className="font-mono text-gold text-xs tracking-widest">COMPTIA SECURITY+ SY0-701</span>
          </div>

          <h1 className="font-display text-5xl lg:text-6xl font-bold text-ice leading-tight mb-6 reveal-element">
            Security+ Certification<br />
            <span className="gold-text">Readiness Program</span>
          </h1>

          <p className="font-sans text-steel text-lg leading-relaxed mb-8 reveal-element">
            An accelerated, instructor-led pathway to one of the most recognized entry-level security certifications globally.
            Built for aspiring security professionals ready to validate core competencies and enter the workforce.
          </p>

          <div className="flex flex-wrap gap-4 mb-10 reveal-element">
            {[
              { icon: 'ri-time-line', label: 'Duration', value: '8 Weeks' },
              { icon: 'ri-computer-line', label: 'Format', value: 'Online Synchronous' },
              { icon: 'ri-price-tag-3-line', label: 'Tuition', value: 'Contact for Pricing' },
              { icon: 'ri-group-line', label: 'Cohort Size', value: 'Limited Seats' },
            ].map((s) => (
              <div key={s.label} className="glass-card border border-gold/15 px-4 py-3 rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <i className={`${s.icon} text-gold text-sm`} />
                  <span className="font-mono text-steel text-xs">{s.label}</span>
                </div>
                <p className="font-sans text-ice text-sm font-semibold">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 reveal-element">
            <Link
              to="/admissions"
              className="btn-gold px-7 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              Apply Now <i className="ri-arrow-right-line" />
            </Link>
            <Link
              to="/contact"
              className="btn-outline-gold px-7 py-3.5 rounded-full text-sm cursor-pointer whitespace-nowrap"
            >
              Request Pricing Info
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
