const comparisons = [
  {
    label: 'Time',
    acumen: { value: '8–12 Weeks', sub: 'Focused, instructor-led cohorts' },
    competitor: { value: '6–12 Months', sub: 'Self-paced or extended programs' },
    icon: 'ri-time-line',
    tagline: 'Where they take 6 to 12 months, we take 8 to 12 weeks.',
  },
  {
    label: 'Cost',
    acumen: { value: 'From $4,725', sub: 'Total program cost' },
    competitor: { value: '$10,000–$15,000+', sub: 'National bootcamp tuition' },
    icon: 'ri-price-tag-3-line',
    tagline: 'Where they charge $10,000 to $15,000, we charge from $4,725.',
  },
  {
    label: 'Outcome',
    acumen: { value: 'Portfolio', sub: 'Investigation reports, detection rules, case docs' },
    competitor: { value: 'Certificate', sub: 'Proof of completion, not proof of skill' },
    icon: 'ri-folder-chart-line',
    tagline: 'Where they hand you a certificate, we hand you evidence.',
  },
];

export default function AcumenDifference() {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Background blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gold/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal-element">
          <p className="font-mono text-gold text-xs tracking-widest mb-3">THE ACUMEN DIFFERENCE</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ice mb-5 leading-tight">
            Faster. Cheaper. Built Around<br />
            <span className="gold-text">Real Skills You&apos;ll Use on Day One.</span>
          </h2>
          <p className="font-sans text-steel text-base leading-relaxed max-w-2xl mx-auto">
            We don&apos;t waste your time on memorization drills or recycled lecture videos.
            Every hour is spent on tools, scenarios, and deliverables that mirror actual SOC work.
          </p>
        </div>

        {/* Three comparison cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {comparisons.map((c, i) => (
            <div
              key={c.label}
              className="glass-card gold-border-glow rounded-2xl overflow-hidden reveal-element"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Card header */}
              <div className="px-7 pt-7 pb-5 border-b border-gold/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-gold/30 bg-gold/8">
                    <i className={`${c.icon} text-gold text-lg`} />
                  </div>
                  <p className="font-mono text-gold text-xs tracking-widest">{c.label.toUpperCase()}</p>
                </div>
                <p className="font-display text-lg font-bold text-ice leading-snug">{c.tagline}</p>
              </div>

              {/* Comparison rows */}
              <div className="divide-y divide-white/5">
                {/* Competitor */}
                <div className="px-7 py-5 flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full border border-red-400/20 bg-red-400/5 shrink-0 mt-0.5">
                    <i className="ri-close-line text-red-400/60 text-sm" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-ice/50 text-lg leading-none mb-1">{c.competitor.value}</p>
                    <p className="font-sans text-steel/40 text-sm">{c.competitor.sub}</p>
                  </div>
                </div>

                {/* Acumen */}
                <div className="px-7 py-5 flex items-start gap-4 bg-gold/3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full border border-green-400/20 bg-green-400/5 shrink-0 mt-0.5">
                    <i className="ri-check-line text-green-400 text-sm" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-gold text-lg leading-none mb-1">{c.acumen.value}</p>
                    <p className="font-sans text-steel text-sm">{c.acumen.sub}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tools strip */}
        <div className="reveal-element">
          <div className="glass-card border border-gold/15 rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3">
                <p className="font-mono text-gold text-xs tracking-widest mb-3">TOOLS FROM DAY ONE</p>
                <h3 className="font-display text-2xl font-bold text-ice leading-snug mb-2">
                  No Simulations.<br />No Toy Environments.
                </h3>
                <p className="font-sans text-steel text-sm leading-relaxed">
                  From the first session, you&apos;re working in the same platforms SOC analysts use every shift.
                </p>
              </div>

              <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
                {[
                  { name: 'Splunk', role: 'SIEM & Log Analysis', icon: 'ri-bar-chart-box-line' },
                  { name: 'Sigma', role: 'Detection Rules', icon: 'ri-code-s-slash-line' },
                  { name: 'Wireshark', role: 'Network Traffic', icon: 'ri-radar-line' },
                  { name: 'TheHive', role: 'Case Management', icon: 'ri-archive-drawer-line' },
                  { name: 'n8n', role: 'SOAR Automation', icon: 'ri-flow-chart' },
                ].map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/8 bg-white/2 hover:border-gold/25 hover:bg-gold/5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-gold/20 bg-gold/5">
                      <i className={`${tool.icon} text-gold text-lg`} />
                    </div>
                    <p className="font-display font-bold text-ice text-sm">{tool.name}</p>
                    <p className="font-mono text-steel/50 text-xs text-center">{tool.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
