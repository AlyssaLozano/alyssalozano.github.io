import { Link } from 'react-router-dom';

export default function ProgramsHero() {
  return (
    <section className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden bg-navy-900 grid-overlay pt-28">
      {/* Blobs */}
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-gold/4 rounded-full blur-3xl animate-blob-delay pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-steel text-xs mb-6">
          <Link to="/" className="hover:text-gold transition-colors cursor-pointer">Home</Link>
          <i className="ri-arrow-right-s-line text-steel/40" />
          <span className="text-gold">Programs</span>
        </div>

        <p className="font-mono text-gold text-xs tracking-widest mb-4 reveal-element">PROGRAM CATALOG</p>
        <h1 className="font-display text-5xl lg:text-6xl font-bold text-ice mb-5 reveal-element leading-tight">
          Two Programs.<br />
          <span className="gold-text">From $4,725.</span>
        </h1>
        <p className="font-sans text-steel text-lg max-w-2xl leading-relaxed mb-8 reveal-element">
          Both programs are live, instructor-led, and built around real SOC tools from day one.
          You graduate with a verifiable portfolio — not just a certificate. A fraction of the cost
          of national bootcamps, in a fraction of the time.
        </p>

        <div className="flex flex-wrap gap-3 reveal-element">
          {[
            { icon: 'ri-live-line', text: 'Online Synchronous' },
            { icon: 'ri-time-line', text: '8 and 12 Week Formats' },
            { icon: 'ri-shield-check-line', text: 'GNPEC Authorized' },
            { icon: 'ri-group-line', text: 'Small Cohorts' },
          ].map((t) => (
            <div key={t.text} className="inline-flex items-center gap-2 glass-card border border-gold/20 px-3 py-2 rounded-full">
              <i className={`${t.icon} text-gold text-xs`} />
              <span className="font-mono text-ice/80 text-xs">{t.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
