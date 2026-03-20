export default function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-navy-900 grid-overlay pt-28 pb-16">
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gold/4 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div
        className="absolute inset-0 bg-center bg-cover opacity-8 pointer-events-none"
        style={{ backgroundImage: "url('https://readdy.ai/api/search-image?query=abstract%20digital%20communication%20network%20connection%20nodes%20dark%20navy%20background%20gold%20light%20particles%20technology%20professional%20minimal%20elegant%20clean%20contact%20support&width=1920&height=700&seq=contact-hero-v1&orientation=landscape')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/50 to-navy-900 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 glass-card border border-gold/30 px-4 py-2 rounded-full mb-6 reveal-element">
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="font-mono text-gold text-xs tracking-widest">AUGUSTA, GEORGIA</span>
          </div>

          <h1 className="font-display text-5xl lg:text-6xl font-bold text-ice leading-tight mb-6 reveal-element">
            Get in Touch with<br />
            <span className="gold-text">Acumen Career Academy</span>
          </h1>

          <p className="font-sans text-steel text-lg leading-relaxed reveal-element">
            Whether you have questions about our programs, admissions process, or upcoming cohort dates —
            we&apos;re here to help you make the right decision for your career.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8 reveal-element">
            <a
              href="tel:+17064890188"
              className="inline-flex items-center gap-2 glass-card border border-gold/30 px-5 py-2.5 rounded-full hover:border-gold/60 transition-colors cursor-pointer"
            >
              <i className="ri-phone-line text-gold text-sm" />
              <span className="font-mono text-ice text-sm">(706) 489-0188</span>
            </a>
            <a
              href="mailto:info@acumencareeracademy.com"
              className="inline-flex items-center gap-2 glass-card border border-gold/30 px-5 py-2.5 rounded-full hover:border-gold/60 transition-colors cursor-pointer"
            >
              <i className="ri-mail-line text-gold text-sm" />
              <span className="font-mono text-ice text-sm">info@acumencareeracademy.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
