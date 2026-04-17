import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, TrendingUp, Contact, Headphones, 
  Package, FileText, Database, GitBranch, 
  GitMerge, ChevronLeft, ChevronRight, Pause, Play 
} from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "Account Management",
    description: "Visualize complex master-detail account hierarchies, parent-child structures, and all related contacts in a single view.",
    color: "from-blue-500 to-blue-600",
    iconColor: "#ffffff",
    ringColor: "#3b82f6"
  },
  {
    icon: TrendingUp,
    title: "Opportunity Pipeline",
    description: "Group and explore opportunities by stage, source, or amount. Spot roadblocks early with a clear visual sales pipeline hierarchy.",
    color: "from-emerald-500 to-emerald-600",
    iconColor: "#ffffff",
    ringColor: "#10b981"
  },
  {
    icon: Contact,
    title: "Contact Mapping",
    description: "Map out who reports to whom. Uncover hidden decision-makers and key influencers across multi-org networks.",
    color: "from-amber-500 to-amber-600",
    iconColor: "#ffffff",
    ringColor: "#f59e0b"
  },
  {
    icon: Headphones,
    title: "Case Management",
    description: "Accelerate resolution times by visualizing case histories, related escalations, and support chains at a glance.",
    color: "from-rose-500 to-rose-600",
    iconColor: "#ffffff",
    ringColor: "#ef4444"
  },
  {
    icon: Package,
    title: "Asset Tracking",
    description: "Connect the dots between physical assets, software products, and active contracts assigned to your accounts.",
    color: "from-purple-500 to-purple-600",
    iconColor: "#ffffff",
    ringColor: "#8b5cf6"
  },
  {
    icon: FileText,
    title: "Contract Management",
    description: "See the exact relationships between master service agreements, amendments, and software license dependencies.",
    color: "from-indigo-500 to-indigo-600",
    iconColor: "#ffffff",
    ringColor: "#6366f1"
  },
  {
    icon: Database,
    title: "Custom Objects",
    description: "Don't settle for standard objects. Build stunning visual maps for absolutely any custom object relationship in your org.",
    color: "from-pink-500 to-pink-600",
    iconColor: "#ffffff",
    ringColor: "#ec4899"
  },
  {
    icon: GitBranch,
    title: "Partner Management",
    description: "Explore extensive partner hierarchies, channel distribution relationships, and complex tiered reseller structures.",
    color: "from-teal-500 to-teal-600",
    iconColor: "#ffffff",
    ringColor: "#14b8a6"
  },
];

