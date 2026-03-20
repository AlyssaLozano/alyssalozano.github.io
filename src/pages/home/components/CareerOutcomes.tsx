const careerPaths = [
  {
    level: 'Entry',
    role: 'IT Security Analyst / Tier 1 SOC Analyst',
    salary: '$65k – $85k',
    exp: '0–2 years',
    icon: 'ri-user-line',
    cert: 'Security+ / CySA+',
  },
  {
    level: 'Mid',
    role: 'Cybersecurity Analyst II / SOC Team Lead',
    salary: '$85k – $110k',
    exp: '2–5 years',
    icon: 'ri-shield-user-line',
    cert: 'CySA+ / CASP+',
  },
  {
    level: 'Senior',
    role: 'Security Engineer / Threat Intelligence Analyst',
    salary: '$115k – $145k+',
    exp: '5+ years',
    icon: 'ri-vip-crown-line',
    cert: 'CISSP / Advanced',
  },
];

const sectors = [
  { icon: 'ri-government-line', label: 'Federal Government' },
  { icon: 'ri-building-4-line', label: 'Defense Contracting' },
  { icon: 'ri-heart-pulse-line', label: 'Healthcare' },
  { icon: 'ri-bank-line', label: 'Financial Services' },
  { icon: 'ri-cloud-line', label: 'Technology' },
  { icon: 'ri-settings-3-line', label: 'Critical Infrastructure' },
];

export default function CareerOutcomes() {
  return (
    <section className="py-24 bg-navy-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal-element">
          <p className="font-mono text-gold text-xs tracking-widest mb-3">CAREER OUTCOMES</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ice mb-4">
            Launch Your Cybersecurity Career
          </h2>
          <p className="font-sans text-steel text-base leading-relaxed max-w-2xl mx-auto">
            Our programs are purpose-built to place you into real security operations roles — 
            in the sectors that need talent most.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Career progression */}
          <div>
            <p className="font-mono text-steel text-xs tracking-widest mb-6 reveal-element">CAREER PROGRESSION</p>
            <div className="space-y-4">
              {careerPaths.map((path, i) => (
                <div
                  key={path.level}
                  className="relative glass-card gold-border-glow p-5 flex items-center gap-5 reveal-element"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Level indicator */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gold/30 bg-gold/5">
                      <i className={`${path.icon} text-gold text-xl`} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-gold text-xs uppercase tracking-wider">{path.level}</span>
                      <span className="font-mono text-steel/40 text-xs">·</span>
                      <span className="font-mono text-steel text-xs">{path.exp}</span>
                    </div>
                    <p className="font-sans text-ice font-semibold text-sm leading-snug">{path.role}</p>
                    <p className="font-mono text-gold/70 text-xs mt-0.5">{path.cert}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-display font-bold text-gold text-lg">{path.salary}</p>
                  </div>
                  {/* Connector */}
                  {i < careerPaths.length - 1 && (
                    <div className="absolute left-10 -bottom-4 w-px h-4 border-l border-dashed border-gold/30" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sectors + enrollment CTA */}
          <div>
            <p className="font-mono text-steel text-xs tracking-widest mb-6 reveal-element">HIRING SECTORS</p>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {sectors.map((s, i) => (
                <div
                  key={s.label}
                  className="glass-card p-4 flex items-center gap-3 reveal-element"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className={`${s.icon} text-gold text-lg`} />
                  </div>
                  <span className="font-sans text-ice/80 text-sm">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="glass-card gold-border-glow p-6 reveal-element">
              <div className="flex items-start gap-3 mb-4">
                <i className="ri-map-pin-2-line text-gold text-lg mt-0.5 shrink-0" />
                <div>
                  <p className="font-sans text-ice font-semibold text-sm">Strategically Located — Augusta, Georgia</p>
                  <p className="font-sans text-steel text-sm leading-relaxed mt-1">
                    Adjacent to Fort Eisenhower (Formerly Fort Gordon), one of the nation&apos;s premier cyber installations. Graduates are positioned to access federal, DoD, and defense contracting opportunities in one of the highest-demand cybersecurity markets in the Southeast.
                  </p>
                </div>
              </div>
              <div className="font-mono text-steel/50 text-xs italic">
                * Completion does not guarantee employment. Individual results vary.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
