import { useState } from 'react';

const deliverables = [
  {
    id: 'report',
    icon: 'ri-file-text-line',
    tag: 'DELIVERABLE 01',
    title: 'Written Investigation Reports',
    short: 'Documented incident analysis from detection through containment',
    detail:
      'You write structured investigation reports for real-scenario incidents — documenting the timeline, affected assets, attacker TTPs, evidence chain, and recommended remediation. The kind of artifact a hiring manager can actually read.',
    preview: {
      type: 'document',
      filename: 'IR-2024-0047_LateralMovement.pdf',
      lines: [
        { label: 'Incident ID', value: 'IR-2024-0047' },
        { label: 'Severity', value: 'HIGH', color: 'text-orange-400' },
        { label: 'Tactic', value: 'TA0008 — Lateral Movement' },
        { label: 'Tool', value: 'TheHive + Splunk' },
        { label: 'Status', value: 'CLOSED — Contained', color: 'text-green-400' },
      ],
      body: 'At 14:32 UTC, SIEM alert triggered on anomalous SMB traffic from WKSTN-07 to DC01. Investigation confirmed credential reuse via Pass-the-Hash. Attacker pivoted from compromised endpoint to domain controller within 4 minutes of initial access...',
    },
  },
  {
    id: 'rules',
    icon: 'ri-code-s-slash-line',
    tag: 'DELIVERABLE 02',
    title: 'Three Original Detection Rules',
    short: 'Sigma rules mapped across three distinct MITRE ATT&CK tactics',
    detail:
      'You write three original Sigma detection rules — each targeting a different ATT&CK tactic. Not copy-paste from a repo. You understand the logic, the data source, and why the rule fires. These go straight into your portfolio.',
    preview: {
      type: 'code',
      filename: 'detect_lsass_dump.yml',
      code: [
        { token: 'key', text: 'title' },
        { token: 'op', text: ': ' },
        { token: 'val', text: 'LSASS Memory Dump via ProcDump' },
        { token: 'key', text: '\nstatus' },
        { token: 'op', text: ': ' },
        { token: 'val', text: 'stable' },
        { token: 'key', text: '\ntactic' },
        { token: 'op', text: ': ' },
        { token: 'val', text: 'TA0006 — Credential Access' },
        { token: 'key', text: '\ndetection' },
        { token: 'op', text: ':' },
        { token: 'key', text: '\n  selection' },
        { token: 'op', text: ':' },
        { token: 'key', text: '\n    Image|endswith' },
        { token: 'op', text: ': ' },
        { token: 'str', text: "'\\\\ procdump.exe'" },
        { token: 'key', text: '\n    CommandLine|contains' },
        { token: 'op', text: ': ' },
        { token: 'str', text: "'-ma lsass'" },
        { token: 'key', text: '\n  condition' },
        { token: 'op', text: ': ' },
        { token: 'val', text: 'selection' },
      ],
    },
  },
  {
    id: 'soar',
    icon: 'ri-flow-chart',
    tag: 'DELIVERABLE 03',
    title: 'Multi-Source SOAR Workflow',
    short: 'Automated triage pipeline built in n8n connecting real data sources',
    detail:
      'You build a working SOAR automation workflow in n8n that ingests alerts from multiple sources, enriches indicators, and routes cases to TheHive. Not a diagram — an actual running workflow you can demo.',
    preview: {
      type: 'workflow',
      nodes: [
        { id: 'A', label: 'Splunk Alert', icon: 'ri-alarm-warning-line', color: 'text-orange-400 border-orange-400/30 bg-orange-400/5' },
        { id: 'B', label: 'IP Enrichment', icon: 'ri-search-eye-line', color: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5' },
        { id: 'C', label: 'Severity Router', icon: 'ri-git-branch-line', color: 'text-gold border-gold/30 bg-gold/5' },
        { id: 'D', label: 'TheHive Case', icon: 'ri-folder-open-line', color: 'text-green-400 border-green-400/30 bg-green-400/5' },
        { id: 'E', label: 'Analyst Notify', icon: 'ri-notification-3-line', color: 'text-ice border-white/20 bg-white/5' },
      ],
    },
  },
  {
    id: 'case',
    icon: 'ri-archive-drawer-line',
    tag: 'DELIVERABLE 04',
    title: 'Case Management Evidence',
    short: 'Documented case lifecycle from alert triage through closure in TheHive',
    detail:
      'You manage real cases end-to-end in TheHive — from initial alert triage through evidence collection, task assignment, and formal closure. Your case history is exportable, reviewable, and shows a hiring manager exactly how you work.',
    preview: {
      type: 'case',
      cases: [
        { id: '#0041', title: 'Phishing Campaign — Finance Dept', severity: 'MEDIUM', status: 'Closed', tasks: 6, iocs: 4 },
        { id: '#0044', title: 'Suspicious Outbound DNS Tunnel', severity: 'HIGH', status: 'Closed', tasks: 8, iocs: 7 },
        { id: '#0047', title: 'Lateral Movement — WKSTN-07', severity: 'HIGH', status: 'Closed', tasks: 11, iocs: 9 },
      ],
    },
  },
];

const severityColor: Record<string, string> = {
  HIGH: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
  MEDIUM: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  LOW: 'text-green-400 bg-green-400/10 border-green-400/30',
};

function DocumentPreview({ preview }: { preview: typeof deliverables[0]['preview'] }) {
  if (preview.type === 'document' && 'lines' in preview) {
    return (
      <div className="font-mono text-xs rounded-xl overflow-hidden border border-white/8 bg-navy-950/80">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/8 bg-white/3">
          <i className="ri-file-pdf-line text-red-400 text-sm" />
          <span className="text-steel/70 text-xs">{preview.filename}</span>
        </div>
        <div className="p-4 space-y-2">
          {preview.lines?.map((l) => (
            <div key={l.label} className="flex items-center gap-3">
              <span className="text-steel/50 w-24 shrink-0">{l.label}</span>
              <span className={l.color ?? 'text-ice/80'}>{l.value}</span>
            </div>
          ))}
          <div className="mt-3 pt-3 border-t border-white/8">
            <p className="text-steel/60 leading-relaxed text-xs">{preview.body}</p>
          </div>
        </div>
      </div>
    );
  }

  if (preview.type === 'code' && 'code' in preview) {
    return (
      <div className="font-mono text-xs rounded-xl overflow-hidden border border-white/8 bg-navy-950/80">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/8 bg-white/3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <span className="text-steel/70 text-xs ml-2">{preview.filename}</span>
        </div>
        <div className="p-4 leading-relaxed whitespace-pre-wrap">
          {preview.code?.map((t, i) => (
            <span
              key={i}
              className={
                t.token === 'key'
                  ? 'text-gold/80'
                  : t.token === 'str'
                  ? 'text-green-400/80'
                  : t.token === 'val'
                  ? 'text-ice/70'
                  : 'text-steel/50'
              }
            >
              {t.text}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (preview.type === 'workflow' && 'nodes' in preview) {
    return (
      <div className="rounded-xl border border-white/8 bg-navy-950/80 p-5">
        <p className="font-mono text-steel/50 text-xs mb-4 tracking-widest">n8n WORKFLOW — SOAR PIPELINE</p>
        <div className="flex flex-col gap-2">
          {preview.nodes?.map((node, i) => (
            <div key={node.id} className="flex items-center gap-3">
              <div className={`flex items-center gap-2.5 px-3 py-2 rounded-lg border flex-1 ${node.color}`}>
                <i className={`${node.icon} text-sm`} />
                <span className="font-mono text-xs">{node.label}</span>
              </div>
              {i < (preview.nodes?.length ?? 0) - 1 && (
                <div className="flex flex-col items-center w-5 shrink-0">
                  <i className="ri-arrow-down-line text-gold/30 text-sm" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-white/8 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-green-400/70 text-xs">Workflow active — 3 executions today</span>
        </div>
      </div>
    );
  }

  if (preview.type === 'case' && 'cases' in preview) {
    return (
      <div className="rounded-xl border border-white/8 bg-navy-950/80 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/8 bg-white/3">
          <i className="ri-archive-drawer-line text-gold text-sm" />
          <span className="font-mono text-steel/70 text-xs">TheHive — Case Manager</span>
        </div>
        <div className="divide-y divide-white/5">
          {preview.cases?.map((c) => (
            <div key={c.id} className="px-4 py-3 flex items-center gap-3">
              <span className="font-mono text-steel/40 text-xs w-12 shrink-0">{c.id}</span>
              <div className="flex-1 min-w-0">
                <p className="font-mono text-ice/80 text-xs truncate">{c.title}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="font-mono text-steel/40 text-xs">{c.tasks} tasks</span>
                  <span className="font-mono text-steel/40 text-xs">{c.iocs} IOCs</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 shrink-0">
                <span className={`font-mono text-xs px-1.5 py-0.5 rounded border ${severityColor[c.severity]}`}>
                  {c.severity}
                </span>
                <span className="font-mono text-green-400/70 text-xs">{c.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

export default function PortfolioSection() {
  const [active, setActive] = useState(0);
  const current = deliverables[active];

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-gold/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal-element">
          <p className="font-mono text-gold text-xs tracking-widest mb-3">WHAT YOU&apos;LL BUILD</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ice mb-5 leading-tight">
            You Graduate with a Portfolio.<br />
            <span className="gold-text">Not Just a Certificate.</span>
          </h2>
          <p className="font-sans text-steel text-base leading-relaxed max-w-2xl mx-auto">
            Every Cyber Ops student produces four verifiable artifacts that prove real skill to any hiring manager.
            These aren&apos;t homework assignments — they&apos;re the kind of work you&apos;d do on the job.
          </p>
        </div>

        {/* Main interactive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left: deliverable selector */}
          <div className="lg:col-span-2 flex flex-col gap-3 reveal-element">
            {deliverables.map((d, i) => (
              <button
                key={d.id}
                onClick={() => setActive(i)}
                className={`text-left p-5 rounded-xl border transition-all duration-300 cursor-pointer group ${
                  active === i
                    ? 'border-gold/50 bg-gold/8 gold-border-glow'
                    : 'border-white/8 bg-white/2 hover:border-gold/25 hover:bg-white/4'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-lg border shrink-0 transition-colors ${
                      active === i
                        ? 'border-gold/40 bg-gold/10'
                        : 'border-white/10 bg-white/3 group-hover:border-gold/25'
                    }`}
                  >
                    <i className={`${d.icon} text-lg ${active === i ? 'text-gold' : 'text-steel group-hover:text-gold/70'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-mono text-xs tracking-widest mb-1 ${active === i ? 'text-gold' : 'text-steel/50'}`}>
                      {d.tag}
                    </p>
                    <p className={`font-display font-bold text-sm leading-snug mb-1 ${active === i ? 'text-ice' : 'text-ice/70'}`}>
                      {d.title}
                    </p>
                    <p className={`font-sans text-xs leading-relaxed ${active === i ? 'text-steel' : 'text-steel/50'}`}>
                      {d.short}
                    </p>
                  </div>
                  <i
                    className={`ri-arrow-right-s-line text-lg shrink-0 transition-all ${
                      active === i ? 'text-gold translate-x-0.5' : 'text-steel/20'
                    }`}
                  />
                </div>
              </button>
            ))}

            {/* Bottom note */}
            <div className="mt-2 p-4 rounded-xl border border-gold/15 bg-gold/3">
              <div className="flex items-start gap-3">
                <i className="ri-shield-check-line text-gold text-sm mt-0.5 shrink-0" />
                <p className="font-sans text-steel text-xs leading-relaxed">
                  All four deliverables are produced during the Cyber Ops Analyst track. Your portfolio is yours to keep — export, share, and present to employers.
                </p>
              </div>
            </div>
          </div>

          {/* Right: detail + preview */}
          <div className="lg:col-span-3 reveal-element" style={{ transitionDelay: '150ms' }}>
            <div className="glass-card gold-border-glow rounded-2xl overflow-hidden">
              {/* Card header */}
              <div className="px-7 pt-7 pb-5 border-b border-gold/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl border border-gold/30 bg-gold/8">
                    <i className={`${current.icon} text-gold text-xl`} />
                  </div>
                  <div>
                    <p className="font-mono text-gold text-xs tracking-widest">{current.tag}</p>
                    <h3 className="font-display text-xl font-bold text-ice leading-snug">{current.title}</h3>
                  </div>
                </div>
                <p className="font-sans text-steel text-sm leading-relaxed">{current.detail}</p>
              </div>

              {/* Preview */}
              <div className="p-7">
                <p className="font-mono text-steel/40 text-xs tracking-widest mb-4">PREVIEW</p>
                <DocumentPreview preview={current.preview} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom comparison callout */}
        <div className="mt-16 reveal-element">
          <div className="relative rounded-2xl overflow-hidden border border-gold/20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gold/10 text-center">
              {[
                {
                  icon: 'ri-close-circle-line',
                  color: 'text-red-400/70',
                  label: 'Self-Paced Bootcamp',
                  outcome: 'You finish a course. No proof of skill.',
                },
                {
                  icon: 'ri-close-circle-line',
                  color: 'text-red-400/70',
                  label: 'College Degree',
                  outcome: 'You get a transcript. No portfolio.',
                },
                {
                  icon: 'ri-checkbox-circle-fill',
                  color: 'text-green-400',
                  label: 'Acumen Cyber Ops Track',
                  outcome: 'Where competitors hand you a certificate, we hand you evidence.',
                  highlight: true,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`px-8 py-8 flex flex-col items-center gap-3 ${item.highlight ? 'bg-gold/5' : ''}`}
                >
                  <i className={`${item.icon} text-3xl ${item.color}`} />
                  <p className={`font-display font-bold text-sm ${item.highlight ? 'text-gold' : 'text-ice/60'}`}>
                    {item.label}
                  </p>
                  <p className={`font-sans text-xs leading-relaxed ${item.highlight ? 'text-steel' : 'text-steel/40'}`}>
                    {item.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
