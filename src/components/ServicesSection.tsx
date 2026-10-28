'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ORIGINAL_SERVICES, ORIGINAL_DISTRIBUTORS } from '@/data/products';
import {
  Laptop,
  Camera,
  Network,
  Layers,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function ServicesSection() {
  const ladderRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [linePixelHeight, setLinePixelHeight] = useState<number>(0);
  const [activeNodes, setActiveNodes] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    let animationFrameId: number;

    const updateScrollProgress = () => {
      if (!ladderRef.current) return;
      const ladderRect = ladderRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Smooth trigger point: when line tip reaches 58% down the viewport
      const triggerY = windowHeight * 0.58;
      const distanceIntoLadder = triggerY - ladderRect.top;
      const totalLadderHeight = ladderRect.height;

      // Exact pixel height for silky smooth 60fps tracking
      const clampedHeight = Math.min(Math.max(distanceIntoLadder, 0), totalLadderHeight);
      setLinePixelHeight(clampedHeight);

      // Check each card's actual vertical center in the ladder
      const newActive = ORIGINAL_SERVICES.map((_, idx) => {
        const cardEl = cardRefs.current[idx];
        if (!cardEl) return false;
        const cardRect = cardEl.getBoundingClientRect();
        const cardCenterY = cardRect.top + cardRect.height / 2;
        // Node circle glows when the center line head crosses its vertical position
        return triggerY >= cardCenterY;
      });

      setActiveNodes(newActive);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'computers-laptops':
        return <Laptop className="w-6 h-6 text-blue-600" />;
      case 'cctv-products':
        return <Camera className="w-6 h-6 text-blue-600" />;
      case 'networking-infrastructure':
        return <Network className="w-6 h-6 text-blue-600" />;
      case 'refurbished-wholesale':
        return <Layers className="w-6 h-6 text-blue-600" />;
      default:
        return <Laptop className="w-6 h-6 text-blue-600" />;
    }
  };

  // Duplicate for seamless 50% infinite conveyor loop
  const conveyorDistributors = [
    ...ORIGINAL_DISTRIBUTORS,
    ...ORIGINAL_DISTRIBUTORS,
    ...ORIGINAL_DISTRIBUTORS,
    ...ORIGINAL_DISTRIBUTORS,
  ];

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#FAFAFC] border-b border-slate-200/80 overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-100 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            SERVICES &amp; SOLUTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Equipment for new setups, upgrades and replacements.
          </h2>
          <p className="text-slate-500 mt-4 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
            Product supply can be paired with installation, configuration and ongoing support. Availability, configuration and condition are confirmed at quotation stage.
          </p>
        </div>

        {/* ======================================================== */}
        {/* ACTUAL LADDER: Side-by-side alternating left & right     */}
        {/* ======================================================== */}
        <div ref={ladderRef} className="relative mb-28">
          {/* Base Neutral Track Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-1 bg-slate-200 rounded-full" />

          {/* Dynamic Scroll-Activated Moving Center Line */}
          <div
            className="hidden md:block absolute left-1/2 top-4 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 via-blue-500 to-indigo-600 rounded-full will-change-[height] z-10"
            style={{
              height: `${linePixelHeight}px`,
            }}
          >
            {/* 
              Arrow replaces the moving center line head circle:
              Pointing downward in the direction of the scroll movement
            */}
            {linePixelHeight > 10 && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
                {/* Pulsating radiant glow halo around arrow */}
                <span className="absolute w-10 h-10 rounded-full bg-blue-500/30 blur-md animate-ping" />
                <span className="absolute w-8 h-8 rounded-full bg-blue-600/40 blur-sm" />
                
                {/* Arrow head container */}
                <div className="relative w-7 h-7 rounded-full bg-blue-600 border-2 border-white shadow-[0_0_16px_#2563eb] flex items-center justify-center text-white">
                  <ChevronDown className="w-4 h-4 stroke-[3] animate-bounce" />
                </div>
              </div>
            )}
          </div>

          {/* Ladder Items Container */}
          <div className="space-y-12 md:space-y-16">
            {ORIGINAL_SERVICES.map((srv, idx) => {
              const isEven = idx % 2 === 0; // 0, 2 on Left; 1, 3 on Right
              const isPassed = activeNodes[idx];

              return (
                <div
                  key={srv.id}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
                >
                  {/* Left Column Slot */}
                  <div className={`${isEven ? 'md:order-1' : 'md:order-2 md:col-start-2'}`}>
                    <div
                      className={`group relative bg-white rounded-3xl p-7 sm:p-8 border transition-all duration-500 overflow-hidden ${
                        isPassed
                          ? 'border-blue-400 shadow-[0_12px_40px_-10px_rgba(37,99,235,0.12)]'
                          : 'border-slate-200/80 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.06)]'
                      } hover:shadow-2xl hover:border-blue-500 hover:-translate-y-1`}
                    >
                      {/* Top accent gradient bar on hover or when crossed */}
                      <span
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transition-opacity duration-300 ${
                          isPassed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                      />

                      {/* Header with Icon, Step Number and Pill Badge */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`w-13 h-13 p-3 rounded-2xl border flex items-center justify-center shadow-inner transition-all duration-300 ${
                              isPassed
                                ? 'bg-blue-600 text-white border-blue-600 shadow-blue-500/20'
                                : 'bg-blue-50/80 text-blue-600 border-blue-100/90 group-hover:bg-blue-600 group-hover:text-white'
                            }`}
                          >
                            <div className={isPassed ? 'brightness-0 invert' : 'group-hover:brightness-0 group-hover:invert transition-all duration-300'}>
                              {getServiceIcon(srv.id)}
                            </div>
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-full inline-block">
                              {srv.badge}
                            </span>
                          </div>
                        </div>

                        {/* Step Marker Badge */}
                        <span
                          className={`text-xs font-mono font-bold tracking-widest transition-colors ${
                            isPassed ? 'text-blue-600 font-extrabold' : 'text-slate-300 group-hover:text-blue-600'
                          }`}
                        >
                          STEP 0{idx + 1}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {srv.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-3 font-normal">
                        {srv.description}
                      </p>

                      {/* Pill Highlights */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {srv.chips.map((chip, cIdx) => (
                          <span
                            key={cIdx}
                            className="inline-flex items-center text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/70 px-3 py-1 rounded-full group-hover:border-blue-200 transition-colors"
                          >
                            <CheckCircle2 className="w-3 h-3 text-blue-600 mr-1.5 shrink-0" />
                            {chip}
                          </span>
                        ))}
                      </div>

                      {/* CTA Action Button */}
                      <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <a
                          href={`https://wa.me/919327107280?text=Hello%20Version%20Computers,%20I%20am%20interested%20in%20inquiring%20about:%20*${encodeURIComponent(
                            srv.title
                          )}*.%20Please%20share%20quotation%20and%20availability.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 group/link"
                        >
                          <span>{srv.linkText}</span>
                          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                        </a>

                        <span className="text-[11px] font-semibold text-slate-400">
                          Rajkot Delivery
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Central Ladder Step Node Circle that glows when the line crosses */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center pointer-events-none z-20">
                    <div
                      className={`relative w-11 h-11 rounded-full bg-white border-4 transition-all duration-500 flex items-center justify-center ${
                        isPassed
                          ? 'border-blue-600 scale-110 shadow-[0_0_24px_rgba(37,99,235,0.45)] ring-4 ring-blue-400/20'
                          : 'border-slate-300 shadow-sm'
                      }`}
                    >
                      {/* Outer pulse aura when active */}
                      {isPassed && (
                        <span className="absolute -inset-1 rounded-full bg-blue-500/20 blur-sm animate-pulse" />
                      )}

                      {/* Inner Glowing Blue Dot */}
                      <span
                        className={`relative w-4 h-4 rounded-full transition-all duration-500 ${
                          isPassed
                            ? 'bg-blue-600 shadow-[0_0_12px_#2563eb] scale-110'
                            : 'bg-slate-300'
                        }`}
                      />
                    </div>

                    {/* Horizontal ladder rung connecting to card with glow */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 h-1 transition-all duration-500 ${
                        isEven
                          ? `right-1/2 w-10 ${
                              isPassed
                                ? 'bg-gradient-to-r from-transparent via-blue-500 to-blue-600 shadow-[0_0_8px_#3b82f6]'
                                : 'bg-gradient-to-r from-transparent to-slate-200'
                            }`
                          : `left-1/2 w-10 ${
                              isPassed
                                ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-transparent shadow-[0_0_8px_#3b82f6]'
                                : 'bg-gradient-to-r from-slate-200 to-transparent'
                            }`
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Brands We Work With / Authorized Distributors - Full-width embedded directly in page without box container */}
      <div id="distributors" className="pt-8 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider border border-blue-200/60">
                BRANDS WE WORK WITH
              </span>
              <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
                • Authorized Distribution
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <p className="text-[11px] sm:text-xs text-slate-500 font-normal">
                Hover over any brand to pause rotation
              </p>
            </div>
          </div>
        </div>

        {/* Full screen-width embedded conveyor belt track with edge gradient masks */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Gradient fade on left and right edge */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#FAFAFC] via-[#FAFAFC]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#FAFAFC] via-[#FAFAFC]/80 to-transparent z-10" />

          {/* Continuous Conveyor Belt */}
          <div className="animate-conveyor gap-5 items-stretch py-2">
            {conveyorDistributors.map((dist, idx) => (
              <div
                key={idx}
                className="group w-52 sm:w-60 shrink-0 bg-white p-4 rounded-2xl border border-slate-200/80 hover:border-blue-400 hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-between min-h-[130px]"
              >
                <div className="h-14 w-full flex items-center justify-center p-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dist.logo}
                    alt={`${dist.name} Authorized Distributor`}
                    className="max-h-11 max-w-[110px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="pt-2.5 border-t border-slate-100 w-full">
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm group-hover:text-blue-600 transition-colors">
                    {dist.name}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 truncate mt-0.5 font-medium">
                    {dist.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
