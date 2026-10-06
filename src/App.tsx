import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { CareerGrid } from './components/CareerGrid';
import { Assessment } from './components/Assessment';
import { ResultsView } from './components/ResultsView';
import { CareerPathsView } from './components/CareerPathsView';
import { RoadmapsView } from './components/RoadmapsView';
import { AboutView } from './components/AboutView';
import { Footer } from './components/Footer';
import { AssessmentResult } from './types';
import { 
  getSavedAssessmentResult, 
  clearSavedAssessmentResult 
} from './utils/recommendationEngine';
import { Compass, RotateCcw, ArrowRight } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null);
  const [targetCareerId, setTargetCareerId] = useState<string>('ai-engineer');

  // Check for saved assessment result in localStorage on mount
  useEffect(() => {
    const saved = getSavedAssessmentResult();
    if (saved) {
      setAssessmentResult(saved);
    }
  }, []);

  // Smooth scroll to top on tab change
  const navigateTo = (tab: string, careerId?: string) => {
    if (careerId) {
      setTargetCareerId(careerId);
    }
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAssessmentComplete = (result: AssessmentResult) => {
    setAssessmentResult(result);
    setCurrentTab('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestartAssessment = () => {
    clearSavedAssessmentResult();
    setAssessmentResult(null);
    setCurrentTab('assessment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Navigation */}
      <Navbar 
        currentTab={currentTab} 
        onNavigate={(tab) => navigateTo(tab)} 
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            <Hero
              onStartAssessment={() => navigateTo('assessment')}
              onExploreCareers={() => navigateTo('careers')}
              onSelectCareer={(careerId) => navigateTo('roadmaps', careerId)}
            />

            {/* Quick banner if student previously completed assessment */}
            {assessmentResult && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
                <div className="rounded-2xl bg-indigo-950/40 border border-indigo-500/30 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-indigo-300 font-medium block">
                        Saved Assessment Match Available
                      </span>
                      <p className="text-sm font-bold text-white">
                        Your top recommendation is {assessmentResult.topCareer.career.title} ({assessmentResult.topCareer.percentage}% match)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
                    <button
                      onClick={() => navigateTo('results')}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer"
                    >
                      <span>View Results</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={handleRestartAssessment}
                      className="text-xs text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Retake</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            <HowItWorks />

            <CareerGrid
              onExploreCareer={(careerId) => navigateTo('careers', careerId)}
              onStartAssessment={() => navigateTo('assessment')}
            />
          </>
        )}

        {currentTab === 'assessment' && (
          <Assessment
            onComplete={handleAssessmentComplete}
            onCancel={() => navigateTo('home')}
          />
        )}

        {currentTab === 'results' && assessmentResult && (
          <ResultsView
            result={assessmentResult}
            onRestart={handleRestartAssessment}
            onExploreCareer={(careerId) => navigateTo('careers', careerId)}
            onViewRoadmap={(careerId) => navigateTo('roadmaps', careerId)}
          />
        )}

        {/* If navigating to results without an active result, redirect gracefully to assessment */}
        {currentTab === 'results' && !assessmentResult && (
          <div className="max-w-md mx-auto px-4 py-20 text-center space-y-4">
            <h2 className="text-2xl font-bold text-white">No Assessment Completed Yet</h2>
            <p className="text-sm text-slate-400">
              Take the 3-minute career assessment first to unlock your personalized career match, strengths analysis, and custom roadmap.
            </p>
            <button
              onClick={() => navigateTo('assessment')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors cursor-pointer"
            >
              <span>Start Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {currentTab === 'careers' && (
          <CareerPathsView
            initialCareerId={targetCareerId}
            onSelectRoadmap={(careerId) => navigateTo('roadmaps', careerId)}
            onStartAssessment={() => navigateTo('assessment')}
          />
        )}

        {currentTab === 'roadmaps' && (
          <RoadmapsView
            initialCareerId={targetCareerId}
            onStartAssessment={() => navigateTo('assessment')}
          />
        )}

        {currentTab === 'about' && (
          <AboutView
            onStartAssessment={() => navigateTo('assessment')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={(tab) => navigateTo(tab)} />
    </div>
  );
}
