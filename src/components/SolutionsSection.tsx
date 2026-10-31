import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  SECURITY_SOLUTIONS,
  SolutionCategory,
  SecuritySolution,
} from '../data/securityData';
import { filterSolutions } from '../utils/securityCalculator';

interface SolutionsSectionProps {
  onSelectSolutionForSurvey: (solutionTitle: string) => void;
}

const CATEGORIES: { label: string; value: SolutionCategory }[] = [
  { label: 'All (6)', value: 'All' },
  { label: 'Video Surveillance', value: 'Video Surveillance' },
  { label: 'Access & Perimeter', value: 'Access & Perimeter' },
  { label: 'Intercoms', value: 'Communications' },
  { label: 'Screening', value: 'Screening & Network' },
];

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectSolutionForSurvey,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<SolutionCategory>('All');
  const filteredSolutions = filterSolutions(SECURITY_SOLUTIONS, selectedCategory);

  return (
    <section
      id="solutions"
      className="py-16 lg:py-24 border-b border-slate-800/90 bg-[#060C18]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Clean Aligned Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-lg">
            <div className="text-xs font-mono-tabular text-sky-400 mb-2">
              01. CORE CAPABILITIES
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Integrated Security Solutions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Turnkey surveillance, access control, and perimeter defense systems tailored
              for commercial, industrial, and residential sites.
            </p>
          </div>

          {/* Single-Line Category Filter Row */}
          <div
            role="tablist"
            aria-label="Filter security solutions by category"
            className="flex items-center gap-1.5 shrink-0 overflow-x-auto"
          >
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#0284C7] text-white'
                      : 'bg-[#0B1324] text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Hairline Architectural Matrix (Zero Floating Box Clutter, 100% Aligned) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-800/90">
          {filteredSolutions.map((solution: SecuritySolution) => (
            <article
              key={solution.id}
              className="p-8 border-r border-b border-slate-800/90 bg-[#060C18] hover:bg-[#091224] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-tabular text-slate-400 mb-3">
                  <span>{solution.index}</span>
                  <span>{solution.category}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2.5">
                  {solution.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {solution.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/70 space-y-3 mt-auto">
                <div className="text-xs font-mono-tabular text-sky-400">
                  {solution.keySpec}
                </div>

                <div className="flex items-center justify-between gap-4 pt-1">
                  <span className="text-xs text-slate-400 truncate">
                    {solution.sectors.join(' · ')}
                  </span>

                  <button
                    type="button"
                    onClick={() => onSelectSolutionForSurvey(solution.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-sky-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
