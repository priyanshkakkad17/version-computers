'use client';

import React, { useState } from 'react';
import { ORIGINAL_HERO_PANELS } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  // null when mouse is not hovering over any panel (all panels return to equal width)
  const [activePanel, setActivePanel] = useState<number | null>(null);

  return (
    <section
      id="home"
      onMouseLeave={() => setActivePanel(null)}
      className="relative w-full h-[calc(100vh-105px)] min-h-[550px] overflow-hidden bg-[#0a1128] text-white select-none"
    >
      {/* Top Floating Centered Header (matching reference design with royal blue & white glow) */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 text-center pointer-events-none px-4">
        <h2 className="text-white text-xs sm:text-sm font-extrabold tracking-[0.35em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          Version Computers
        </h2>
        <p className="text-blue-400 text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          Quality Computer Parts &amp; CCTV Solutions Since 2015
        </p>
      </div>

      {/* 4 Expanding Full-Height Panels (Vertical Accordion stretching full screen height) */}
      <div
        className="flex flex-col lg:flex-row h-full w-full"
        onMouseLeave={() => setActivePanel(null)}
      >
        {ORIGINAL_HERO_PANELS.map((panel, idx) => {
          const isHovered = activePanel === idx;
          const isAnyHovered = activePanel !== null;

          return (
            <div
              key={panel.id}
              onMouseEnter={() => setActivePanel(idx)}
              className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-out border-b lg:border-b-0 lg:border-r border-blue-950/70 h-full ${
                isHovered
                  ? 'lg:flex-[2.8] flex-1'
                  : isAnyHovered
                  ? 'lg:flex-[0.75] flex-1'
                  : 'lg:flex-1 flex-1'
              }`}
            >
              {/* Background Photography with Scale Transition */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out ${
                  isHovered ? 'scale-105' : 'scale-100'
                }`}
                style={{ backgroundImage: `url(${panel.image})` }}
              />

              {/* Dynamic Contrast Deep Blue-Navy Gradient Overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  isHovered
                    ? 'bg-gradient-to-t from-[#050c1e] via-[#050c1e]/60 to-[#0a183d]/40'
                    : 'bg-gradient-to-t from-[#050c1e]/90 via-[#071330]/75 to-[#0b1c48]/65 hover:opacity-85'
                }`}
              />

              {/* Content Positioned at Bottom Left */}
              <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end z-20">
                {/* Index Indicator */}
                <div className="text-blue-400 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2.5 flex items-center gap-2">
                  <span>{panel.index}</span>
                  {isHovered && (
                    <span className="w-8 h-[2px] bg-blue-400 inline-block animate-pulse"></span>
                  )}
                </div>

                {/* Main Large Impact Title */}
                <h3
                  className={`font-heading text-white uppercase tracking-normal leading-[0.92] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] transition-all duration-500 font-bold ${
                    isHovered
                      ? 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl max-w-xl'
                      : 'text-2xl sm:text-3xl lg:text-3xl xl:text-4xl line-clamp-3'
                  }`}
                >
                  {panel.title}
                </h3>

                {/* Subtitle / Description - Revealed smoothly when hovered, collapses when cursor leaves */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isHovered
                      ? 'max-h-56 opacity-100 mt-4 sm:mt-5'
                      : 'max-h-0 opacity-0 mt-0 pointer-events-none'
                  }`}
                >
                  <p className="text-slate-200 text-xs sm:text-sm font-normal leading-relaxed max-w-lg drop-shadow">
                    {panel.description}
                  </p>

                  {/* Bullet Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3.5">
                    {panel.items.map((item, i) => (
                      <span
                        key={i}
                        className="text-[10px] sm:text-[11px] font-medium tracking-wide px-2.5 py-1 rounded bg-blue-950/70 text-blue-200 border border-blue-800/80 backdrop-blur-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Call to action button */}
                  <div className="pt-4">
                    <a
                      href="#products"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-0.5"
                    >
                      <span>Explore Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
