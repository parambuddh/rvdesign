import { useEffect, useState } from "react";
import { Building2, TrendingUp, Contact, Headphones, Package, FileText, Database, GitBranch } from "lucide-react";

// Expanded nodes for a fuller ring
const NODES = [
  { id: 'acc', icon: Building2, color: '#3b82f6', bg: '#eff6ff', border: '#bfdbfe' },
  { id: 'opp', icon: TrendingUp, color: '#10b981', bg: '#ecfdf5', border: '#a7f3d0' },
  { id: 'con', icon: Contact, color: '#f59e0b', bg: '#fffbeb', border: '#fde68a' },
  { id: 'cas', icon: Headphones, color: '#ef4444', bg: '#fef2f2', border: '#fecaca' },
  { id: 'ast', icon: Package, color: '#8b5cf6', bg: '#f5f3ff', border: '#ddd6fe' },
  { id: 'cnt', icon: FileText, color: '#6366f1', bg: '#eef2ff', border: '#c7d2fe' },
  { id: 'cus', icon: Database, color: '#ec4899', bg: '#fdf2f8', border: '#fbcfe8' },
  { id: 'rel', icon: GitBranch, color: '#14b8a6', bg: '#f0fdfa', border: '#99f6e4' },
];

export default function UseCasesAnimation() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let start = performance.now();
    const animate = (time: number) => {
      const elapsed = time - start;
      // Defines orbital speed
      setRotation((elapsed / 45) % 360);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Ring dimensions
  const outerRx = 140;
  const outerRy = 55;
  const innerRx = 90;
  const innerRy = 35;

  return (
    <div className="w-full h-full min-h-[350px] relative bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center overflow-hidden font-sans">
      
      {/* Subtle Background Glows (like reference) */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-emerald-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Saturn Rings SVG */}
      <svg className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none z-0" viewBox="-200 -200 400 400" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="ring-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
          </linearGradient>
          <filter id="blur-ring">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
        </defs>

        <g transform="rotate(-15)">
          {/* Inner Ring (Back and Front) */}
          <path d={`M -${innerRx} 0 A ${innerRx} ${innerRy} 0 0 1 ${innerRx} 0`} fill="none" stroke="#cbd5e1" strokeWidth="1" opacity="0.5" />
          <path d={`M -${innerRx} 0 A ${innerRx} ${innerRy} 0 0 0 ${innerRx} 0`} fill="none" stroke="#94a3b8" strokeWidth="1.5" opacity="0.8" />

          {/* Outer Ring (Back half) */}
          <path d={`M -${outerRx} 0 A ${outerRx} ${outerRy} 0 0 1 ${outerRx} 0`} fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4" />
          
          {/* Outer Ring (Front half) */}
          <path d={`M -${outerRx} 0 A ${outerRx} ${outerRy} 0 0 0 ${outerRx} 0`} fill="none" stroke="url(#ring-glow)" strokeWidth="2.5" strokeDasharray="6 6" filter="url(#blur-ring)" />
          <path d={`M -${outerRx} 0 A ${outerRx} ${outerRy} 0 0 0 ${outerRx} 0`} fill="none" stroke="url(#ring-glow)" strokeWidth="1.5" strokeDasharray="6 6" />
        </g>
      </svg>

      {/* Central Hub */}
      <div 
        className="absolute z-20 w-[84px] h-[84px] bg-white/70 backdrop-blur-md rounded-full shadow-[0_12px_40px_rgba(59,130,246,0.15)] border border-white flex items-center justify-center pointer-events-none"
        style={{
          // Adds a subtle breathing effect
          animation: 'hubPulse 4s ease-in-out infinite alternate',
        }}
      >
        <div className="absolute inset-0 rounded-full border border-blue-500/30 scale-110" style={{ animation: 'spinRotate 20s linear infinite' }}></div>
        <div className="absolute inset-0 rounded-full border border-dashed border-emerald-500/30 scale-[1.25]" style={{ animation: 'spinRotate 30s linear infinite reverse' }}></div>
        
        <div className="w-[60px] h-[60px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-blue-600">
            <polygon points="12 2 2 7 12 12 22 7 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></polygon>
            <polyline points="2 17 12 22 22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></polyline>
            <polyline points="2 12 12 17 22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></polyline>
          </svg>
        </div>
      </div>

      {/* Orbiting Nodes */}
      <div className="absolute inset-0 pointer-events-none" style={{ transform: 'rotate(-15deg)' }}>
        {NODES.map((node, i) => {
          // Calculate angle for this node
          const angle = ((i * 360) / NODES.length + rotation) % 360;
          const rad = (angle * Math.PI) / 180;
          
          // Calculate X and Y on the ellipse path
          const x = outerRx * Math.cos(rad);
          const y = outerRy * Math.sin(rad);

          // depth indicator: sin(rad) goes from -1 (top/back) to 1 (bottom/front)
          const depth = Math.sin(rad); 
          
          // Scales from 0.55 (back) to 1.1 (front)
          const scale = 0.825 + 0.275 * depth; 
          
          // Z-index: back nodes have negative z-index, front have positive relative to center
          // We will use standard z-index scaling
          const zIndex = 20 + Math.round(depth * 20); // Center is 20, front is 40, back is 0
          
          // Opacity decreases as nodes go to the back
          const opacity = 0.4 + 0.6 * ((depth + 1) / 2); // 0.4 in back, 1.0 in front

          // Blur effect for distant nodes to simulate depth of field
          const blur = depth < -0.2 ? `blur(${Math.abs(depth + 0.2) * 2}px)` : 'none';

          return (
            <div 
              key={node.id}
              className="absolute left-1/2 top-1/2 shadow-lg transition-opacity duration-0"
              style={{
                width: '46px',
                height: '46px',
                marginLeft: '-23px',
                marginTop: '-23px',
                borderRadius: '50%',
                backgroundColor: 'white', // node.bg for colorful
                border: `1.5px solid ${node.border}`,
                transform: `translate(${x}px, ${y}px) rotate(15deg) scale(${scale})`, // rotate back 15deg to keep upright
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: zIndex,
                opacity: opacity,
                filter: blur,
                willChange: 'transform, opacity, filter',
              }}
            >
                <div className="absolute inset-0 rounded-full opacity-20" style={{ backgroundColor: node.color }}></div>
                <node.icon style={{ color: node.color, width: '22px', height: '22px', position: 'relative', zIndex: 2 }} />
            </div>
          )
        })}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes hubPulse {
            0%   { transform: translateY(0) scale(1); box-shadow: 0 12px 40px rgba(59,130,246,0.15); }
            100% { transform: translateY(-8px) scale(1.02); box-shadow: 0 20px 50px rgba(59,130,246,0.25); }
        }
        @keyframes spinRotate {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
