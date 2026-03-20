export default function AdmissionsHero() {
  return (
    <section className="relative min-h-[52vh] flex items-end overflow-hidden bg-navy-900 grid-overlay pt-28 pb-16">
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gold/4 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div
        className="absolute inset-0 bg-center bg-cover opacity-8 pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/50 to-navy-900 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 glass-card border border-gold/30 px-4 py-2 rounded-full mb-6 reveal-element">
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="font-mono text-gold text-xs tracking-widest">ENROLLMENT OPEN · NEXT COHORT FORMING</span>
          </div>

          <h1 className="font-display text-5xl lg:text-6xl font-bold text-ice leading-tight mb-6 reveal-element">
            Begin Your<br />
            <span className="gold-text">Application</span>
          </h1>

          <p className="font-sans text-steel text-lg leading-relaxed reveal-element">
            A straightforward, 4-step enrollment process designed to ensure every student is positioned
            for success. Seats per cohort are intentionally limited to preserve instruction quality.
          </p>

          {/* Contact badges */}
          <div className="flex flex-wrap gap-3 mt-6 reveal-element">
            <a
              href="tel:+17064890188"
              className="inline-flex items-center gap-2.5 glass-card border border-gold/25 hover:border-gold/50 px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer group"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-phone-line text-gold text-sm group-hover:scale-110 transition-transform duration-200" />
              </div>
              <span className="font-mono text-ice text-sm">(706) 489-0188</span>
            </a>
            <a
              href="mailto:info@acumencareeracademy.com"
              className="inline-flex items-center gap-2.5 glass-card border border-gold/25 hover:border-gold/50 px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer group"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-mail-line text-gold text-sm group-hover:scale-110 transition-transform duration-200" />
              </div>
              <span className="font-mono text-ice text-sm">info@acumencareeracademy.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
