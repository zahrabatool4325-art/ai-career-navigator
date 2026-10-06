import React from 'react';
import { ArrowRight, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { NetworkGraph } from './NetworkGraph';

interface HeroProps {
  onStartAssessment: () => void;
  onExploreCareers: () => void;
  onSelectCareer: (careerId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartAssessment,
  onExploreCareers,
  onSelectCareer,
}) => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Background ambient gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Top editorial kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/40 text-xs font-medium text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Interactive Career Discovery for Students</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              Discover Your <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Path in AI
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed text-balance font-normal">
              Not sure which AI career is right for you? Answer a few simple questions and discover a career path that matches your interests, strengths, and goals.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onStartAssessment}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-200 cursor-pointer active:scale-[0.98]"
              >
                <span>Start Career Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreCareers}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all duration-150 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-slate-400" />
                <span>Explore AI Careers</span>
              </button>
            </div>

            {/* Value markers */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>10 interactive questions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Personalized roadmap & projects</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% free · No sign up required</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-6 flex justify-center">
            <NetworkGraph onSelectCareer={onSelectCareer} />
          </div>

        </div>
      </div>
    </section>
  );
};
