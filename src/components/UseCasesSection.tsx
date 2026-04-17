import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, TrendingUp, Contact, Headphones, 
  Package, FileText, Database, GitBranch
} from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "Account Management",
    description: "Visualize complex master-detail account hierarchies, parent-child structures, and all related contacts in a single view.",
    ringColor: "hsl(var(--primary))"
  },
  {
    icon: TrendingUp,
    title: "Opportunity Pipeline",
    description: "Group and explore opportunities by stage, source, or amount. Spot roadblocks early with a clear visual sales pipeline hierarchy.",
    ringColor: "hsl(var(--primary))"
  },
  {
    icon: Contact,
    title: "Contact Mapping",
    description: "Map out who reports to whom. Uncover hidden decision-makers and key influencers across multi-org networks.",
    ringColor: "hsl(var(--primary))"
  },
  {
    icon: Headphones,
    title: "Case Management",
    description: "Accelerate resolution times by visualizing case histories, related escalations, and support chains at a glance.",
    ringColor: "hsl(var(--primary))"
  },
  {
    icon: Package,
    title: "Asset Tracking",
    description: "Connect the dots between physical assets, software products, and active contracts assigned to your accounts.",
    ringColor: "hsl(var(--primary))"
  },
  {
    icon: FileText,
    title: "Contract Management",
    description: "See the exact relationships between master service agreements, amendments, and software license dependencies.",
    ringColor: "hsl(var(--primary))"
  },
  {
    icon: Database,
    title: "Custom Objects",
    description: "Don't settle for standard objects. Build stunning visual maps for absolutely any custom object relationship in your org.",
    ringColor: "hsl(var(--primary))"
  },
  {
    icon: GitBranch,
    title: "Partner Management",
    description: "Explore extensive partner hierarchies, channel distribution relationships, and complex tiered reseller structures.",
    ringColor: "hsl(var(--primary))"
  },
];

export default function UseCasesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
     const handleResize = () => setWindowWidth(window.innerWidth);
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % useCases.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  
  const outerRx = isMobile ? 140 : isTablet ? 280 : 400;
  const outerRy = isMobile ? 60 : isTablet ? 90 : 130;

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden font-sans">
      
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
      <div 
        className="relative w-full h-[550px] md:h-[650px] flex items-center justify-center mt-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
          
        {/* Layer 5: Back Arc */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }} viewBox="-500 -500 1000 1000" preserveAspectRatio="xMidYMid meet">
           <path d={`M -${outerRx} 0 A ${outerRx} ${outerRy} 0 0 1 ${outerRx} 0`} fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" opacity="0.5" />
        </svg>

        {/* Layer 10: Central Hub */}
        <div 
          className="absolute flex items-center justify-center"
          style={{ zIndex: 10, left: '50%', top: '50%', transform: 'translate(-50%, -50%)', animation: 'hubPulse 4s ease-in-out infinite alternate' }}
        >
          <div className="absolute inset-0 rounded-full border border-primary/20 scale-[1.3]" style={{ animation: 'spinRotate 20s linear infinite' }}></div>
          <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 scale-[1.7]" style={{ animation: 'spinRotate 30s linear infinite reverse' }}></div>
          
          <div className="w-[84px] h-[84px] bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-100">
             <div className="w-[64px] h-[64px] rounded-xl bg-primary/5 flex items-center justify-center shadow-inner overflow-hidden">
                <img src="/favicon.png" alt="RelationshipVista Logo" className="w-[42px] h-[42px] object-contain drop-shadow-sm" />
             </div>
          </div>
        </div>

        {/* Layer 15: Front Arc */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none transition-colors duration-500" style={{ zIndex: 15 }} viewBox="-500 -500 1000 1000" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="ring-glow-front" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            </linearGradient>
            {/* Removed SVG blur filter for drastically improved frame rates and rotation smoothness */}
          </defs>
          <path d={`M -${outerRx} 0 A ${outerRx} ${outerRy} 0 0 0 ${outerRx} 0`} fill="none" stroke="url(#ring-glow-front)" strokeWidth="6" strokeDasharray="8 8" opacity="0.4" style={{ transition: 'stroke 0.5s ease' }} />
          <path d={`M -${outerRx} 0 A ${outerRx} ${outerRy} 0 0 0 ${outerRx} 0`} fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="8 8" opacity="0.8" style={{ transition: 'stroke 0.5s ease' }} />
        </svg>

        {/* Layer 0-40: Orbiting Nodes */}
        {useCases.map((uc, i) => {
           const offsetIndex = (i - activeIndex + useCases.length) % useCases.length;
           const angleDegrees = 90 - (offsetIndex * (360 / useCases.length));
           const rad = (angleDegrees * Math.PI) / 180;
           
           const isActive = offsetIndex === 0;
           const isCardHovering = hoveredCard === i;

           const x = outerRx * Math.cos(rad);
           const y = outerRy * Math.sin(rad);
           const depth = Math.sin(rad); 

           const zIndex = 20 + Math.round(depth * 20); 
           
           // Optimize performance: don't use Framer Motion for static sizing calculations
           // Using translate(-50%, -50%) centers it automatically without margins!
           const expandedW = isMobile ? 280 : 360;
           const smallW = 56;
           const widthValue = isActive ? expandedW : smallW;

           return (
             <motion.div
               key={uc.title}
               initial={false}
               animate={{
                  x,
                  y,
                  scale: isActive ? 1.05 : (0.75 + 0.25 * depth),
                  opacity: depth < -0.5 ? 0.4 : 1,
               }}
               transition={{ type: 'spring', stiffness: 120, damping: 20 }} // Tuned for buttery smooth rotation
               style={{
                  left: '50%', top: '50%',
                  position: 'absolute',
                  zIndex,
               }}
             >
                {/* Inner Centering Wrapper */}
                <motion.div
                  layout
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => !isActive && setActiveIndex(i)}
                  style={{ width: widthValue }} // Framer motion naturally scales width and auto-height
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center cursor-pointer transition-colors duration-300 backdrop-blur-md overflow-hidden shadow-lg ${
                    isActive ? 'p-4 rounded-3xl bg-white border border-border/40 hover:shadow-xl' : 'rounded-full justify-center bg-white/85 hover:bg-white border border-transparent'
                  }`}
                >
                    {/* Utilizing standard Features Section Icon styling */}
                    <div className={`flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                       isActive ? 'w-[64px] h-[64px] rounded-2xl mr-4 bg-primary/10' : 'w-[56px] h-[56px] rounded-full icon-box'
                    }`}>
                       <uc.icon className={`text-primary transition-all duration-300 ${isActive ? 'w-8 h-8' : 'w-5 h-5'}`} />
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
                            <h3 className={`font-heading font-bold text-lg text-slate-800 mb-1.5 transition-all duration-300 tracking-tight leading-tight ${isCardHovering ? '' : 'truncate'}`}>{uc.title}</h3>
                            <p className={`text-sm text-slate-600 leading-snug transition-all duration-300 ${isCardHovering ? '' : 'line-clamp-3'}`}>
                               {uc.description}
                            </p>
                         </motion.div>
                      )}
                    </AnimatePresence>
                </motion.div>
             </motion.div>
           )
        })}

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes hubPulse {
            0%   { transform: translate(-50%, -50%) scale(1); box-shadow: 0 12px 40px rgba(var(--primary),0.05); }
            100% { transform: translate(-50%, -50%) scale(1.05); box-shadow: 0 20px 50px rgba(var(--primary),0.15); }
        }
        @keyframes spinRotate {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
        }
      `}} />
    </section>
  )
}