export default function UseCasesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
     const handleResize = () => setWindowWidth(window.innerWidth);
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % useCases.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => setActiveIndex(prev => (prev + 1) % useCases.length);
  const prevSlide = () => setActiveIndex(prev => (prev - 1 + useCases.length) % useCases.length);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  
  const outerRx = isMobile ? 140 : isTablet ? 280 : 400;
  const outerRy = isMobile ? 60 : isTablet ? 90 : 130;

  const activeColor = useCases[activeIndex].ringColor;

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden font-sans">
      
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-50 mb-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Core Capabilities
          </p>
          <h2 className="text-3xl md:text-[40px] font-extrabold font-heading leading-tight mb-4 text-slate-900">
            Endless Use Cases for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Every Team</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Interactive, natively built object mapping that adapts instantly to fit the unique relational data models of service, revops, partnerships, and operations.
          </p>
        </motion.div>
      </div>

      {/* The 3D Interactive Ring Carousel */}
      <div className="relative w-full h-[550px] md:h-[650px] flex items-center justify-center mt-4">
          
        {/* Layer 5: Back Arc */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }} viewBox="-500 -500 1000 1000" preserveAspectRatio="xMidYMid meet">
           <path d={`M -${outerRx} 0 A ${outerRx} ${outerRy} 0 0 1 ${outerRx} 0`} fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" opacity="0.5" />
        </svg>

        {/* Layer 10: Central Hub */}
        <div 
          className="absolute flex items-center justify-center"
          style={{ zIndex: 10, left: '50%', top: '50%', transform: 'translate(-50%, -50%)', animation: 'hubPulse 4s ease-in-out infinite alternate' }}
        >
          <div className="absolute inset-0 rounded-full border border-blue-500/30 scale-[1.3]" style={{ animation: 'spinRotate 20s linear infinite' }}></div>
          <div className="absolute inset-0 rounded-full border border-dashed border-emerald-500/30 scale-[1.7]" style={{ animation: 'spinRotate 30s linear infinite reverse' }}></div>
          
          <div className="w-[84px] h-[84px] bg-white rounded-2xl shadow-[0_12px_40px_rgba(59,130,246,0.15)] flex items-center justify-center border border-slate-100">
             <div className="w-[64px] h-[64px] rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shadow-inner">
                <GitMerge className="w-8 h-8 text-blue-600" />
             </div>
          </div>
        </div>

        {/* Layer 15: Front Arc */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none transition-colors duration-500" style={{ zIndex: 15 }} viewBox="-500 -500 1000 1000" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="ring-glow-front" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={activeColor} stopOpacity="0.1" />
              <stop offset="50%" stopColor={activeColor} stopOpacity="0.8" />
              <stop offset="100%" stopColor={activeColor} stopOpacity="0.1" />
            </linearGradient>
            <filter id="blur-front">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>
          <path d={`M -${outerRx} 0 A ${outerRx} ${outerRy} 0 0 0 ${outerRx} 0`} fill="none" stroke="url(#ring-glow-front)" strokeWidth="4" strokeDasharray="8 8" filter="url(#blur-front)" style={{ transition: 'stroke 0.5s ease' }} />
          <path d={`M -${outerRx} 0 A ${outerRx} ${outerRy} 0 0 0 ${outerRx} 0`} fill="none" stroke={activeColor} strokeWidth="2" strokeDasharray="8 8" opacity="0.8" style={{ transition: 'stroke 0.5s ease' }} />
        </svg>

        {/* Layer 0-40: Orbiting Nodes */}
        {useCases.map((uc, i) => {
           const offsetIndex = (i - activeIndex + useCases.length) % useCases.length;
           // We want offset 0 to be 90 degrees (Math.sin = 1) -> absolute front
           const angleDegrees = 90 - (offsetIndex * (360 / useCases.length));
           const rad = (angleDegrees * Math.PI) / 180;
           
           const isActive = offsetIndex === 0;

           const x = outerRx * Math.cos(rad);
           const y = outerRy * Math.sin(rad);
           const depth = Math.sin(rad); 

           const zIndex = 20 + Math.round(depth * 20); // Front > 20, Back < 20 (Hub=10)

           // Sizes
           const expandedW = isMobile ? 280 : 360;
           const expandedH = isMobile ? 130 : 120;
           
           const smallW = 56;
           
           // Centering margins based on active standard sizing
           const widthValue = isActive ? expandedW : smallW;
           const heightValue = isActive ? expandedH : smallW;

           return (
             <motion.div
               key={uc.title}
               layout
               initial={false}
               animate={{
                  x,
                  y,
                  width: widthValue,
                  height: heightValue,
                  scale: isActive ? 1.05 : (0.75 + 0.25 * depth),
                  opacity: depth < -0.5 ? 0.4 : 1,
                  zIndex,
                  marginLeft: -(widthValue / 2),
                  marginTop: -(heightValue / 2)
               }}
               transition={{ type: 'spring', stiffness: 180, damping: 22 }}
               style={{
                  left: '50%', top: '50%',
                  position: 'absolute',
                  filter: depth < -0.5 ? 'blur(2px)' : 'none',
                  backgroundColor: isActive ? 'white' : 'rgba(255,255,255,0.85)',
                  boxShadow: isActive ? `0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px ${uc.ringColor}30` : '0 8px 16px rgba(0,0,0,0.06)',
               }}
               onClick={() => !isActive && setActiveIndex(i)}
               className={`flex items-center cursor-pointer transition-colors duration-300 backdrop-blur-md overflow-hidden ${isActive ? 'p-4 rounded-[28px]' : 'rounded-full justify-center hover:bg-white'}`}
             >
                <div className={`flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${uc.color} border border-white/40 shadow-sm ${isActive ? 'w-[72px] h-[72px] rounded-2xl mr-4' : 'w-[56px] h-[56px] rounded-full'}`} style={{ transition: 'all 0.3s ease' }}>
                   <uc.icon className={`text-white drop-shadow-sm ${isActive ? 'w-8 h-8' : 'w-6 h-6'}`} style={{ transition: 'all 0.3s ease' }} />
                </div>

                <AnimatePresence mode="wait">
                  {isActive && (
                     <motion.div 
                        key="content"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="flex-1 min-w-0 pr-2"
                     >
                        <h3 className="font-heading font-bold text-lg text-slate-800 mb-1.5 tracking-tight truncate leading-tight">{uc.title}</h3>
                        <p className="text-sm text-slate-600 leading-snug line-clamp-3">{uc.description}</p>
                     </motion.div>
                  )}
                </AnimatePresence>
             </motion.div>
           )
        })}

        {/* Carousel Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-50">
           <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary transition-colors">
              <ChevronLeft className="w-5 h-5 pr-0.5" />
           </button>
           
           <button onClick={() => setIsPaused(!isPaused)} className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary transition-colors">
              {isPaused ? <Play className="w-4 h-4 ml-0.5" /> : <Pause className="w-4 h-4" />}
           </button>

           <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary transition-colors">
              <ChevronRight className="w-5 h-5 pl-0.5" />
           </button>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes hubPulse {
            0%   { transform: translate(-50%, -50%) scale(1); box-shadow: 0 12px 40px rgba(59,130,246,0.15); }
            100% { transform: translate(-50%, -50%) scale(1.05); box-shadow: 0 20px 50px rgba(59,130,246,0.25); }
        }
        @keyframes spinRotate {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
        }
      `}} />
    </section>
  )
}


