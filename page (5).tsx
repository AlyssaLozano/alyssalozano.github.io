const audiences = [
  {
    icon: 'ri-refresh-line',
    title: 'Career-Changers',
    desc: 'You have a degree you don\'t want to repeat and a career that isn\'t working. You need a direct path into a high-demand field — not another two-year program.',
  },
  {
    icon: 'ri-map-pin-2-line',
    title: 'Military Spouses',
    desc: 'You need a portable, credential-backed career that moves with you. Our online synchronous format fits your life — and the credential travels anywhere.',
  },
  {
    icon: 'ri-shield-star-line',
    title: 'Veterans (Not Using GI Bill)',
    desc: 'You served, you have discipline, and you\'re ready to work. You don\'t need a four-year degree — you need focused, practical training that respects your time.',
  },
  {
    icon: 'ri-door-open-line',
    title: 'Reentry Candidates',
    desc: 'Cybersecurity is one of the few fields where demonstrated skill matters more than background. We serve people other programs overlook.',
  },
  {
    icon: 'ri-hand-coin-line',
    title: 'Hands-On Learners',
    desc: 'Traditional classrooms didn\'t work for you — not because you can\'t learn, but because you learn by doing. Our programs are built around real tools and real scenarios.',
  },
  {
    icon: 'ri-time-line',
    title: 'Adults Who Need Skills Fast',
    desc: 'You can\'t spend two years in school. Eight weeks of focused, instructor-led training gets you to a verifiable, employer-recognized credential — and a portfolio to prove it.',
  },
];

const comparisons = [
  { label: 'SANS / National Bootcamps', price: '$8,000–$15,000+', portfolio: false, sync: true, note: 'High cost, limited portfolio' },
  { label: 'Community College / University', price: '$20,000–$60,000+', portfolio: false, sync: true, note: '2–4 years, no portfolio' },
  { label: 'Self-Paced Online Bootcamps', price: '$3,000–$8,000', portfolio: false, sync: false, note: 'No instructor, no accountability' },
  { label: 'Acumen Career Academy', price: '$4,500', portfolio: true, sync: true, note: 'Portfolio + live instruction', highlight: true },
];

export default function WhoWeServe() {
  return (
    <section className="py-24 bg-navy-900 grid-overlay">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal-element">
          <p className="font-mono text-gold text-xs tracking-widest mb-3">WHO WE SERVE</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ice mb-5 leading-tight">
            Built for the People<br />
            <span className="gold-text">Other Programs Overlook</span>
          </h2>
          <p className="font-sans text-steel text-base leading-relaxed max-w-2xl mx-auto">
            Most cybersecurity training is designed for recent grads with time and money to spare.
            Acumen was built for everyone else — adults with real constraints who need a real path forward.
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {audiences.map((a, i) => (
            <div
              key={a.title}
              className="glass-card gold-border-glow p-7 flex flex-col gap-4 program-card-hover reveal-element"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-gold/30 bg-gold/5">
                <i className={`${a.icon} text-gold text-xl`} />
              </div>
              <h3 className="font-display text-xl font-bold text-ice">{a.title}</h3>
              <p className="font-sans text-steel text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Price comparison table */}
        <div className="reveal-element">
          <div className="text-center mb-10">
            <p className="font-mono text-gold text-xs tracking-widest mb-3">THE VALUE CASE</p>
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-ice">
              Half the Price. More Hands-On.<br />
              <span className="gold-text">You Graduate with a Portfolio.</span>
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-gold/15">
                  <th className="text-left font-mono text-steel text-xs tracking-widest pb-4 pr-6">PROGRAM</th>
                  <th className="text-center font-mono text-steel text-xs tracking-widest pb-4 px-4">TUITION</th>
                  <th className="text-center font-mono text-steel text-xs tracking-widest pb-4 px-4">LIVE INSTRUCTOR</th>
                  <th className="text-center font-mono text-steel text-xs tracking-widest pb-4 px-4">PORTFOLIO</th>
                  <th className="text-left font-mono text-steel text-xs tracking-widest pb-4 pl-6">NOTE</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b transition-colors ${
                      row.highlight
                        ? 'border-gold/30 bg-gold/5'
                        : 'border-white/5 hover:bg-white/2'
                    }`}
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <td className="py-4 pr-6">
                      <span className={`font-sans text-sm font-semibold ${row.highlight ? 'text-gold' : 'text-ice/80'}`}>
                        {row.label}
                        {row.highlight && (
                          <span className="ml-2 font-mono text-xs bg-gold/15 border border-gold/30 text-gold px-2 py-0.5 rounded-full">
                            US
                          </span>
                        )}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`font-display font-bold text-sm ${row.highlight ? 'text-gold text-lg' : 'text-steel'}`}>
                        {row.price}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center w-full h-full">
                        <i className={`text-lg ${row.sync ? 'ri-checkbox-circle-fill text-green-400' : 'ri-close-circle-fill text-red-400/60'}`} />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center w-full h-full">
                        <i className={`text-lg ${row.portfolio ? 'ri-checkbox-circle-fill text-green-400' : 'ri-close-circle-fill text-red-400/60'}`} />
                      </div>
                    </td>
                    <td className="py-4 pl-6">
                      <span className="font-sans text-steel text-xs">{row.note}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="font-mono text-steel/40 text-xs mt-5 text-center">
            Tuition figures are approximate and based on publicly available information. Individual program costs vary.
          </p>
        </div>
      </div>
    </section>
  );
}
