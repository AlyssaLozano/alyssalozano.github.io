export default function MissionSection() {
  return (
    <section className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mission statement */}
          <div className="reveal-element">
            <p className="font-mono text-gold text-xs tracking-widest mb-4">OUR MISSION</p>
            <blockquote className="font-display text-3xl lg:text-4xl font-bold text-ice leading-snug mb-8">
              <span className="text-gold text-6xl leading-none font-serif mr-1">&ldquo;</span>
              To prepare the next generation of cybersecurity professionals with the skills, 
              frameworks, and operational mindset required to protect what matters most.
              <span className="text-gold text-6xl leading-none font-serif ml-1">&rdquo;</span>
            </blockquote>
            <p className="font-sans text-steel text-base leading-relaxed">
              Every program decision — from curriculum design to cohort size — is made through the 
              lens of one question: will this help our graduates succeed in real-world security roles on day one?
            </p>
          </div>

          {/* Mission values */}
          <div className="grid grid-cols-1 gap-5 reveal-element" style={{ transitionDelay: '150ms' }}>
            {[
              {
                icon: 'ri-focus-3-line',
                title: 'Workforce-Focused',
                desc: 'Every lesson, module, and exercise is designed around what employers in federal, defense, healthcare, and finance sectors actually need from security hires on day one.',
              },
              {
                icon: 'ri-live-line',
                title: 'Synchronous & Instructor-Led',
                desc: 'Not another self-paced bootcamp that leaves you on your own. Every cohort runs live with a real instructor — structured accountability, real-time Q&A, and a community of peers.',
              },
              {
                icon: 'ri-folder-chart-line',
                title: 'Portfolio Over Transcript',
                desc: 'Graduates leave with verifiable work: written investigation reports, original detection rules mapped to ATT&CK tactics, a SOAR workflow, and documented case management evidence.',
              },
            ].map((v) => (
              <div key={v.title} className="glass-card gold-line-left pl-5 pr-5 py-5 flex gap-4 items-start">
                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                  <i className={`${v.icon} text-gold text-xl`} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ice mb-1.5">{v.title}</h3>
                  <p className="font-sans text-steel text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
