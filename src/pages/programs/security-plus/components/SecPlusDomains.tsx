import { programs } from '../../../../mocks/programs';

const program = programs[0]; // Security+

export default function SecPlusDomains() {
  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Domains */}
          <div className="reveal-element">
            <span className="font-mono text-gold text-xs tracking-widest mb-3 block">EXAM BLUEPRINT</span>
            <h2 className="font-display text-4xl font-bold text-ice mb-4">Five Core Domains</h2>
            <p className="font-sans text-steel text-base leading-relaxed mb-8">
              Our curriculum is precisely mapped to the CompTIA Security+ SY0-701 exam blueprint.
              Every session is designed to build competency across all five weighted domains.
            </p>

            <div className="space-y-5">
              {program.domains.map((domain) => (
                <div key={domain.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans text-ice text-sm font-medium">{domain.name}</span>
                    <span className="font-mono text-gold text-sm font-bold">~{domain.weight}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-navy-700/80">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-gold to-gold/60 transition-all duration-700"
                      style={{ width: `${domain.weight * 3.3}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 glass-card border border-gold/15 p-4 rounded-xl">
              <p className="font-mono text-steel text-xs leading-relaxed">
                Acumen Career Academy is not affiliated with, endorsed by, or authorized by CompTIA.
                CompTIA Security+ is a registered trademark of CompTIA, Inc.
              </p>
            </div>
          </div>

          {/* Target Roles + Highlights */}
          <div className="space-y-8 reveal-element">
            <div>
              <span className="font-mono text-gold text-xs tracking-widest mb-3 block">TARGET CAREER ROLES</span>
              <h2 className="font-display text-4xl font-bold text-ice mb-6">Where You&apos;ll Land</h2>
              <div className="space-y-3">
                {program.targetRoles.map((role) => (
                  <div key={role} className="glass-card border border-gold/15 p-4 rounded-xl flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <i className="ri-shield-user-line text-gold" />
                    </div>
                    <span className="font-sans text-ice text-base font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="font-mono text-gold text-xs tracking-widest mb-3 block">PROGRAM HIGHLIGHTS</span>
              <div className="space-y-3">
                {program.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <i className="ri-check-line text-gold mt-0.5 shrink-0" />
                    <span className="font-sans text-steel text-sm">{h}</span>
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
