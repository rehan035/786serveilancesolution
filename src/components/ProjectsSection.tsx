import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES, CaseStudyProject } from '../data/securityData';

interface ProjectsSectionProps {
  onInquireSimilarProject: (projectTitle: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onInquireSimilarProject,
}) => {
  return (
    <section
      id="projects"
      className="py-16 lg:py-24 border-b border-slate-800/90 bg-[#060C18]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Clean Aligned Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono-tabular text-sky-400 mb-2">
            03. FIELD DEPLOYMENTS
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Representative Case Studies Across Punjab
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Institutional and industrial installations commissioned by our Lahore
            engineering wing.
          </p>
        </div>

        {/* Equal-Height 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {CASE_STUDIES.map((project: CaseStudyProject) => (
            <article
              key={project.id}
              className="rounded-lg bg-[#0B1324] border border-slate-800 hover:border-slate-700 p-7 flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-tabular text-slate-400 mb-3">
                  <span>{project.index} · {project.sector}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>

                <div className="text-xs font-mono-tabular text-sky-400 mb-4">
                  {project.location} · {project.keyMetric}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-4 mt-auto">
                <p className="text-xs text-slate-400 leading-relaxed">
                  <span className="text-slate-200 font-medium">Outcome: </span>
                  {project.outcome}
                </p>

                <button
                  type="button"
                  onClick={() => onInquireSimilarProject(project.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-sky-400 transition-colors cursor-pointer"
                >
                  <span>Request Similar Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
