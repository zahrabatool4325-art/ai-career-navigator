import React, { useState } from 'react';
import { 
  Cpu, 
  Server, 
  BarChart3, 
  FlaskConical, 
  MessageSquareCode, 
  ScanEye, 
  Layers, 
  Rocket, 
  Clock, 
  CheckCircle2, 
  BookOpen, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { CAREERS } from '../data/careersData';
import { CareerId } from '../types';

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

interface RoadmapsViewProps {
  initialCareerId?: string;
  onStartAssessment: () => void;
}

export const RoadmapsView: React.FC<RoadmapsViewProps> = ({
  initialCareerId,
  onStartAssessment,
}) => {
  const [selectedCareerId, setSelectedCareerId] = useState<CareerId>(
    (initialCareerId as CareerId) || 'ai-engineer'
  );
  const [expandedStage, setExpandedStage] = useState<number | null>(1);
  const [completedStages, setCompletedStages] = useState<Record<string, boolean>>({});

  const currentCareer = CAREERS.find((c) => c.id === selectedCareerId) || CAREERS[0];
  const IconComponent = ICON_MAP[currentCareer.iconName] || Cpu;

  const toggleStageCompleted = (stageNumber: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const key = `${selectedCareerId}-${stageNumber}`;
    setCompletedStages(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <span className="text-xs font-semibold tracking-wider uppercase text-indigo-400">
          Curated Learning Curricula
        </span>
        <h1 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          AI Career Roadmaps
        </h1>
        <p className="mt-2 text-base text-slate-300">
          Step-by-step master learning pathways curated for students. Click any roadmap to inspect its progression, core concepts, and recommended tooling.
        </p>
      </div>

      {/* Roadmap Tabs Grid - 8 Roadmaps Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-10">
        {CAREERS.map((career) => {
          const ItemIcon = ICON_MAP[career.iconName] || Cpu;
          const isSelected = career.id === selectedCareerId;

          return (
            <button
              key={career.id}
              onClick={() => {
                setSelectedCareerId(career.id);
                setExpandedStage(1);
              }}
              className={`p-3 rounded-xl border flex flex-col items-center text-center gap-2 transition-all duration-150 cursor-pointer ${
                isSelected
                  ? 'bg-indigo-950/70 border-indigo-500 text-white shadow-sm ring-1 ring-indigo-500/50'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                <ItemIcon className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold leading-tight truncate w-full">
                {career.title.replace(' Engineer', '').replace(' Researcher', '')}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Roadmap Showcase */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
        
        {/* Banner with Overview */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
              <IconComponent className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {currentCareer.title} Roadmap
              </h2>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                {currentCareer.shortDesc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>{currentCareer.roadmap.length} Milestones</span>
            </div>
            <button
              onClick={onStartAssessment}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors cursor-pointer"
            >
              Test My Fit
            </button>
          </div>
        </div>

        {/* Roadmap Progression Stages */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>Click any stage to expand learning topics</span>
            <span>Check the circle to track your progress</span>
          </div>

          {currentCareer.roadmap.map((stage) => {
            const isExpanded = expandedStage === stage.stageNumber;
            const stageKey = `${selectedCareerId}-${stage.stageNumber}`;
            const isDone = !!completedStages[stageKey];

            return (
              <div
                key={stage.stageNumber}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isDone
                    ? 'border-emerald-500/40 bg-slate-950/60'
                    : isExpanded
                    ? 'border-indigo-500/50 bg-slate-900 shadow-md'
                    : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700'
                }`}
              >
                <div
                  onClick={() => setExpandedStage(isExpanded ? null : stage.stageNumber)}
                  className="p-5 flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    {/* Stage number / checkbox toggle */}
                    <button
                      type="button"
                      onClick={(e) => toggleStageCompleted(stage.stageNumber, e)}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors cursor-pointer ${
                        isDone
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-800 border border-slate-700 text-slate-300 hover:border-indigo-400'
                      }`}
                      title={isDone ? 'Mark as In Progress' : 'Mark as Completed'}
                    >
                      {isDone ? <CheckCircle2 className="w-5 h-5" /> : stage.stageNumber.toString().padStart(2, '0')}
                    </button>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase tracking-wider font-semibold text-indigo-400 font-mono">
                          Stage {stage.stageNumber}
                        </span>
                        {isDone && (
                          <span className="text-[11px] text-emerald-400 font-medium">· Completed</span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-white truncate">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-slate-400 truncate mt-0.5">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{stage.estimatedWeeks}</span>
                    </div>

                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 pb-6 pt-2 border-t border-slate-800/80 bg-slate-950/40 text-xs sm:text-sm space-y-4">
                    <p className="text-slate-300 leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                        <span className="font-bold text-slate-200 block mb-2 uppercase text-[11px] tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Core Syllabus & Topics</span>
                        </span>
                        <ul className="space-y-1.5 text-slate-300">
                          {stage.keyTopics.map((topic, tidx) => (
                            <li key={tidx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                        <span className="font-bold text-slate-200 block mb-2 uppercase text-[11px] tracking-wider">
                          Recommended Tools, Frameworks & References
                        </span>
                        <div className="text-slate-300 leading-relaxed mb-3">
                          {stage.recommendedTools.join(' · ')}
                        </div>
                        <div className="text-[11px] text-slate-500 font-mono">
                          Pacing: {stage.estimatedWeeks} of regular study
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
