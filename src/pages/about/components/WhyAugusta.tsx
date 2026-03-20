const regionalStats = [
  { value: '35,000+', label: 'Personnel at Fort Eisenhower', sub: 'Cyber & intelligence workforce' },
  { value: '#1', label: 'US Army Cyber Command HQ', sub: 'ARCYBER headquartered on post' },
  { value: '$107k', label: 'Median SOC Analyst Salary', sub: 'US average, regional demand higher' },
  { value: '0%', label: 'Cybersecurity Unemployment', sub: 'Nationwide, sustained since 2016' },
];

const sectors = [
  {
    icon: 'ri-building-4-line',
    title: 'Federal Government',
    desc: 'Agencies with Augusta-area presences demand vetted, credentialed security talent for IT infrastructure, threat monitoring, and compliance operations.',
  },
  {
    icon: 'ri-radar-line',
    title: 'Defense Contracting',
    desc: 'Major defense contractors supporting Fort Eisenhower (Formerly Fort Gordon) operations actively recruit locally for cleared and clearance-eligible cybersecurity analysts.',
  },
  {
    icon: 'ri-hospital-line',
    title: 'Healthcare Sector',
    desc: 'Augusta\'s major hospital systems and healthcare networks face escalating cyber threats, creating consistent demand for security operations professionals.',
  },
  {
    icon: 'ri-bank-line',
    title: 'Financial Services',
    desc: 'Regional banks, credit unions, and financial institutions require compliance-focused security staff for SOC operations, audit readiness, and threat response.',
  },
];

const timeline = [
  { year: '2014', event: 'US Army Cyber Command (ARCYBER) officially established at Fort Gordon (now Fort Eisenhower)' },
  { year: '2019', event: 'Augusta designated a national cybersecurity hub; talent demand surges regionally' },
  { year: '2021', event: 'Fort Gordon renamed Fort Eisenhower, cementing cyber mission identity' },
  { year: '2023', event: '3.5M+ global cybersecurity job openings — CSRA region among highest-demand markets in the Southeast' },
];

export default function WhyAugusta() {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="reveal-element">
            <p className="font-mono text-gold text-xs tracking-widest mb-4">STRATEGIC LOCATION</p>
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-ice leading-tight mb-6">
              Why<br />
              <span className="gold-text">Augusta?</span>
            </h2>
            <p className="font-sans text-steel text-lg leading-relaxed mb-6">
              Augusta, Georgia isn&apos;t just where Acumen Career Academy is located — it&apos;s
              one of the most strategically significant cybersecurity markets in the United States.
              Home to US Army Cyber Command and adjacent to Fort Eisenhower (Formerly Fort Gordon),
              the region has evolved into a concentrated ecosystem of federal, defense, and enterprise
              cyber operations.
            </p>
            <p className="font-sans text-steel text-base leading-relaxed">
              Our graduates don&apos;t have to relocate to find opportunity. The demand is here —
              and it&apos;s growing.
            </p>
          </div>

          {/* Image */}
          <div className="reveal-element" style={{ animationDelay: '0.15s' }}>
            <div className="rounded-2xl overflow-hidden border border-gold/15 relative" style={{ height: '380px' }}>
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80"
                alt="Augusta, Georgia — home of US Army Cyber Command and Fort Eisenhower"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="glass-card border border-gold/25 px-5 py-3 rounded-xl inline-flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold animate-pulse shrink-0" />
                  <span className="font-mono text-ice text-xs">Augusta, Georgia — CSRA Cybersecurity Hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20 reveal-element">
          {regionalStats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card border border-gold/20 p-6 rounded-2xl text-center"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <p className="font-display text-3xl lg:text-4xl font-bold gold-text mb-2">{stat.value}</p>
              <p className="font-sans text-ice text-sm font-semibold mb-1 leading-snug">{stat.label}</p>
              <p className="font-mono text-steel text-xs leading-snug">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Fort Eisenhower callout */}
        <div className="relative glass-card gold-border-glow rounded-2xl overflow-hidden mb-20 reveal-element">
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=80"
              alt="Fort Eisenhower — US Army Cyber Command"
              className="w-full h-full object-cover object-top opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/60" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-10 p-10 lg:p-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-gold/30 bg-gold/5 px-4 py-2 rounded-full mb-6">
                <i className="ri-shield-star-line text-gold text-sm" />
                <span className="font-mono text-gold text-xs tracking-widest">US ARMY CYBER COMMAND</span>
              </div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-ice mb-5 leading-tight">
                Fort Eisenhower:<br />
                <span className="gold-text">The Cyber Capital of the US Military</span>
              </h3>
              <p className="font-sans text-steel text-base leading-relaxed">
                Fort Eisenhower (Formerly Fort Gordon) is the permanent home of US Army Cyber Command
                (ARCYBER) — the Army&apos;s lead organization for offensive and defensive cyber operations,
                electronic warfare, and information operations at scale. Its presence has transformed
                Augusta into one of the most active cybersecurity talent markets in the nation.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: 'ri-shield-flash-line', text: 'Home of US Army Cyber Command (ARCYBER)' },
                { icon: 'ri-group-line', text: '35,000+ personnel with cyber & intelligence missions' },
                { icon: 'ri-briefcase-4-line', text: 'Hundreds of defense contractor positions filled locally' },
                { icon: 'ri-graduation-cap-line', text: 'Cyber Center of Excellence training mission on post' },
                { icon: 'ri-building-2-line', text: 'NSA, DIA, and federal agency presences in the region' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <i className={`${item.icon} text-gold text-sm`} />
                  </div>
                  <span className="font-sans text-ice/85 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sectors + Timeline */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Key sectors */}
          <div className="reveal-element">
            <p className="font-mono text-gold text-xs tracking-widest mb-4">REGIONAL EMPLOYMENT SECTORS</p>
            <h3 className="font-display text-3xl font-bold text-ice mb-8 leading-tight">
              Who&apos;s Hiring<br />in the CSRA
            </h3>
            <div className="space-y-4">
              {sectors.map((s, i) => (
                <div
                  key={s.title}
                  className="glass-card border border-gold/15 p-5 rounded-2xl flex items-start gap-5 hover:border-gold/30 transition-all duration-300"
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <i className={`${s.icon} text-gold`} />
                  </div>
                  <div>
                    <h4 className="font-sans text-ice font-semibold text-sm mb-1">{s.title}</h4>
                    <p className="font-sans text-steel text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="reveal-element" style={{ animationDelay: '0.15s' }}>
            <p className="font-mono text-gold text-xs tracking-widest mb-4">CYBER HISTORY OF THE CSRA</p>
            <h3 className="font-display text-3xl font-bold text-ice mb-8 leading-tight">
              How Augusta Became<br />a Cyber Hub
            </h3>
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0">
                      <span className="font-mono text-gold text-xs font-bold">{item.year}</span>
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-gold/20 to-transparent my-2 min-h-8" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="font-sans text-ice/85 text-sm leading-relaxed pt-3">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <div className="glass-card border border-gold/15 p-5 rounded-xl mt-2">
              <p className="font-mono text-steel text-xs leading-relaxed">
                Salary figures and market data are based on publicly available regional and national sources.
                Individual outcomes will vary. Proximity to Fort Eisenhower does not imply affiliation
                with or endorsement by the US Army or any federal agency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
