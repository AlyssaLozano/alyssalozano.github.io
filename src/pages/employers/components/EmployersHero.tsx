export default function EmployersHero() {
  return (
    <section className="relative min-h-[52vh] flex items-end overflow-hidden bg-navy-900 grid-overlay pt-28 pb-16">
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gold/4 rounded-full blur-3xl animate-blob-delay pointer-events-none" />
      <div
        className="absolute inset-0 bg-center bg-cover opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/50 to-navy-900 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass-card border border-gold/30 px-4 py-2 rounded-full mb-6 reveal-element">
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="font-mono text-gold text-xs tracking-widest">FEDERAL · DEFENSE · ENTERPRISE SECTORS</span>
          </div>

          <h1 className="font-display text-5xl lg:text-6xl font-bold text-ice leading-tight mb-6 reveal-element">
            Hire From the<br />
            <span className="gold-text">Frontlines</span>
          </h1>

          <p className="font-sans text-steel text-lg leading-relaxed reveal-element">
            Partner with Acumen Career Academy to access a pipeline of trained, workforce-ready
            cybersecurity analysts. Positioned adjacent to Fort Eisenhower (Formerly Fort Gordon), our graduates serve the
            federal, defense, healthcare, and financial sectors.
          </p>
        </div>
      </div>
    </section>
  );
}
