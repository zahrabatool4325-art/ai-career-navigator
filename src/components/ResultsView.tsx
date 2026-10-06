import React, { useState } from 'react';
import { 
  CheckCircle2, 
  RotateCcw, 
  Compass, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  Code2, 
  Briefcase, 
  Share2, 
  BookmarkCheck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { AssessmentResult, CareerId } from '../types';

interface ResultsViewProps {
  result: AssessmentResult;
  onRestart: () => void;
  onExploreCareer: (careerId: string) => void;
  onViewRoadmap: (careerId: string) => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  result,
  onRestart,
  onExploreCareer,
  onViewRoadmap,
}) => {
  const [copied, setCopied] = useState(false);
  const [expandedStage, setExpandedStage] = useState<number | null>(1);

  const { topCareer, otherMatches, identifiedStrengths, skillsToDevelop, explanation } = result;
  const career = topCareer.career;

  const handleShare = () => {
    const text = `My AI Career Navigator Result: Top Match is ${topCareer.career.title} (${topCareer.percentage}% match)!`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Top Banner: Success & Match Header */}
      <div className="relative rounded-3xl bg-gradient-to-b from-indigo-950/80 via-slate-900/90 to-slate-950 border border-indigo-500/30 p-6 sm:p-10 shadow-2xl shadow-indigo-950/50 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-indigo-500/20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Assessment Analysis Complete</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {career.title}
            </h1>
            <p className="mt-2 text-base text-slate-300 max-w-xl">
              {career.shortDesc}
            </p>
          </div>

          {/* Match Score Badge */}
          <div className="flex md:flex-col items-center justify-between md:justify-center p-4 sm:p-5 rounded-2xl bg-indigo-900/40 border border-indigo-500/40 text-center shrink-0">
            <span className="text-xs uppercase tracking-wider text-indigo-300 font-semibold mb-1">
              Match Score
            </span>
            <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-200 font-mono tabular-nums">
              {topCareer.percentage}%
            </div>
            <span className="text-[11px] text-indigo-300/80 mt-1">High Confidence Fit</span>
          </div>
        </div>

        {/* Why this career fits you */}
        <div className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span>Why this career fits you</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-900/60 p-5 rounded-2xl border border-slate-800/80">
            {explanation}
          </p>
        </div>

        {/* Strengths & Skills breakdown grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Your Strengths */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Your Key Strengths</span>
            </h3>
            <ul className="space-y-2">
              {identifiedStrengths.map((str, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{str}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills to Develop */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-indigo-400" />
              <span>Skills to Develop</span>
            </h3>
            <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-xs text-slate-300">
              {skillsToDevelop.map((skill, idx) => (
                <span key={idx} className="inline-flex items-center">
                  <span className="text-slate-300">{skill}</span>
                  {idx < skillsToDevelop.length - 1 && (
                    <span className="ml-2 text-slate-600" aria-hidden="true">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action bar */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onExploreCareer(career.id)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>Explore {career.title} in Depth</span>
            </button>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>{copied ? 'Copied to Clipboard!' : 'Share Result'}</span>
            </button>
          </div>

          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors cursor-pointer ml-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Assessment</span>
          </button>
        </div>
      </div>

      {/* Recommended Roadmap Timeline */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-indigo-400">
              Personalized Learning Plan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Your Recommended Roadmap
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              A structured {career.roadmap.length}-stage progression from foundations to advanced production mastery.
            </p>
          </div>

          <button
            onClick={() => onViewRoadmap(career.id)}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-400 hover:text-indigo-300 cursor-pointer self-start sm:self-auto"
          >
            <span>Open Interactive Roadmap Mode</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Stages Timeline List */}
        <div className="space-y-3">
          {career.roadmap.map((stage) => {
            const isExpanded = expandedStage === stage.stageNumber;

            return (
              <div
                key={stage.stageNumber}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-slate-900 border-indigo-500/50 shadow-md shadow-slate-950/40'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setExpandedStage(isExpanded ? null : stage.stageNumber)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-mono font-bold text-sm text-indigo-400 shrink-0 tabular-nums">
                      {stage.stageNumber.toString().padStart(2, '0')}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-base font-bold text-white truncate">
                        {stage.title}
                      </h4>
                      <p className="text-xs text-slate-400 truncate mt-0.5">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-slate-400 hidden sm:inline font-mono">
                      {stage.estimatedWeeks}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-800/80 bg-slate-950/40 text-xs sm:text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                      <div>
                        <span className="font-semibold text-slate-300 block mb-1.5 uppercase text-[11px] tracking-wider">
                          Key Topics Covered
                        </span>
                        <ul className="space-y-1 text-slate-300">
                          {stage.keyTopics.map((topic, tidx) => (
                            <li key={tidx} className="flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-300 block mb-1.5 uppercase text-[11px] tracking-wider">
                          Recommended Tools & Libraries
                        </span>
                        <p className="text-slate-300">
                          {stage.recommendedTools.join(' · ')}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects You Should Build */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-400">
            Portfolio Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Projects You Should Build
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Real software and systems to prove your capabilities to hiring managers and collaborators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {career.projects.map((proj, idx) => {
            const difficultyBadge =
              proj.difficulty === 'Beginner'
                ? 'text-emerald-400'
                : proj.difficulty === 'Intermediate'
                ? 'text-amber-400'
                : 'text-purple-400';

            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between hover:border-indigo-500/40 transition-colors shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className={`font-semibold tracking-wider uppercase ${difficultyBadge}`}>
                      {proj.difficulty}
                    </span>
                    <span className="text-slate-500 font-mono">0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Skills Learned
                  </span>
                  <p className="text-xs text-slate-300">
                    {proj.skillsLearned.join(' · ')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Other Career Matches (Runners-up) */}
      <section className="space-y-6 pt-4 border-t border-slate-800/80">
        <div>
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-400">
            Alternative Career Directions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Other Career Matches
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Based on the multidimensional nature of your answers, these adjacent paths also share strong overlap with your profile.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {otherMatches.map((match) => (
            <div
              key={match.careerId}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-400">Match Rate</span>
                  <span className="text-base font-bold text-indigo-400 font-mono tabular-nums">
                    {match.percentage}%
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1.5">
                  {match.career.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {match.fitSnippet}
                </p>
              </div>

              <button
                onClick={() => onExploreCareer(match.careerId)}
                className="w-full text-xs font-semibold text-indigo-400 hover:text-indigo-300 pt-2 border-t border-slate-800/80 text-left inline-flex items-center justify-between cursor-pointer"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
