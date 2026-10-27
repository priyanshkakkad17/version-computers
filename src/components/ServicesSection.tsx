'use client';

import React from 'react';
import { ORIGINAL_SERVICES, ORIGINAL_DISTRIBUTORS } from '@/data/products';
import {
  Laptop,
  Camera,
  Network,
  Layers,
  ArrowRight,
  ShieldCheck,
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

  return (
    <section id="services" className="relative py-20 sm:py-24 bg-[#FAFAFC] border-b border-slate-200/80">
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

        {/* 4 Cards matching Links Infotech visual layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {ORIGINAL_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="group relative bg-white rounded-[26px] p-7 border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
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
          ))}
        </div>

        {/* Brands We Work With / Authorized Distributors Banner */}
        <div id="distributors" className="pt-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-slate-100">
              <div className="inline-flex items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#6B21A8] text-[11px] font-bold uppercase tracking-wider">
                  BRANDS WE WORK WITH
                </span>
                <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
                  • Authorized Distribution
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-normal">
                Brand availability and official warranty serviceability backed by certified distribution in Rajkot.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {ORIGINAL_DISTRIBUTORS.map((dist, idx) => (
                <div
                  key={idx}
                  className="group bg-slate-50/60 hover:bg-white p-4 rounded-2xl border border-slate-200/70 hover:border-blue-400 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center justify-between min-h-[125px]"
                >
                  <div className="h-12 w-full flex items-center justify-center p-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={dist.logo}
                      alt={`${dist.name} Authorized Distributor`}
                      className="max-h-10 max-w-[95px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 w-full">
                    <h4 className="font-bold text-slate-800 text-xs group-hover:text-blue-600 transition-colors">
                      {dist.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 truncate mt-0.5">
                      {dist.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
