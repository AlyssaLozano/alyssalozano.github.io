import { useState, FormEvent } from 'react';

const FORM_URL = 'https://readdy.ai/api/form/d6u8gcq9puk3bj9675hg';

const steps = [
  {
    num: '01',
    title: 'Submit Application',
    desc: 'Complete the online application form and submit the $150 non-refundable application fee to reserve your spot.',
    icon: 'ri-file-text-line',
  },
  {
    num: '02',
    title: 'Admissions Conversation',
    desc: 'A member of our admissions team will contact you within 2 business days to discuss your background, goals, and program fit.',
    icon: 'ri-chat-3-line',
  },
  {
    num: '03',
    title: 'Enrollment Agreement',
    desc: 'Review and sign your enrollment agreement, confirm tuition payment arrangements, and complete all onboarding documentation.',
    icon: 'ri-file-edit-line',
  },
  {
    num: '04',
    title: 'Cohort Confirmation',
    desc: 'Receive your official cohort confirmation, start date, and access to pre-program orientation materials.',
    icon: 'ri-check-double-line',
  },
];

export default function AdmissionsForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const textarea = form.querySelector('textarea');
    if (textarea && textarea.value.length > 500) {
      alert('Message must be 500 characters or fewer.');
      return;
    }
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
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enrollment Steps */}
          <div className="reveal-element">
            <span className="font-mono text-gold text-xs tracking-widest mb-3 block">HOW IT WORKS</span>
            <h2 className="font-display text-4xl font-bold text-ice mb-4">
              4-Step Enrollment<br />
              <span className="gold-text">Process</span>
            </h2>
            <p className="font-sans text-steel text-base leading-relaxed mb-10">
              Our admissions process is straightforward. We prioritize a personal conversation to ensure
              every student enrolls in the right program for their goals.
            </p>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={step.num} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0">
                      <i className={`${step.icon} text-gold text-lg`} />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-gold/10 mt-3 min-h-8" />
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-gold/50 text-xs">{step.num}</span>
                      <h3 className="font-sans text-ice font-semibold text-base">{step.title}</h3>
                    </div>
                    <p className="font-sans text-steel text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tuition table */}
            <div className="mt-8 glass-card border border-gold/15 rounded-2xl overflow-hidden reveal-element">
              <div className="px-5 py-3 border-b border-gold/10 bg-gold/5">
                <span className="font-mono text-gold text-xs tracking-widest">TUITION SUMMARY</span>
              </div>
              <div className="divide-y divide-gold/10">
                <div className="px-5 py-3">
                  <p className="font-sans text-steel text-xs font-semibold uppercase tracking-wide mb-2">Security+ Readiness (240 hrs)</p>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-sans text-steel text-sm">Direct Enrollment (Self-Pay)</span>
                    <span className="font-mono text-ice text-sm">$4,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-steel text-sm">Workforce-Sponsored (WIOA)</span>
                    <span className="font-mono text-ice text-sm">$8,500</span>
                  </div>
                </div>
                <div className="px-5 py-3 flex justify-between items-center">
                  <span className="font-sans text-steel text-sm">Cyber Ops Analyst Skills</span>
                  <span className="font-mono text-ice text-sm">$4,500</span>
                </div>
                <div className="px-5 py-3 flex justify-between items-center">
                  <span className="font-sans text-steel text-sm">Application Fee (all programs)</span>
                  <span className="font-mono text-ice text-sm">$150 (non-refundable)</span>
                </div>
                <div className="px-5 py-3 flex justify-between items-center">
                  <span className="font-sans text-steel text-sm">Books &amp; Materials</span>
                  <span className="font-mono text-ice text-sm">$75</span>
                </div>
                <div className="px-5 py-3 flex justify-between items-center bg-gold/5">
                  <span className="font-sans text-steel text-sm">Exam Fees</span>
                  <span className="font-mono text-red-400 text-sm">NOT INCLUDED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="reveal-element">
            <div className="glass-card gold-border-glow p-8 rounded-2xl">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                    <i className="ri-check-line text-gold text-3xl" />
                  </div>
                  <h3 className="font-display text-2xl text-ice font-bold mb-3">Application Received</h3>
                  <p className="font-sans text-steel text-sm leading-relaxed max-w-xs mx-auto">
                    Thank you for applying to Acumen Career Academy. A member of our admissions team
                    will contact you within 2 business days to schedule your admissions conversation.
                  </p>
                </div>
              ) : (
                <>
                  <span className="font-mono text-gold text-xs tracking-widest mb-3 block">STEP 1 OF 4</span>
                  <h2 className="font-display text-3xl font-bold text-ice mb-2">Submit Your Application</h2>
                  <p className="font-sans text-steel text-sm mb-8">
                    Complete the form below to begin the enrollment process. The $150 application fee will be discussed during your admissions conversation.
                  </p>

                  <form
                    data-readdy-form
                    id="admissions-application-form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="font-mono text-steel text-xs mb-2 block">First Name *</label>
                        <input
                          type="text"
                          name="first_name"
                          required
                          placeholder="First name"
                          className="w-full bg-navy-800/80 border border-gold/20 rounded-xl px-4 py-3 font-sans text-ice text-sm placeholder:text-steel/50 focus:outline-none focus:border-gold/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-mono text-steel text-xs mb-2 block">Last Name *</label>
                        <input
                          type="text"
                          name="last_name"
                          required
                          placeholder="Last name"
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
                        placeholder="your@email.com"
                        className="w-full bg-navy-800/80 border border-gold/20 rounded-xl px-4 py-3 font-sans text-ice text-sm placeholder:text-steel/50 focus:outline-none focus:border-gold/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-steel text-xs mb-2 block">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="(xxx) xxx-xxxx"
                        className="w-full bg-navy-800/80 border border-gold/20 rounded-xl px-4 py-3 font-sans text-ice text-sm placeholder:text-steel/50 focus:outline-none focus:border-gold/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-steel text-xs mb-2 block">Program of Interest *</label>
                      <select
                        name="program_of_interest"
                        required
                        value={selectedProgram}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        className="w-full bg-navy-800/80 border border-gold/20 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/50 transition-colors cursor-pointer"
                        style={{ color: selectedProgram ? '#e8eaf0' : '#6b7a99' }}
                      >
                        <option value="" disabled>Select a program</option>
                        <option value="security_plus">Security+ Certification Readiness</option>
                        <option value="cysa_plus">Cybersecurity Operations Analyst Skills (CySA+)</option>
                        <option value="undecided">Undecided — Would like guidance</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-mono text-steel text-xs mb-2 block">Current Employment Status</label>
                      <select
                        name="employment_status"
                        className="w-full bg-navy-800/80 border border-gold/20 rounded-xl px-4 py-3 font-sans text-steel text-sm focus:outline-none focus:border-gold/50 transition-colors cursor-pointer"
                      >
                        <option value="">Select status</option>
                        <option value="employed_it">Employed — IT / Technology</option>
                        <option value="employed_other">Employed — Other field</option>
                        <option value="unemployed">Currently unemployed</option>
                        <option value="military">Active Military / Veteran</option>
                        <option value="student">Student</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-mono text-steel text-xs mb-2 block">
                        Tell us about your background &amp; goals
                        <span className="text-steel/50 ml-2">(max 500 chars)</span>
                      </label>
                      <textarea
                        name="background_and_goals"
                        rows={4}
                        maxLength={500}
                        placeholder="Brief background, any prior IT or security experience, and what you hope to achieve..."
                        className="w-full bg-navy-800/80 border border-gold/20 rounded-xl px-4 py-3 font-sans text-ice text-sm placeholder:text-steel/50 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="disclaimer_acknowledgment"
                        id="disclaimer"
                        required
                        className="mt-1 cursor-pointer"
                      />
                      <label htmlFor="disclaimer" className="font-sans text-steel text-xs leading-relaxed cursor-pointer">
                        I acknowledge that completion does not guarantee certification attainment or employment.
                        Exam fees are not included in tuition. Salary figures are based on publicly available data.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full btn-gold py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap disabled:opacity-60"
                    >
                      {submitting ? (
                        <>Submitting... <i className="ri-loader-4-line animate-spin" /></>
                      ) : (
                        <>Submit Application <i className="ri-arrow-right-line" /></>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            <div className="mt-5 glass-card border border-gold/10 p-4 rounded-xl">
              <p className="font-mono text-steel text-xs leading-relaxed">
                Acumen Career Academy is authorized by GNPEC. Not affiliated with CompTIA.
                The $150 application fee is non-refundable. Exam fees are not included unless stated in writing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
