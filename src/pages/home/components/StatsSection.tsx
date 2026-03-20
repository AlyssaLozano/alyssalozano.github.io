import { useCounter } from '../../../hooks/useCounter';
import { stats } from '../../../mocks/stats';

interface StatCardProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  decimals?: number;
  delay?: number;
  large?: boolean;
}

function StatCard({ value, prefix = '', suffix = '', label, description, decimals = 0, delay = 0, large = false }: StatCardProps) {
  const { count, ref } = useCounter(value, 2200, decimals);

  return (
    <div
      className={`glass-card gold-border-glow stat-card-hover p-6 flex flex-col gap-2 reveal-element ${large ? 'row-span-2' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {large && (
        <div className="w-16 h-16 flex items-center justify-center mb-2">
          <i className="ri-global-line text-gold text-4xl" />
        </div>
      )}
      <div className="flex items-end gap-0.5">
        {prefix && <span className={`font-display font-bold text-gold ${large ? 'text-3xl' : 'text-2xl'} leading-none mb-1`}>{prefix}</span>}
        <span ref={ref} className={`font-display font-bold shimmer-text ${large ? 'text-6xl' : 'text-4xl'} leading-none`}>
          {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        </span>
        {suffix && <span className={`font-display font-bold text-gold ${large ? 'text-3xl' : 'text-2xl'} leading-none mb-1`}>{suffix}</span>}
      </div>
      <p className={`font-sans text-ice font-semibold ${large ? 'text-lg' : 'text-sm'} leading-snug`}>{label}</p>
      <p className="font-mono text-steel text-xs">{description}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-14">
          <div className="reveal-element">
            <p className="font-mono text-gold text-xs tracking-widest mb-3">THE OPPORTUNITY</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-ice">The Numbers<br />Don&apos;t Lie</h2>
          </div>
          <p className="font-sans text-steel text-base leading-relaxed max-w-md reveal-element">
            The cybersecurity workforce gap is the defining career opportunity of the decade. 
            Acumen exists to help you claim your share of it.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <StatCard
              key={s.id}
              value={s.value}
              prefix={s.prefix}
              suffix={s.suffix}
              label={s.label}
              description={s.description}
              decimals={s.value % 1 !== 0 ? 1 : 0}
              delay={i * 80}
              large={s.id === 'jobs'}
            />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="font-mono text-steel/50 text-xs mt-8 text-center reveal-element">
          * Salary figures based on publicly available regional data. Individual results will vary.
        </p>
      </div>
    </section>
  );
}
