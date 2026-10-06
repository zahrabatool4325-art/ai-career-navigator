import React from 'react';
import { Compass } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand lockup */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <Compass className="w-4 h-4" />
            </div>
            <span className="text-base font-bold text-white tracking-tight">
              AI Career Navigator
            </span>
          </div>

          {/* Quick navigation links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('assessment')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Career Assessment
            </button>
            <button
              onClick={() => onNavigate('careers')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Career Paths
            </button>
            <button
              onClick={() => onNavigate('roadmaps')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Roadmaps
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About & Methodology
            </button>
          </nav>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-slate-400 text-xs leading-relaxed">
          <p className="max-w-xl">
            Career recommendations are guidance, not professional career advice. Your interests and goals can change as you learn and gain experience.
          </p>
          <p className="shrink-0 text-slate-400">
            © {new Date().getFullYear()} AI Career Navigator for Students.
          </p>
        </div>
      </div>
    </footer>
  );
};
