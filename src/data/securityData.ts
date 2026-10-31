export type SolutionCategory =
  | 'All'
  | 'Video Surveillance'
  | 'Access & Perimeter'
  | 'Communications'
  | 'Screening & Network';

export interface SecuritySolution {
  id: string;
  index: string;
  title: string;
  category: Exclude<SolutionCategory, 'All'>;
  summary: string;
  keySpec: string;
  sectors: string[];
}

export type ProductCategory =
  | 'All'
  | 'IP Cameras'
  | 'Recorders'
  | 'Access Control'
  | 'Perimeter & Intercom'
  | 'Screening';

export interface HardwareProduct {
  id: string;
  sku: string;
  name: string;
  category: Exclude<ProductCategory, 'All'>;
  categoryLabel: string;
  availability: 'In Stock · Johar Town HQ' | 'Built to Order';
  imagePath: string;
  shortSpec: string;
  highlights: string[];
  technicalSpecs: {
    resolutionOrOutput: string;
    interfaceProtocol: string;
    environmentalRating: string;
    powerRequirement: string;
    warranty: string;
    fullSummary: string;
  };
}

export interface CaseStudyProject {
  id: string;
  index: string;
  title: string;
  location: string;
  sector: string;
  keyMetric: string;
  summary: string;
  outcome: string;
}

export const HERO_IMAGE_PATH =
  '/src/assets/images/hero_security_command_center_1793435172002.jpg';

export const COMPANY_INFO = {
  name: '786 Surveillance Solution',
  legalEntity: '786 Surveillance Solution (SMC-PVT) LTD',
  registrationCode: 'SEC-REG-SMC-PVT-0824',
  founder: 'Imtiaz Hashmi',
  founderTitle: 'Founder & Chief Executive Officer',
  address:
    'Office No. 19, Ground Floor, Zam Zam Tower, H3, Johar Town, Lahore, Pakistan',
  shortAddress: 'Zam Zam Tower, H3, Johar Town, Lahore',
  landmark: 'Near Expo Centre & Emporium Mall, Johar Town',
  salesPhone: '+92 302 1151122',
  salesPhoneClean: '923021151122',
  techPhone: '+92 329 1141122',
  techPhoneClean: '923291141122',
  secondaryPhone: '+92 311 1152345',
  email: '92@786securitysol.com',
  operatingHours: 'Mon – Sat: 10:00 AM – 8:00 PM PKT',
};

export const SECURITY_SOLUTIONS: SecuritySolution[] = [
  {
    id: 'sol-01',
    index: '01',
    title: '4K IP Surveillance & ANPR',
    category: 'Video Surveillance',
    summary:
      'Networked PoE+ camera architectures featuring edge license plate recognition, perimeter tripwire analytics, and redundant RAID-6 NVR storage.',
    keySpec: 'Sony Starvis 4K · H.265+ · 64-Ch RAID NVR',
    sectors: ['Industrial Estates', 'Gated Societies', 'Corporate Towers'],
  },
  {
    id: 'sol-02',
    index: '02',
    title: 'HD CCTV & Coaxial Retrofits',
    category: 'Video Surveillance',
    summary:
      'Weatherproof IK10/IP67 camera installations and 5MP HD-TVI coaxial upgrades utilizing existing wiring with galvanized GI conduit protection.',
    keySpec: '5MP / 4K Hybrid · 80m Matrix IR · IP67 Housing',
    sectors: ['Commercial Plazas', 'Residences', 'Retail Showrooms'],
  },
  {
    id: 'sol-03',
    index: '03',
    title: 'Biometric Access & Turnstiles',
    category: 'Access & Perimeter',
    summary:
      'Touchless binocular facial recognition and optical fingerprint terminals integrated with 1200lb electromagnetic locks, flap barriers, and HR payroll.',
    keySpec: '< 0.2s Anti-Spoof Face Auth · BioTime HR Sync',
    sectors: ['Software Houses', 'Cleanrooms', 'Headquarters'],
  },
  {
    id: 'sol-04',
    index: '04',
    title: 'Pulsed Electric Perimeter Fencing',
    category: 'Access & Perimeter',
    summary:
      'IEC-compliant non-lethal 9,900V pulsed perimeter barriers with marine-grade SS316 wire, instant cut/short detection, and GSM siren dispatch.',
    keySpec: '9.9kV Regulated Pulse · IEC 60335-2-76 · SLA Backup',
    sectors: ['Sundar Industrial', 'DHA & Bahria Villas', 'Warehouses'],
  },
  {
    id: 'sol-05',
    index: '05',
    title: 'IP Video Door Phones & Intercoms',
    category: 'Communications',
    summary:
      '10-inch capacitive touch indoor monitors and multi-apartment SIP guard master consoles with smartphone call forwarding and remote gate release.',
    keySpec: '10" IPS Touch · SIP 2.0 · Mobile Gate Unlock',
    sectors: ['Executive Villas', 'Apartment Towers', 'Restricted Suites'],
  },
  {
    id: 'sol-06',
    index: '06',
    title: 'Walk-Through Screening & Fiber Networks',
    category: 'Screening & Network',
    summary:
      '18-zone walk-through metal detector arches paired with armored single-mode optical fiber backbones and 99.9% pure solid copper Cat6 cabling.',
    keySpec: '18-Zone Pinpoint Arch · 10Gb Single-Mode Fiber',
    sectors: ['Banks & Courts', 'Universities', 'Multi-Acre Plants'],
  },
];

