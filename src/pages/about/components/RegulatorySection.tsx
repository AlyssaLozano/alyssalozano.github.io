import { Link } from 'react-router-dom';

export default function RegulatorySection() {
  return (
    <>
      {/* Regulatory Standing */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-element">
              <p className="font-mono text-gold text-xs tracking-widest mb-4">REGULATORY STANDING</p>
              <h2 className="font-display text-4xl font-bold text-ice mb-5">
                Authorized &amp; Accountable
              </h2>
              <p className="font-sans text-steel text-base leading-relaxed mb-8">
                Acumen Career Academy operates under the oversight of the Georgia Nonpublic 
                Postsecondary Education Commission (GNPEC) — the state regulatory body responsible 
                for ensuring quality standards in private postsecondary education.
              </p>
              <div className="glass-card gold-border-glow p-6 inline-block animate-pulse-gold">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gold bg-gold/10">
                    <i className="ri-award-fill text-gold text-xl" />
                  </div>
                  <div>
                    <p className="font-mono text-gold font-semibold text-sm">GNPEC AUTHORIZED</p>
                    <p className="font-sans text-steel text-xs mt-0.5">Georgia Nonpublic Postsecondary Education Commission</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5 reveal-element" style={{ transitionDelay: '150ms' }}>
              {[
                {
                  icon: 'ri-file-text-line',
                  title: 'Institutional Oversight',
                  desc: 'GNPEC provides consumer protection and quality assurance oversight for private postsecondary institutions operating in the State of Georgia.',
                },
                {
                  icon: 'ri-error-warning-line',
                  title: 'Important Disclosures',
                  desc: 'Acumen Career Academy is not affiliated with, endorsed by, or authorized by CompTIA. CompTIA Security+ and CySA+ are registered trademarks of CompTIA, Inc.',
                },
                {
                  icon: 'ri-information-line',
                  title: 'Outcome Disclaimer',
                  desc: 'Completion of our programs does not guarantee certification attainment or employment. Salary figures are based on publicly available regional data; individual results will vary.',
                },
              ].map((item) => (
                <div key={item.title} className="glass-card p-5 flex gap-4 items-start">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0">
                    <i className={`${item.icon} text-gold text-lg`} />
                  </div>
                  <div>
                    <h4 className="font-sans text-ice font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="font-sans text-steel text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="py-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/3 via-transparent to-gold/3" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="reveal-element">
            <h2 className="font-display text-4xl font-bold text-ice mb-4">
              Ready to Begin Your Career in Cybersecurity?
            </h2>
            <p className="font-sans text-steel text-base leading-relaxed mb-8">
              Explore our programs and find the right path for your background and goals.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/programs"
                className="btn-gold px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
              >
                View Programs <i className="ri-arrow-right-line" />
              </Link>
              <a
                href="mailto:info@acumencareeracademy.com"
                className="btn-outline-gold px-8 py-3.5 rounded-full text-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <i className="ri-mail-line" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
