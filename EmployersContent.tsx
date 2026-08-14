const pillars = [
  {
    icon: 'ri-database-2-line',
    title: 'Expert-Designed Curriculum',
    desc: 'Curriculum developed by a college professor in cybersecurity and computer science — built for rigor, not just certification pass rates.',
  },
  {
    icon: 'ri-tools-line',
    title: 'Real Industry Tools',
    desc: 'Students train on the same tools used in active SOC environments: Splunk, Sigma, n8n, TheHive, Wireshark, and Chainsaw — not simulations or toy environments.',
  },
  {
    icon: 'ri-folder-chart-line',
    title: 'Verifiable Portfolio on Graduation',
    desc: 'Every graduate leaves with documented proof of skill: written investigation reports, three original detection rules across three ATT&CK tactics, a multi-source SOAR workflow, and case management evidence.',
  },
  {
    icon: 'ri-live-line',
    title: 'Synchronous, Instructor-Led Cohorts',
    desc: 'Not a self-paced bootcamp that leaves you on your own. Every session is live, every cohort is small, and every student has direct access to their instructor.',
  },
  {
    icon: 'ri-group-2-line',
    title: 'Small Cohort Accountability',
    desc: 'Deliberately small cohort sizes ensure every student receives direct attention, personalized feedback, and a structured learning accountability structure.',
  },
  {
    icon: 'ri-map-pin-2-line',
    title: 'Strategically Located',
    desc: 'Based adjacent to Fort Eisenhower (Formerly Fort Gordon) in Augusta, Georgia — one of the most concentrated cybersecurity talent markets in the Southeast United States.',
  },
];

export default function PillarsSection() {
  return (
    <section className="py-24 bg-navy-900 grid-overlay">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal-element">
          <p className="font-mono text-gold text-xs tracking-widest mb-3">WHAT SETS US APART</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ice">
            The Six Pillars of Acumen Career Academy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="glass-card gold-border-glow p-7 flex flex-col gap-4 program-card-hover reveal-element"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl border border-gold/30 bg-gold/5">
                <i className={`${p.icon} text-gold text-2xl`} />
              </div>
              <h3 className="font-display text-xl font-bold text-ice">{p.title}</h3>
              <p className="font-sans text-steel text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
