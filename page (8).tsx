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
            Hire Analysts Who<br />
            <span className="gold-text">Bring the Evidence</span>
          </h1>

          <p className="font-sans text-steel text-lg leading-relaxed mb-8 reveal-element">
            Acumen graduates don&apos;t just have a certificate — they arrive with a verifiable portfolio:
            written investigation reports, original detection rules mapped to MITRE ATT&amp;CK tactics,
            a working SOAR workflow, and documented case management evidence. Trained on Splunk, Sigma,
            Wireshark, TheHive, n8n, and Chainsaw. Day-one ready.
          </p>

          <div className="flex flex-wrap gap-3 reveal-element">
            {[
              { icon: 'ri-folder-chart-line', text: 'Portfolio on Graduation' },
              { icon: 'ri-tools-line', text: 'Real SOC Tools' },
              { icon: 'ri-live-line', text: 'Live Instructor-Led' },
              { icon: 'ri-map-pin-2-line', text: 'Augusta, GA · Near Fort Eisenhower' },
            ].map((b) => (
              <div key={b.text} className="inline-flex items-center gap-2 glass-card border border-gold/20 px-3 py-2 rounded-full">
                <i className={`${b.icon} text-gold text-xs`} />
                <span className="font-mono text-ice/80 text-xs">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
