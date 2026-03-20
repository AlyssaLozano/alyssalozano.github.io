import { Link } from 'react-router-dom';

export default function AboutHero() {
  return (
    <section className="relative min-h-[55vh] flex items-end pb-16 overflow-hidden bg-navy-900 pt-28">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-15 pointer-events-none"
        style={{ backgroundImage: "url('https://readdy.ai/api/search-image?query=abstract%20digital%20network%20nodes%20gold%20connections%20glowing%20web%20deep%20navy%20space%20background%20cybersecurity%20data%20visualization%20geometric%20golden%20connections%20professional%20tech%20atmosphere%20futuristic%20dark%20aesthetic%20no%20text%20no%20people&width=1920&height=800&seq=acumen-about-hero-v1&orientation=landscape')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-transparent to-navy-900 pointer-events-none" />
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Blobs */}
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-blob pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="flex items-center gap-2 font-mono text-steel text-xs mb-6">
          <Link to="/" className="hover:text-gold transition-colors cursor-pointer">Home</Link>
          <i className="ri-arrow-right-s-line text-steel/40" />
          <span className="text-gold">About</span>
        </div>

        <div className="max-w-3xl">
          <p className="font-mono text-gold text-xs tracking-widest mb-4 reveal-element">OUR STORY</p>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-ice mb-6 reveal-element leading-tight">
            Operator Experience.<br />Academic Design.
          </h1>
          <p className="font-sans text-steel text-lg leading-relaxed max-w-2xl reveal-element">
            Acumen Career Academy was founded with a singular purpose: to close the gap between academic 
            cybersecurity education and the operational reality of modern security work — built by a former{' '}
            <strong className="text-ice font-semibold">NSA</strong> professional and a credentialed college 
            professor who have lived both sides of that equation.
          </p>
        </div>
      </div>
    </section>
  );
}
