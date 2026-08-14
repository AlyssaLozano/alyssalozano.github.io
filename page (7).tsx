import { useState, FormEvent } from 'react';

const FORM_URL = 'https://readdy.ai/api/form/d6u8gcq9puk3bj9675ig';

const partnershipTypes = [
  {
    icon: 'ri-user-received-2-line',
    title: 'Graduate Hiring Pipeline',
    desc: 'Access our qualified graduates for direct hire placement in cybersecurity analyst, SOC, and IT security roles. Every CySA+ graduate arrives with a verifiable portfolio you can review before the interview.',
  },
  {
    icon: 'ri-building-2-line',
    title: 'Sponsored Training',
    desc: 'Sponsor employee upskilling through our programs. Workforce development for your existing security team — live instruction, real tools, and portfolio deliverables that prove skill acquisition.',
  },
  {
    icon: 'ri-shake-hands-line',
    title: 'Preferred Employer Status',
    desc: 'Be featured in our career resources and gain early access to graduating cohorts for priority recruitment. We keep cohort sizes small — you get a focused, qualified candidate pool.',
  },
  {
    icon: 'ri-medal-line',
    title: 'Advisory Engagement',
    desc: 'Participate in curriculum development to ensure graduates are trained on the tools and scenarios your organization actually uses. Your input shapes what analysts learn.',
  },
];

const gradProfile = [
  { label: 'Certifications Pursued', value: 'CompTIA Security+ · CySA+' },
  { label: 'Tools Trained On', value: 'Splunk, Sigma, Wireshark, TheHive, n8n, Chainsaw' },
  { label: 'Frameworks Applied', value: 'MITRE ATT&CK, Cyber Kill Chain, Diamond Model' },
  { label: 'Training Format', value: 'Live synchronous instruction, small cohorts' },
  { label: 'Program Length', value: '8 weeks to completion' },
  { label: 'Portfolio Artifacts', value: '4 verifiable deliverables (CySA+ track)' },
];

const portfolioArtifacts = [
  {
    icon: 'ri-file-text-line',
    title: 'Investigation Reports',
    desc: 'Written incident analysis documenting timeline, TTPs, evidence chain, and remediation. Reviewable before hire.',
  },
  {
    icon: 'ri-code-s-slash-line',
    title: 'Detection Rules',
    desc: 'Three original Sigma rules mapped across three MITRE ATT&CK tactics. Demonstrates real detection engineering skill.',
  },
  {
    icon: 'ri-flow-chart',
    title: 'SOAR Workflow',
    desc: 'Working n8n automation pipeline connecting Splunk, TheHive, and enrichment sources. Not a diagram — a live workflow.',
  },
  {
    icon: 'ri-archive-drawer-line',
    title: 'Case Management Evidence',
    desc: 'Full case lifecycle in TheHive from triage through closure. Exportable, reviewable, and shows how they work.',
  },
];

