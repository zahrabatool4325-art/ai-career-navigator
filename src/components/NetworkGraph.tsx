import React, { useState } from 'react';
import { 
  Cpu, 
  Server, 
  BarChart3, 
  FlaskConical, 
  MessageSquareCode, 
  ScanEye, 
  Layers, 
  Rocket 
} from 'lucide-react';

interface NetworkGraphProps {
  onSelectCareer: (careerId: string) => void;
}

export const NetworkGraph: React.FC<NetworkGraphProps> = ({ onSelectCareer }) => {
  const [activeNode, setActiveNode] = useState<string | null>('ai-engineer');

  const nodes = [
    { id: 'ai-engineer', label: 'AI Engineer', x: 260, y: 80, icon: Cpu, role: 'Full-Stack Intelligent Apps' },
    { id: 'ml-engineer', label: 'ML Engineer', x: 440, y: 110, icon: Server, role: 'Scale, Inference & MLOps' },
    { id: 'data-scientist', label: 'Data Scientist', x: 480, y: 260, icon: BarChart3, role: 'Insights & Statistical Modeling' },
    { id: 'ai-researcher', label: 'AI Researcher', x: 410, y: 390, icon: FlaskConical, role: 'Novel Architectures & Theory' },
    { id: 'nlp-engineer', label: 'NLP Engineer', x: 220, y: 410, icon: MessageSquareCode, role: 'Language Models & Semantics' },
    { id: 'cv-engineer', label: 'Computer Vision', x: 90, y: 320, icon: ScanEye, role: 'Spatial Perception & 3D' },
    { id: 'ai-pm', label: 'AI Product Mgr', x: 80, y: 170, icon: Layers, role: 'Strategy & Human Experience' },
    { id: 'ai-entrepreneur', label: 'AI Entrepreneur', x: 280, y: 240, icon: Rocket, role: 'Ventures & High Agency' },
  ];

  // Connections between related career nodes
  const links = [
    { from: 'ai-engineer', to: 'ml-engineer' },
    { from: 'ai-engineer', to: 'ai-entrepreneur' },
    { from: 'ai-engineer', to: 'nlp-engineer' },
    { from: 'ml-engineer', to: 'data-scientist' },
    { from: 'ml-engineer', to: 'ai-researcher' },
    { from: 'data-scientist', to: 'ai-pm' },
    { from: 'ai-researcher', to: 'nlp-engineer' },
    { from: 'nlp-engineer', to: 'cv-engineer' },
    { from: 'cv-engineer', to: 'ai-engineer' },
    { from: 'ai-pm', to: 'ai-entrepreneur' },
    { from: 'ai-entrepreneur', to: 'ai-engineer' },
  ];

  const activeNodeData = nodes.find(n => n.id === activeNode) || nodes[0];

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800/80 p-5 shadow-2xl shadow-indigo-950/30 overflow-hidden">
      {/* Subtle radial ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* SVG Interconnected Career Graph */}
      <div className="relative aspect-[540/460] w-full">
        <svg 
          viewBox="0 0 540 460" 
          className="w-full h-full select-none"
          aria-label="Interactive AI Career Network Diagram"
        >
          <defs>
            {/* Linear gradients for connection conduits */}
            <linearGradient id="linkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="linkGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.9" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Render background links */}
          {links.map((link, idx) => {
            const source = nodes.find(n => n.id === link.from)!;
            const target = nodes.find(n => n.id === link.to)!;
            const isHighlighted = activeNode === link.from || activeNode === link.to;

            return (
              <g key={`link-${idx}`}>
                <line
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  stroke={isHighlighted ? 'url(#linkGradActive)' : 'url(#linkGrad)'}
                  strokeWidth={isHighlighted ? 2.5 : 1.2}
                  strokeDasharray={isHighlighted ? 'none' : '3 3'}
                  className="transition-all duration-300"
                />
                {/* Micro pulse indicator along highlighted link */}
                {isHighlighted && (
                  <circle
                    r={2.5}
                    fill="#a5b4fc"
                    className="animate-pulse"
                  >
                    <animateMotion
                      path={`M ${source.x} ${source.y} L ${target.x} ${target.y}`}
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}

          {/* Center ambient anchor circle */}
          <circle
            cx={270}
            cy={240}
            r={130}
            fill="none"
            stroke="rgba(99, 102, 241, 0.08)"
            strokeWidth={1}
            strokeDasharray="6 6"
          />

          {/* Render Career Nodes */}
          {nodes.map((node) => {
            const isCurrent = activeNode === node.id;
            const Icon = node.icon;

            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                className="cursor-pointer group"
                onClick={() => {
                  setActiveNode(node.id);
                  onSelectCareer(node.id);
                }}
                onMouseEnter={() => setActiveNode(node.id)}
              >
                {/* Active halo */}
                {isCurrent && (
                  <circle
                    r={24}
                    fill="none"
                    stroke="#818cf8"
                    strokeWidth={1.5}
                    strokeOpacity={0.6}
                    className="animate-ping"
                  />
                )}

                {/* Node backdrop */}
                <circle
                  r={isCurrent ? 20 : 16}
                  fill={isCurrent ? '#312e81' : '#0f172a'}
                  stroke={isCurrent ? '#818cf8' : '#334155'}
                  strokeWidth={isCurrent ? 2 : 1}
                  className="transition-all duration-200"
                  filter={isCurrent ? 'url(#glow)' : undefined}
                />

                {/* Center SVG icon */}
                <foreignObject
                  x={isCurrent ? -11 : -9}
                  y={isCurrent ? -11 : -9}
                  width={isCurrent ? 22 : 18}
                  height={isCurrent ? 22 : 18}
                  className="pointer-events-none"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Icon className={`w-full h-full ${isCurrent ? 'text-indigo-200' : 'text-slate-400'}`} />
                  </div>
                </foreignObject>

                {/* Label text */}
                <text
                  y={isCurrent ? 33 : 28}
                  textAnchor="middle"
                  className={`text-[11px] font-medium tracking-tight pointer-events-none transition-colors duration-150 ${
                    isCurrent ? 'fill-indigo-200 font-semibold' : 'fill-slate-400'
                  }`}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Active node details card strip */}
      <div className="mt-2 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-400">Selected Path:</span>
          <span className="font-semibold text-slate-200">{activeNodeData.label}</span>
          <span className="text-slate-600 hidden sm:inline">·</span>
          <span className="text-slate-400 hidden sm:inline">{activeNodeData.role}</span>
        </div>
        <button
          onClick={() => onSelectCareer(activeNodeData.id)}
          className="text-indigo-400 hover:text-indigo-300 font-medium cursor-pointer transition-colors whitespace-nowrap ml-2"
        >
          View Roadmap →
        </button>
      </div>
    </div>
  );
};
