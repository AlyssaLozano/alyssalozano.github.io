import { Link } from 'react-router-dom';

const audiences = [
  { icon: 'ri-refresh-line', label: 'Career-Changers', desc: 'Done with a career that isn\'t working. Ready for one that is.' },
  { icon: 'ri-map-pin-2-line', label: 'Military Spouses', desc: 'Need a portable credential that moves with you.' },
  { icon: 'ri-shield-star-line', label: 'Veterans', desc: 'Discipline, focus, and ready to work — without the GI Bill.' },
  { icon: 'ri-door-open-line', label: 'Reentry Candidates', desc: 'Skill matters more than background in this field.' },
  { icon: 'ri-hand-coin-line', label: 'Hands-On Learners', desc: 'Traditional classrooms didn\'t work. Real tools will.' },
  { icon: 'ri-time-line', label: 'Adults Who Need Speed', desc: 'Can\'t spend two years in school. 8 weeks is the answer.' },
];

const valuePoints = [
  {
    icon: 'ri-price-tag-3-line',
    title: '$4,725 Total',
    sub: 'Less than half the cost of national bootcamps',
  },
  {
    icon: 'ri-time-line',
    title: '8 Weeks',
    sub: 'Not 6 to 12 months',
  },
  {
    icon: 'ri-live-line',
    title: 'Live Every Session',
    sub: 'Real instructor, not pre-recorded videos',
  },
  {
    icon: 'ri-folder-chart-line',
    title: 'Portfolio on Graduation',
    sub: 'Evidence of skill, not just a certificate',
  },
  {
    icon: 'ri-tools-line',
    title: 'Real SOC Tools',
    sub: 'Splunk, Sigma, Wireshark, TheHive, n8n, Chainsaw',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'GNPEC Authorized',
    sub: 'Georgia-authorized institution',
  },
];

export default function AdmissionsValue() {
  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-gold/3 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Who this is for */}
          <div className="reveal-element">
            <p className="font-mono text-gold text-xs tracking-widest mb-3">WHO THIS IS FOR</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-ice mb-5 leading-tight">
              Built for Adults Other<br />
              <span className="gold-text">Programs Overlook</span>
            </h2>
            <p className="font-sans text-steel text-base leading-relaxed mb-8">
              Most cybersecurity training is designed for recent grads with time and money to spare.
              Acumen was built for everyone else.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {audiences.map((a, i) => (
                <div
                  key={a.label}
                  className="flex items-start gap-3 p-4 rounded-xl border border-white/6 bg-white/2 hover:border-gold/20 hover:bg-gold/3 transition-all duration-300 reveal-element"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg border border-gold/20 bg-gold/5 shrink-0">
                    <i className={`${a.icon} text-gold text-sm`} />
                  </div>
                  <div>
                    <p className="font-sans text-ice text-sm font-semibold leading-snug">{a.label}</p>
                    <p className="font-sans text-steel text-xs leading-relaxed mt-0.5">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Why Acumen */}
          <div className="reveal-element" style={{ transitionDelay: '100ms' }}>
            <p className="font-mono text-gold text-xs tracking-widest mb-3">WHY ACUMEN</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-ice mb-5 leading-tight">
              Faster. Cheaper.<br />
              <span className="gold-text">More Hands-On.</span>
            </h2>
            <p className="font-sans text-steel text-base leading-relaxed mb-8">
              We don&apos;t waste your time on memorization drills or recycled lecture videos.
              Every hour is spent on tools, scenarios, and deliverables that mirror actual SOC work.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {valuePoints.map((v, i) => (
                <div
                  key={v.title}
                  className="glass-card border border-gold/15 p-4 rounded-xl flex items-start gap-3 reveal-element"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg border border-gold/25 bg-gold/8 shrink-0">
                    <i className={`${v.icon} text-gold text-base`} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-ice text-sm">{v.title}</p>
                    <p className="font-sans text-steel text-xs leading-relaxed mt-0.5">{v.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick compare */}
            <div className="glass-card border border-gold/20 rounded-xl overflow-hidden">
              <div className="grid grid-cols-3 divide-x divide-gold/10 text-center">
                {[
                  { label: 'National Bootcamp', value: '$10K–$15K+', muted: true },
                  { label: 'College Degree', value: '$20K–$60K+', muted: true },
                  { label: 'Acumen', value: '$4,725', muted: false },
                ].map((item) => (
                  <div key={item.label} className={`px-4 py-4 ${!item.muted ? 'bg-gold/5' : ''}`}>
                    <p className={`font-display font-bold text-base ${item.muted ? 'text-ice/30' : 'text-gold'}`}>{item.value}</p>
                    <p className={`font-sans text-xs mt-1 ${item.muted ? 'text-steel/30' : 'text-steel'}`}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/programs"
                className="btn-outline-gold px-5 py-2.5 rounded-full text-sm inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-book-open-line text-sm" /> Compare Programs
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-mono text-steel text-sm hover:text-gold transition-colors cursor-pointer"
              >
                About Acumen <i className="ri-arrow-right-line text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
