import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  RotateCcw, 
  Sparkles, 
  HelpCircle 
} from 'lucide-react';
import { ASSESSMENT_QUESTIONS } from '../data/assessmentQuestions';
import { calculateAssessmentResult, saveAssessmentResult } from '../utils/recommendationEngine';
import { AssessmentResult } from '../types';

interface AssessmentProps {
  onComplete: (result: AssessmentResult) => void;
  onCancel: () => void;
}

export const Assessment: React.FC<AssessmentProps> = ({ onComplete, onCancel }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const currentQuestion = ASSESSMENT_QUESTIONS[currentQuestionIndex];
  const selectedOptionId = answers[currentQuestion.id];
  const progressPercent = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  // Scroll to top of assessment card on question change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentQuestionIndex]);

  const handleSelectOption = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const handleNext = () => {
    if (!selectedOptionId) return;

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Finished all 10 questions!
      submitAssessment();
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to restart your assessment? Your current selections will be cleared.')) {
      setAnswers({});
      setCurrentQuestionIndex(0);
    }
  };

  const submitAssessment = () => {
    setIsCalculating(true);
    // Smooth transition simulation for intelligent scoring calculation
    setTimeout(() => {
      const result = calculateAssessmentResult(answers);
      saveAssessmentResult(result);
      setIsCalculating(false);
      onComplete(result);
    }, 600);
  };

  if (isCalculating) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
        <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center mb-6 animate-pulse">
          <Sparkles className="w-8 h-8 text-indigo-400 animate-spin" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 text-center">
          Analyzing Your Strengths & Preferences...
        </h3>
        <p className="text-sm text-slate-400 text-center max-w-md">
          Synthesizing your 10 responses against 8 modern AI career tracks, evaluating math vs software balances, and building your personalized roadmap.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Top Header & Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span className="font-semibold uppercase tracking-wider text-indigo-400">
            {currentQuestion.category}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="hover:text-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
              title="Restart Assessment"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
            <span className="text-slate-600">·</span>
            <span className="font-mono tabular-nums text-slate-300">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden border border-slate-700/50">
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/50 relative">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3">
          {currentQuestion.text}
        </h2>

        {currentQuestion.helperText && (
          <p className="text-sm text-slate-400 flex items-start gap-2 mb-8">
            <HelpCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <span>{currentQuestion.helperText}</span>
          </p>
        )}

        {/* Options list */}
        <div className="space-y-3.5" role="radiogroup" aria-label={currentQuestion.text}>
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedOptionId === option.id;
            const letterLabel = String.fromCharCode(65 + idx); // A, B, C, D...

            return (
              <button
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                role="radio"
                aria-checked={isSelected}
                className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-150 flex items-start gap-4 cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-950/60 border-indigo-500 text-white shadow-md shadow-indigo-950/50 ring-1 ring-indigo-500/50'
                    : 'bg-slate-900/60 border-slate-800/90 text-slate-300 hover:border-slate-700 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                {/* Letter Index Badge */}
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                    isSelected
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-800 text-slate-400 border border-slate-700/80'
                  }`}
                >
                  {isSelected ? <Check className="w-4 h-4" /> : letterLabel}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-sm sm:text-base font-semibold leading-snug">
                    {option.label}
                  </div>
                  {option.description && (
                    <div className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                      {option.description}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between gap-4">
          <button
            onClick={currentQuestionIndex === 0 ? onCancel : handleBack}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-xl border border-slate-700/60 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{currentQuestionIndex === 0 ? 'Exit' : 'Back'}</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!selectedOptionId}
            className={`inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
              selectedOptionId
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-600/30'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/40'
            }`}
          >
            <span>{currentQuestionIndex === totalQuestions - 1 ? 'Analyze & Show Results' : 'Next Question'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Helpful reassurance footer */}
      <p className="mt-6 text-center text-xs text-slate-500">
        Takes under 3 minutes · Answers stored locally in your browser · You can restart anytime
      </p>
    </div>
  );
};
