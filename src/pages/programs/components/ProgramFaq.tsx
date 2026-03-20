import { useState } from 'react';
import { programFaqs } from '../../../mocks/programs';

export default function ProgramFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12 reveal-element">
          <p className="font-mono text-gold text-xs tracking-widest mb-3">COMMON QUESTIONS</p>
          <h2 className="font-display text-4xl font-bold text-ice">Frequently Asked</h2>
        </div>

        <div className="space-y-2 reveal-element">
          {programFaqs.map((faq, i) => (
            <div
              key={i}
              className={`glass-card border transition-all duration-300 overflow-hidden ${
                openIndex === i ? 'border-gold/40 bg-gold/3' : 'border-gold/10'
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-sans text-ice font-medium text-sm leading-snug">{faq.q}</span>
                <div className="w-7 h-7 flex items-center justify-center shrink-0">
                  <i
                    className={`text-gold text-lg transition-transform duration-300 ${
                      openIndex === i ? 'ri-subtract-line' : 'ri-add-line'
                    }`}
                  />
                </div>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gold/10 pt-4">
                    <p className="font-sans text-steel text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact prompt */}
        <div className="mt-12 glass-card gold-border-glow p-7 text-center reveal-element">
          <i className="ri-question-answer-line text-gold text-3xl mb-3 block" />
          <h3 className="font-display text-xl font-bold text-ice mb-2">Still Have Questions?</h3>
          <p className="font-sans text-steel text-sm mb-5">
            Our admissions team is available Monday–Friday, 9am–5pm ET. No pressure, no sales tactics.
          </p>
          <a
            href="mailto:info@acumencareeracademy.com"
            className="btn-outline-gold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 cursor-pointer"
          >
            <i className="ri-mail-line" />
            Contact Admissions
          </a>
        </div>
      </div>

      {/* Schema FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: programFaqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />
    </section>
  );
}
