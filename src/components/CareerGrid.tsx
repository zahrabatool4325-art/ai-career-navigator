import React from 'react';
import { 
  Cpu, 
  Server, 
  BarChart3, 
  FlaskConical, 
  MessageSquareCode, 
  ScanEye, 
  Layers, 
  Rocket, 
  ArrowRight 
} from 'lucide-react';
import { CAREERS } from '../data/careersData';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Cpu,
  Server,
  BarChart3,
  FlaskConical,
  MessageSquareCode,
  ScanEye,
  Layers,
  Rocket
};

interface CareerGridProps {
  onExploreCareer: (careerId: string) => void;
  onStartAssessment: () => void;
}

export const CareerGrid: React.FC<CareerGridProps> = ({ 
  onExploreCareer, 
  onStartAssessment 
}) => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-400">
            Specialization Directory
          </span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Explore AI Career Paths
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Artificial intelligence is not a single job. Compare the 8 major career branches to understand what suits your skills.
          </p>
        </div>

        <button
          onClick={onStartAssessment}
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors self-start md:self-auto cursor-pointer"
        >
          <span>Take the 3-minute assessment instead</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Grid of 8 careers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CAREERS.map((career) => {
          const IconComponent = ICON_MAP[career.iconName] || Cpu;

          return (
            <div
              key={career.id}
              className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-indigo-500/40 hover:bg-slate-900/90 transition-all duration-200 hover:-translate-y-1 shadow-sm"
            >
              <div>
                {/* Icon & Heading */}
                <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600/20 group-hover:border-indigo-500/40 group-hover:text-indigo-300 transition-colors mb-5">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors mb-2">
                  {career.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {career.shortDesc}
                </p>

                {/* Key Skills - Zero-pill discipline: unboxed text with subtle separators */}
                <div className="mb-6 pt-4 border-t border-slate-800/80">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Key Skills
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {career.keySkills.slice(0, 4).join(' · ')}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onExploreCareer(career.id)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-indigo-600/80 border border-slate-700/80 hover:border-indigo-500/60 rounded-xl transition-all duration-150 cursor-pointer"
              >
                <span>Explore Career</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
