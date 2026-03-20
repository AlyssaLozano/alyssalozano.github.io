export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <span className="font-mono text-gold text-xs tracking-widest mb-4 block">CONTACT INFORMATION</span>
        <h2 className="font-display text-4xl font-bold text-ice mb-4">
          We&apos;re Based in<br />
          <span className="gold-text">Augusta, Georgia</span>
        </h2>
        <p className="font-sans text-steel text-base leading-relaxed">
          Acumen Career Academy serves the greater Augusta metropolitan area including Fort Eisenhower (Formerly Fort Gordon),
          Evans, Martinez, Grovetown, and the broader CSRA region.
        </p>
      </div>

      <div className="space-y-4">
        {[
          {
            icon: 'ri-phone-line',
            label: 'Phone',
            value: '(706) 489-0188',
            href: 'tel:+17064890188',
          },
          {
            icon: 'ri-mail-line',
            label: 'Email',
            value: 'info@acumencareeracademy.com',
            href: 'mailto:info@acumencareeracademy.com',
          },
          {
            icon: 'ri-map-pin-2-line',
            label: 'Location',
            value: '2918 Professional Parkway, Augusta, GA 30907',
            href: 'https://maps.google.com/?q=2918+Professional+Parkway,+Augusta,+GA+30907',
          },
          {
            icon: 'ri-time-line',
            label: 'Response Time',
            value: 'Within 1–2 business days',
            href: null,
          },
        ].map((item) => (
          <div key={item.label} className="glass-card border border-gold/15 p-5 rounded-2xl flex items-start gap-5">
            <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
              <i className={`${item.icon} text-gold`} />
            </div>
            <div>
              <p className="font-mono text-steel text-xs mb-1">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="font-sans text-ice text-sm font-medium hover:text-gold transition-colors cursor-pointer"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-sans text-ice text-sm font-medium">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Map embed */}
      <div className="rounded-2xl overflow-hidden border border-gold/15" style={{ height: '260px' }}>
        <iframe
          title="Acumen Career Academy — 2918 Professional Parkway, Augusta, GA 30907"
          src="https://maps.google.com/maps?q=2918+Professional+Parkway,+Augusta,+GA+30907&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="glass-card border border-gold/10 p-5 rounded-xl">
        <p className="font-mono text-steel text-xs leading-relaxed">
          Acumen Career Academy is authorized by the Georgia Nonpublic Postsecondary Education Commission (GNPEC).
          Not affiliated with, endorsed by, or authorized by CompTIA.
        </p>
      </div>
    </div>
  );
}
