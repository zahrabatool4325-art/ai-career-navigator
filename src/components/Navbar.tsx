import React, { useState } from 'react';
import { Menu, X, Compass, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string, careerId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'assessment', label: 'Career Assessment' },
    { id: 'careers', label: 'Career Paths' },
    { id: 'roadmaps', label: 'Roadmaps' },
    { id: 'about', label: 'About' },
  ];

  const handleLinkClick = (tabId: string) => {
    onNavigate(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark with icon */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <Compass className="w-5 h-5 text-indigo-50" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
              AI Career Navigator
            </span>
          </button>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('assessment')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg shadow-sm shadow-indigo-500/25 transition-all duration-200 hover:shadow-indigo-500/40 cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              <span>Find My Career</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-lg px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-900 text-indigo-400 font-semibold'
                      : 'text-slate-300 hover:bg-slate-900/60 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-slate-800/80">
            <button
              onClick={() => handleLinkClick('assessment')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-sm"
            >
              <span>Find My Career</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
