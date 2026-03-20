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
        <h1 className="font-display text-5xl lg:text-6xl font-bold text-ice mb-5 reveal-element">
          Choose Your Path
        </h1>
        <p className="font-sans text-steel text-lg max-w-2xl leading-relaxed reveal-element">
          Two programs. One mission: Launch your cybersecurity career. Both are instructor-led, 
          online synchronous, and purpose-built for real-world security operations roles.
        </p>

        <div className="flex items-center gap-8 mt-8 reveal-element">
          {[
            { icon: 'ri-computer-line', text: 'Online Synchronous' },
            { icon: 'ri-time-line', text: '8-Week Format' },
            { icon: 'ri-shield-check-line', text: 'GNPEC Authorized' },
            { icon: 'ri-group-line', text: 'Small Cohorts' },
          ].map((t) => (
            <div key={t.text} className="flex items-center gap-2">
              <i className={`${t.icon} text-gold text-sm`} />
              <span className="font-mono text-steel text-xs hidden sm:block">{t.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
