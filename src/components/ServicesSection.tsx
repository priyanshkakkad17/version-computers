'use client';

import React from 'react';
import { ORIGINAL_SERVICES, ORIGINAL_DISTRIBUTORS } from '@/data/products';
import {
  Laptop,
  Camera,
  Network,
  Layers,
} from 'lucide-react';

export default function ServicesSection() {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'computers-laptops':
        return <Laptop className="w-5 h-5 text-[#6B21A8]" />;
      case 'cctv-products':
        return <Camera className="w-5 h-5 text-[#6B21A8]" />;
      case 'networking-infrastructure':
        return <Network className="w-5 h-5 text-[#6B21A8]" />;
      case 'refurbished-wholesale':
        return <Layers className="w-5 h-5 text-[#6B21A8]" />;
      default:
        return <Laptop className="w-5 h-5 text-[#6B21A8]" />;
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
    <section id="services" className="relative py-20 sm:py-28 bg-[#FAFAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching Links Infotech reference */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-[#F3E8FF] text-[#6B21A8] text-[11px] font-bold tracking-wider uppercase mb-4 shadow-sm">
            SERVICES &amp; SOLUTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Equipment for new setups, upgrades and replacements.
          </h2>
          <p className="text-slate-500 mt-4 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
            Product supply can be paired with installation, configuration and ongoing support. Availability, configuration and condition are confirmed at quotation stage.
          </p>
        </div>

        {/* 4 Cards with Ladder / Staggered Step Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-28 items-start">
          {ORIGINAL_SERVICES.map((srv, idx) => {
            // Ladder alternating offsets:
            // 2-column view (tablet): card 0 normal, card 1 shifted down, card 2 normal, card 3 shifted down
            // 4-column view (desktop): step wave (0: normal, 1: +8, 2: 0, 3: +8)
            const ladderOffsetClass =
              idx % 2 === 1
                ? 'md:translate-y-8 lg:translate-y-10'
                : 'md:translate-y-0 lg:translate-y-0';

            return (
              <div
                key={srv.id}
                className={`group relative bg-white rounded-[26px] p-7 border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden ${ladderOffsetClass}`}
              >
                {/* Soft warm yellow/cream circle arc in the top right corner */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#FEF6E9] pointer-events-none group-hover:scale-110 transition-transform duration-500 ease-out" />

                <div>
                  {/* Icon box on top left */}
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] border border-[#EDE9FE]/70 flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#EDE9FE] transition-colors duration-200">
                    {getServiceIcon(srv.id)}
                  </div>

                  {/* Pill Badge */}
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#6B21A8] bg-[#F5F3FF] border border-[#DDD6FE]/60 px-2.5 py-0.5 rounded-full mb-3">
                    {srv.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed mt-2.5 min-h-[45px] font-normal">
                    {srv.description}
                  </p>

                  {/* Pill Chips */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {srv.chips.map((chip, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[11px] font-medium text-slate-600 bg-slate-100/90 px-2.5 py-1 rounded-full"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Explore Link */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={`https://wa.me/919327107280?text=Hello%20Version%20Computers,%20I%20am%20interested%20in%20inquiring%20about:%20*${encodeURIComponent(
                      srv.title
                    )}*.%20Please%20share%20quotation%20and%20availability.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group/link"
                  >
                    <span>{srv.linkText}</span>
                    <span className="ml-1 text-sm transition-transform duration-200 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Brands We Work With / Authorized Distributors - Full-width embedded directly in page without box container */}
      <div id="distributors" className="pt-6 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#6B21A8] text-[11px] font-bold uppercase tracking-wider">
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
