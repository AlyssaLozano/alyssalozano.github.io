import { Link } from 'react-router-dom';
import { programs } from '../../../mocks/programs';

interface CompareRowProps {
  label: string;
  secplus: string | string[];
  cysa: string | string[];
}

function CompareRow({ label, secplus, cysa }: CompareRowProps) {
  const renderVal = (val: string | string[]) =>
    Array.isArray(val) ? (
      <ul className="space-y-1.5">
        {val.map((v) => (
          <li key={v} className="flex items-start gap-2">
            <i className="ri-checkbox-circle-line text-gold text-xs mt-0.5 shrink-0" />
            <span className="font-sans text-ice/75 text-sm">{v}</span>
          </li>
        ))}
      </ul>
    ) : (
      <span className="font-sans text-ice/80 text-sm">{val}</span>
    );

  return (
    <div className="grid grid-cols-3 gap-0 border-b border-gold/10">
      <div className="p-4 bg-navy-950/40">
        <span className="font-mono text-steel text-xs uppercase tracking-wide">{label}</span>
      </div>
      <div className="p-4 bg-navy-800/20 border-x border-gold/10">{renderVal(secplus)}</div>
      <div className="p-4">{renderVal(cysa)}</div>
    </div>
  );
}

const sp = programs[0];
const cy = programs[1];

const rows: CompareRowProps[] = [
  { label: 'Certification Target', secplus: sp.certification, cysa: cy.certification },
  { label: 'Duration', secplus: sp.duration, cysa: cy.duration },
  { label: 'Format', secplus: sp.format, cysa: cy.format },
  { label: 'Investment', secplus: ['$4,500 — Direct Enrollment (Self-Pay)', '$8,500 — Workforce-Sponsored (WIOA)', '$150 application fee · $75 books/materials'], cysa: [`${cy.pricing} ${cy.pricingDetail ?? ''}`] },
  { label: 'Program Highlights', secplus: sp.highlights, cysa: cy.highlights },
  { label: 'Target Roles', secplus: sp.targetRoles, cysa: cy.targetRoles },
];

