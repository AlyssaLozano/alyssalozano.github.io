import { Link } from 'react-router-dom';

const directFees = [
  { label: 'Program Tuition (Direct Enrollment)', value: '$4,500', highlight: true },
  { label: 'Application Fee (Non-Refundable)', value: '$150', highlight: false },
  { label: 'Books & Materials', value: '$75', highlight: false },
  { label: 'CompTIA Security+ Exam Fee', value: 'NOT INCLUDED', highlight: false, warning: true },
];

const workforceServices = [
  'Employment readiness and job placement support',
  'Resume development and interview preparation',
  'Employer connections and referral opportunities',
  'Ongoing case management and progress reporting',
  'Post-completion follow-up to support job placement and retention',
];

export default function SecPlusTuition() {
  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal-element">
          <span className="font-mono text-gold text-xs tracking-widest mb-3 block">PROGRAM INVESTMENT</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ice mb-4">Tuition &amp; Fees</h2>
          <p className="font-sans text-steel text-base max-w-2xl mx-auto">
            Acumen Career Academy offers two enrollment pathways to meet the needs of different learners.
            Program length is <strong className="text-ice">240 clock hours</strong>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Direct Enrollment */}
          <div className="glass-card gold-border-glow rounded-2xl overflow-hidden reveal-element">
            <div className="px-7 py-5 border-b border-gold/15 flex items-center justify-between bg-gold/5">
              <div>
                <span className="font-mono text-gold text-xs tracking-widest block mb-1">PATHWAY 01</span>
                <h3 className="font-display text-xl font-bold text-ice">Direct Enrollment</h3>
                <p className="font-mono text-steel text-xs mt-0.5">Self-Pay</p>
              </div>
              <div className="text-right">
                <p className="font-display text-3xl font-bold gold-text">$4,500</p>
                <p className="font-mono text-steel text-xs">tuition</p>
              </div>
            </div>

            <div className="divide-y divide-gold/10">
              {directFees.map((fee) => (
                <div key={fee.label} className="px-7 py-4 flex items-center justify-between">
                  <span className="font-sans text-steel text-sm">{fee.label}</span>
                  <span className={`font-mono text-sm font-semibold ${fee.warning ? 'text-red-400' : fee.highlight ? 'text-gold' : 'text-ice'}`}>
                    {fee.value}
                  </span>
                </div>
              ))}
              <div className="px-7 py-4 flex items-center justify-between bg-gold/5">
                <span className="font-sans text-ice font-semibold text-sm">Total (excl. exam)</span>
                <span className="font-mono text-gold text-lg font-bold">$4,725</span>
              </div>
            </div>

            <div className="px-7 py-5">
              <p className="font-sans text-steel text-sm leading-relaxed">
                Direct enrollment tuition covers instructional training, hands-on lab activities,
                and preparation for the CompTIA Security+ certification.
              </p>
            </div>
          </div>

          {/* Workforce-Sponsored */}
          <div className="glass-card border border-gold/25 rounded-2xl overflow-hidden reveal-element" style={{ animationDelay: '0.1s' }}>
            <div className="px-7 py-5 border-b border-gold/15 flex items-center justify-between bg-gold/5">
              <div>
                <span className="font-mono text-gold text-xs tracking-widest block mb-1">PATHWAY 02</span>
                <h3 className="font-display text-xl font-bold text-ice">Workforce-Sponsored</h3>
                <p className="font-mono text-steel text-xs mt-0.5">WorkSource / WIOA</p>
              </div>
              <div className="text-right">
                <p className="font-display text-3xl font-bold gold-text">$8,500</p>
                <p className="font-mono text-steel text-xs">tuition</p>
              </div>
            </div>

            <div className="px-7 py-5 border-b border-gold/10">
              <p className="font-sans text-steel text-sm leading-relaxed mb-5">
                Students sponsored through workforce funding programs may be enrolled under a
                Workforce-Sponsored Training Package. This pathway includes expanded services
                designed to support employment outcomes:
              </p>
              <div className="space-y-2.5">
                {workforceServices.map((s) => (
                  <div key={s} className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-line text-gold text-sm mt-0.5 shrink-0" />
                    <span className="font-sans text-ice/80 text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-7 py-5">
              <p className="font-sans text-steel text-sm leading-relaxed">
                Final enrollment and funding authorization for workforce-sponsored students are determined
                in coordination with the sponsoring agency and in accordance with applicable workforce
                program guidelines.
              </p>
            </div>
          </div>
        </div>

        {/* Statement on Tuition Structure */}
        <div className="glass-card border border-gold/15 rounded-2xl p-7 mb-8 reveal-element">
          <div className="flex items-start gap-5">
            <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-0.5">
              <i className="ri-information-line text-gold" />
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold text-ice mb-3">Statement on Tuition Structure</h4>
              <p className="font-sans text-steel text-sm leading-relaxed">
                Acumen Career Academy offers multiple enrollment pathways to meet the needs of different learners.
                Direct enrollment provides a focused, independent training experience, while workforce-sponsored
                enrollment includes structured career support services aligned with workforce development
                requirements and employment placement outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimers + CTA */}
        <div className="flex flex-col lg:flex-row gap-5 items-start reveal-element">
          <div className="glass-card border border-gold/10 p-5 rounded-xl flex-1">
            <p className="font-mono text-steel text-xs leading-relaxed">
              Exam fees are not included in tuition unless explicitly stated in writing at time of enrollment.
              Acumen Career Academy is not affiliated with, endorsed by, or authorized by CompTIA.
              Completion does not guarantee certification attainment or employment. Salary figures are based
              on publicly available regional data; individual results vary. GNPEC authorized institution.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link
              to="/admissions"
              className="btn-gold px-7 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              Apply Now <i className="ri-arrow-right-line" />
            </Link>
            <Link
              to="/contact"
              className="btn-outline-gold px-7 py-3.5 rounded-full text-sm inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              Questions About Funding?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
