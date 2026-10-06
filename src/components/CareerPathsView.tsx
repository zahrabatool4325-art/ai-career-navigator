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
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Briefcase, 
  Wrench, 
  HeartHandshake 
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

interface CareerPathsViewProps {
  initialCareerId?: string;
  onSelectRoadmap: (careerId: string) => void;
  onStartAssessment: () => void;
}

export const CareerPathsView: React.FC<CareerPathsViewProps> = ({
  initialCareerId,
  onSelectRoadmap,
  onStartAssessment,
}) => {
  const [selectedCareerId, setSelectedCareerId] = useState<CareerId>(
    (initialCareerId as CareerId) || 'ai-engineer'
  );

  const currentCareer = CAREERS.find((c) => c.id === selectedCareerId) || CAREERS[0];
  const IconComponent = ICON_MAP[currentCareer.iconName] || Cpu;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <span className="text-xs font-semibold tracking-wider uppercase text-indigo-400">
          Career Directory & Deep Dive
        </span>
        <h1 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Explore AI Career Paths
        </h1>
        <p className="mt-2 text-base text-slate-300">
          Analyze what professionals in artificial intelligence actually build, their daily responsibilities, typical toolsets, and multi-year career progression.
        </p>
      </div>

      {/* Mobile & Tablet Career Selector (< lg): Non-sticky horizontal tab strip */}
      <div className="lg:hidden mb-6">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          Select Career Track
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
          {CAREERS.map((c) => {
            const ItemIcon = ICON_MAP[c.iconName] || Cpu;
            const isSelected = c.id === selectedCareerId;

            return (
              <button
                key={c.id}
                onClick={() => setSelectedCareerId(c.id)}
                className={`flex-shrink-0 snap-start px-3.5 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-indigo-950/80 border-indigo-500 text-white shadow-sm ring-1 ring-indigo-500/50'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <ItemIcon className={`w-4 h-4 ${isSelected ? 'text-indigo-300' : 'text-slate-500'}`} />
                <span>{c.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Layout: Selector Tabs + Detailed Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (Desktop Only): Scrollable Sticky Career Selector List */}
        <div className="hidden lg:block lg:col-span-4 space-y-2 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7.5rem)] lg:overflow-y-auto lg:pr-2">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-2">
            Select a Career Track
          </div>
          <div className="space-y-1.5">
            {CAREERS.map((c) => {
              const ItemIcon = ICON_MAP[c.iconName] || Cpu;
              const isSelected = c.id === selectedCareerId;

              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCareerId(c.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-150 flex items-center gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-950/60 border-indigo-500/80 text-white shadow-sm ring-1 ring-indigo-500/40'
                      : 'bg-slate-900/50 border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold truncate leading-tight">
                      {c.title}
                    </div>
                    <div className="text-xs text-slate-400 truncate mt-0.5">
                      {c.shortDesc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-4 px-2">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-2">
              <span className="font-semibold text-white block">Uncertain where you fit?</span>
              <p className="text-slate-400">Our assessment calculates your fit percentage across all 8 tracks in 3 minutes.</p>
              <button
                onClick={onStartAssessment}
                className="w-full mt-2 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer"
              >
                <span>Take Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: In-Depth Career Dossier */}
        <div className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
          
          {/* Header Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
                <IconComponent className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {currentCareer.title}
                </h2>
                <p className="text-sm text-indigo-300 font-medium mt-0.5">
                  {currentCareer.shortDesc}
                </p>
              </div>
            </div>

            <button
              onClick={() => onSelectRoadmap(currentCareer.id)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors cursor-pointer self-start sm:self-auto shrink-0 shadow-sm"
            >
              <span>View Full Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Overview Prose */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Career Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {currentCareer.fullDesc}
            </p>
          </div>

          {/* What They Do */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-indigo-400" />
              <span>What You Will Actually Do Day-to-Day</span>
            </h3>
            <ul className="space-y-2.5">
              {currentCareer.whatTheyDo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Two-Column Tech & Personality Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Tech Stack & Required Skills */}
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-5 space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                  <Wrench className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Key Skills Required</span>
                </h4>
                <div className="text-xs text-slate-300 leading-relaxed">
                  {currentCareer.keySkills.join(' · ')}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Commonly Used
                </h4>
                <div className="text-xs text-slate-300 leading-relaxed">
                  {currentCareer.technologies.join(' · ')}
                </div>
              </div>
            </div>

            {/* Personality & Ideal Trait Fit */}
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <HeartHandshake className="w-3.5 h-3.5 text-purple-400" />
                <span>Suitable Personality & Interests</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {currentCareer.personalityFit.map((trait, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Career Progression Pathway */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Career Progression & Hierarchy</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentCareer.careerProgression.map((stage, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/50 border border-slate-800"
                >
                  <span className="text-[11px] font-mono text-indigo-400 block mb-1">
                    {stage.experience}
                  </span>
                  <div className="text-sm font-bold text-white mb-1.5">
                    {stage.title}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {stage.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Applications */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Typical Industry Sectors
            </h3>
            <div className="text-xs text-slate-300 leading-relaxed">
              {currentCareer.industryApplications.join(' · ')}
            </div>
          </div>

          {/* Project Preview */}
          <div className="pt-4 border-t border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Recommended Portfolio Starters
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentCareer.projects.map((proj, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                  <span className="text-[10px] uppercase font-semibold text-indigo-400 tracking-wider block mb-1">
                    {proj.difficulty}
                  </span>
                  <div className="text-xs font-bold text-white mb-1 truncate">
                    {proj.title}
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
