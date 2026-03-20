import { Link } from 'react-router-dom';

const roles = [
  { title: 'IT Security Analyst', salary: '$60k–$80k', icon: 'ri-shield-check-line' },
  { title: 'Systems Administrator (Security)', salary: '$65k–$85k', icon: 'ri-server-line' },
  { title: 'Network Security Specialist', salary: '$70k–$90k', icon: 'ri-wifi-line' },
];

export default function SecPlusCta() {
  return (
    <section className="py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Roles */}
          <div className="reveal-element">
            <span className="font-mono text-gold text-xs tracking-widest mb-3 block">CAREER OUTCOMES</span>
            <h2 className="font-display text-4xl font-bold text-ice mb-6">Roles This Program<br />Prepares You For</h2>
            <p className="font-sans text-steel text-base leading-relaxed mb-8">
              The Security+ credential is recognized by federal agencies, defense contractors, and enterprise organizations
              as proof of foundational security competency. It opens doors across sectors.
            </p>

            <div className="space-y-4">
              {roles.map((role) => (
                <div key={role.title} className="glass-card border border-gold/15 p-5 rounded-2xl flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <i className={`${role.icon} text-gold text-lg`} />
                  </div>
                  <div>
                    <p className="font-sans text-ice font-semibold">{role.title}</p>
                    <p className="font-mono text-gold text-sm mt-0.5">{role.salary}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-mono text-steel text-xs mt-4">
              * Salary ranges based on publicly available regional data. Individual results vary.
            </p>
          </div>

          {/* CTA card */}
          <div className="reveal-element">
            <span className="font-mono text-gold text-xs tracking-widest mb-3 block">NEXT STEPS</span>
            <h2 className="font-display text-4xl font-bold text-ice mb-8">Ready to Start?</h2>

            <div className="glass-card gold-border-glow p-8 rounded-2xl mb-6">
              <h3 className="font-display text-xl text-ice font-semibold mb-4">Two Enrollment Pathways</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between border-b border-gold/10 pb-3">
                  <span className="font-sans text-steel text-sm">Direct Enrollment (Self-Pay)</span>
                  <span className="font-mono text-gold font-bold">$4,500</span>
                </div>
                <div className="flex items-center justify-between border-b border-gold/10 pb-3">
                  <span className="font-sans text-steel text-sm">Workforce-Sponsored (WIOA)</span>
                  <span className="font-mono text-gold font-bold">$8,500</span>
                </div>
                <div className="flex items-center justify-between pb-1">
                  <span className="font-sans text-steel text-sm">Application Fee</span>
                  <span className="font-mono text-ice text-sm">$150 (non-refundable)</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  to="/admissions"
                  className="btn-gold px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  Start Your Application <i className="ri-arrow-right-line" />
                </Link>
                <Link
                  to="/contact"
                  className="btn-outline-gold px-6 py-3 rounded-full text-sm inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  Questions About Workforce Funding?
                </Link>
              </div>
            </div>

            <div className="glass-card border border-gold/10 p-5 rounded-xl">
              <p className="font-mono text-steel text-xs leading-relaxed">
                Acumen Career Academy is not affiliated with, endorsed by, or authorized by CompTIA.
                Completion of this program does not guarantee certification attainment or employment.
                Exam fees are not included in tuition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
