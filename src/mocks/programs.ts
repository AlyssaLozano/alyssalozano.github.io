export const programs = [
  {
    id: 'secplus',
    slug: 'security-plus',
    badge: '8 Weeks · 240 Clock Hours',
    certification: 'CompTIA Security+ SY0-701',
    title: 'Security+ Certification Readiness',
    subtitle: 'CompTIA Security+ SY0-701',
    description:
      'A focused, accelerated pathway to one of the most sought-after entry-level security certifications in the industry. Designed for aspiring security professionals and IT practitioners looking to validate core cybersecurity knowledge.',
    duration: '8 Weeks · 240 Clock Hours',
    format: 'Online Synchronous',
    pricing: '$4,500',
    pricingDetail: '+ $150 application fee + $75 books/materials',
    pricingWorkforce: '$8,500',
    highlights: [
      'Full exam domain coverage aligned to SY0-701',
      'Live instruction from industry-experienced professionals',
      'Practice exams and performance-based questions',
      'Small cohort sizes for focused learning',
    ],
    targetRoles: ['IT Security Analyst', 'Systems Administrator (Security)', 'Network Security Specialist'],
    domains: [
      { name: 'General Security Concepts', weight: 12 },
      { name: 'Threats, Vulnerabilities & Mitigations', weight: 22 },
      { name: 'Security Architecture', weight: 18 },
      { name: 'Security Operations', weight: 28 },
      { name: 'Security Program Management', weight: 20 },
    ],
  },
  {
    id: 'cysa',
    slug: 'cybersecurity-operations-analyst',
    badge: '8 Weeks · 120 Clock Hours',
    certification: 'CompTIA CySA+ CS0-003',
    title: 'Cybersecurity Operations Analyst Skills',
    subtitle: 'CompTIA CySA+ CS0-003',
    description:
      'An intensive, hands-on program developing the analytical skills needed for real-world Security Operations Center roles. Prepares students to detect, analyze, and respond to modern cyber threats in enterprise environments.',
    duration: '8 Weeks · 120 Clock Hours',
    format: 'Online Synchronous · ~15 hrs/week',
    pricing: '$4,500',
    pricingDetail: '+ $150 application fee + $75 books/materials',
    highlights: [
      'SIEM, EDR, and SOAR tool proficiency',
      'MITRE ATT&CK and Cyber Kill Chain frameworks',
      'Hands-on phishing and network traffic analysis',
      'Capstone host monitoring and incident response project',
    ],
    targetRoles: ['Tier 1 SOC Analyst', 'Cybersecurity Analyst I', 'Security Monitoring Technician'],
    modules: [
      { num: '01', title: 'Blue Team Foundations', topics: 'Defensive mindset, threat landscape, analyst workflows' },
      { num: '02', title: 'SOC Team Internals', topics: 'Tier structures, escalation, shift operations, documentation' },
      { num: '03', title: 'Core SOC Solutions', topics: 'SIEM platforms, EDR systems, SOAR automation' },
      { num: '04', title: 'Cyber Defense Frameworks', topics: 'MITRE ATT&CK, Cyber Kill Chain, Diamond Model' },
      { num: '05', title: 'Phishing Analysis', topics: 'Header analysis, payload examination, IOC extraction' },
      { num: '06', title: 'Network Traffic Analysis', topics: 'Wireshark, Zeek, anomaly detection, protocol analysis' },
      { num: '07', title: 'Network Security Monitoring', topics: 'IDS/IPS, signature tuning, alert triage' },
      { num: '08', title: 'Host Monitoring & Capstone', topics: 'Log analysis, endpoint forensics, full incident simulation' },
    ],
  },
];

export const programFaqs = [
  {
    q: 'Are these programs self-paced or instructor-led?',
    a: 'Both programs are online synchronous — you attend live sessions with an instructor and cohort, not pre-recorded video lectures. This ensures accountability, real-time Q&A, and a structured learning environment.',
  },
  {
    q: 'Do I need prior cybersecurity experience?',
    a: 'The Security+ program is designed for students with basic IT familiarity. The Cyber Ops program recommends foundational networking and security knowledge, though motivated career-changers are encouraged to apply.',
  },
  {
    q: 'What is workforce-sponsored enrollment (WIOA / WorkSource)?',
    a: 'Workforce-sponsored enrollment is an alternative funding pathway available to eligible students through WorkSource Georgia and the Workforce Innovation and Opportunity Act (WIOA). Rather than paying tuition directly, a sponsoring workforce agency covers the cost of training. This pathway includes expanded services — employment readiness support, resume development, job placement assistance, case management, and post-completion follow-up — in addition to the core training program. Tuition under this pathway is $8,500 for the Security+ Readiness Program due to the inclusion of these required services.',
  },
  {
    q: 'How do I find out if I qualify for WIOA / WorkSource funding?',
    a: 'Eligibility for workforce-sponsored funding is determined by your local WorkSource Georgia Career Center, not by Acumen Career Academy. To explore eligibility, contact your nearest WorkSource Georgia office and ask about approved training programs and WIOA funding. If approved, your career center will coordinate enrollment directly with us. You can begin that process while also submitting an inquiry through our admissions page.',
  },
  {
    q: 'Are exam fees included in tuition?',
    a: 'Exam fees are NOT included in tuition unless explicitly stated in writing at the time of enrollment. Students are responsible for scheduling and funding their own certification exams.',
  },
  {
    q: 'Is Acumen affiliated with CompTIA?',
    a: 'No. Acumen Career Academy is not affiliated with, endorsed by, or authorized by CompTIA. CompTIA Security+ and CySA+ are registered trademarks of CompTIA, Inc.',
  },
  {
    q: 'Does completion guarantee employment or certification?',
    a: 'Completion of our programs does not guarantee certification attainment or employment. Salary figures referenced are based on publicly available regional data; individual results will vary.',
  },
  {
    q: 'Is Acumen Career Academy licensed?',
    a: 'Yes. Acumen Career Academy is licensed by the Georgia Nonpublic Postsecondary Education Commission (GNPEC).',
  },
];