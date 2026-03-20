export default function FoundingStory() {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gold/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial header */}
        <div className="max-w-4xl mx-auto text-center mb-20 reveal-element">
          <p className="font-mono text-gold text-xs tracking-widest mb-5">THE ORIGIN</p>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-ice leading-tight mb-8">
            Built by Someone Who<br />
            <span className="gold-text">Lived Both Worlds</span>
          </h2>
          <p className="font-sans text-steel text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            Most cybersecurity training is designed by people who have only ever done one thing.
            Acumen Career Academy was built by someone who has done two — working inside the
            National Security Agency and leading a university classroom. Not sequentially as an
            afterthought, but as two serious, accomplished careers.
          </p>
          <p className="font-sans text-steel text-base leading-relaxed max-w-3xl mx-auto">
            That intersection of government practice and academic scholarship is not a selling point.
            It is the architecture. Every program, every curriculum decision, every learning objective
            reflects what it actually takes to perform in this field — not what looks good on a syllabus.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-16 reveal-element">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/20" />
          <div className="w-2 h-2 rounded-full bg-gold" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/20" />
        </div>

        {/* Single founder card */}
        <div className="max-w-3xl mx-auto mb-20 reveal-element">
          <div className="glass-card gold-border-glow p-10 rounded-2xl">
            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0 relative">
                <i className="ri-shield-user-line text-gold text-3xl" />
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                  <i className="ri-lock-line text-navy-950 text-xs" />
                </div>
              </div>
              <div>
                <span className="font-mono text-gold text-xs tracking-widest bg-gold/10 border border-gold/20 px-2 py-0.5 rounded inline-block mb-2">FOUNDER</span>
                <h3 className="font-display text-2xl font-bold text-ice leading-snug">NSA Professional &amp; Cybersecurity Professor</h3>
              </div>
            </div>

            <p className="font-sans text-steel text-base leading-relaxed mb-8">
              A career in cybersecurity management at the National Security Agency. Then a
              professorship in cybersecurity and computer science — with National Science Foundation
              grant funding and recognized contributions to the field. That dual record of government
              practice and academic rigor is the foundation everything here is built on. Not borrowed
              expertise. Not theory by proxy. Experience from both sides of the equation, applied
              directly to how analysts are trained.
            </p>

            {/* Two-column credential grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-7 border-t border-gold/10">
              <div>
                <p className="font-mono text-gold text-xs tracking-widest mb-4">INTELLIGENCE BACKGROUND</p>
                <div className="space-y-3">
                  {[
                    'Cybersecurity management at the NSA',
                    'Operational knowledge of how adversaries think and work',
                    'Threat-informed perspective built into every program',
                    'Practitioner-first curriculum design',
                  ].map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-line text-gold text-sm mt-0.5 shrink-0" />
                      <span className="font-sans text-ice/75 text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-mono text-gold text-xs tracking-widest mb-4">ACADEMIC BACKGROUND</p>
                <div className="space-y-3">
                  {[
                    'College-level cybersecurity professor',
                    'National Science Foundation (NSF) grant recipient',
                    'Major contributions to the cybersecurity field',
                    'Structured learning design and academic rigor',
                  ].map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-line text-gold text-sm mt-0.5 shrink-0" />
                      <span className="font-sans text-ice/75 text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom editorial quote */}
        <div className="max-w-3xl mx-auto text-center reveal-element">
          <div className="glass-card border border-gold/15 p-10 rounded-2xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-navy-900 border border-gold/30 flex items-center justify-center">
              <i className="ri-double-quotes-l text-gold text-sm" />
            </div>
            <blockquote className="font-display text-2xl lg:text-3xl font-bold text-ice leading-snug mb-5">
              The adversary doesn&apos;t care about your credentials.<br />
              <span className="gold-text">It cares about your capabilities.</span>
            </blockquote>
            <p className="font-sans text-steel text-sm leading-relaxed">
              That principle sits at the core of every program decision at Acumen Career Academy.
              We train analysts to think operationally, act decisively, and protect what matters —
              from their first day on the job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
