import { programs } from '../../../../mocks/programs';

const program = programs[1]; // CySA+

export default function CysaModules() {
  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal-element">
          <span className="font-mono text-gold text-xs tracking-widest mb-3 block">8-MODULE CURRICULUM</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ice mb-4">Built for the SOC</h2>
          <p className="font-sans text-steel text-base max-w-2xl mx-auto">
            Every module progresses from foundational blue team mindset to hands-on detection and response.
            The program concludes with a full incident simulation capstone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {program.modules!.map((mod, i) => (
            <div
              key={mod.num}
              className="glass-card border border-gold/15 p-6 rounded-2xl hover:border-gold/30 transition-all duration-300 reveal-element"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0">
                  <span className="font-mono text-2xl font-bold text-gold/30">{mod.num}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ice mb-2">{mod.title}</h3>
                  <p className="font-sans text-steel text-sm leading-relaxed">{mod.topics}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tuition table */}
        <div className="max-w-2xl mx-auto reveal-element">
          <span className="font-mono text-gold text-xs tracking-widest mb-6 block text-center">TUITION &amp; FEES BREAKDOWN</span>
          <div className="glass-card border border-gold/20 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gold/10 flex items-center justify-between">
              <span className="font-sans text-steel text-sm">Program Tuition</span>
              <span className="font-mono text-ice font-semibold">$4,500</span>
            </div>
            <div className="px-6 py-4 border-b border-gold/10 flex items-center justify-between">
              <span className="font-sans text-steel text-sm">Application Fee (non-refundable)</span>
              <span className="font-mono text-ice font-semibold">$150</span>
            </div>
            <div className="px-6 py-4 border-b border-gold/10 flex items-center justify-between">
              <span className="font-sans text-steel text-sm">Books &amp; Materials</span>
              <span className="font-mono text-ice font-semibold">$75</span>
            </div>
            <div className="px-6 py-4 border-b border-gold/10 flex items-center justify-between">
              <span className="font-sans text-steel text-sm">CySA+ Exam Fee</span>
              <span className="font-mono text-red-400 text-sm">NOT INCLUDED</span>
            </div>
            <div className="px-6 py-5 bg-gold/5 flex items-center justify-between">
              <span className="font-sans text-ice font-semibold">Total (excl. exam)</span>
              <span className="font-mono text-gold text-xl font-bold">$4,725</span>
            </div>
          </div>
          <p className="font-mono text-steel text-xs text-center mt-4 leading-relaxed">
            Exam fees are not included in tuition unless explicitly stated in writing at time of enrollment.
            Completion does not guarantee certification attainment or employment.
          </p>
        </div>
      </div>
    </section>
  );
}
