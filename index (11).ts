const stats = [
  {
    value: '33%',
    label: 'Projected Job Growth',
    sub: 'Information Security Analysts, 2023–2033',
    source: 'U.S. Bureau of Labor Statistics',
    icon: 'ri-line-chart-line',
  },
  {
    value: '663K+',
    label: 'Open Cybersecurity Jobs',
    sub: 'Unfilled positions across the United States',
    source: 'CompTIA Cyberstates 2024',
    icon: 'ri-briefcase-4-line',
  },
  {
    value: '$120K',
    label: 'Median Annual Wage',
    sub: 'Information Security Analysts, U.S. national',
    source: 'U.S. Bureau of Labor Statistics, May 2023',
    icon: 'ri-money-dollar-circle-line',
  },
  {
    value: '#1',
    label: 'Most-Requested Certification',
    sub: 'CompTIA Security+ appears in more job postings than any other entry-level security cert',
    source: 'Burning Glass / EMSI Labor Insight',
    icon: 'ri-award-line',
  },
];

const localHighlights = [
  {
    icon: 'ri-government-line',
    heading: 'Fort Eisenhower (Formerly Fort Gordon)',
    body: 'Home to U.S. Army Cyber Command — one of the largest concentrations of cyber personnel in the nation. Hundreds of federal, DoD, and contractor positions require CompTIA certifications for baseline compliance.',
  },
  {
    icon: 'ri-map-pin-2-line',
    heading: 'Augusta Metro Cyber Corridor',
    body: 'CyberSeek data identifies the Augusta–Richmond County area as a high-demand cybersecurity hub, driven by federal installations and a growing private-sector defense contracting ecosystem.',
  },
  {
    icon: 'ri-shield-check-line',
    heading: 'DoD 8570 / 8140 Mandate',
    body: 'Federal policy requires certified cybersecurity personnel across all DoD information systems. CompTIA Security+ satisfies baseline IAT and IAM requirements — making it a prerequisite for thousands of local positions.',
  },
];

export default function EmployerDemandSection() {
  return (
    <section className="py-24 bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal-element">
          <p className="font-mono text-gold text-xs tracking-widest mb-3">INDUSTRY DEMAND</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ice mb-4">
            The Market Is Calling
          </h2>
          <p className="font-sans text-steel text-base leading-relaxed max-w-2xl mx-auto">
            Cybersecurity is the fastest-growing profession in the U.S. economy. The data below comes from federal agencies, industry analysts, and labor market research — not projections we invented.
          </p>
        </div>

        {/* National stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="glass-card gold-border-glow p-6 flex flex-col gap-3 reveal-element"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 bg-gold/5">
                <i className={`${s.icon} text-gold text-lg`} />
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-gold leading-none mb-1">{s.value}</p>
                <p className="font-sans text-ice font-semibold text-sm">{s.label}</p>
                <p className="font-sans text-steel text-xs leading-snug mt-1">{s.sub}</p>
              </div>
              <p className="font-mono text-steel/50 text-xs mt-auto pt-3 border-t border-white/5">
                Source: {s.source}
              </p>
            </div>
          ))}
        </div>

        {/* Local demand callouts */}
        <div className="mb-10 reveal-element">
          <p className="font-mono text-steel text-xs tracking-widest mb-6">LOCAL DEMAND — AUGUSTA, GEORGIA</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {localHighlights.map((h, i) => (
              <div
                key={h.heading}
                className="glass-card p-6 flex flex-col gap-3 reveal-element"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-9 h-9 flex items-center justify-center">
                  <i className={`${h.icon} text-gold text-xl`} />
                </div>
                <p className="font-sans text-ice font-semibold text-sm">{h.heading}</p>
                <p className="font-sans text-steel text-sm leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclosure */}
        <p className="font-mono text-steel/40 text-xs text-center reveal-element">
          All statistics reflect publicly available labor market data. Completion of a program does not guarantee employment. Individual results vary.
        </p>
      </div>
    </section>
  );
}
