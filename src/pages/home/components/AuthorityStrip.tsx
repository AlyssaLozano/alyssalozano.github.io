const authorities = [
  {
    icon: 'ri-user-star-line',
    text: 'Our founder has extensive experience in cybersecurity and workforce development',
  },
  {
    icon: 'ri-graduation-cap-line',
    text: 'Curriculum developed by a college professor in cybersecurity and computer science',
  },
  {
    icon: 'ri-government-line',
    text: 'Government and industry-informed training methodology built on real practitioner experience',
  },
  {
    icon: 'ri-briefcase-4-line',
    text: 'Our instructors bring years of real-world industry experience',
  },
];

export default function AuthorityStrip() {
  return (
    <section className="bg-navy-800 border-y border-gold/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-gold text-xs tracking-widest text-center mb-10 reveal-element">
          WHY ACUMEN
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {authorities.map((a, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 reveal-element"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <i className={`${a.icon} text-gold text-2xl`} />
              </div>
              <p className="font-sans text-ice/80 text-sm leading-relaxed">{a.text}</p>
              {i < authorities.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gold/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
