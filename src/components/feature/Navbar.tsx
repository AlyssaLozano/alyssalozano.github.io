import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LOGO = 'https://static.readdy.ai/image/eeec8f72bff1cf0b863e9b5d60a6e4df/259ab8bf89840200aa884865753f81f4.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'nav-blur bg-navy-900/90 border-b border-gold/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={LOGO} alt="Acumen Career Academy" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="font-display font-bold text-ice text-sm leading-tight">ACUMEN</p>
              <p className="font-mono text-gold text-xs tracking-widest leading-tight">CAREER ACADEMY</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            <Link
              to="/"
              className={`font-sans text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                location.pathname === '/' ? 'text-gold' : 'text-ice/70 hover:text-ice'
              }`}
            >
              Home
            </Link>

            {/* Programs dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <Link
                to="/programs"
                className={`flex items-center gap-1 font-sans text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                  isActive('/programs') ? 'text-gold' : 'text-ice/70 hover:text-ice'
                }`}
              >
                Programs
                <i className={`ri-arrow-down-s-line text-xs transition-transform duration-200 ${programsOpen ? 'rotate-180' : ''}`} />
              </Link>
              {programsOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 glass-card gold-border-glow overflow-hidden">
                  <div className="p-2">
                    <Link
                      to="/programs/security-plus"
                      className="block p-3 rounded-lg hover:bg-gold/5 transition-colors duration-200 cursor-pointer"
                    >
                      <p className="font-sans font-semibold text-ice text-sm">Security+ Readiness</p>
                      <p className="font-mono text-steel text-xs mt-0.5">SY0-701 · 8 Weeks · 240 Clock Hours</p>
                    </Link>
                    <Link
                      to="/programs/cybersecurity-operations-analyst"
                      className="block p-3 rounded-lg hover:bg-gold/5 transition-colors duration-200 cursor-pointer"
                    >
                      <p className="font-sans font-semibold text-ice text-sm">Cyber Ops Analyst Skills</p>
                      <p className="font-mono text-steel text-xs mt-0.5">CySA+ CS0-003 · 120 Clock Hours</p>
                    </Link>
                    <Link
                      to="/workforce"
                      className="block p-3 rounded-lg hover:bg-gold/5 transition-colors duration-200 cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <p className="font-sans font-semibold text-ice text-sm">Workforce Funding</p>
                        <span className="font-mono text-xs bg-gold/15 text-gold border border-gold/30 px-1.5 py-0.5 rounded">WIOA</span>
                      </div>
                      <p className="font-mono text-steel text-xs mt-0.5">WorkSource Georgia · $0 out-of-pocket</p>
                    </Link>
                    <div className="border-t border-gold/10 mt-1 pt-2 px-3 pb-1">
                      <Link
                        to="/programs"
                        className="font-sans text-gold text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200 cursor-pointer"
                      >
                        Compare Programs <i className="ri-arrow-right-line text-xs" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`font-sans text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                isActive('/about') ? 'text-gold' : 'text-ice/70 hover:text-ice'
              }`}
            >
              About
            </Link>

            <Link
              to="/employers"
              className={`font-sans text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                isActive('/employers') ? 'text-gold' : 'text-ice/70 hover:text-ice'
              }`}
            >
              Employers
            </Link>

            <Link
              to="/contact"
              className={`font-sans text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                isActive('/contact') ? 'text-gold' : 'text-ice/70 hover:text-ice'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/admissions"
              className="btn-gold px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              Apply Now <i className="ri-arrow-right-up-line text-sm" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-gold text-xl cursor-pointer"
          >
            <i className={mobileOpen ? 'ri-close-line' : 'ri-menu-3-line'} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-navy-950/98 nav-blur flex flex-col pt-24 px-6">
          <div className="flex flex-col gap-6">
            <Link to="/" className="font-display text-2xl text-ice cursor-pointer" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link to="/programs" className="font-display text-2xl text-ice cursor-pointer" onClick={() => setMobileOpen(false)}>
              Programs
            </Link>
            <Link to="/programs/security-plus" className="font-sans text-base text-steel cursor-pointer pl-4" onClick={() => setMobileOpen(false)}>
              ↳ Security+ Readiness
            </Link>
            <Link to="/programs/cybersecurity-operations-analyst" className="font-sans text-base text-steel cursor-pointer pl-4" onClick={() => setMobileOpen(false)}>
              ↳ Cyber Ops Analyst Skills
            </Link>
            <Link to="/workforce" className="font-sans text-base text-steel cursor-pointer pl-4" onClick={() => setMobileOpen(false)}>
              ↳ Workforce Funding (WIOA)
            </Link>
            <Link to="/about" className="font-display text-2xl text-ice cursor-pointer" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link to="/admissions" className="font-display text-2xl text-ice cursor-pointer" onClick={() => setMobileOpen(false)}>
              Admissions
            </Link>
            <Link to="/employers" className="font-display text-2xl text-ice cursor-pointer" onClick={() => setMobileOpen(false)}>
              Employers
            </Link>
            <Link to="/contact" className="font-display text-2xl text-ice cursor-pointer" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </div>
          <div className="mt-10">
            <Link
              to="/admissions"
              className="btn-gold px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2 whitespace-nowrap"
              onClick={() => setMobileOpen(false)}
            >
              Apply Now <i className="ri-arrow-right-up-line" />
            </Link>
          </div>
          <div className="mt-auto mb-10">
            <p className="font-mono text-steel text-xs">GNPEC Authorized Institution · Augusta, Georgia</p>
          </div>
        </div>
      )}
    </>
  );
}
