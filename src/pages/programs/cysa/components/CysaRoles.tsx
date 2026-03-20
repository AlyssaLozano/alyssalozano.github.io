import { Link } from 'react-router-dom';

const roles = [
  { title: 'Tier 1 SOC Analyst', salary: '$65k–$85k', icon: 'ri-computer-line' },
  { title: 'Cybersecurity Analyst I', salary: '$70k–$90k', icon: 'ri-shield-flash-line' },
  { title: 'Security Monitoring Technician', salary: '$60k–$80k', icon: 'ri-radar-line' },
];

const skills = [
  'Threat Detection & Analysis', 'SIEM Platform Operations', 'EDR Tool Proficiency',
  'SOAR Automation', 'MITRE ATT&CK Framework', 'Network Traffic Analysis',
  'Phishing Investigation', 'Incident Documentation', 'Alert Triage',
];

export default function CysaRoles() {
  return (
    <section className="py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal-element">
            <span className="font-mono text-gold text-xs tracking-widest mb-3 block">CAREER OUTCOMES</span>
            <h2 className="font-display text-4xl font-bold text-ice mb-6">
              Enter the SOC<br />
              <span className="gold-text">Ready on Day One</span>
            </h2>
            <p className="font-sans text-steel text-base leading-relaxed mb-8">
              Our program is engineered for immediate workforce readiness. Graduates enter Security Operations Center
              roles with practical skills validated through hands-on exercises, not just theory.
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

          <div className="reveal-element">
            <span className="font-mono text-gold text-xs tracking-widest mb-3 block">SKILLS YOU&apos;LL GAIN</span>
            <h2 className="font-display text-4xl font-bold text-ice mb-8">Competencies Built</h2>
            <div className="flex flex-wrap gap-3 mb-10">
              {skills.map((s) => (
                <span key={s} className="glass-card border border-gold/20 px-4 py-2 rounded-full font-mono text-ice text-xs">
                  {s}
                </span>
              ))}
            </div>

            <div className="glass-card gold-border-glow p-8 rounded-2xl">
              <p className="font-display text-xl text-ice font-semibold mb-3">
                "Ready to detect, analyze, and respond."
              </p>
              <p className="font-sans text-steel text-sm leading-relaxed mb-6">
                The federal and defense contracting sector adjacent to Fort Eisenhower (Formerly Fort Gordon) demands analysts who can operate
                under pressure. Our cohort model and live instruction format are built to simulate that environment.
              </p>
              <Link
                to="/admissions"
                className="btn-gold px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                Begin Your Application <i className="ri-arrow-right-line" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
