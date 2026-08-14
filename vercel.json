import { useState } from 'react';
import { programFaqs } from '../../../mocks/programs';

const categories = [
  {
    label: 'Cost & Value',
    icon: 'ri-price-tag-3-line',
    indices: [0, 1, 2],
  },
  {
    label: 'Programs & Format',
    icon: 'ri-book-open-line',
    indices: [3, 4, 5, 6],
  },
  {
    label: 'Funding & Admissions',
    icon: 'ri-bank-card-line',
    indices: [7, 8],
  },
  {
    label: 'Policies & Compliance',
    icon: 'ri-shield-check-line',
    indices: [9, 10, 11, 12],
  },
];

export default function ProgramFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const visibleFaqs = activeCategory !== null
    ? categories[activeCategory].indices.map((i) => ({ faq: programFaqs[i], originalIndex: i }))
    : programFaqs.map((faq, i) => ({ faq, originalIndex: i }));

  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 reveal-element">
          <p className="font-mono text-gold text-xs tracking-widest mb-3">COMMON QUESTIONS</p>
          <h2 className="font-display text-4xl font-bold text-ice mb-4">Frequently Asked</h2>
          <p className="font-sans text-steel text-sm leading-relaxed max-w-xl mx-auto">
            Everything you need to know about cost, format, tools, portfolio, and policies.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8 reveal-element">
          <button
            onClick={() => { setActiveCategory(null); setOpenIndex(null); }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs transition-all duration-200 cursor-pointer whitespace-nowrap ${
              activeCategory === null
                ? 'bg-gold text-navy-950 font-semibold'
                : 'glass-card border border-gold/20 text-steel hover:border-gold/40 hover:text-gold'
            }`}
          >
            All Questions
          </button>
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => { setActiveCategory(activeCategory === i ? null : i); setOpenIndex(null); }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeCategory === i
                  ? 'bg-gold text-navy-950 font-semibold'
                  : 'glass-card border border-gold/20 text-steel hover:border-gold/40 hover:text-gold'
              }`}
            >
              <i className={`${cat.icon} text-xs`} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ accordion */}
        <div className="space-y-2 reveal-element">
          {visibleFaqs.map(({ faq, originalIndex }) => (
            <div
              key={originalIndex}
              className={`glass-card border transition-all duration-300 overflow-hidden ${
                openIndex === originalIndex ? 'border-gold/40 bg-gold/3' : 'border-gold/10 hover:border-gold/20'
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                onClick={() => setOpenIndex(openIndex === originalIndex ? null : originalIndex)}
              >
                <span className="font-sans text-ice font-medium text-sm leading-snug">{faq.q}</span>
                <div className="w-7 h-7 flex items-center justify-center shrink-0">
                  <i
                    className={`text-gold text-lg transition-transform duration-300 ${
                      openIndex === originalIndex ? 'ri-subtract-line' : 'ri-add-line'
                    }`}
                  />
                </div>
              </button>
              {openIndex === originalIndex && (
                <div className="px-5 pb-5">
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
          <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gold/30 bg-gold/8 mx-auto mb-4">
            <i className="ri-question-answer-line text-gold text-xl" />
          </div>
          <h3 className="font-display text-xl font-bold text-ice mb-2">Still Have Questions?</h3>
          <p className="font-sans text-steel text-sm mb-5 max-w-xs mx-auto">
            Our admissions team is available Monday–Friday, 9am–5pm ET. No pressure, no sales tactics.
          </p>
          <a
            href="mailto:enroll@acumencareeracademy.com"
            className="btn-gold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-mail-line" />
            enroll@acumencareeracademy.com
          </a>
        </div>
      </div>
    </section>
  );
}
