import { Link } from 'react-router-dom';

const LOGO = 'https://static.readdy.ai/image/eeec8f72bff1cf0b863e9b5d60a6e4df/259ab8bf89840200aa884865753f81f4.png';

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t-2 border-gold/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5 cursor-pointer">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={LOGO} alt="Acumen Career Academy" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-display font-bold text-ice text-sm leading-tight">ACUMEN</p>
                <p className="font-mono text-gold text-xs tracking-widest leading-tight">CAREER ACADEMY</p>
              </div>
            </Link>
            <p className="font-sans text-steel text-sm leading-relaxed mb-6">
              Training the next generation of cybersecurity professionals for the frontlines of digital defense.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" rel="nofollow" className="w-8 h-8 flex items-center justify-center rounded-full border border-gold/20 text-gold hover:border-gold hover:bg-gold/10 transition-colors duration-200 cursor-pointer">
                <i className="ri-linkedin-fill text-sm" />
              </a>
              <a href="#" rel="nofollow" className="w-8 h-8 flex items-center justify-center rounded-full border border-gold/20 text-gold hover:border-gold hover:bg-gold/10 transition-colors duration-200 cursor-pointer">
                <i className="ri-twitter-x-line text-sm" />
              </a>
              <a href="#" rel="nofollow" className="w-8 h-8 flex items-center justify-center rounded-full border border-gold/20 text-gold hover:border-gold hover:bg-gold/10 transition-colors duration-200 cursor-pointer">
                <i className="ri-instagram-line text-sm" />
              </a>
            </div>
          </div>

          {/* Column 2 — Programs */}
          <div>
            <h4 className="font-mono text-gold text-xs font-semibold tracking-widest uppercase mb-5">
              <a href="#programs">Programs</a>
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Security+ Readiness', path: '/programs/security-plus' },
                { label: 'Cyber Ops Analyst Skills', path: '/programs/cybersecurity-operations-analyst' },
                { label: 'Workforce Funding (WIOA)', path: '/workforce' },
                { label: 'Compare Programs', path: '/programs' },
                { label: 'Admissions Process', path: '/admissions' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-sans text-steel text-sm hover:text-gold transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Institution */}
          <div>
            <h4 className="font-mono text-gold text-xs font-semibold tracking-widest uppercase mb-5">
              <a href="#institution">Institution</a>
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About Acumen', path: '/about' },
                { label: 'Our Story', path: '/about' },
                { label: 'Regulatory Standing', path: '/about' },
                { label: 'Employer Partners', path: '/employers' },
                { label: 'Disclosures & Policies', path: '/disclosures' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-sans text-steel text-sm hover:text-gold transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="font-mono text-gold text-xs font-semibold tracking-widest uppercase mb-5">
              <a href="#contact">Contact</a>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-2-line text-gold text-sm mt-0.5 shrink-0" />
                <span className="font-sans text-steel text-sm leading-snug">
                  2918 Professional Parkway<br />Augusta, GA 30907
                </span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-phone-line text-gold text-sm shrink-0" />
                <a href="tel:+17064890188" className="font-sans text-steel text-sm hover:text-gold transition-colors duration-200 cursor-pointer">
                  (706) 489-0188
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-mail-line text-gold text-sm shrink-0" />
                <a href="mailto:info@acumencareeracademy.com" className="font-sans text-steel text-sm hover:text-gold transition-colors duration-200 cursor-pointer">
                  info@acumencareeracademy.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-time-line text-gold text-sm shrink-0" />
                <span className="font-sans text-steel text-sm">Mon–Fri: 9am – 5pm ET</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/10 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <p className="font-sans text-steel text-xs">
              © {new Date().getFullYear()} Acumen Career Academy. All rights reserved.
            </p>
            <p className="font-mono text-steel/60 text-xs max-w-2xl text-center">
              Authorized by the Georgia Nonpublic Postsecondary Education Commission (GNPEC). Not affiliated with, endorsed by, or authorized by CompTIA. Completion does not guarantee certification attainment or employment. Salary figures based on publicly available regional data; individual results vary. Exam fees not included in tuition unless stated in writing.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/disclosures" className="font-sans text-gold text-xs hover:text-gold-light transition-colors duration-200 cursor-pointer whitespace-nowrap">Disclosures & Policies</Link>
              <Link to="/contact" className="font-sans text-gold text-xs hover:text-gold-light transition-colors duration-200 cursor-pointer whitespace-nowrap">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
