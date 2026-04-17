import { useEffect, useState } from "react";
import { Building2, TrendingUp, Contact, Headphones, Package, FileText, GitMerge } from "lucide-react";

const NODES = [
  { id: 'acc', icon: Building2, color: '#3b82f6', bg: '#eff6ff', border: '#bfdbfe' },
  { id: 'opp', icon: TrendingUp, color: '#10b981', bg: '#ecfdf5', border: '#a7f3d0' },
  { id: 'con', icon: Contact, color: '#f59e0b', bg: '#fffbeb', border: '#fde68a' },
  { id: 'cas', icon: Headphones, color: '#ef4444', bg: '#fef2f2', border: '#fecaca' },
  { id: 'ast', icon: Package, color: '#8b5cf6', bg: '#f5f3ff', border: '#ddd6fe' },
  { id: 'cnt', icon: FileText, color: '#6366f1', bg: '#eef2ff', border: '#c7d2fe' },
];

export default function UseCasesAnimation() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let start = performance.now();
    const animate = (time: number) => {
      const elapsed = time - start;
      // Slow, smooth rotation (1 degree every ~60ms)
      setRotation((elapsed / 60) % 360);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="w-full h-full min-h-[300px] relative bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center overflow-hidden font-sans">
      
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      {/* Background circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         <div className="w-[160px] h-[160px] rounded-full border border-slate-200/60" />
         <div className="w-[260px] h-[260px] rounded-full border border-slate-200/40 absolute" />
         <div className="w-[360px] h-[360px] rounded-full border border-slate-100 absolute" />
      </div>

      {/* Connecting Lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
          <defs>
              <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.1" />
              </linearGradient>
          </defs>
          <g transform={`translate(200, 200) rotate(${rotation})`}>
              {NODES.map((node, i) => {
                  const angle = (i * 360) / NODES.length;
                  const rad = (angle * Math.PI) / 180;
                  const radius = 130;
                  const x = radius * Math.cos(rad);
                  const y = radius * Math.sin(rad);

                  return (
                      <line 
                          key={`line-${node.id}`}
                          x1="0" y1="0"
                          x2={x} y2={y}
                          stroke="url(#line-grad)"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                      />
                  )
              })}
          </g>
      </svg>

      {/* Orbiting Nodes Container */}
      <div 
        className="absolute w-[260px] h-[260px] z-10 pointer-events-none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {NODES.map((node, i) => {
          const angle = (i * 360) / NODES.length;
          const rad = (angle * Math.PI) / 180;
          const radius = 130; // Half of 260
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          return (
            <div 
              key={node.id}
              className="absolute left-1/2 top-1/2 shadow-sm"
              style={{
                width: '44px',
                height: '44px',
                marginLeft: '-22px',
                marginTop: '-22px',
                borderRadius: '50%',
                backgroundColor: node.bg,
                border: \`1.5px solid \${node.border}\`,
                transform: \`translate(\${x}px, \${y}px) rotate(\${-rotation}deg)\`, // Counter-rotate to stay upright
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
                <node.icon style={{ color: node.color, width: '20px', height: '20px' }} />
                
                {/* Ping animation wrapper */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent" style={{ borderColor: node.color, opacity: 0.2, animation: \`ping 3s cubic-bezier(0, 0, 0.2, 1) infinite \${i * 0.5}s\` }}></div>
            </div>
          )
        })}
      </div>

      {/* Central Node */}
      <div className="absolute z-20 w-[72px] h-[72px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex items-center justify-center pointer-events-none">
        <div className="w-[56px] h-[56px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-[14px] flex items-center justify-center">
            <GitMerge className="w-7 h-7 text-primary" />
        </div>
      </div>
      
      {/* Decorative corners */}
      <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-slate-200"></div>
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-slate-200"></div>
      <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-slate-200"></div>
      <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-slate-200"></div>

      <style dangerouslySetInnerHTML={{__html: \`
        @keyframes ping {
            75%, 100% {
                transform: scale(1.8);
                opacity: 0;
            }
        }
      \`}} />
    </div>
  );
}
