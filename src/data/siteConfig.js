export const siteConfig = {
  name: 'M Solutions',
  fullName: 'M Solutions — Hospital Software, Enterprise Networks & CCTV Infrastructure',
  tagline: 'Enterprise Infrastructure & Software Built for Scale.',
  location: 'Lahore, Pakistan',
  availability: '24/7 Human & Technical Support',
  email: 'msolution1337@gmail.com',
  phone: '+92 322 9015177',
  whatsappBaseUrl: 'https://wa.me/923229015177',
  copyrightYear: 2026,

  announcement: {
    badge: 'NEW',
    text: 'Explore M Solutions 2026 Roadmap: HIMS Analyzer Interfacing & Wi-Fi 6 Backbones',
    href: '#solutions',
  },

  navLinks: [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Platform', href: '#platform' },
    { label: 'Case Studies', href: '#case-study' },
    { label: 'Hardware Gallery', href: '#gallery' },
    { label: 'Who We Serve', href: '#who-we-serve' },
    { label: 'FAQ', href: '#faq' },
  ],

  stats: [
    { value: '99.9%', label: 'Uptime SLA', icon: '⚡' },
    { value: '45+', label: 'Hospitals & Labs Active', icon: '✚' },
    { value: '100%', label: 'Audit & Data Security', icon: '🛡️' },
    { value: '24/7', label: 'Human Engineering Support', icon: '🎧' },
  ],

  partners: [
    'Cisco Systems',
    'Ubiquiti UniFi',
    'Hikvision Enterprise',
    'Dahua Technology',
    'Dell PowerEdge',
    'HP Enterprise',
    'Mikrotik Routing',
    'Fortinet Firewalls',
    'Mindray Analyzers',
    'Sysmex Hematology',
    'Microsoft Windows Server',
    'Linux Enterprise OS',
  ],

  solutions: [
    {
      id: 'infrastructure',
      pill: 'Infrastructure Platforms',
      title: 'Enterprise Networks & Optical Fiber',
      summary: 'High-availability Cat6A & optical fiber cabling, multi-VLAN segmentation, and enterprise Wi-Fi 6 mesh designed for uninterrupted operational uptime.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
      bullets: [
        'Multi-VLAN network segmentation (Guest, Staff, Medical LAN)',
        'Optical fiber transceivers & high-throughput core switching',
        'Failover dual-WAN routing & enterprise firewall protection',
        'Server rack assembly, cable labeling & UPS battery backup',
      ],
      ctaText: 'Build Your Backbone',
    },
    {
      id: 'hims-lims',
      pill: 'Healthcare Software',
      title: 'Hospital & Lab Automation (HIMS / LIMS)',
      summary: 'Mission-critical software engineered for clinical precision, bidirectional laboratory analyzer interfacing, and zero patient record loss.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
      bullets: [
        'Direct bidirectional analyzer machine interfacing (ASTM / HL7)',
        'Automated verified lab reporting with instant QR code lookup',
        'OPD, IPD, doctor scheduling & integrated pharmacy inventory',
        'Role-based access control & tamper-proof audit trails',
      ],
      ctaText: 'Explore Hospital Systems',
    },
    {
      id: 'cctv-security',
      pill: 'Security & Surveillance',
      title: '4K IP CCTV & Biometric Access',
      summary: 'Commercial video walls, AI-powered motion tripwires, and biometric turnstiles providing 24/7 visibility and verified premises security.',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=900&q=80',
      bullets: [
        '4K IP cameras with Night ColorVu optics & perimeter alerts',
        'Centralized NVR storage arrays with RAID data redundancy',
        'Biometric fingerprint & facial recognition access control',
        'Encrypted mobile live streaming on iOS, Android & Desktop',
      ],
      ctaText: 'Secure Your Facility',
    },
  ],

  supportCards: [
    {
      icon: '🏢',
      title: 'Fewer Vendors to Manage',
      desc: 'Software, networking, and surveillance from one single accountable partner.',
    },
    {
      icon: '🎯',
      title: 'Clear Accountability',
      desc: 'Direct systems engineers with no middleman runarounds or blame shifting.',
    },
    {
      icon: '🛡️',
      title: 'Lower Operational Risk',
      desc: 'Hardened network firewalls, isolated VLANs, and automated daily backups.',
    },
    {
      icon: '⚡',
      title: 'Faster Deployments',
      desc: 'Tested architecture deployed and calibrated on-site in days, not months.',
    },
    {
      icon: '🔄',
      title: 'Engineered Together by Design',
      desc: 'Medical analyzers talk directly to the database, billing, and cloud backup.',
    },
  ],

  caseStudy: {
    client: 'Diagnostic & Care Multispecialty Center, Lahore',
    metric: '68% faster',
    metricLabel: 'Report turnaround time',
    quote: 'M Solutions transformed our laboratory operations. Direct analyzer machine interfacing pushed verified results straight into patient reports without human error. Our turnaround time dropped significantly.',
    author: 'Dr. Tariq Mahmood',
    role: 'Managing Director & Chief Pathologist',
    photo: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    tags: ['Bidirectional LIMS', '8 Analyzers Interfaced', '99.99% Uptime LAN'],
  },

  gallery: [
    {
      title: 'Optical Fiber Core Rack',
      tag: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=80',
    },
    {
      title: 'Clinical Analyzer Interfacing',
      tag: 'Healthcare Systems',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80',
    },
    {
      title: '4K CCTV Command Center',
      tag: 'Surveillance',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=700&q=80',
    },
    {
      title: 'Campus High-Density Wi-Fi',
      tag: 'Enterprise LAN',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80',
    },
  ],

  whoWeServe: [
    {
      icon: '🏥',
      title: 'Hospitals, Polyclinics & Diagnostic Labs',
      desc: 'Automated analyzer interfacing, EMR compliance, and zero-downtime medical LANs.',
      badge: 'Healthcare',
    },
    {
      icon: '🎓',
      title: 'High-Density Academic Campuses & Schools',
      desc: 'Gigabit fiber backbones, student Wi-Fi isolation, and biometric attendance turnstiles.',
      badge: 'Education',
    },
    {
      icon: '🛍️',
      title: 'Supermarket Chains & Retail Hospitality',
      desc: 'Failover POS checkout connectivity, guest Wi-Fi portals, and cash-desk CCTV surveillance.',
      badge: 'Retail & POS',
    },
    {
      icon: '🏭',
      title: 'Commercial Warehouses & Corporate Headquarters',
      desc: 'Multi-floor structured cabling, perimeter motion alerts, and scalable server racks.',
      badge: 'Enterprise',
    },
  ],
};

export function getWhatsAppUrl(message = 'Hello M Solutions, I would like to schedule an infrastructure consultation.') {
  return `${siteConfig.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}
