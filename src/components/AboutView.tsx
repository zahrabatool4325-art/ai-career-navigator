import React, { useState } from 'react';
import { 
  Compass, 
  Target, 
  HelpCircle, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Lightbulb,
  ArrowRight
} from 'lucide-react';

interface AboutViewProps {
  onStartAssessment: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onStartAssessment }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do I need to be a math genius or PhD student to work in AI?',
      answer: 'No. While frontier AI researchers and foundational scientists rely heavily on advanced mathematics, roles like AI Engineering, AI Product Management, and AI Entrepreneurship prioritize building usable software, connecting APIs, crafting intuitive user experiences, and solving real human problems.'
    },
    {
      question: 'How is my career recommendation calculated?',
      answer: 'Our assessment uses a weighted multi-factor scoring model that evaluates 10 dimensions—including your coding preference, math comfort, problem-solving reflexes, and desired work environment. Each answer allocates calibrated points across 8 distinct AI specializations, ranking them to identify your highest-affinity path.'
    },
    {
      question: 'Can I switch career paths later as I learn more?',
      answer: 'Absolutely. Many of the best AI practitioners started as Data Scientists before transitioning into Machine Learning Engineering or AI Product Management. Foundational skills like Python, linear algebra basics, and version control are transferable across all tracks.'
    },
    {
      question: 'Why doesn\'t this require an account or credit card?',
      answer: 'AI Career Navigator is built as a free, open educational resource for students worldwide. We believe early career guidance should be universally accessible with zero paywalls, subscriptions, or friction.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Hero Header */}
      <div className="space-y-4 text-center sm:text-left">
        <span className="text-xs font-semibold tracking-wider uppercase text-indigo-400">
          Our Mission & Philosophy
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Helping Students Find Direction in AI
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
          Artificial intelligence is a massive, fast-moving field. With endless papers, frameworks, and buzzwords arriving each week, students often don't know what to learn first. AI Career Navigator was created to bring clarity to that journey.
        </p>
      </div>

      {/* Core Principles Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Focus Over Overwhelm</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Rather than trying to master every library at once, students thrive when they pick one concrete specialization and master its core fundamentals first.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <Lightbulb className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Project-Driven Learning</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Knowledge solidifies when you build tangible software and pipelines. Every career track includes portfolio projects from beginner to advanced.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Grounded & Honest</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            We avoid hype, fake salary guarantees, or generic marketing clichés. We reflect what modern AI software teams actually need and build.
          </p>
        </div>
      </div>

      {/* Disclaimer Section (Explicitly requested by user prompt) */}
      <div className="rounded-2xl bg-slate-900/90 border border-amber-500/30 p-6 sm:p-7 flex items-start gap-4 shadow-sm">
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="space-y-1.5">
          <h3 className="text-base font-bold text-white">
            Guidance Disclaimer
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Career recommendations are guidance, not professional career advice. Your interests and goals can change as you learn and gain experience. We encourage you to explore multiple tracks and find what genuinely energizes you.
          </p>
        </div>
      </div>

      {/* Student FAQ */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-400">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Common Questions from Students
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA Card */}
      <div className="rounded-3xl bg-gradient-to-r from-indigo-950/80 via-purple-950/60 to-slate-900 border border-indigo-500/30 p-8 sm:p-10 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Ready to discover your AI path?
        </h3>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          Take the 3-minute assessment to analyze your preferences, uncover your top match, and explore your tailored roadmap.
        </p>
        <div className="pt-2">
          <button
            onClick={onStartAssessment}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-md shadow-indigo-600/30 cursor-pointer"
          >
            <span>Start Career Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
