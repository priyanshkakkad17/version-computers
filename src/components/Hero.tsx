'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Shield,
  Wifi,
  Cpu,
  Monitor,
  CheckCircle,
  Phone,
  Sparkles,
  Camera,
  Layers,
} from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[600px] lg:min-h-[680px] bg-gradient-to-b from-[#050b18] via-[#07132a] to-[#040915] text-white overflow-hidden py-12 lg:py-20 select-none flex items-center"
    >
      {/* 1. Atmospheric Ambient Lighting & Glows (NovaLyne Style) */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-20 left-10 w-[420px] h-[420px] bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-600/15 rounded-full blur-[110px] pointer-events-none" />

      {/* Subtle Digital Background Grid & Tech Aura */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e40af10_1px,transparent_1px),linear-gradient(to_bottom,#1e40af10_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none opacity-40" />

      {/* Lens Flare / Ambient Glow Orb in Center-Right (like the globe in NovaLyne) */}
      <div className="absolute top-1/3 right-1/3 w-36 h-36 rounded-full bg-blue-400/20 blur-2xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT CONTENT COLUMN (6 Cols) ================= */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-700/50 text-blue-300 text-xs sm:text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
              <span>Rajkot&apos;s Leading Hardware &amp; Security Provider</span>
            </div>

            {/* Bold Crisp Headline (NovaLyne Style) */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-black text-white tracking-tight leading-[1.08] mb-6">
              Empower Your Tech &amp;{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Security Systems
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal mb-8 max-w-xl">
              High-performance computer components, 4K CCTV surveillance setups,
              and enterprise networking infrastructure. Supplying genuine parts with
              official warranties to businesses and individuals since 2015.
            </p>

            {/* CTA Buttons with NovaLyne Glowing Style */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Primary Glowing Button */}
              <a
                href="#products"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(37,99,235,0.45)] hover:shadow-[0_0_40px_rgba(59,130,246,0.65)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary Clean Glass Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-blue-500/50 backdrop-blur-md transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Get Quotation</span>
              </a>
            </div>

            {/* Micro Highlights / Trust Chips */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-5 sm:gap-7 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>100% Genuine Hardware</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>GST Billing &amp; Warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Rajkot On-Site Support</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT 3D TECH WORKSTATION SETUP (6 Cols) ================= */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            
            {/* Ambient Base Reflection Table (Reflective Surface like NovaLyne) */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-24 bg-gradient-to-t from-blue-950/40 via-blue-900/10 to-transparent blur-xl pointer-events-none" />

            {/* Main Composition Wrapper with Perspective */}
            <div className="relative w-full max-w-[540px]">

              {/* 1. MAIN DISPLAY LAPTOP (Angled Perspective with Live Surveillance & Tech Console) */}
              <div className="relative z-10 rounded-2xl bg-gradient-to-b from-slate-700 to-slate-900 p-2 sm:p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(37,99,235,0.25)] border border-slate-600/60 transform lg:rotate-[-2deg] transition-transform duration-500 hover:rotate-0">
                
                {/* Screen Bezel */}
                <div className="relative rounded-xl overflow-hidden bg-[#070e1e] border border-blue-950 shadow-inner">
                  {/* Laptop Window Header Bar */}
                  <div className="bg-[#0b1730] px-3 sm:px-4 py-2 border-b border-blue-900/60 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-[10px] sm:text-xs font-mono text-blue-300 font-semibold truncate">
                        version-computers.in/control-hub
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[10px] text-emerald-400 font-mono font-bold">
                        SYSTEM LIVE
                      </span>
                    </div>
                  </div>

                  {/* Screen Content: Live 4-Camera CCTV & Hardware Inventory Stream */}
                  <div className="p-3 sm:p-4 bg-gradient-to-br from-[#060c1d] via-[#08152e] to-[#040814] text-white">
                    {/* Inner Top Quick Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-blue-950/60 border border-blue-800/40 rounded-lg p-2 text-center">
                        <div className="flex items-center justify-center gap-1 text-blue-400 mb-0.5">
                          <Camera className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-bold">CCTV Feeds</span>
                        </div>
                        <p className="text-xs sm:text-sm font-extrabold text-white">
                          4 Ch 4K Active
                        </p>
                      </div>

                      <div className="bg-blue-950/60 border border-blue-800/40 rounded-lg p-2 text-center">
                        <div className="flex items-center justify-center gap-1 text-sky-400 mb-0.5">
                          <Cpu className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-bold">Hardware</span>
                        </div>
                        <p className="text-xs sm:text-sm font-extrabold text-white">
                          PC &amp; Workstations
                        </p>
                      </div>

                      <div className="bg-blue-950/60 border border-blue-800/40 rounded-lg p-2 text-center">
                        <div className="flex items-center justify-center gap-1 text-indigo-400 mb-0.5">
                          <Wifi className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-bold">Network</span>
                        </div>
                        <p className="text-xs sm:text-sm font-extrabold text-white">
                          1000 Mbps PoE
                        </p>
                      </div>
                    </div>

                    {/* 4 Multi-Camera Surveillance & Hardware Monitoring Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {/* Feed 1: CCTV Surveillance */}
                      <div className="relative rounded-lg overflow-hidden bg-slate-900 border border-blue-900/60 aspect-[16/10] group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=400&q=80"
                          alt="CCTV Feed 1"
                          className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-1.5 left-1.5 bg-black/70 backdrop-blur-xs text-[9px] font-mono text-emerald-400 px-1.5 py-0.5 rounded flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          CAM 01 • ENTRY
                        </div>
                        <span className="absolute bottom-1 right-1.5 text-[8px] font-mono text-slate-300">
                          1080P / 60FPS
                        </span>
                      </div>

                      {/* Feed 2: High-End Hardware Assembly */}
                      <div className="relative rounded-lg overflow-hidden bg-slate-900 border border-blue-900/60 aspect-[16/10] group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
                          alt="Hardware Assembly"
                          className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-1.5 left-1.5 bg-black/70 backdrop-blur-xs text-[9px] font-mono text-blue-300 px-1.5 py-0.5 rounded">
                          BENCH • RIG TEST
                        </div>
                        <span className="absolute bottom-1 right-1.5 text-[8px] font-mono text-slate-300">
                          DIAGNOSTIC OK
                        </span>
                      </div>

                      {/* Feed 3: Network Infrastructure Rack */}
                      <div className="relative rounded-lg overflow-hidden bg-slate-900 border border-blue-900/60 aspect-[16/10] group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&q=80"
                          alt="Network Switches"
                          className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-1.5 left-1.5 bg-black/70 backdrop-blur-xs text-[9px] font-mono text-sky-300 px-1.5 py-0.5 rounded">
                          SWITCH 01 • GIGABIT
                        </div>
                        <span className="absolute bottom-1 right-1.5 text-[8px] font-mono text-slate-300">
                          CAT6 PoE
                        </span>
                      </div>

                      {/* Feed 4: Warehouse Inventory */}
                      <div className="relative rounded-lg overflow-hidden bg-slate-900 border border-blue-900/60 aspect-[16/10] group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80"
                          alt="Keyboard & Accessories"
                          className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-1.5 left-1.5 bg-black/70 backdrop-blur-xs text-[9px] font-mono text-indigo-300 px-1.5 py-0.5 rounded">
                          STORE • ACCESSORIES
                        </div>
                        <span className="absolute bottom-1 right-1.5 text-[8px] font-mono text-emerald-400 font-bold">
                          READY STOCK
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Hinge & Base Shadow */}
                <div className="h-3 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 rounded-b-lg border-t border-slate-600 flex justify-center items-center mt-1">
                  <div className="w-16 h-1 bg-slate-900 rounded-full" />
                </div>
              </div>

              {/* 2. FOREGROUND MOBILE PHONE / REMOTE DASHBOARD (Positioned overlapping right side just like NovaLyne) */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 z-20 w-36 sm:w-44 bg-[#0a1128] rounded-[24px] sm:rounded-[28px] p-2 border-2 border-slate-600 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(59,130,246,0.35)] transform rotate-[3deg] hover:rotate-0 transition-transform duration-500">
                {/* Phone Speaker Notch */}
                <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-1.5" />
                
                {/* Phone Display Screen */}
                <div className="rounded-[18px] sm:rounded-[20px] overflow-hidden bg-gradient-to-b from-[#091530] to-[#040814] border border-blue-900/60 p-2.5 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[8px] font-mono text-slate-300">VC Mobile App</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>

                  {/* Miniature Mobile CCTV Snapshot */}
                  <div className="rounded-lg overflow-hidden border border-blue-800/50 mb-2 relative aspect-[4/3]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=250&q=80"
                      alt="Mobile CCTV preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 left-1 bg-blue-900/90 text-white text-[7px] font-mono px-1 rounded">
                      Live Stream
                    </div>
                  </div>

                  <p className="text-[9px] font-bold text-white leading-tight">
                    Quick Quotation
                  </p>
                  <p className="text-[7.5px] text-blue-300 mb-2">
                    Rajkot Store Direct
                  </p>

                  <a
                    href="#contact"
                    className="block text-center w-full py-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-[8px] font-bold tracking-wider uppercase transition shadow-sm"
                  >
                    Contact Now
                  </a>
                </div>
              </div>

              {/* 3. FLOATING BADGE (Top-Left): Genuine Parts Guarantee */}
              <div className="absolute -top-5 -left-3 sm:-left-6 z-20 bg-slate-900/90 backdrop-blur-md border border-blue-500/40 rounded-xl px-3.5 py-2 shadow-lg shadow-blue-950/50 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white leading-none">
                    Certified Hardware
                  </p>
                  <p className="text-[9px] text-blue-300 font-medium mt-0.5">
                    Official GST &amp; Warranty
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
