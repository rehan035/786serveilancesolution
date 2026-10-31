import {
  HardwareProduct,
  ProductCategory,
  SecuritySolution,
  SolutionCategory,
} from '../data/securityData';

export interface SystemSizingInput {
  cameraCount: number;
  resolutionMp: 4 | 5 | 8; // 4MP (2K), 5MP, 8MP (4K)
  retentionDays: number;
  perimeterMeters: number;
  biometricDoors: number;
}

export interface SystemSizingResult {
  recommendedNvrChannels: 8 | 16 | 32 | 64;
  estimatedStorageTb: number;
  recommendedHddConfig: string;
  poePowerBudgetWatts: number;
  copperCableReels305m: number;
  fenceZonesRequired: number;
  estimatedTierLabel: string;
}

export interface InquiryFormInput {
  inquiryType: 'survey' | 'quotation';
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  cityDistrict: string;
  securitySolution: string;
  propertyType: string;
  projectMessage: string;
  whatsappFastTrack: boolean;
  selectedSkus: string[];
}

export interface InquiryValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof InquiryFormInput, string>>;
}

export function filterSolutions(
  solutions: SecuritySolution[],
  category: SolutionCategory
): SecuritySolution[] {
  if (category === 'All') {
    return solutions;
  }
  return solutions.filter((s) => s.category === category);
}

export function filterProducts(
  products: HardwareProduct[],
  category: ProductCategory,
  searchQuery: string
): HardwareProduct[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return products.filter((item) => {
    const matchesCategory = category === 'All' || item.category === category;
    if (!matchesCategory) return false;

    if (!normalizedQuery) return true;

    const searchableText = [
      item.sku,
      item.name,
      item.categoryLabel,
      item.availability,
      ...item.highlights,
      item.technicalSpecs.fullSummary,
      item.technicalSpecs.resolutionOrOutput,
      item.technicalSpecs.interfaceProtocol,
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

export function calculateSystemSizing(input: SystemSizingInput): SystemSizingResult {
  const safeCameras = Math.max(1, Math.min(64, Math.round(input.cameraCount)));
  const safeDays = Math.max(1, Math.min(90, Math.round(input.retentionDays)));
  const safePerimeter = Math.max(0, Math.round(input.perimeterMeters));

  // Recommend NVR channel capacity with 20% headroom where possible
  let recommendedNvrChannels: 8 | 16 | 32 | 64 = 8;
  if (safeCameras > 28) {
    recommendedNvrChannels = 64;
  } else if (safeCameras > 14) {
    recommendedNvrChannels = 32;
  } else if (safeCameras > 7) {
    recommendedNvrChannels = 16;
  }

  // H.265+ average bitrate in Mbps per camera:
  // 4MP ~ 2.5 Mbps, 5MP ~ 3.2 Mbps, 8MP (4K) ~ 5.0 Mbps
  const bitrateMbps =
    input.resolutionMp === 8 ? 5.0 : input.resolutionMp === 5 ? 3.2 : 2.5;

  // Daily GB per camera = Mbps * 86400 / 8 / 1024 ≈ Mbps * 10.547 GB/day
  const totalTbRaw = (safeCameras * bitrateMbps * 10.547 * safeDays) / 1000;
  const estimatedStorageTb = Math.max(2, Math.ceil(totalTbRaw));

  let recommendedHddConfig = '1 × 2TB Surveillance HDD';
  if (estimatedStorageTb <= 4) {
    recommendedHddConfig = `1 × 4TB Enterprise Surveillance HDD`;
  } else if (estimatedStorageTb <= 8) {
    recommendedHddConfig = `2 × 4TB Enterprise HDDs (8TB Total)`;
  } else if (estimatedStorageTb <= 16) {
    recommendedHddConfig = `2 × 8TB Enterprise HDDs (16TB Total)`;
  } else if (estimatedStorageTb <= 32) {
    recommendedHddConfig = `4 × 8TB RAID-5 Array (32TB Raw)`;
  } else {
    const drives = Math.ceil(estimatedStorageTb / 10);
    recommendedHddConfig = `${drives} × 10TB Enterprise RAID-6 Array`;
  }

  // Average PoE camera draw ~ 8.5W + 25% surge buffer + 12W per biometric door lock
  const poePowerBudgetWatts = Math.ceil(
    safeCameras * 8.5 * 1.25 + Math.max(0, input.biometricDoors) * 12
  );

  // Average 55m pure copper Cat6 run per camera / access door; 1 reel = 305m
  const totalCableMeters =
    (safeCameras + Math.max(0, input.biometricDoors)) * 55;
  const copperCableReels305m = Math.max(1, Math.ceil(totalCableMeters / 305));

  // 1 electric fence zone per 500m boundary length
  const fenceZonesRequired =
    safePerimeter > 0 ? Math.max(1, Math.ceil(safePerimeter / 500)) : 0;

  let estimatedTierLabel = 'Residential / Commercial Branch Grid';
  if (safeCameras >= 24 || safePerimeter >= 600 || input.biometricDoors >= 6) {
    estimatedTierLabel = 'Industrial Plant / Multi-Zone Defense Grid';
  } else if (safeCameras >= 10 || safePerimeter >= 200 || input.biometricDoors >= 3) {
    estimatedTierLabel = 'Corporate Tower / Mid-Scale Enterprise Grid';
  }

  return {
    recommendedNvrChannels,
    estimatedStorageTb,
    recommendedHddConfig,
    poePowerBudgetWatts,
    copperCableReels305m,
    fenceZonesRequired,
    estimatedTierLabel,
  };
}

export function validateInquiryForm(input: InquiryFormInput): InquiryValidationResult {
  const errors: Partial<Record<keyof InquiryFormInput, string>> = {};

  if (!input.fullName || input.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name or organization contact.';
  }

  const cleanedPhone = (input.phoneNumber || '').replace(/[\s\-()]/g, '');
  if (!cleanedPhone || !/^(\+?92|0)?3\d{9}$/.test(cleanedPhone) && cleanedPhone.length < 10) {
    errors.phoneNumber = 'Please enter a valid Pakistani contact number (e.g. +92 300 1234567).';
  }

  const trimmedEmail = (input.emailAddress || '').trim();
  if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.emailAddress = 'Please enter a valid business or personal email address.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
