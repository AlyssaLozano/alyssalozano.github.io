import { useState, FormEvent } from 'react';

const FORM_URL = 'https://readdy.ai/api/form/d6u8gcq9puk3bj9675i0';

export default function ContactForm() {
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
    <div className="glass-card gold-border-glow p-8 rounded-2xl h-fit">
      {submitted ? (
        <div className="text-center py-10">
          <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
            <i className="ri-check-line text-gold text-3xl" />
          </div>
          <h3 className="font-display text-2xl text-ice font-bold mb-3">Message Received</h3>
          <p className="font-sans text-steel text-sm leading-relaxed max-w-xs mx-auto">
            Thank you for reaching out to Acumen Career Academy. A member of our team will respond
            within 1–2 business days.
          </p>
        </div>
      ) : (
        <>
          <span className="font-mono text-gold text-xs tracking-widest mb-3 block">REQUEST INFORMATION</span>
          <h2 className="font-display text-2xl font-bold text-ice mb-2">Send Us a Message</h2>
          <p className="font-sans text-steel text-sm mb-7">
            Have questions about our programs, admissions, or cohort availability? We&apos;re happy to help.
          </p>

          <form
            data-readdy-form
            id="contact-request-form"
            onSubmit={handleSubmit}
            className="space-y-4"
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
              <label className="font-mono text-steel text-xs mb-2 block">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="(xxx) xxx-xxxx"
                className="w-full bg-navy-800/80 border border-gold/20 rounded-xl px-4 py-3 font-sans text-ice text-sm placeholder:text-steel/50 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>

            <div>
              <label className="font-mono text-steel text-xs mb-2 block">Program of Interest</label>
              <select
                name="program_of_interest"
                className="w-full bg-navy-800/80 border border-gold/20 rounded-xl px-4 py-3 font-sans text-steel text-sm focus:outline-none focus:border-gold/50 transition-colors cursor-pointer"
              >
                <option value="">Select a program (optional)</option>
                <option value="security_plus">Security+ Certification Readiness</option>
                <option value="cysa_plus">Cybersecurity Operations Analyst Skills</option>
                <option value="both">Both programs — need guidance</option>
              </select>
            </div>

            <div>
              <label className="font-mono text-steel text-xs mb-2 block">
                Your Question or Message *
                <span className="text-steel/50 ml-2">(max 500 chars)</span>
              </label>
              <textarea
                name="message"
                rows={4}
                required
                maxLength={500}
                placeholder="How can we help you?"
                className="w-full bg-navy-800/80 border border-gold/20 rounded-xl px-4 py-3 font-sans text-ice text-sm placeholder:text-steel/50 focus:outline-none focus:border-gold/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full btn-gold py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap disabled:opacity-60"
            >
              {submitting ? (
                <>Sending... <i className="ri-loader-4-line animate-spin" /></>
              ) : (
                <>Send Message <i className="ri-send-plane-line" /></>
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
