'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ORIGINAL_SERVICES, ORIGINAL_DISTRIBUTORS } from '@/data/products';
import {
  Laptop,
  Camera,
  Network,
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function ServicesSection() {
  const ladderRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ladderRef.current) return;
      const rect = ladderRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start filling when top of ladder enters halfway from bottom
      const totalDist = rect.height;
      const currentPassed = windowHeight * 0.7 - rect.top;
      const progress = Math.min(Math.max(currentPassed / totalDist, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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
            className="hidden md:block absolute left-1/2 top-4 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 via-indigo-600 to-sky-400 rounded-full transition-all duration-150 ease-out z-10"
            style={{
              height: `calc(${scrollProgress * 100}% - 32px)`,
              maxHeight: 'calc(100% - 32px)',
            }}
          >
            {/* Glowing tracer spark at the head of the moving line */}
            {scrollProgress > 0.05 && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3.5 h-3.5 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6] animate-pulse" />
            )}
          </div>

          {/* Ladder Items Container */}
          <div className="space-y-12 md:space-y-16">
            {ORIGINAL_SERVICES.map((srv, idx) => {
              const isEven = idx % 2 === 0; // 0, 2 on Left; 1, 3 on Right
              const stepRatio = (idx + 0.3) / ORIGINAL_SERVICES.length;
              const isPassed = scrollProgress >= stepRatio;

              return (
                <div
                  key={srv.id}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
                >
                  {/* Left Column Slot */}
                  <div className={`${isEven ? 'md:order-1' : 'md:order-2 md:col-start-2'}`}>
                    <div className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.06)] hover:shadow-2xl hover:border-blue-500 transition-all duration-300 overflow-hidden hover:-translate-y-1">
                      {/* Top accent gradient bar on hover */}
                      <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Header with Icon, Step Number and Pill Badge */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3.5">
                          <div className="w-13 h-13 p-3 rounded-2xl bg-blue-50/80 border border-blue-100/90 flex items-center justify-center shadow-inner group-hover:bg-blue-600 transition-colors duration-300">
                            <div className="group-hover:brightness-0 group-hover:invert transition-all duration-300">
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
                        <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-blue-600 transition-colors tracking-widest">
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

                  {/* Central Ladder Step Node (only visible on tablet & desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center pointer-events-none z-20">
                    <div
                      className={`w-10 h-10 rounded-full bg-white border-4 transition-all duration-500 flex items-center justify-center shadow-md ${
                        isPassed
                          ? 'border-blue-600 scale-110 shadow-blue-500/30'
                          : 'border-slate-300'
                      }`}
                    >
                      <span
                        className={`w-3.5 h-3.5 rounded-full transition-colors duration-500 ${
                          isPassed ? 'bg-blue-600' : 'bg-slate-300'
                        }`}
                      />
                    </div>

                    {/* Horizontal ladder rung connecting to card */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 h-0.5 transition-all duration-500 ${
                        isEven
                          ? `right-1/2 w-8 ${
                              isPassed
                                ? 'bg-gradient-to-r from-transparent to-blue-600'
                                : 'bg-gradient-to-r from-transparent to-slate-200'
                            }`
                          : `left-1/2 w-8 ${
                              isPassed
                                ? 'bg-gradient-to-r from-blue-600 to-transparent'
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
