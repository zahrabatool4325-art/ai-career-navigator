import React from 'react';
import { UserCheck, Compass, Lightbulb, MapPin } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Tell Us About Yourself',
      description: 'Answer simple questions about your interests, skills, and goals.',
      icon: UserCheck,
      detail: 'Covers coding comfort, math intuition, problem preferences, and vision.'
    },
    {
      number: '02',
      title: 'Discover Your Strengths',
      description: 'Your answers are analyzed to identify your strongest career directions.',
      icon: Lightbulb,
      detail: 'Our weighted algorithm maps your choices against 8 modern AI disciplines.'
    },
    {
      number: '03',
      title: 'Find Your Career',
      description: 'Receive your most suitable AI career recommendations.',
      icon: Compass,
      detail: 'Get a top percentage match, clear explanations of why it fits, and runners-up.'
    },
    {
      number: '04',
      title: 'Build Your Roadmap',
      description: 'See the skills, technologies, and projects you can learn next.',
      icon: MapPin,
      detail: 'Access stage-by-stage learning milestones and portfolio project blueprints.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900/40 border-y border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-400">
            Guided Discovery Framework
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Your AI Career Journey Starts Here
          </h2>
          <p className="mt-3 text-base text-slate-400">
            A structured path designed to transform confusion into a concrete, actionable learning plan.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 p-6 hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-200 hover:-translate-y-1 shadow-md shadow-slate-950/40 flex flex-col justify-between"
              >
                {/* Step Top Bar: Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black tracking-tight text-slate-500 group-hover:text-indigo-400 transition-colors font-mono tabular-nums">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 group-hover:text-indigo-300 group-hover:border-indigo-500/40 group-hover:bg-indigo-950/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-400">
                  {step.detail}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
