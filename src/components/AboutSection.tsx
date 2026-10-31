import React from 'react';
import { COMPANY_INFO, METHODOLOGY_PHASES } from '../data/securityData';

interface AboutSectionProps {
  onScheduleWithFounder: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onScheduleWithFounder,
}) => {
  return (
    <section
      id="about"
      className="py-16 lg:py-24 border-b border-slate-800/90 bg-[#081020]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Clean Aligned Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono-tabular text-sky-400 mb-2">
            04. CORPORATE GOVERNANCE &amp; METHODOLOGY
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Leadership &amp; 4-Phase Engineering Protocol
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Incorporated under <span className="font-mono-tabular text-slate-200">{COMPANY_INFO.registrationCode}</span> with direct engineering oversight from our Johar Town headquarters.
          </p>
        </div>

        {/* Balanced 12-Column Split: 5 Cols Founder Profile | 7 Cols 2x2 Methodology */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column (5 Cols): Founder Mandate */}
          <div className="lg:col-span-5 rounded-lg bg-[#0B1324] border border-slate-800 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 pb-6 mb-6 border-b border-slate-800">
                <div className="w-12 h-12 rounded bg-[#060C18] border border-sky-500/40 flex items-center justify-center font-display text-lg font-bold text-sky-400 shrink-0">
                  IH
                </div>
                <div>
                  <div className="text-xs font-mono-tabular text-sky-400">
                    {COMPANY_INFO.founderTitle}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mt-0.5">
                    {COMPANY_INFO.founder}
                  </h3>
                </div>
              </div>

              <blockquote className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
                &ldquo;Security is not merely mounting cameras; it is about engineering
                fail-safe perimeter defenses, pure copper signal integrity, and
                accountable local support across Lahore and Pakistan.&rdquo;
              </blockquote>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono-tabular text-slate-400">
                Direct Line: <span className="text-slate-100">{COMPANY_INFO.salesPhone}</span>
              </div>
              <button
                type="button"
                onClick={onScheduleWithFounder}
                className="px-4 py-2 rounded bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Consult with Founder
              </button>
            </div>
          </div>

          {/* Right Column (7 Cols): 2x2 Hairline Methodology Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 border-t border-l border-slate-800 rounded-lg overflow-hidden">
            {METHODOLOGY_PHASES.map((phase) => (
              <div
                key={phase.number}
                className="p-7 bg-[#0B1324] border-r border-b border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono-tabular text-sky-400 font-semibold mb-2">
                    Phase {phase.number}
                  </div>
                  <h4 className="font-display text-base font-bold text-white mb-2">
                    {phase.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
