import { Link } from 'react-router-dom';
import { programs } from '../../../mocks/programs';

export default function ProgramsOverview() {
  return (
    <section className="py-24 bg-navy-900 grid-overlay" id="programs">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-16">
          <div className="reveal-element">
            <p className="font-mono text-gold text-xs tracking-widest mb-3">OUR PROGRAMS</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-ice">
              Two Paths.<br />One Mission.
            </h2>
          </div>
          <p className="font-sans text-steel text-base leading-relaxed max-w-lg reveal-element">
            Whether you&apos;re starting your security career or leveling up to SOC operations, 
            Acumen has a program built for where you want to go — and what employers actually need.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program, i) => (
            <div
              key={program.id}
              className="glass-card program-card-hover gold-border-glow overflow-hidden reveal-element"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Top accent line */}
              <div className="h-0.5 bg-gradient-to-r from-gold via-gold-light to-transparent" />

              <div className="p-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gold/8 border border-gold/20 rounded-full px-3 py-1.5 mb-6">
                  <i className="ri-time-line text-gold text-xs" />
                  <span className="font-mono text-gold text-xs">{program.badge}</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-ice mb-1">{program.title}</h3>
                <p className="font-mono text-gold text-sm mb-5">{program.certification}</p>
                <p className="font-sans text-steel text-sm leading-relaxed mb-7">{program.description}</p>

                {/* Highlights */}
                <div className="space-y-2.5 mb-7">
                  {program.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-line text-gold text-sm mt-0.5 shrink-0" />
                      <span className="font-sans text-ice/75 text-sm">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Target roles */}
                <div className="mb-8">
                  <p className="font-mono text-steel text-xs tracking-widest mb-3">TARGET ROLES</p>
                  <div className="flex flex-wrap gap-2">
                    {program.targetRoles.map((role) => (
                      <span
                        key={role}
                        className="font-mono text-xs bg-navy-700 border border-gold/20 text-gold px-3 py-1.5 rounded-lg"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6 p-4 rounded-lg bg-navy-800/50 border border-gold/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-steel text-xs">Direct Enrollment</span>
                    <div className="text-right">
                      <span className="font-display text-gold font-bold text-lg">{program.pricing}</span>
                      {program.pricingDetail && (
                        <p className="font-mono text-steel text-xs mt-0.5">{program.pricingDetail}</p>
                      )}
                    </div>
                  </div>
                  {program.id === 'secplus' && program.pricingWorkforce && (
                    <>
                      <div className="border-t border-gold/10 pt-3 mb-3">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-mono text-steel text-xs">WorkSource / WIOA Sponsored</span>
                          <span className="font-display text-gold font-bold text-lg">{program.pricingWorkforce}</span>
                        </div>
                        <p className="font-sans text-steel text-xs leading-relaxed">
                          Includes job placement support, resume prep, employer connections, case management &amp; post-completion follow-up
                        </p>
                      </div>
                      <Link
                        to="/workforce"
                        className="inline-flex items-center gap-1.5 font-mono text-gold text-xs font-semibold hover:gap-2.5 transition-all duration-200 cursor-pointer whitespace-nowrap"
                      >
                        Learn about workforce funding <i className="ri-arrow-right-line text-xs" />
                      </Link>
                    </>
                  )}
                </div>

                {/* CTA */}
                <Link
                  to={program.id === 'secplus' ? '/programs/security-plus' : '/programs/cybersecurity-operations-analyst'}
                  className="btn-gold w-full py-3.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  View Program Details <i className="ri-arrow-right-line" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Compare link */}
        <div className="text-center mt-10 reveal-element">
          <Link
            to="/programs"
            className="btn-outline-gold px-8 py-3.5 rounded-full text-sm inline-flex items-center gap-2 cursor-pointer"
          >
            <i className="ri-scales-3-line" />
            Compare Both Programs Side by Side
          </Link>
        </div>
      </div>
    </section>
  );
}