export const HARDWARE_PRODUCTS: HardwareProduct[] = [
  {
    id: 'prod-01',
    sku: 'SS-4K-BLT-AI',
    name: '4K Ultra HD AI Bullet Camera',
    category: 'IP Cameras',
    categoryLabel: 'IP Cameras',
    availability: 'In Stock · Johar Town HQ',
    imagePath: '/src/assets/images/prod_4k_bullet_cam_1793436209440.jpg',
    shortSpec: '8MP Starlight CMOS · 80m IR · IP67 PoE',
    highlights: [
      'Starlight full-color night vision with human and vehicle classification',
      'IP67 weather-sealed aluminum housing with 4kV surge protection',
    ],
    technicalSpecs: {
      resolutionOrOutput: '3840 × 2160 @ 30fps (8.0MP 1/1.8" Starvis CMOS)',
      interfaceProtocol: 'RJ45 100M PoE (802.3af), ONVIF Profile S/G/T, H.265+',
      environmentalRating: 'IP67 Weatherproof, -30°C to +60°C operating range',
      powerRequirement: '12V DC or PoE (802.3af), Max 8.5W',
      warranty: '2-Year Official OEM Warranty & Lahore SLA',
      fullSummary:
        '3840×2160 @ 30fps, 4.0mm fixed lens, MicroSD slot up to 512GB, 120dB True WDR, PoE 48V compliant.',
    },
  },
  {
    id: 'prod-02',
    sku: 'SS-PTZ-36X-LSR',
    name: '36X Optical Zoom 4K PTZ Speed Dome',
    category: 'IP Cameras',
    categoryLabel: 'IP Cameras',
    availability: 'In Stock · Johar Town HQ',
    imagePath: '/src/assets/images/prod_ptz_speed_dome_1793436210611.jpg',
    shortSpec: '36X Optical Zoom · 200m Laser IR · Auto-Track',
    highlights: [
      'Long-range 200m Laser IR illumination with 360° endless pan tracking',
      '6kV lightning and transient surge protection for outdoor mast mounting',
    ],
    technicalSpecs: {
      resolutionOrOutput: '4K Ultra HD with 5.7mm–205.2mm 36X Optical Zoom',
      interfaceProtocol: 'Hi-PoE / RJ45, RS-485, 300 Presets, 8 Patrols',
      environmentalRating: 'IP66 Weatherproof / IK10 Vandal-Resistant Chassis',
      powerRequirement: '24V AC / Hi-PoE (802.3bt), Max 42W',
      warranty: '2-Year Official OEM Warranty with Mast Calibration',
      fullSummary:
        '5.7mm~205.2mm motorized zoom, autonomous perimeter lock tracking, 140dB WDR, wall mount bracket included.',
    },
  },
  {
    id: 'prod-03',
    sku: 'SS-5MP-TRT-MIC',
    name: '5MP Vandal-Proof Turret Camera',
    category: 'IP Cameras',
    categoryLabel: 'IP Cameras',
    availability: 'In Stock · Johar Town HQ',
    imagePath: '/src/assets/images/prod_turret_dome_cam_1793436211504.jpg',
    shortSpec: '5MP Progressive CMOS · Built-In Mic · IK10',
    highlights: [
      'IK10 impact-resistant low-profile aluminum turret with built-in audio mic',
      'Wide-angle 2.8mm fixed lens providing 106° horizontal coverage',
    ],
    technicalSpecs: {
      resolutionOrOutput: '2592 × 1944 @ 30fps (5.0MP Progressive CMOS)',
      interfaceProtocol: 'PoE IEEE 802.3af, Built-in Audio Mic, Smart H.265+',
      environmentalRating: 'IK10 Vandal-Proof & IP67 Weatherproof',
      powerRequirement: '12V DC / PoE (802.3af), Max 6.5W',
      warranty: '2-Year Official OEM Warranty',
      fullSummary:
        '2592×1944 resolution, EXIR 2.0 night vision up to 30m, acoustic noise-canceling mic, H.265+ compression.',
    },
  },
  {
    id: 'prod-04',
    sku: 'SS-NVR-32CH-4K',
    name: '32-Channel 4K Enterprise Rack NVR',
    category: 'Recorders',
    categoryLabel: 'NVR Recorders',
    availability: 'In Stock · Johar Town HQ',
    imagePath: '/src/assets/images/prod_enterprise_nvr_1793436212863.jpg',
    shortSpec: '32-Ch 4K Input · 4× SATA (40TB) · Dual HDMI',
    highlights: [
      '4× SATA bays supporting up to 40TB total with 320Mbps incoming bandwidth',
      'Hardware RAID redundancy with onboard ANPR and facial database sync',
    ],
    technicalSpecs: {
      resolutionOrOutput: '32-Channel IP Input, Decodes 16-ch @ 1080p or 4-ch @ 4K',
      interfaceProtocol: 'Dual Gigabit NICs, 16 Alarm Inputs, 4 Relay Outputs',
      environmentalRating: '1.5U 19-Inch Standard Server Rackmount Chassis',
      powerRequirement: '100–240V AC Internal Supply, ≤ 20W (w/o HDD)',
      warranty: '2-Year Enterprise NVR Replacement Warranty',
      fullSummary:
        '32-ch 4K AI NVR, 320Mbps bandwidth, 4 SATA bays up to 10TB each, Dual HDMI 4K + VGA outputs.',
    },
  },
  {
    id: 'prod-05',
    sku: 'SS-BIO-FACE-AI',
    name: 'AI Facial & Fingerprint Access Terminal',
    category: 'Access Control',
    categoryLabel: 'Access Control',
    availability: 'In Stock · Johar Town HQ',
    imagePath: '/src/assets/images/prod_biometric_terminal_1793436214172.jpg',
    shortSpec: '5" IPS Touch · < 0.2s Face Auth · RFID & Finger',
    highlights: [
      'Touchless dual-lens live-face verification with 10,000 user capacity',
      'Direct Wiegand, RS-485, and TCP/IP relay output for locks & turnstiles',
    ],
    technicalSpecs: {
      resolutionOrOutput: '5.0-Inch IPS Touch Display, Dual 2MP WDR Cameras',
      interfaceProtocol: 'TCP/IP, Wi-Fi, Wiegand In/Out, RS-485, Lock Relay',
      environmentalRating: 'IP65 Ingress Protection for Corporate Entryways',
      powerRequirement: '12V DC / 3A Regulated Access Power Supply',
      warranty: '1-Year Hardware & BioTime HR Setup Support',
      fullSummary:
        '5-inch IPS touchscreen, 0.2s live facial recognition up to 2m distance, optical fingerprint & RFID reader.',
    },
  },
  {
    id: 'prod-06',
    sku: 'SS-ENRG-10KV-GSM',
    name: 'Pulsed Electric Fence Energizer (9.9kV)',
    category: 'Perimeter & Intercom',
    categoryLabel: 'Perimeter Defense',
    availability: 'In Stock · Johar Town HQ',
    imagePath: '/src/assets/images/prod_fence_energizer_1793436215560.jpg',
    shortSpec: '9.9kV Regulated Pulse · 8.0J · GSM Alert',
    highlights: [
      'Adjustable 5kV–9.9kV non-lethal pulsed output with wire-cut detection',
      'Integrated GSM SMS/Call alert module with 24-hour SLA battery backup',
    ],
    technicalSpecs: {
      resolutionOrOutput: '9,900V Peak Pulsed Output, 8.0J Stored Energy',
      interfaceProtocol: '2 Fence Zones, Siren Strobe Relay, GSM Module',
      environmentalRating: 'IP54 Polycarbonate Double-Insulated Enclosure',
      powerRequirement: '220V AC Mains with Internal 12V 7Ah SLA Failover',
      warranty: '2-Year Energizer Electronics Certification',
      fullSummary:
        'IEC 60335-2-76 compliant pulsed fence controller, powers up to 10km wire length, LCD voltage readout.',
    },
  },
  {
    id: 'prod-07',
    sku: 'SS-VDP-10IN-IP',
    name: '10" Touchscreen IP Video Door Phone Kit',
    category: 'Perimeter & Intercom',
    categoryLabel: 'Video Intercom',
    availability: 'In Stock · Johar Town HQ',
    imagePath: '/src/assets/images/prod_video_door_phone_1793436218208.jpg',
    shortSpec: '10" IPS Indoor Monitor · 1080p Call Station',
    highlights: [
      '10-inch capacitive IPS indoor glass screen paired with cast-aluminum bell',
      'Remote mobile app video call answering and dual motorized gate release',
    ],
    technicalSpecs: {
      resolutionOrOutput: '1024 × 600 10" IPS Monitor + 1080p 129° Door Camera',
      interfaceProtocol: 'Standard PoE (802.3af), TCP/IP, RTSP, 2 Gate Relays',
      environmentalRating: 'Outdoor Bell: IP65 Aluminum, Monitor: Tempered Glass',
      powerRequirement: 'Standard PoE Switch (Included) or 12V DC',
      warranty: '1-Year Complete Kit Warranty',
      fullSummary:
        'Turnkey IP Video Door Phone kit, supports up to 5 slave indoor monitors and 8 live IP CCTV camera feeds.',
    },
  },
  {
    id: 'prod-08',
    sku: 'SS-MD-18ZN-ARCH',
    name: '18-Zone Walk-Through Metal Detector Arch',
    category: 'Screening',
    categoryLabel: 'Security Screening',
    availability: 'In Stock · Johar Town HQ',
    imagePath: '/src/assets/images/prod_metal_detector_arch_1793436217608.jpg',
    shortSpec: '18 Overlapping Zones · 300 Sensitivity Tiers',
    highlights: [
      '18 overlapping detection zones with dual full-height LED pinpoint bars',
      'Overhead LCD console with bidirectional passenger and alarm counters',
    ],
    technicalSpecs: {
      resolutionOrOutput: '18 Independent Target Zones, Dual LED Indicator Columns',
      interfaceProtocol: '7-Inch Overhead LCD Panel, Dry Relay Output',
      environmentalRating: 'IP55 Fire-Retardant Weather-Resistant Panels',
      powerRequirement: 'AC 100V–240V, 12W Low Consumption',
      warranty: '1-Year On-Site Calibration & Hardware Warranty',
      fullSummary:
        'Passage dimensions 2000×700×500mm, pacemaker safe, auto frequency scan, includes 1 handheld inspection wand.',
    },
  },
];

