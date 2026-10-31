import React, { useState } from 'react';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, HERO_IMAGE_PATH } from '../data/securityData';

interface HeroSectionProps {
  onScheduleSurvey: () => void;
  onExploreCatalogue: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScheduleSurvey,
  onExploreCatalogue,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-800/90 bg-[#060C18]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Balanced 12-Column Split (6 Cols Text / 6 Cols Single Hero Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular text-slate-400">
              <span className="text-sky-400 font-medium">{COMPANY_INFO.legalEntity}</span>
              <span aria-hidden="true">·</span>
              <span>Johar Town HQ, Lahore</span>
            </div>

            <h1
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.14]"
              style={{ textWrap: 'balance' }}
            >
              Enterprise Security &amp; Surveillance Architecture
            </h1>

            <p className="text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl">
              We engineer, supply, and commission 4K IP camera networks, biometric access
              control, and pulsed electric perimeter fencing for industrial plants,
              commercial towers, and residences across Pakistan.
            </p>

            {/* Aligned CTA Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onScheduleSurvey}
                className="px-6 py-3.5 rounded bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-sm flex items-center gap-2.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Schedule On-Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreCatalogue}
                className="px-6 py-3.5 rounded bg-transparent hover:bg-slate-800/60 text-slate-200 border border-slate-700 hover:border-slate-500 font-medium text-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                View Hardware Catalogue
              </button>
            </div>

            {/* Clean Single-Line Contact Reference */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono-tabular text-slate-400">
              <a
                href={`tel:${COMPANY_INFO.salesPhone}`}
                className="hover:text-sky-400 transition-colors flex items-center gap-1.5 text-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Sales: {COMPANY_INFO.salesPhone}</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.techPhone}`}
                className="hover:text-sky-400 transition-colors"
              >
                Tech Desk: {COMPANY_INFO.techPhone}
              </a>
            </div>
          </div>

          {/* Right Column (6 Cols): Single High-Impact Hero Photograph */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-slate-800 bg-[#0B1324]">
              {!imageError ? (
                <img
                  src={HERO_IMAGE_PATH}
                  alt="4K PTZ surveillance camera mounted in an enterprise security operations atrium at dusk"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-8 bg-[#0B1324]">
                  <ShieldCheck className="w-12 h-12 text-sky-400" />
                </div>
              )}

              {/* Subtle Bottom Caption Scrim */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#060C18]/95 via-[#060C18]/60 to-transparent px-6 py-4 flex items-center justify-between text-xs font-mono-tabular">
                <span className="text-slate-200">
                  4K Starvis Optical PTZ · Enterprise Command Atrium
                </span>
                <span className="text-sky-400 hidden sm:inline">
                  100% Original OEM Spec
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Unboxed Hairline Proof Strip (No Floating Cards) */}
        <div className="mt-14 pt-10 border-t border-slate-800/90 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="font-display text-2xl lg:text-3xl font-bold text-white font-mono-tabular">
              1,450+
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Industrial, corporate &amp; residential sites deployed
            </div>
          </div>

          <div>
            <div className="font-display text-2xl lg:text-3xl font-bold text-white font-mono-tabular">
              99.98%
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Recorded uptime with RAID-6 &amp; Dual-ISP failover
            </div>
          </div>

          <div>
            <div className="font-display text-2xl lg:text-3xl font-bold text-white font-mono-tabular">
              24–48h
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Guaranteed on-site engineering SLA in Lahore
            </div>
          </div>

          <div>
            <div className="font-display text-2xl lg:text-3xl font-bold text-white font-mono-tabular">
              99.9% Cu
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Pure solid copper cabling &amp; verifiable OEM serials
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
