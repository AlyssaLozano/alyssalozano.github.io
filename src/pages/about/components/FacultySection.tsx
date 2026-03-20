const faculty = [
  {
    role: 'Lead Instructor — Security Operations',
    credentials: [
      'Multiple industry certifications, including CompTIA Security+',
      '10+ years in enterprise security operations',
      'Former SOC analyst in the federal sector',
      'Specialization: threat detection and SIEM platforms',
    ],
    icon: 'ri-shield-user-line',
  },
  {
    role: 'Curriculum Developer — Cybersecurity & CS',
    credentials: [
      'College-level professor in cybersecurity and computer science',
      'Graduate-level academic credentials',
      'Experience designing industry-aligned certification programs',
      'Specialization: network security and secure system design',
    ],
    icon: 'ri-graduation-cap-line',
  },
  {
    role: 'Advisor — Former NSA Professional',
    credentials: [
      'Former National Security Agency (NSA) professional',
      'Deep background in signals intelligence and cyber operations',
      'Advises on adversary TTPs and threat landscape modeling',
      'Specialization: nation-state threat actors and offensive tradecraft',
    ],
    icon: 'ri-government-line',
  },
  {
    role: 'Industry Advisor — Workforce Development',
    credentials: [
      'Extensive experience in cybersecurity workforce development',
      'Bridges academic programming with employer expectations',
      'Established relationships with regional federal and enterprise employers',
      'Specialization: career transition and workforce readiness',
    ],
    icon: 'ri-briefcase-4-line',
  },
];

export default function FacultySection() {
  return (
    <section className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal-element">
          <p className="font-mono text-gold text-xs tracking-widest mb-3">THE TEAM</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ice mb-4">
            Operational Experience.<br />Academic Rigor.
          </h2>
          <p className="font-sans text-steel text-base max-w-xl mx-auto">
            Our team brings together deep field experience in security operations and credentialed academic 
            expertise — identities kept private per operational security standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faculty.map((member, i) => (
            <div
              key={member.role}
              className="glass-card gold-border-glow p-7 reveal-element"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                {/* Anonymous avatar */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-gold/40 bg-gold/5 relative">
                  <i className={`${member.icon} text-gold text-2xl`} />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-gold">
                    <i className="ri-check-line text-navy-950 text-xs" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-gold text-xs bg-gold/10 border border-gold/20 px-2 py-0.5 rounded">VERIFIED</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-ice leading-snug">{member.role}</h3>
                </div>
              </div>
              <ul className="space-y-2.5">
                {member.credentials.map((c) => (
                  <li key={c} className="flex items-start gap-2.5">
                    <i className="ri-checkbox-circle-line text-gold text-sm mt-0.5 shrink-0" />
                    <span className="font-sans text-steel text-sm leading-snug">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
