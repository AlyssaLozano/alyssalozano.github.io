import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Alert {
  id: number;
  time: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  event: string;
  source: string;
}

const alertPool: Alert[] = [
  { id: 1, time: '14:32:07', severity: 'CRITICAL', event: 'Lateral Movement Detected', source: '10.0.2.45 → DC01' },
  { id: 2, time: '14:32:19', severity: 'HIGH', event: 'Brute Force — SSH Port 22', source: '185.220.101.7 → WKSTN-09' },
  { id: 3, time: '14:32:31', severity: 'MEDIUM', event: 'Suspicious PowerShell Exec', source: 'WKSTN-14 [HR-Domain]' },
  { id: 4, time: '14:32:44', severity: 'HIGH', event: 'C2 Beacon Identified', source: '203.0.113.52 ← WKSTN-03' },
  { id: 5, time: '14:32:58', severity: 'CRITICAL', event: 'Ransomware Indicator — MBR Write', source: 'SRV-BACKUP-01' },
  { id: 6, time: '14:33:10', severity: 'LOW', event: 'Port Scan — 1024 ports', source: '192.168.1.99' },
  { id: 7, time: '14:33:22', severity: 'HIGH', event: 'Credential Dump — LSASS Access', source: 'WKSTN-07 [FIN]' },
  { id: 8, time: '14:33:35', severity: 'MEDIUM', event: 'Unusual Outbound DNS Request', source: 'WKSTN-22 → 8.8.8.8' },
];

const severityColor: Record<string, string> = {
  CRITICAL: 'text-red-400 bg-red-400/10 border-red-400/30',
  HIGH: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
  MEDIUM: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  LOW: 'text-green-400 bg-green-400/10 border-green-400/30',
};

function SocMonitor() {
  const [visibleAlerts, setVisibleAlerts] = useState<Alert[]>(alertPool.slice(0, 3));
  const [currentIndex, setCurrentIndex] = useState(3);
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinking(true);
      setTimeout(() => {
        setVisibleAlerts((prev) => {
          const nextAlert = alertPool[currentIndex % alertPool.length];
          const updated = [nextAlert, ...prev.slice(0, 4)];
          return updated;
        });
        setCurrentIndex((ci) => ci + 1);
        setBlinking(false);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative glass-card soc-glow border border-green-500/20 overflow-hidden w-full max-w-md">
      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent pointer-events-none"
        style={{ animation: 'scanLine 3s linear infinite', top: 0 }}
      />
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-green-500/15">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="font-mono text-green-400/70 text-xs ml-3">SOC-DASHBOARD v3.2.1</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className={`w-1.5 h-1.5 rounded-full bg-green-400 ${blinking ? 'opacity-0' : 'opacity-100'} transition-opacity`} />
          <span className="font-mono text-green-400 text-xs">LIVE</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 border-b border-green-500/10">
        {[
          { label: 'ALERTS', value: '247', color: 'text-red-400' },
          { label: 'ENDPOINTS', value: '1,842', color: 'text-ice' },
          { label: 'ANALYZED', value: '99.7%', color: 'text-green-400' },
        ].map((s) => (
          <div key={s.label} className="py-2 px-3 text-center border-r border-green-500/10 last:border-r-0">
            <p className={`font-mono text-sm font-semibold ${s.color}`}>{s.value}</p>
            <p className="font-mono text-steel text-xs mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Alerts */}
      <div className="p-3 space-y-2 min-h-52">
        {visibleAlerts.map((alert, i) => (
          <div
            key={`${alert.id}-${i}`}
            className={`p-2.5 rounded-lg bg-navy-800/80 border border-green-500/10 ${i === 0 ? 'alert-slide-in' : ''}`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono text-steel text-xs">{alert.time}</span>
              <span className={`font-mono text-xs px-2 py-0.5 rounded border ${severityColor[alert.severity]}`}>
                {alert.severity}
              </span>
            </div>
            <p className="font-mono text-ice text-xs font-medium">{alert.event}</p>
            <p className="font-mono text-steel text-xs mt-0.5 truncate">{alert.source}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 border-t border-green-500/10 flex items-center gap-2">
        <span className="font-mono text-green-400 text-xs animate-pulse">■</span>
        <span className="font-mono text-steel text-xs">Monitoring 1,842 endpoints in real-time</span>
        <span className="font-mono text-green-400 text-xs animate-[blink_1s_step-end_infinite]">_</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-900 grid-overlay">
      {/* Animated blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/4 rounded-full blur-3xl animate-blob-delay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-700/30 rounded-full blur-3xl pointer-events-none" />

      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-transparent to-navy-900/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left content */}
          <div className="flex-1 lg:max-w-xl">
            {/* GNPEC badge */}
            <div className="inline-flex items-center gap-2 glass-card border border-gold/30 px-4 py-2 rounded-full mb-8 reveal-element">
              <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="font-mono text-gold text-xs tracking-widest">GNPEC AUTHORIZED INSTITUTION</span>
            </div>

            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-ice mb-2 reveal-element">
              Train for the
            </h1>
            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 reveal-element" style={{ animationDelay: '0.1s' }}>
              <span className="gold-text">Frontlines</span>{' '}
              <span className="text-ice">of</span>
            </h1>
            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-ice mb-8 reveal-element" style={{ animationDelay: '0.2s' }}>
              Cybersecurity
            </h1>

            <p className="font-sans text-steel text-lg leading-relaxed mb-10 reveal-element" style={{ animationDelay: '0.3s' }}>
              Elite workforce training for security operations roles. GNPEC-authorized programs built by a former NSA professional and college professor — designed for Augusta&apos;s federal, defense, and enterprise sectors.
            </p>

            <div className="flex flex-wrap items-center gap-4 reveal-element" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/programs"
                className="btn-gold px-7 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2 cursor-pointer"
              >
                Explore Programs <i className="ri-arrow-right-line" />
              </Link>
              <a
                href="mailto:info@acumencareeracademy.com"
                className="btn-outline-gold px-7 py-3.5 rounded-full text-sm cursor-pointer"
              >
                Request Information
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-6 mt-10 reveal-element" style={{ animationDelay: '0.5s' }}>
              {[
                { icon: 'ri-shield-check-line', text: 'GNPEC Authorized' },
                { icon: 'ri-building-2-line', text: 'Near Fort Eisenhower (Formerly Fort Gordon)' },
                { icon: 'ri-time-line', text: '8-Week Programs' },
              ].map((t) => (
                <div key={t.text} className="flex items-center gap-2">
                  <i className={`${t.icon} text-gold text-sm`} />
                  <span className="font-mono text-steel text-xs">{t.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: SOC Monitor */}
          <div className="flex-1 flex justify-center lg:justify-end w-full reveal-element" style={{ animationDelay: '0.3s' }}>
            <SocMonitor />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal-element">
          <span className="font-mono text-steel text-xs tracking-widest">SCROLL</span>
          <div className="flex flex-col gap-1 items-center">
            <i className="ri-arrow-down-s-line text-gold text-lg animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
