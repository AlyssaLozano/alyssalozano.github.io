export const programs = [
  {
    id: 'secplus',
    slug: 'security-plus',
    badge: '12 Weeks · 240 Clock Hours',
    certification: 'CompTIA Security+',
    title: 'Cybersecurity Practitioner Program',
    subtitle: 'CompTIA Security+',
    description:
      'A comprehensive 12-week practitioner program preparing you for the CompTIA Security+ certification — the industry\u0027s most sought-after entry-level security credential. Live, instructor-led cohorts, not self-paced video. Designed for career-changers, military spouses, veterans, and hands-on learners who need real skills fast.',
    duration: '12 Weeks · 240 Clock Hours',
    format: 'Online Synchronous · 20 hrs/week · Mon\u2013Thu, 9:00 AM\u20132:00 PM ET',
    pricing: '$6,725',
    pricingDetail: 'Total cost: $6,500 tuition + $150 application + $75 books/materials',
    highlights: [
      'Full exam domain coverage aligned to the Security+ exam blueprint',
      'Live, synchronous instruction — not pre-recorded lectures',
      'Practice exams and performance-based questions',
      'Small cohort sizes for direct instructor access',
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
    certification: 'Blue Team Level 1 (BTL1) & CCNA Cybersecurity (200-201)',
    title: 'Cybersecurity Operations Analyst Skills Program',
    subtitle: 'Blue Team Level 1 (BTL1) & CCNA Cybersecurity (200-201)',
    description:
      'An intensive, hands-on SOC Analyst track built for adults who need real skills fast — aligned to the Blue Team Level 1 (BTL1) certification from Security Blue Team and the CCNA Cybersecurity (200-201) certification from Cisco. Train on Splunk, Sigma, n8n, TheHive, Wireshark, and Chainsaw. Graduate with a verifiable portfolio — not just a certificate.',
    duration: '8 Weeks · 120 Clock Hours',
    format: 'Online Synchronous · 15 hrs/week · Mon\u2013Fri, 9:00 AM\u201312:00 PM ET',
    pricing: '$4,725',
    pricingDetail: 'Total cost: $4,500 tuition + $150 application + $75 books/materials',
    highlights: [
      'Train on real tools: Splunk, Sigma, n8n, TheHive, Wireshark, Chainsaw',
      'Graduate with a verifiable portfolio of investigation reports and detection rules',
      'Three original detection rules mapped across three MITRE ATT&CK tactics',
      'Multi-source SOAR workflow and documented case management evidence',
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
    q: 'What does tuition actually include?',
    a: 'The Cybersecurity Practitioner Program costs $6,725 total ($6,500 tuition + a $150 non-refundable application fee + $75 books/materials). The Cyber Ops Analyst Skills Program costs $4,725 total ($4,500 tuition + $150 + $75). Certification exam fees are not included — students are responsible for scheduling and funding their own exams. There are no hidden fees beyond what is stated in your enrollment agreement.',
  },
  {
    q: 'How does the portfolio work, and how do I use it in a job application?',
    a: 'Cyber Ops students produce four verifiable artifacts during the program: written incident investigation reports, three original Sigma detection rules mapped across three MITRE ATT\u0026CK tactics, a working multi-source SOAR workflow built in n8n, and documented case management evidence from TheHive. These are real deliverables — not homework assignments. You own them. You can share them directly with employers, include them in a GitHub portfolio, reference them in interviews, or attach them to job applications. They demonstrate that you can do the work, not just pass a test.',
  },
  {
    q: 'Why is Acumen so much cheaper than other bootcamps?',
    a: 'National cybersecurity bootcamps typically charge $10,000 to $15,000 or more for programs that take 6 to 12 months. Acumen charges $4,725 to $6,725 total for focused 8 to 12-week programs. We keep costs low by running focused, synchronous cohorts without the overhead of large campuses, marketing machines, or bloated curricula. Every dollar goes toward instruction, tools, and outcomes — not brand spend.',
  },
  {
    q: 'Are these programs self-paced or instructor-led?',
    a: 'Both programs are online synchronous — you attend live sessions with an instructor and cohort, not pre-recorded video lectures. This is not a self-paced bootcamp that leaves you on your own. Every session is live, every cohort is small, and every student has direct access to their instructor.',
  },
  {
    q: 'What tools will I actually use during training?',
    a: 'Cyber Ops students train on the same platforms SOC analysts use every shift: Splunk for SIEM and log analysis, Sigma for writing detection rules, Wireshark for network traffic analysis, TheHive for case management, n8n for SOAR automation, and Chainsaw for log forensics. These are not sandboxed demos or toy environments — you work in real tools from day one.',
  },
  {
    q: 'Who are these programs designed for?',
    a: 'Acumen was built for adults other programs overlook: career-changers with degrees they do not want to repeat, military spouses who need a portable credential, veterans not relying on the GI Bill, reentry candidates, and hands-on learners who did not thrive in traditional classrooms. If you need real skills fast and cannot spend two years in school or $15,000 on a bootcamp, these programs were built for you.',
  },
  {
    q: 'Do I need prior cybersecurity experience?',
    a: 'The Cybersecurity Practitioner Program is designed for students with basic IT familiarity. The Cyber Ops Analyst track recommends foundational networking and security knowledge — Security+ or equivalent experience is ideal. That said, motivated career-changers with strong technical aptitude are encouraged to apply and discuss their background during the admissions conversation.',
  },
  {
    q: 'What is workforce-sponsored enrollment (WIOA / WorkSource)?',
    a: 'Workforce-sponsored enrollment is an alternative funding pathway available to eligible students through WorkSource Georgia and the Workforce Innovation and Opportunity Act (WIOA). Rather than paying tuition directly, a sponsoring workforce agency covers the cost of training. This pathway may include expanded services — employment readiness support, resume development, job placement assistance, case management, and post-completion follow-up — in addition to the core training program. Final tuition and funding are determined in coordination with the sponsoring agency.',
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
    q: 'Is Acumen affiliated with CompTIA, Cisco, or Security Blue Team?',
    a: 'No. Acumen Career Academy is not affiliated with, endorsed by, sponsored by, or authorized by CompTIA, Cisco, or Security Blue Team. Our programs prepare you academically to sit for those exams. The exams themselves are administered by authorized third party testing providers.',
  },
  {
    q: 'Does completion guarantee employment or certification?',
    a: 'Completion of our programs does not guarantee certification attainment or employment. Individual results will vary.',
  },
  {
    q: 'Is Acumen Career Academy licensed?',
    a: 'Yes. Acumen Career Academy is licensed by the Georgia Nonpublic Postsecondary Education Commission (GNPEC).',
  },
];