export default function EmployersContent() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const textarea = form.querySelector('textarea');
    if (textarea && textarea.value.length > 500) return;
    setSubmitting(true);
    const data = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
    try {
      await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Partnership types */}
        <div className="mb-20 reveal-element">
          <div className="text-center mb-12">
            <span className="font-mono text-gold text-xs tracking-widest mb-3 block">HOW WE PARTNER</span>
            <h2 className="font-display text-4xl font-bold text-ice mb-4">Partnership Models</h2>
            <p className="font-sans text-steel text-base max-w-xl mx-auto">
              We work with employers across the federal, defense contracting, healthcare, and financial sectors
              to bridge the cybersecurity talent gap in the Augusta region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {partnershipTypes.map((pt, i) => (
              <div
                key={pt.title}
                className="glass-card border border-gold/15 p-6 rounded-2xl hover:border-gold/30 transition-all duration-300"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                  <i className={`${pt.icon} text-gold text-lg`} />
                </div>
                <h3 className="font-display text-lg font-semibold text-ice mb-2">{pt.title}</h3>
                <p className="font-sans text-steel text-sm leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why hire Acumen graduates */}
        <div className="mb-20 reveal-element">
          <div className="relative rounded-2xl overflow-hidden border border-gold/20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gold/10">
              {[
                {
                  icon: 'ri-folder-chart-line',
                  title: 'Portfolio, Not Just a Certificate',
                  desc: 'CySA+ graduates bring 4 verifiable artifacts you can review before the interview. Investigation reports, detection rules, SOAR workflows, and case evidence.',
                },
                {
                  icon: 'ri-tools-line',
                  title: 'Trained on Your Tools',
                  desc: 'Splunk, Sigma, Wireshark, TheHive, n8n, Chainsaw. Not sandboxed demos — real platforms, real scenarios, from day one of training.',
                },
                {
                  icon: 'ri-live-line',
                  title: 'Live Instruction, Small Cohorts',
                  desc: 'Every session is live with a real instructor. Small cohort sizes mean every graduate has been held accountable and engaged throughout the program.',
                },
              ].map((item) => (
                <div key={item.title} className="px-8 py-8 flex flex-col gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl border border-gold/30 bg-gold/8">
                    <i className={`${item.icon} text-gold text-lg`} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-ice text-base mb-2">{item.title}</p>
                    <p className="font-sans text-steel text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Graduate profile + Form */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Graduate profile */}
          <div className="reveal-element">
            <span className="font-mono text-gold text-xs tracking-widest mb-3 block">GRADUATE PROFILE</span>
            <h2 className="font-display text-4xl font-bold text-ice mb-4">
              Who Our Graduates<br />
              <span className="gold-text">Are Prepared to Be</span>
            </h2>
            <p className="font-sans text-steel text-base leading-relaxed mb-8">
              Acumen graduates complete live, instructor-led programs built for immediate workforce
              readiness. They arrive with hands-on tool proficiency, analytical discipline, and a
              verifiable portfolio that proves they can do the work — not just pass a test.
            </p>

            <div className="space-y-3 mb-8">
              {gradProfile.map((p) => (
                <div key={p.label} className="flex items-start justify-between gap-4 border-b border-gold/10 pb-3">
                  <span className="font-mono text-steel text-xs shrink-0">{p.label}</span>
                  <span className="font-sans text-ice text-sm font-medium text-right">{p.value}</span>
                </div>
              ))}
            </div>

            {/* Portfolio callout */}
            <div className="glass-card border border-gold/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <i className="ri-folder-chart-line text-gold text-lg" />
                <p className="font-mono text-gold text-xs tracking-widest">WHAT EVERY CYSA+ GRADUATE BRINGS</p>
              </div>
              <p className="font-sans text-steel text-sm leading-relaxed mb-4">
                CySA+ graduates arrive with four verifiable artifacts you can review before the interview.
                Not a transcript. Not a quiz score. Actual work product.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {portfolioArtifacts.map((a) => (
                  <div key={a.title} className="flex items-start gap-2.5 p-3 rounded-xl border border-white/6 bg-white/2">
                    <div className="w-7 h-7 flex items-center justify-center rounded-lg border border-gold/20 bg-gold/5 shrink-0 mt-0.5">
                      <i className={`${a.icon} text-gold text-xs`} />
                    </div>
                    <div>
                      <p className="font-display font-bold text-ice text-xs">{a.title}</p>
                      <p className="font-sans text-steel/70 text-xs leading-relaxed mt-0.5">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Partnership inquiry form */}
          <div className="reveal-element">
            <div className="glass-card gold-border-glow p-8 rounded-2xl">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                    <i className="ri-check-line text-gold text-3xl" />
                  </div>
                  <h3 className="font-display text-2xl text-ice font-bold mb-3">Inquiry Received</h3>
                  <p className="font-sans text-steel text-sm leading-relaxed max-w-xs mx-auto">
                    Thank you for your interest in partnering with Acumen Career Academy. A member of our team will be in touch within 2 business days.
                  </p>
                </div>
              ) : (
                <>
                  <span className="font-mono text-gold text-xs tracking-widest mb-3 block">EMPLOYER INQUIRY</span>
                  <h2 className="font-display text-2xl font-bold text-ice mb-2">Connect With Us</h2>
                  <p className="font-sans text-steel text-sm mb-2">
                    Tell us about your organization and how you&apos;d like to engage with our graduate talent pipeline.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-gold bg-gold/8 border border-gold/20 px-3 py-1.5 rounded-full">
                      <i className="ri-folder-chart-line text-xs" /> Portfolio-verified graduates
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ice/60 bg-white/4 border border-white/10 px-3 py-1.5 rounded-full">
                      <i className="ri-tools-line text-xs" /> Real SOC tool proficiency
                    </span>
                  </div>

                  <form
                    data-readdy-form
                    id="employers-partnership-form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label className="font-mono text-steel text-xs mb-2 block">Company / Organization *</label>
                      <input
                        type="text"
                        name="company_name"
                        required
                        placeholder="Your company or organization name"
                        className="w-full bg-navy-800/80 border border-gold/20 rounded-xl px-4 py-3 font-sans text-ice text-sm placeholder:text-steel/50 focus:outline-none focus:border-gold/50 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="font-mono text-steel text-xs mb-2 block">Contact Name *</label>
                        <input
                          type="text"
                          name="contact_name"
                          required
                          placeholder="Your name"
                          className="w-full bg-navy-800/80 border border-gold/20 rounded-xl px-4 py-3 font-sans text-ice text-sm placeholder:text-steel/50 focus:outline-none focus:border-gold/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-mono text-steel text-xs mb-2 block">Job Title</label>
                        <input
                          type="text"
                          name="job_title"
                          placeholder="e.g. HR Director"
                          className="w-full bg-navy-800/80 border border-gold/20 rounded-xl px-4 py-3 font-sans text-ice text-sm placeholder:text-steel/50 focus:outline-none focus:border-gold/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-steel text-xs mb-2 block">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="work@company.com"
                        className="w-full bg-navy-800/80 border border-gold/20 rounded-xl px-4 py-3 font-sans text-ice text-sm placeholder:text-steel/50 focus:outline-none focus:border-gold/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-steel text-xs mb-2 block">Company Type *</label>
                      <select
                        name="company_type"
                        required
                        className="w-full bg-navy-800/80 border border-gold/20 rounded-xl px-4 py-3 font-sans text-steel text-sm focus:outline-none focus:border-gold/50 transition-colors cursor-pointer"
                      >
                        <option value="">Select company type</option>
                        <option value="federal_govt">Federal Government / Agency</option>
                        <option value="defense_contractor">Defense Contractor</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="financial">Financial Services</option>
                        <option value="private_enterprise">Private Enterprise</option>
                        <option value="staffing">Staffing / Recruiting Firm</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-mono text-steel text-xs mb-2 block">Partnership Interest *</label>
                      <select
                        name="partnership_interest"
                        required
                        className="w-full bg-navy-800/80 border border-gold/20 rounded-xl px-4 py-3 font-sans text-steel text-sm focus:outline-none focus:border-gold/50 transition-colors cursor-pointer"
                      >
                        <option value="">Select interest</option>
                        <option value="hiring_pipeline">Graduate Hiring Pipeline</option>
                        <option value="sponsored_training">Sponsored Employee Training</option>
                        <option value="preferred_employer">Preferred Employer Status</option>
                        <option value="advisory">Curriculum Advisory</option>
                        <option value="multiple">Multiple / Let&apos;s Discuss</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-mono text-steel text-xs mb-2 block">
                        Additional Details
                        <span className="text-steel/50 ml-2">(max 500 chars)</span>
                      </label>
                      <textarea
                        name="additional_details"
                        rows={3}
                        maxLength={500}
                        placeholder="Tell us more about your hiring needs or partnership goals..."
                        className="w-full bg-navy-800/80 border border-gold/20 rounded-xl px-4 py-3 font-sans text-ice text-sm placeholder:text-steel/50 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full btn-gold py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap disabled:opacity-60"
                    >
                      {submitting ? (
                        <>Submitting... <i className="ri-loader-4-line animate-spin" /></>
                      ) : (
                        <>Submit Partnership Inquiry <i className="ri-arrow-right-line" /></>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
