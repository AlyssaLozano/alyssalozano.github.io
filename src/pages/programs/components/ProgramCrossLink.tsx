import { Link } from 'react-router-dom';

interface ProgramCrossLinkProps {
  current: 'secplus' | 'cysa';
}

const programs = {
  secplus: {
    tag: 'CompTIA Security+ · SY0-701',
    title: 'Security+ Certification Readiness',
    icon: 'ri-shield-check-line',
    href: '/programs/security-plus',
    bullets: [
      '10 weeks · 240 clock hours',
      'Foundational cybersecurity certification',
      'DoD 8570/8140 baseline requirement',
      '$4,500 self-pay · $8,500 workforce-sponsored',
    ],
    idealFor: 'Best for: career starters and IT professionals seeking their first security credential.',
  },
  cysa: {
    tag: 'CompTIA CySA+ · CS0-003',
    title: 'Cybersecurity Operations Analyst Skills Program',
    icon: 'ri-radar-line',
    href: '/programs/cybersecurity-operations-analyst',
    bullets: [
      '8 weeks · 120 clock hours',
      'Hands-on SOC and threat analysis training',
      'SIEM, EDR, SOAR, and incident response',
      '$4,500 tuition',
    ],
    idealFor: 'Best for: Security+ holders ready to move into active analyst and SOC roles.',
  },
};

export default function ProgramCrossLink({ current }: ProgramCrossLinkProps) {
  const other = current === 'secplus' ? programs.cysa : programs.secplus;
  const self = programs[current];

  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card gold-border-glow overflow-hidden reveal-element">
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gold/10">

            {/* Current program — muted */}
            <div className="p-8 bg-navy-950/30 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs bg-gold/10 text-gold border border-gold/20 px-2.5 py-0.5 rounded-full">
                  CURRENTLY VIEWING
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/20 bg-gold/5 shrink-0">
                  <i className={`${self.icon} text-gold/50 text-lg`} />
                </div>
                <div>
                  <p className="font-mono text-steel/60 text-xs">{self.tag}</p>
                  <h3 className="font-display text-base font-bold text-ice/60 leading-snug">{self.title}</h3>
                </div>
              </div>
              <ul className="space-y-2 mt-1">
                {self.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line text-gold/30 text-sm mt-0.5 shrink-0" />
                    <span className="font-sans text-steel/50 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other program — highlighted */}
            <div className="p-8 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs bg-gold text-navy-950 font-semibold px-2.5 py-0.5 rounded-full">
                  ALSO CONSIDER
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/40 bg-gold/10 shrink-0">
                  <i className={`${other.icon} text-gold text-lg`} />
                </div>
                <div>
                  <p className="font-mono text-gold text-xs">{other.tag}</p>
                  <h3 className="font-display text-base font-bold text-ice leading-snug">{other.title}</h3>
                </div>
              </div>
              <ul className="space-y-2 mt-1">
                {other.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line text-gold text-sm mt-0.5 shrink-0" />
                    <span className="font-sans text-steel text-sm">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="font-mono text-steel/60 text-xs leading-relaxed mt-1">{other.idealFor}</p>
              <div className="flex flex-wrap gap-3 mt-2">
                <Link
                  to={other.href}
                  className="btn-gold px-5 py-2.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  Explore This Program <i className="ri-arrow-right-line text-sm" />
                </Link>
                <Link
                  to="/programs"
                  className="btn-outline-gold px-5 py-2.5 rounded-full text-sm inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  Compare Side by Side <i className="ri-bar-chart-horizontal-line text-sm" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="px-8 py-4 bg-gold/5 border-t border-gold/10 flex flex-wrap items-center justify-between gap-3">
            <p className="font-sans text-steel text-sm">
              Not sure which program is the right fit?
            </p>
            <Link
              to="/programs"
              className="font-mono text-gold text-xs font-semibold flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              View full program comparison <i className="ri-arrow-right-line text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
