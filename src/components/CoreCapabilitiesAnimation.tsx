import { useEffect, useState, useMemo } from "react";

// ── NODE DEFINITIONS ──
const NODES: Record<string, any> = {
  root: { x: 290, y: 180, r: 35, label: 'Core\nCapabilities', type: 'root', color: '#1d4ed8', bg: '#eff6ff', border: '#bfdbfe', icon: 'C' },
  acct: { x: 100, y: 45,  r: 16, label: 'Account\nManagement', type: 'leaf', color: '#0369a1', bg: '#f0f9ff', border: '#bae6fd', icon: 'A' },
  opp:  { x: 50,  y: 135, r: 16, label: 'Opportunity\nPipeline', type: 'leaf', color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0', icon: 'O' },
  cont: { x: 50,  y: 225, r: 16, label: 'Contact\nMapping', type: 'leaf', color: '#d97706', bg: '#fffbeb', border: '#fcd34d', icon: 'C' },
  case: { x: 100, y: 315, r: 16, label: 'Case\nManagement', type: 'leaf', color: '#8b5cf6', bg: '#f5f3ff', border: '#ddd6fe', icon: 'S' },
  asset:{ x: 480, y: 45,  r: 16, label: 'Asset\nTracking', type: 'leaf', color: '#0369a1', bg: '#f0f9ff', border: '#bae6fd', icon: 'T' },
  cntr: { x: 530, y: 135, r: 16, label: 'Contract\nManagement', type: 'leaf', color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0', icon: 'M' },
  prtn: { x: 530, y: 225, r: 16, label: 'Partner\nManagement', type: 'leaf', color: '#d97706', bg: '#fffbeb', border: '#fcd34d', icon: 'P' },
  cust: { x: 480, y: 315, r: 16, label: 'Custom\nObjects', type: 'leaf', color: '#8b5cf6', bg: '#f5f3ff', border: '#ddd6fe', icon: 'O' },
};

// ── EDGE DEFINITIONS ──
const EDGE_STYLES: Record<string, any> = {
  blue:   { stroke:'#3b82f6', width:1.4, dash:'',    arrow:'arr-blue',  labelBg:'#eff6ff', labelColor:'#1d4ed8' },
  green:  { stroke:'#16a34a', width:1.4, dash:'',    arrow:'arr-green', labelBg:'#f0fdf4', labelColor:'#15803d' },
  amber:  { stroke:'#d97706', width:1.4, dash:'',    arrow:'arr-amber', labelBg:'#fffbeb', labelColor:'#92400e' },
  purple: { stroke:'#8b5cf6', width:1.4, dash:'',    arrow:'arr-purple',labelBg:'#f5f3ff', labelColor:'#6d28d9' },
};

// ── REVEAL SEQUENCE ──
const STEPS = [
  { nodes:['root'], edges:[] },
  {
    nodes:['acct','opp','cont','case'],
    edges:[
      { id:'e1', from:'root', to:'acct', style:'blue',  label:'Hierarchy' },   
      { id:'e2', from:'root', to:'opp',  style:'green', label:'Pipeline' },   
      { id:'e3', from:'root', to:'cont', style:'amber', label:'Network' },   
      { id:'e4', from:'root', to:'case', style:'purple',label:'Support' },   
    ]
  },
  {
    nodes:['asset','cntr','prtn','cust'],
    edges:[
      { id:'e5', from:'root', to:'asset', style:'blue',  label:'Tracking' },
      { id:'e6', from:'root', to:'cntr',  style:'green', label:'Agreements' },
      { id:'e7', from:'root', to:'prtn',  style:'amber', label:'Channels' },
      { id:'e8', from:'root', to:'cust',  style:'purple',label:'Extensible' },
    ]
  }
];

export default function CoreCapabilitiesAnimation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const runStep = () => {
      if (currentStep >= STEPS.length) {
        timeout = setTimeout(() => {
          setFadingOut(true);
          setTimeout(() => {
            setCurrentStep(0);
            setFadingOut(false);
          }, 600); // Wait for fade out
        }, 4000);
        return;
      }
      
      const step = STEPS[currentStep];
      const delay = currentStep === 1 ? 800 : currentStep === 2 ? 1000 : 900;
      timeout = setTimeout(() => setCurrentStep((prev) => prev + 1), delay + step.nodes.length * 150);
    };

    if (!fadingOut) {
      runStep();
    }
    
    return () => clearTimeout(timeout);
  }, [currentStep, fadingOut]);

  // Calculate visible edges
  const visibleEdges = useMemo(() => {
    const edges = [];
    for (let i = 0; i < currentStep; i++) {
        edges.push(...STEPS[i].edges.map((e, index) => ({...e, animDelay: index * 100})));
    }
    return edges;
  }, [currentStep]);

  // Calculate visible nodes
  const visibleNodes = useMemo(() => {
    const nodes = [];
    for (let i = 0; i < currentStep; i++) {
        nodes.push(...STEPS[i].nodes.map((id, index) => ({id, animDelay: index * 150 + 150})));
    }
    return nodes;
  }, [currentStep]);

  const connCount = visibleEdges.length;

  return (
    <div className="relative w-full h-[450px] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden font-sans border border-border/40 mb-12">
        <style dangerouslySetInnerHTML={{__html: `
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

            .features-anim {
                font-family: 'Inter', sans-serif;
            }

            @keyframes popIn {
                0%  { opacity:0; transform:scale(0.2); }
                65% { transform:scale(1.08); }
                100%{ opacity:1; transform:scale(1); }
            }
            @keyframes drawPath {
                from{ stroke-dashoffset:500; }
                to  { stroke-dashoffset:0; }
            }
            @keyframes labelFade {
                from{ opacity:0; transform:translateY(3px); }
                to  { opacity:1; transform:translateY(0); }
            }
        `}} />

        {/* ── HEADER ── */}
        <div className="px-5 py-4 border-b border-border/40 bg-gradient-to-b from-white to-slate-50 shrink-0 relative z-10">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-50 border-[1.5px] border-indigo-200 flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                            <circle cx="8" cy="8" r="4" stroke="#4f46e5" strokeWidth="1.5"/>     
                            <circle cx="8" cy="8" r="1.5" fill="#4f46e5" opacity="0.8"/>
                        </svg>
                    </div>
                    <div>
                        <div className="text-[14px] font-semibold text-slate-900 tracking-tight">Core Capabilities Engine</div>
                    </div>
                </div>
                <div className="px-2.5 py-1 rounded-xl bg-indigo-50 border border-indigo-200 text-[9.5px] font-medium text-indigo-700 tracking-wider" style={{fontFamily: "'JetBrains Mono', monospace"}}>
                    <span>{connCount}</span> ACTIVE
                </div>
            </div>
        </div>

        {/* ── CANVAS ── */}
        <div className="flex-1 relative overflow-hidden features-anim bg-slate-50/50">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #0f172a 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>
            
            <svg viewBox="0 0 580 360" preserveAspectRatio="xMidYMid meet" className="w-full h-full block" style={{ opacity: fadingOut ? 0 : 1, transition: 'opacity 0.6s' }}>
                <defs>
                    <filter id="shadow-sm" x="-30%" y="-30%" width="160%" height="160%">    
                        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.10)"/>
                    </filter>
                    <filter id="shadow-md" x="-40%" y="-40%" width="180%" height="180%">    
                        <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="rgba(0,0,0,0.12)"/>
                    </filter>
                    <marker id="arr-blue" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto">
                        <path d="M1 1.5L6 4L1 6.5" fill="none" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </marker>
                    <marker id="arr-green" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto">
                        <path d="M1 1.5L6 4L1 6.5" fill="none" stroke="#16a34a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </marker>
                    <marker id="arr-amber" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto">
                        <path d="M1 1.5L6 4L1 6.5" fill="none" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </marker>
                    <marker id="arr-purple" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto">
                        <path d="M1 1.5L6 4L1 6.5" fill="none" stroke="#8b5cf6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </marker>
                </defs>

                <g id="layer-lines">
                    {visibleEdges.map(edge => {
                        const fn = NODES[edge.from];
                        const tn = NODES[edge.to];
                        const s = EDGE_STYLES[edge.style];
                        if (!fn || !tn) return null;

                        const x1 = fn.x + (fn.x < tn.x ? fn.r : -fn.r);
                        const y1 = fn.y;
                        const x2 = tn.x - (fn.x < tn.x ? tn.r : -tn.r);
                        const y2 = tn.y;
                        const cx = (x1 + x2) / 2;

                        return (
                            <path 
                                key={edge.id}
                                d={`M${x1},${y1} C${cx},${y1} ${cx},${y2} ${x2},${y2}`}
                                fill="none"
                                stroke={s.stroke}
                                strokeWidth={s.width}
                                strokeDasharray={s.dash || '500'}
                                strokeDashoffset={500}
                                markerEnd={`url(#${s.arrow})`}
                                style={{ animation: `drawPath 0.6s ease ${edge.animDelay}ms forwards` }}
                            />
                        );
                    })}
                </g>

                <g id="layer-labels">
                    {visibleEdges.map(edge => {
                        const fn = NODES[edge.from];
                        const tn = NODES[edge.to];
                        const s = EDGE_STYLES[edge.style];
                        
                        if (!fn || !tn || !edge.label || edge.style === 'gray') return null;

                        const x1 = fn.x + (fn.x < tn.x ? fn.r : -fn.r);
                        const y1 = fn.y;
                        const x2 = tn.x - (fn.x < tn.x ? tn.r : -tn.r);
                        const y2 = tn.y;
                        const lx = (x1 + x2) / 2;
                        const ly = (y1 + y2) / 2 - 6;

                        return (
                            <g key={`label-${edge.id}`} style={{ animation: `labelFade 0.4s ease ${edge.animDelay + 400}ms both`, opacity: 0 }}>
                                <rect x={lx - 30} y={ly - 8} width={60} height={14} rx={7} fill={s.labelBg} stroke={s.stroke} strokeWidth={0.5} />
                                <text x={lx} y={ly + 2} fill={s.labelColor} fontSize={7.5} fontWeight={500} textAnchor="middle">{edge.label}</text>
                            </g>
                        );
                    })}
                </g>

                <g id="layer-nodes">
                    {visibleNodes.map(nObj => {
                        const n = NODES[nObj.id];
                        if (!n) return null;

                        const onRight = n.x >= 290;
                        const labelX = n.type === 'root' ? n.x : onRight ? n.x + n.r + 6 : n.x - n.r - 6;
                        const labelY = n.type === 'root' ? n.y + n.r + 14 : n.y - 4;
                        const anchor = n.type === 'root' ? 'middle' : onRight ? 'start' : 'end';
                        const lines = n.label.split('\n');

                        return (
                            <g key={`node-${nObj.id}`} style={{ transformOrigin: `${n.x}px ${n.y}px`, animation: `popIn 0.45s cubic-bezier(0.34,1.15,0.64,1) ${nObj.animDelay}ms both` }}>
                                <circle cx={n.x} cy={n.y} r={n.r} fill={n.bg} stroke={n.border} strokeWidth={n.type === 'root' ? 2 : 1.2} filter={n.type === 'root' ? 'url(#shadow-md)' : 'url(#shadow-sm)'} />
                                
                                {n.type === 'root' ? (
                                    <circle cx={n.x} cy={n.y} r={n.r * 0.45} fill={n.color} opacity={0.85} />
                                ) : (
                                    <rect x={n.x - 5} y={n.y - 5} width={10} height={10} rx={2} fill={n.color} opacity={0.7} />
                                )}

                                {lines.map((line: string, i: number) => (
                                    <text 
                                        key={i}
                                        x={labelX} 
                                        y={labelY + i * 13} 
                                        fill={n.type === 'root' ? '#1e3a8a' : '#334155'}
                                        fontSize={n.type === 'root' ? 11 : 8.5}
                                        fontWeight={n.type === 'root' ? 700 : 500}
                                        textAnchor={anchor}
                                    >
                                        {line}
                                    </text>
                                ))}
                            </g>
                        );
                    })}
                </g>
            </svg>
        </div>
    </div>
  );
}