export default function ProgramComparison() {
  return (
    <section className="py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Side-by-side header */}
        <div className="text-center mb-14 reveal-element">
          <p className="font-mono text-gold text-xs tracking-widest mb-3">SIDE BY SIDE</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ice">Program Comparison</h2>
        </div>

        {/* Table */}
        <div className="glass-card gold-border-glow overflow-hidden reveal-element">
          {/* Sticky headers */}
          <div className="grid grid-cols-3 gap-0 border-b-2 border-gold/20">
            <div className="p-5 bg-navy-950/80">
              <span className="font-mono text-steel text-xs tracking-widest">COMPARE</span>
            </div>
            {[sp, cy].map((p) => (
              <div key={p.id} className="p-5 bg-gold/3 border-l border-gold/10">
                <span className="font-mono text-gold text-xs block mb-1">
                  {p.id === 'secplus' ? 'PROGRAM 01' : 'PROGRAM 02'}
                </span>
                <h3 className="font-display text-lg font-bold text-ice leading-snug">{p.title}</h3>
                <span className="font-mono text-steel text-xs">{p.certification}</span>
                <div className="mt-3">
                  <Link
                    to={p.id === 'secplus' ? '/programs/security-plus' : '/programs/cybersecurity-operations-analyst'}
                    className="inline-flex items-center gap-1.5 font-mono text-gold text-xs font-semibold hover:gap-2.5 transition-all duration-200 cursor-pointer whitespace-nowrap"
                  >
                    Explore Program <i className="ri-arrow-right-line text-xs" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {rows.map((row) => (
            <CompareRow key={row.label} {...row} />
          ))}

          {/* CTA row */}
          <div className="grid grid-cols-3 gap-0 border-t border-gold/10">
            <div className="p-5 bg-navy-950/40 flex items-center">
              <span className="font-mono text-steel text-xs uppercase tracking-wide">Ready?</span>
            </div>
            {[sp, cy].map((p) => (
              <div key={p.id} className="p-4 border-l border-gold/10 flex flex-col gap-2">
                <Link
                  to={p.id === 'secplus' ? '/programs/security-plus' : '/programs/cybersecurity-operations-analyst'}
                  className="btn-outline-gold w-full py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  Explore {p.id === 'secplus' ? 'Security+' : 'Cyber Ops'}
                  <i className="ri-arrow-right-line text-sm" />
                </Link>
                <Link
                  to="/admissions"
                  className="btn-gold w-full py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  Apply Now <i className="ri-arrow-right-up-line text-sm" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Program deep dive cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          {/* Security+ Domains */}
          <div className="glass-card gold-border-glow p-7 reveal-element flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-bar-chart-line text-gold text-xl" />
              </div>
              <div>
                <p className="font-mono text-gold text-xs tracking-wider">SECURITY+ SY0-701</p>
                <h3 className="font-display text-lg font-bold text-ice">Exam Domain Breakdown</h3>
              </div>
            </div>
            {sp.domains?.map((d) => (
              <div key={d.name} className="mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-sans text-ice/80 text-sm">{d.name}</span>
                  <span className="font-mono text-gold text-xs">{d.weight}%</span>
                </div>
                <div className="w-full h-1.5 bg-navy-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-1000"
                    style={{ width: `${d.weight * 3.5}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="mt-6 pt-5 border-t border-gold/10">
              <Link
                to="/programs/security-plus"
                className="btn-gold w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                Explore Security+ Program <i className="ri-arrow-right-line" />
              </Link>
            </div>
          </div>

          {/* CySA+ Modules */}
          <div className="glass-card gold-border-glow p-7 reveal-element flex flex-col" style={{ transitionDelay: '150ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-list-check-3 text-gold text-xl" />
              </div>
              <div>
                <p className="font-mono text-gold text-xs tracking-wider">CYBER OPS CS0-003</p>
                <h3 className="font-display text-lg font-bold text-ice">Curriculum Modules</h3>
              </div>
            </div>
            <div className="space-y-2 flex-1">
              {cy.modules?.map((m) => (
                <div key={m.num} className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-gold/5 transition-colors duration-200">
                  <span className="font-mono text-gold text-xs mt-0.5 shrink-0">{m.num}</span>
                  <div className="min-w-0">
                    <p className="font-sans text-ice/90 text-sm font-medium">{m.title}</p>
                    <p className="font-mono text-steel text-xs mt-0.5 truncate">{m.topics}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-gold/10">
              <Link
                to="/programs/cybersecurity-operations-analyst"
                className="btn-gold w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                Explore Cyber Ops Program <i className="ri-arrow-right-line" />
              </Link>
            </div>
          </div>
        </div>

        {/* Investment breakdown */}
        <div className="mt-16 reveal-element">
          <h3 className="font-display text-3xl font-bold text-ice text-center mb-8">Tuition & Fees</h3>
          <div className="glass-card gold-border-glow overflow-hidden max-w-3xl mx-auto">
            <div className="grid grid-cols-4 bg-gold/10 border-b border-gold/20">
              {['Item', 'Security+', 'Cyber Ops', 'Note'].map((h) => (
                <div key={h} className="p-4">
                  <span className="font-mono text-gold text-xs font-semibold uppercase tracking-wider">{h}</span>
                </div>
              ))}
            </div>
            {[
              { item: 'Tuition (Direct Enrollment)', sp: '$4,500', cy: '$4,500', note: 'Per cohort, self-pay' },
              { item: 'Tuition (Workforce-Sponsored)', sp: '$8,500', cy: '—', note: 'WIOA / WorkSource' },
              { item: 'Application Fee', sp: '$150', cy: '$150', note: 'Non-refundable' },
              { item: 'Books / Materials', sp: '$75', cy: '$75', note: 'Included in program' },
              { item: 'Exam Fees', sp: 'Not Included', cy: 'Not Included', note: 'Student responsibility' },
            ].map((row, i) => (
              <div key={row.item} className={`grid grid-cols-4 border-b border-gold/10 ${i % 2 === 0 ? 'bg-navy-800/20' : ''}`}>
                <div className="p-4"><span className="font-sans text-ice text-sm">{row.item}</span></div>
                <div className="p-4"><span className="font-mono text-ice/70 text-sm">{row.sp}</span></div>
                <div className="p-4"><span className="font-mono text-gold text-sm font-semibold">{row.cy}</span></div>
                <div className="p-4"><span className="font-mono text-steel text-xs">{row.note}</span></div>
              </div>
            ))}
          </div>
          <p className="font-mono text-steel/50 text-xs text-center mt-4">
            Exam fees not included in tuition unless explicitly stated in writing at time of enrollment.
          </p>
        </div>

        {/* Enrollment CTA */}
        <div className="text-center mt-16 reveal-element">
          <Link
            to="/admissions"
            className="btn-gold px-10 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            Begin Your Application <i className="ri-arrow-right-up-line" />
          </Link>
        </div>
      </div>
    </section>
  );
}