export const CASE_STUDIES: CaseStudyProject[] = [
  {
    id: 'proj-01',
    index: '01',
    title: 'Commercial Plaza 64-Channel 4K NOC',
    location: 'Johar Town & Gulberg, Lahore',
    sector: 'Commercial Infrastructure',
    keyMetric: '64-Ch RAID-5 NVR · 45-Day 4K Retention',
    summary:
      'Turnkey optical backbone across multi-floor retail corridors, underground parking, and electrical risers with a 4-screen guard-room video wall.',
    outcome:
      'Eliminated 14 parking blindspots and unified 6 floors into a single 24/7 command desk.',
  },
  {
    id: 'proj-02',
    index: '02',
    title: 'Pharmaceutical Plant 1.2 km Perimeter Grid',
    location: 'Sundar Industrial Estate, Lahore',
    sector: 'Industrial Defense',
    keyMetric: '1.2 km 9.9kV Fence · 8 Monitored Zones',
    summary:
      'Non-lethal pulsed electric fence securing a 14-acre manufacturing compound, linked to PTZ cameras that auto-slew to any triggered boundary zone.',
    outcome:
      'Zero perimeter breaches since commissioning with sub-second zone pinpointing.',
  },
  {
    id: 'proj-03',
    index: '03',
    title: 'Corporate HQ Biometric & ANPR Checkpoint',
    location: 'Gulberg III & DHA, Lahore',
    sector: 'Corporate & Residential',
    keyMetric: '850+ Daily Staff Logs · < 0.2s Verification',
    summary:
      'High-throughput lobby flap barriers with dual-lens facial terminals and automated ANPR vehicle boom gates synced to cloud HR software.',
    outcome:
      'Reduced peak-hour gate queues by 65% and automated attendance reconciliation.',
  },
];

export const METHODOLOGY_PHASES = [
  {
    number: '01',
    title: 'On-Site Blindspot & Threat Audit',
    description:
      'Physical survey of your Lahore or Punjab premises to map optical blindspots, lighting vectors, and conduit routing.',
  },
  {
    number: '02',
    title: 'CAD Topology & Storage Sizing',
    description:
      'Engineering an itemized Bill of Materials linking 4K sensors, PoE+ budgets, RAID retention, and access interlocks.',
  },
  {
    number: '03',
    title: '99.9% Pure Copper Deployment',
    description:
      'In-house technician installation using strictly 23AWG pure solid copper cabling, GI/PVC conduits, and surge arrestors.',
  },
  {
    number: '04',
    title: '24–48h Lahore On-Site SLA',
    description:
      'Control room commissioning, encrypted mobile app setup, and guaranteed 24–48 hour on-site technical dispatch from Johar Town.',
  },
];
