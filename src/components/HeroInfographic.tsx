import React, { memo } from 'react';

const HeroInfographic = () => {
  return (
    <div className="hero-anim-root relative w-full h-auto overflow-visible bg-transparent font-sans flex justify-center py-2">
      <style>{`
  
  

  .scene{
    position:relative;width:100%;aspect-ratio:4/3;max-height:850px;
    display:flex;align-items:center;justify-content:center;
    container-type:inline-size;
    overflow:visible;
    contain: layout style;
  }

  /* ===== MAIN DASHBOARD PANEL (STATIC) ===== */
  .main-panel{
    position:absolute;
    top:3%;left:3%;width:94%;height:90%;
    background:rgba(255,255,255,0.95);
    border-radius:clamp(12px, 1.5vw, 16px);
    box-shadow:0 20px 60px rgba(0,0,0,0.08),0 1px 3px rgba(0,0,0,0.06);
    display:flex;overflow:hidden;z-index:2;
    border:1px solid rgba(0,0,0,0.06);
  }

  /* Left sidebar icons */
  .sidebar{
    width:4.5cqw;background:#f7f8fa;
    border-right:1px solid #eaedf0;
    display:flex;flex-direction:column;align-items:center;
    padding:1.4cqw 0;gap:0.5cqw;flex-shrink:0;
  }
  .sidebar-icon{
    width:3.6cqw;height:3.6cqw;border-radius:1cqw;
    display:flex;align-items:center;justify-content:center;
    color:#8e99a8;cursor:pointer;transition:all 0.2s;
  }
  .sidebar-icon:hover,.sidebar-icon.active{background:#e8ecf1;color:#4a5568}
  .sidebar-icon svg{width:1.8cqw;height:1.8cqw}

  /* Visual Relationship Tree (left half) */
  .tree-section{flex:1.1;display:flex;flex-direction:column;border-right:1px solid #eaedf0;min-width:0}
  .section-header{
    padding:1.4cqw 2cqw;
    border-bottom:1px solid #eaedf0;
    font-size:1.3cqw;font-weight:600;color:#1a202c;
    letter-spacing:0.02cqw;
  }
  .tree-canvas{
    flex:1;position:relative;overflow:hidden;padding:20px;
    display:flex;align-items:center;justify-content:center;
    background-image:radial-gradient(#cbd5e1 1px, transparent 1px);
    background-size:24px 24px;
  }

  /* Relationship Explorer (right half) */
  .explorer-section{flex:0.9;display:flex;flex-direction:column;min-width:0}
  .explorer-toolbar{
    padding:0.8cqw 1.4cqw;border-bottom:1px solid #eaedf0;
    display:flex;align-items:center;gap:0.7cqw;
  }
  .search-box{
    flex:1;height:4cqw;border-radius:1cqw;border:1px solid #dde1e6;
    padding:0 1.2cqw 0 4cqw;font-size:1.5cqw;color:#64748b;
    background:#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' viewBox='0 0 24 24'%3E%3Ccircle cx='11' cy='11' r='7' stroke='%2394a3b8' stroke-width='2'/%3E%3Cpath d='M16 16l4 4' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E") 1.2cqw center no-repeat;
    background-size:1.8cqw;
  }
  .toolbar-btn{
    width:3.8cqw;height:3.8cqw;border-radius:0.8cqw;border:1px solid #dde1e6;
    background:#fff;display:flex;align-items:center;justify-content:center;
    color:#64748b;cursor:pointer;font-size:1.8cqw;
  }
  .explorer-tree{flex:1;overflow:hidden;padding:1.8cqw 2.5cqw;font-size:1.8cqw;color:#334155}

  /* Tree items */
  .tree-item{display:flex;align-items:center;gap:1cqw;padding:0.6cqw 0;cursor:pointer;position:relative;}
  .tree-item.parent{font-weight:600;color:#1e293b}
  .tree-item .arrow{width:1.8cqw;color:#94a3b8;font-size:1.5cqw;flex-shrink:0;text-align:center}
  .tree-item .icon{width:2.8cqw;height:2.8cqw;border-radius:0.6cqw;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.5cqw}
  .tree-children{padding-left:2.2cqw; margin-left:1cqw; border-left:1px dashed #cbd5e1; margin-bottom:0.8cqw;}
  .tree-sub{padding-left:2.2cqw; margin-left:1cqw; border-left:1px dashed #cbd5e1;}
  .tree-sub-item{display:flex;align-items:center;gap:1cqw;padding:0.4cqw 0;font-size:1.6cqw;color:#475569;position:relative;}
  .tree-sub-item::before{content:'';position:absolute;left:-1.2cqw;top:50%;width:0.8cqw;height:1px;background:#cbd5e1;}
  .tree-sub-item .dot{width:0.5cqw;height:0.5cqw;border-radius:0.15cqw;flex-shrink:0}

  /* ===== NODE MAP SVG ELEMENTS ===== */
  .node-card{
    position:absolute;
    transform:translate3d(-50%,-50%,0);
    background:rgba(255,255,255,0.92);
    border-radius:clamp(12px, 1.8cqw, 24px);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:clamp(5px, 0.8cqw, 10px);
    border:1px solid rgba(255,255,255,0.8);
    box-shadow:0 0.8cqw 2.5cqw rgba(0,0,0,0.06);
    transition:transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    will-change: transform;
    z-index:2;
  }
  .node-card:hover{transform:translate3d(-50%,-50%,0) scale(1.05);z-index:10;}
  .node-card .node-icon{
    width:clamp(22px, 3.6cqw, 42px);height:clamp(22px, 3.6cqw, 42px);
    border-radius:50%;
    display:flex;align-items:center;justify-content:center;
    font-weight:bold;color:#fff;
    font-size:clamp(10px, 1.6cqw, 18px);
  }
  .node-card .node-label{
    font-size:clamp(10px, 1.4cqw, 16px);
    font-weight:600;color:#1e293b;
    line-height:1.2;
    white-space:nowrap;
  } 

  /* Center node (Acme Corporation) */
  .node-center{
    left:50%;top:50%;
    width:clamp(100px, 17cqw, 180px);height:clamp(65px, 11cqw, 110px);
    background:linear-gradient(135deg, rgba(76, 175, 80, 0.05), rgba(255,255,255,0.85));
    border:1px solid rgba(76, 175, 80, 0.25);
    box-shadow:0 8px 32px rgba(76, 175, 80, 0.1), inset 0 1px 0 rgba(255,255,255,1);
    z-index:5;
  }
  .node-center .node-icon{background:linear-gradient(135deg, #4caf50, #2e7d32); color:#fff; box-shadow:0 4px 12px rgba(76,175,80,0.3); width:clamp(22px, 3.5cqw, 38px); height:clamp(22px, 3.5cqw, 38px);}

  /* Opportunities */
  .node-opp{left:42%;top:18%;width:clamp(90px, 14cqw, 150px);height:clamp(55px, 8.5cqw, 95px);
    background:linear-gradient(135deg, rgba(139, 195, 74, 0.05), rgba(255,255,255,0.85));
    border:1px solid rgba(139, 195, 74, 0.25);
    box-shadow:0 8px 24px rgba(139, 195, 74, 0.1), inset 0 1px 0 rgba(255,255,255,1);
  }
  .node-opp .node-icon{background:linear-gradient(135deg, #8bc34a, #558b2f); color:#fff; box-shadow:0 4px 12px rgba(139,195,74,0.3);}
  
  /* Assets */
  .node-assets{left:82%;top:32%;width:clamp(85px, 13cqw, 140px);height:clamp(55px, 8.5cqw, 95px);
    background:linear-gradient(135deg, rgba(76, 175, 80, 0.05), rgba(255,255,255,0.85));
    border:1px solid rgba(76, 175, 80, 0.25);
    box-shadow:0 8px 24px rgba(76, 175, 80, 0.1), inset 0 1px 0 rgba(255,255,255,1);
  }
  .node-assets .node-icon{background:linear-gradient(135deg, #4caf50, #2e7d32); color:#fff; box-shadow:0 4px 12px rgba(76,175,80,0.3);}
  
  /* Contacts */
  .node-contacts{left:18%;top:38%;width:clamp(85px, 13cqw, 140px);height:clamp(55px, 8.5cqw, 95px);
    background:linear-gradient(135deg, rgba(121, 134, 203, 0.05), rgba(255,255,255,0.85));
    border:1px solid rgba(121, 134, 203, 0.25);
    box-shadow:0 8px 24px rgba(121, 134, 203, 0.1), inset 0 1px 0 rgba(255,255,255,1);
  }
  .node-contacts .node-icon{background:linear-gradient(135deg, #7986cb, #3f51b5); color:#fff; box-shadow:0 4px 12px rgba(121,134,203,0.3);}
  
  /* Cases */
  .node-cases{left:22%;top:78%;width:clamp(85px, 13cqw, 140px);height:clamp(55px, 8.5cqw, 95px);
    background:linear-gradient(135deg, rgba(255, 183, 77, 0.05), rgba(255,255,255,0.85));
    border:1px solid rgba(255, 183, 77, 0.25);
    box-shadow:0 8px 24px rgba(255, 183, 77, 0.1), inset 0 1px 0 rgba(255,255,255,1);
  }
  .node-cases .node-icon{background:linear-gradient(135deg, #ffb74d, #ef6c00); color:#fff; box-shadow:0 4px 12px rgba(255,183,77,0.3);}
  
  /* Activities */
  .node-activities{left:50%;top:86%;width:clamp(85px, 13cqw, 140px);height:clamp(55px, 8.5cqw, 95px);
    background:linear-gradient(135deg, rgba(239, 83, 80, 0.05), rgba(255,255,255,0.85));
    border:1px solid rgba(239, 83, 80, 0.25);
    box-shadow:0 8px 24px rgba(239, 83, 80, 0.1), inset 0 1px 0 rgba(255,255,255,1);
  }
  .node-activities .node-icon{background:linear-gradient(135deg, #ef5350, #c62828); color:#fff; box-shadow:0 4px 12px rgba(239,83,80,0.3);}
  
  /* Contracts */
  .node-contracts{left:82%;top:72%;width:clamp(90px, 14cqw, 150px);height:clamp(55px, 8.5cqw, 95px);
    background:linear-gradient(135deg, rgba(77, 208, 225, 0.05), rgba(255,255,255,0.85));
    border:1px solid rgba(77, 208, 225, 0.25);
    box-shadow:0 8px 24px rgba(77, 208, 225, 0.1), inset 0 1px 0 rgba(255,255,255,1);
  }
  .node-contracts .node-icon{background:linear-gradient(135deg, #4dd0e1, #00838f); color:#fff; box-shadow:0 4px 12px rgba(77,208,225,0.3);}

  /* Connection lines via SVG overlay */
  .connections-svg{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1}
  .conn-line{fill:none;stroke-width:0.25cqw;opacity:0.75;animation:pulseOpacity 3s ease-in-out infinite alternate;will-change: opacity;}
  @keyframes pulseOpacity { 0% { opacity:0.2; } 100% { opacity:0.8; } }

  /* ===== FLOATING BAR CHART (top-right) ===== */
  .float-bar-chart{
    position:absolute;top:0%;right:4%;z-index:10;
    animation:floatBar 4s ease-in-out infinite;
    background:rgba(255,255,255,0.85);
    backdrop-filter:blur(8px);
    border:1px solid rgba(255,255,255,0.5);
    padding:1.6cqw 2cqw;
    border-radius:1.8cqw;
    box-shadow:0 1cqw 2.5cqw rgba(0,0,0,0.1);
    will-change: transform;
  }


  .bar-chart-3d{display:flex;align-items:flex-end;gap:0.8cqw;height:7cqw;}
  .bar-col{
    width:1.6cqw;border-radius:0.35cqw 0.35cqw 0 0;
    box-shadow:inset -0.2cqw 0 0 rgba(0,0,0,0.1);
  }

  /* ===== FLOATING PIE CHART (bottom-left) ===== */
  .float-pie-chart{
    position:absolute;bottom:12%;left:10%;z-index:10;
    animation:floatPie 5s ease-in-out infinite;
    background:#fff;
    padding:1cqw 1.4cqw;
    border-radius:1.2cqw;
    box-shadow:0 0.8cqw 2cqw rgba(0,0,0,0.08);
    display:flex;align-items:center;gap:1cqw;
    border:1px solid #eaedf0;
    will-change: transform;
  }
  @keyframes floatPie{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(0,-1cqw,0)}}
  @keyframes floatBar{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(0,-1.2cqw,0)}}

  .pie-details{display:flex;flex-direction:column;gap:0.7cqw;}
  .pie-line{height:0.7cqw;border-radius:0.3cqw;background:#e2e8f0;width:3.4cqw;}
  .pie-line.short{width:2cqw;}
  .pie-line:nth-child(1){width:3.5cqw;background:#94a3b8}



  /* Removed legacy media queries as UI is now fully cqw-dynamic */
`}</style>
      <div className="scene">
  {/*  ===== MAIN STATIC DASHBOARD =====  */}
  <div className="main-panel">
    {/*  Sidebar  */}
    <div className="sidebar">
      <div className="sidebar-icon active">
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
      </div>
      <div className="sidebar-icon">
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
      </div>
      <div className="sidebar-icon">
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
      </div>
      <div className="sidebar-icon">
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
      </div>
      <div className="sidebar-icon" style={{marginTop: 'auto'}}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
      </div>
    </div>

    {/*  Visual Relationship Tree  */}
    <div className="tree-section">
      <div className="section-header">Visual Relationship Tree</div>
      <div className="tree-canvas">
        <svg className="connections-svg" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} preserveAspectRatio="none">
          {/*  Lines  */}
          <line x1="50%" y1="50%" x2="42%" y2="18%" className="conn-line" stroke="#8bc34a" />
          <line x1="50%" y1="50%" x2="82%" y2="32%" className="conn-line" stroke="#4caf50" />
          <line x1="50%" y1="50%" x2="18%" y2="38%" className="conn-line" stroke="#7986cb" />
          <line x1="50%" y1="50%" x2="22%" y2="78%" className="conn-line" stroke="#ffb74d" />
          <line x1="50%" y1="50%" x2="50%" y2="86%" className="conn-line" stroke="#ef5350" />
          <line x1="50%" y1="50%" x2="82%" y2="72%" className="conn-line" stroke="#4dd0e1" />
          
          {/*  Connection nodes (small circles)  */}
          <circle cx="42%" cy="18%" r="4" fill="#8bc34a" />
          <circle cx="82%" cy="32%" r="4" fill="#4caf50" />
          <circle cx="18%" cy="38%" r="4" fill="#7986cb" />
          <circle cx="22%" cy="78%" r="4" fill="#ffb74d" />
          <circle cx="50%" cy="86%" r="4" fill="#ef5350" />
          <circle cx="82%" cy="72%" r="4" fill="#4dd0e1" />
          
          {/*  Center dot (main)  */}
          <circle cx="50%" cy="50%" r="6" fill="#4caf50" opacity="0.8"/>
        </svg>

        {/*  Node Cards  */}
        <div className="node-card node-center">
          <div className="node-icon"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18 M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16 M9 7h2 M9 11h2 M9 15h2 M13 7h2 M13 11h2 M13 15h2"/></svg></div>
          <div className="node-label">Acme Corporation</div>
        </div>
        <div className="node-card node-opp">
          <div className="node-icon"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6 6 .5-4.5 4 1.5 6-6-3.5L6 18.5l1.5-6L3 8.5 9 8z"/></svg></div>
          <div className="node-label">Opportunities</div>
        </div>
        <div className="node-card node-assets">
          <div className="node-icon"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg></div>
          <div className="node-label">Assets</div>
        </div>
        <div className="node-card node-contacts">
          <div className="node-icon"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
          <div className="node-label">Contacts</div>
        </div>
        <div className="node-card node-cases">
          <div className="node-icon"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg></div>
          <div className="node-label">Cases</div>
        </div>
        <div className="node-card node-activities">
          <div className="node-icon"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
          <div className="node-label">Activities</div>
        </div>
        <div className="node-card node-contracts">
          <div className="node-icon"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
          <div className="node-label">Contracts</div>
        </div>
      </div>
    </div>

    {/*  Relationship Explorer  */}
    <div className="explorer-section">
      <div className="section-header">Relationship Explorer</div>
      <div className="explorer-toolbar">
        <input className="search-box" type="text" placeholder="Search..." readOnly />
        <div className="toolbar-btn">▽</div>
        <div className="toolbar-btn">↻</div>
        <div className="toolbar-btn">+</div>
        <div className="toolbar-btn">⋮</div>
      </div>
      <div className="explorer-tree">
        {/*  Acme Corporation (Level 1)  */}
        <div className="tree-item parent"><span className="arrow">▾</span><span className="icon" style={{background: '#e8f5e9', color: '#2e7d32'}}><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18 M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16 M9 7h2 M9 11h2 M9 15h2 M13 7h2 M13 11h2 M13 15h2"/></svg></span>Acme Corporation</div>
        <div className="tree-children">
          
          {/*  Opportunities (Level 2)  */}
          <div className="tree-item parent"><span className="arrow">▾</span><span className="icon" style={{background: '#f1f8e9', color: '#558b2f'}}><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6 6 .5-4.5 4 1.5 6-6-3.5L6 18.5l1.5-6L3 8.5 9 8z"/></svg></span>Opportunities</div>
          <div className="tree-sub">
            {/*  Deals (Level 3)  */}
            <div className="tree-item parent" style={{paddingTop: '2px', fontSize: '12px', color: '#475569'}}><span className="arrow">▾</span><span className="icon" style={{background: '#fff7ed', color: '#ea580c'}}><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></span>Enterprise Deals</div>
            <div className="tree-sub">
              <div className="tree-sub-item"><span className="dot" style={{background: '#66bb6a'}}></span>Closed Won</div>
              <div className="tree-sub-item"><span className="dot" style={{background: '#42a5f5'}}></span>Proposal</div>
            </div>
            <div className="tree-sub-item"><span className="dot" style={{background: '#ffa726'}}></span>Qualification</div>
          </div>
          
          {/*  Contacts (Level 2)  */}
          <div className="tree-item" style={{paddingTop: '6px'}}><span className="arrow">▸</span><span className="icon" style={{background: '#e8eaf6', color: '#3f51b5'}}><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>Key Contacts</div>
          
          {/*  Cases (Level 2)  */}
          <div className="tree-item parent" style={{paddingTop: '6px'}}><span className="arrow">▾</span><span className="icon" style={{background: '#fff3e0', color: '#ef6c00'}}><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg></span>Support Cases</div>
          <div className="tree-sub">
            <div className="tree-sub-item"><span className="dot" style={{background: '#ef4444'}}></span>Critical Issues</div>
            <div className="tree-sub-item"><span className="dot" style={{background: '#f59e0b'}}></span>High Priority</div>
          </div>
          
          {/*  Assets (Level 2)  */}
          <div className="tree-item" style={{paddingTop: '6px'}}><span className="arrow">▸</span><span className="icon" style={{background: '#e8f5e9', color: '#2e7d32'}}><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg></span>Assets</div>
          
          {/*  Contracts (Level 2)  */}
          <div className="tree-item" style={{paddingTop: '6px'}}><span className="arrow">▸</span><span className="icon" style={{background: '#e0f7fa', color: '#00838f'}}><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>Contracts</div>
          
          {/*  Activities (Level 2)  */}
          <div className="tree-item" style={{paddingTop: '6px'}}><span className="arrow">▸</span><span className="icon" style={{background: '#ffebee', color: '#c62828'}}><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></span>Activities</div>
          
        </div>
      </div>
    </div>
  </div>

  {/*  ===== FLOATING BAR CHART (bottom-right) =====  */}
  <div className="float-bar-chart">
    <div className="bar-chart-3d">
      <div className="bar-col" style={{height: '40%', background: 'linear-gradient(to top,#5c6bc0,#7986cb)'}}></div>
      <div className="bar-col" style={{height: '65%', background: 'linear-gradient(to top,#42a5f5,#64b5f6)'}}></div>
      <div className="bar-col" style={{height: '48%', background: 'linear-gradient(to top,#66bb6a,#81c784)'}}></div>
      <div className="bar-col" style={{height: '80%', background: 'linear-gradient(to top,#ffa726,#ffb74d)'}}></div>
      <div className="bar-col" style={{height: '55%', background: 'linear-gradient(to top,#5c6bc0,#7986cb)'}}></div>
    </div>
  </div>

  {/*  ===== FLOATING PIE/DONUT CHART (top-left diagonally opposite) =====  */}
  <div className="float-pie-chart">
    <svg width="100%" height="100%" viewBox="0 0 100 100" style={{maxWidth: '4cqw', maxHeight: '4cqw'}}>
      <circle cx="50" cy="50" r="40" fill="none" stroke="#f1f5f9" strokeWidth="20"/>
      <circle cx="50" cy="50" r="40" fill="none" stroke="#42a5f5" strokeWidth="20"
        strokeDasharray="140 251.2" strokeDashoffset="0" transform="rotate(-90 50 50)"/>
      <circle cx="50" cy="50" r="40" fill="none" stroke="#66bb6a" strokeWidth="20"
        strokeDasharray="80 251.2" strokeDashoffset="-140" transform="rotate(-90 50 50)"/>
      <circle cx="50" cy="50" r="40" fill="none" stroke="#ffa726" strokeWidth="20"
        strokeDasharray="31.2 251.2" strokeDashoffset="-220" transform="rotate(-90 50 50)"/>
    </svg>
    <div className="pie-details">
      <div className="pie-line"></div>
      <div className="pie-line"></div>
      <div className="pie-line"></div>
    </div>
  </div>
</div>
    </div>
  );
};

export default memo(HeroInfographic);
