'use client';

import React from 'react';
import {
  Home,
  LayoutGrid,
  ShieldCheck,
  Wifi,
  PhoneCall,
  Zap,
  ArrowUpRight,
  Monitor,
  CheckCircle2,
  HardDrive,
  Cpu,
} from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#f0f6ff] via-[#e8f1fc] to-[#f8faff] py-8 sm:py-12 lg:py-16 text-slate-900 select-none border-b border-blue-100"
    >
      {/* Background Soft Blue Ambient Aura (Matching reference glowing sphere) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] lg:w-[650px] h-[350px] sm:h-[500px] lg:h-[650px] rounded-full bg-gradient-to-tr from-blue-400/25 via-blue-300/20 to-sky-200/25 blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 top-10 w-96 h-96 rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />

      {/* Decorative Blueprint Grid Pattern (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f60d_1px,transparent_1px),linear-gradient(to_bottom,#3b82f60d_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Main Card Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_20px_60px_-15px_rgba(30,64,175,0.12)] p-6 sm:p-10 lg:p-14 overflow-hidden">
          {/* Subtle Dot Grid Matrix in Top-Right (matching reference) */}
          <div className="absolute right-8 top-12 w-32 h-32 bg-[radial-gradient(#3b82f6_2px,transparent_2px)] [background-size:16px_16px] opacity-30 pointer-events-none hidden sm:block" />
          <div className="absolute right-36 bottom-16 w-36 h-28 bg-[radial-gradient(#2563eb_2px,transparent_2px)] [background-size:16px_16px] opacity-25 pointer-events-none hidden lg:block" />

          {/* Inner Layout Grid */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
            {/* 1. Left Vertical Floating Pill Dock (Matching Reference Left Menu Bar) */}
            <div className="hidden md:flex flex-col items-center gap-4 py-4 px-2.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-blue-900/5 self-center lg:self-start my-auto">
              {/* Home Active Icon */}
              <a
                href="#home"
                title="Home"
                className="w-10 h-10 rounded-full bg-[#0a1128] text-white flex items-center justify-center shadow-md transition-transform hover:scale-110"
              >
                <Home className="w-4 h-4" />
              </a>

              {/* Products Catalog Icon */}
              <a
                href="#products"
                title="Products Catalog"
                className="w-10 h-10 rounded-full text-slate-500 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all"
              >
                <LayoutGrid className="w-5 h-5" />
              </a>

              {/* CCTV & Security Systems */}
              <a
                href="#products"
                title="CCTV & Security"
                className="w-10 h-10 rounded-full text-slate-500 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all"
              >
                <ShieldCheck className="w-5 h-5" />
              </a>

              {/* Networking Gear */}
              <a
                href="#products"
                title="Networking Infrastructure"
                className="w-10 h-10 rounded-full text-slate-500 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all"
              >
                <Wifi className="w-5 h-5" />
              </a>

              {/* Contact Support */}
              <a
                href="#contact"
                title="Contact Support"
                className="w-10 h-10 rounded-full text-slate-500 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all"
              >
                <PhoneCall className="w-5 h-5" />
              </a>
            </div>

            {/* 2. Hero Typography & Action Controls (Center-Left) */}
            <div className="flex-1 max-w-xl text-left">
              {/* Top Tag with Lightning Icon */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-extrabold tracking-wider uppercase mb-5 shadow-xs">
                <Zap className="w-4 h-4 text-blue-600 fill-blue-600 animate-pulse" />
                <span>QUALITY HARDWARE &amp; SURVEILLANCE</span>
              </div>

              {/* High-Impact Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[74px] font-black text-slate-900 tracking-tight leading-[0.95] mb-5">
                TECH THAT
                <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent my-1 drop-shadow-xs">
                  EMPOWERS
                </span>
                EVERY DAY
              </h1>

              {/* Subtitle / Description */}
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal mb-8 max-w-lg">
                <strong className="font-semibold text-slate-900">
                  Smart. Durable. Enterprise-Grade.
                </strong>
                <br />
                Precision computer components, enterprise CCTV surveillance
                systems, and high-speed networking solutions in Rajkot since 2015.
              </p>

              {/* Action Buttons (Strictly in signature blue theme) */}
              <div className="flex flex-wrap items-center gap-4">
                {/* Main Pill CTA with Circular Arrow */}
                <a
                  href="#products"
                  className="group inline-flex items-center gap-3.5 pl-6 sm:pl-7 pr-2.5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>EXPLORE INVENTORY</span>
                  <div className="w-8 h-8 rounded-full bg-[#0a1128] text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>

                {/* Secondary Pill CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-white/90 hover:bg-blue-50/80 text-slate-700 hover:text-blue-700 text-xs sm:text-sm font-bold tracking-wider uppercase border border-slate-200/90 shadow-xs transition"
                >
                  <span>GET A QUOTE</span>
                </a>
              </div>

              {/* Micro Trust Proof Badges */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Official GST Invoices</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Genuine Brand Warranties</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Rajkot Same-Day Delivery</span>
                </div>
              </div>
            </div>

            {/* 3. Right Floating 3D Devices Composition (Our Store Products) */}
            <div className="flex-1 w-full relative min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] flex items-center justify-center">
              {/* Circular Glowing Blue Gradient Aura Behind Products */}
              <div className="absolute w-[280px] sm:w-[380px] lg:w-[440px] h-[280px] sm:h-[380px] lg:h-[440px] rounded-full bg-gradient-to-tr from-blue-300/40 via-blue-200/30 to-indigo-100/40 shadow-inner blur-xl pointer-events-none" />

              {/* DEVICE 1 (Primary Anchor): Laptop / Workstation floating angled in perspective */}
              <div className="relative z-20 animate-hero-float-main transition-transform duration-500 hover:scale-[1.03]">
                <div className="w-[270px] sm:w-[350px] md:w-[410px] bg-slate-900 rounded-2xl p-2.5 sm:p-3 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.35)] border border-slate-700/80 backdrop-blur-md">
                  {/* Laptop Screen Bezel */}
                  <div className="relative rounded-xl overflow-hidden bg-[#070d1e] border border-blue-900/60 aspect-[16/10] flex flex-col justify-between p-3 sm:p-4 text-white">
                    {/* Top Screen Bar */}
                    <div className="flex items-center justify-between border-b border-blue-950 pb-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        <span className="text-[10px] text-blue-300/80 font-mono ml-2">
                          VC-CORE-STATION // v2.4
                        </span>
                      </div>
                      <span className="text-[9px] bg-blue-600/30 text-blue-300 px-2 py-0.5 rounded font-mono border border-blue-500/30">
                        ONLINE 100%
                      </span>
                    </div>

                    {/* Middle Graphic Preview */}
                    <div className="my-auto py-2 flex items-center justify-around gap-2 text-center">
                      <div className="bg-blue-950/50 p-2 sm:p-2.5 rounded-lg border border-blue-800/40 flex-1">
                        <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mx-auto mb-1" />
                        <p className="text-[9px] sm:text-[10px] text-slate-300 font-bold">
                          Intel &amp; AMD
                        </p>
                        <p className="text-[8px] text-blue-400">High-Perf CPUs</p>
                      </div>
                      <div className="bg-blue-950/50 p-2 sm:p-2.5 rounded-lg border border-blue-800/40 flex-1">
                        <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 mx-auto mb-1" />
                        <p className="text-[9px] sm:text-[10px] text-slate-300 font-bold">
                          Workstations
                        </p>
                        <p className="text-[8px] text-indigo-400">4K Displays</p>
                      </div>
                      <div className="bg-blue-950/50 p-2 sm:p-2.5 rounded-lg border border-blue-800/40 flex-1">
                        <HardDrive className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 mx-auto mb-1" />
                        <p className="text-[9px] sm:text-[10px] text-slate-300 font-bold">
                          NVMe Gen4
                        </p>
                        <p className="text-[8px] text-sky-400">Up to 7000MB/s</p>
                      </div>
                    </div>

                    {/* Bottom Status Ticker */}
                    <div className="flex items-center justify-between text-[8px] sm:text-[9px] text-slate-400 font-mono pt-1">
                      <span>RAM: 64GB DDR5 ECC</span>
                      <span className="text-blue-400 font-semibold">
                        Version Computers
                      </span>
                    </div>
                  </div>

                  {/* Laptop Base Lip / Keyboard Hinge Shadow */}
                  <div className="h-2 sm:h-2.5 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-b-lg mt-1 border-t border-slate-500/40 flex justify-center items-center">
                    <div className="w-12 sm:w-16 h-1 bg-slate-900 rounded-full" />
                  </div>
                </div>

                {/* Floating Spec Pill for Laptop */}
                <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md border border-blue-200 text-slate-800 px-3.5 py-1.5 rounded-full shadow-lg text-[10px] sm:text-xs font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                  <span>Custom PC Builds &amp; Laptops</span>
                </div>
              </div>

              {/* DEVICE 2 (Top-Right, matching Headphones location): Enterprise 4K CCTV Camera */}
              <div className="absolute -top-4 sm:-top-8 -right-2 sm:right-4 z-30 animate-hero-float-secondary transition-transform hover:scale-105">
                <div className="bg-white/90 backdrop-blur-xl border border-blue-200/90 rounded-2xl p-3 sm:p-4 shadow-[0_20px_40px_rgba(37,99,235,0.18)] max-w-[190px] sm:max-w-[220px]">
                  {/* Photo of CCTV Dome / Camera */}
                  <div className="relative w-full h-24 sm:h-28 rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50 border border-slate-200/70 mb-2.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80"
                      alt="CCTV Security Camera"
                      className="w-full h-full object-cover mix-blend-multiply"
                    />
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      REC
                    </div>
                  </div>

                  {/* Device Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] sm:text-xs font-black text-slate-900 leading-tight">
                        4K IP Dome CCTV
                      </p>
                      <p className="text-[9px] sm:text-[10px] text-blue-600 font-semibold">
                        Night Vision • Sony Sensor
                      </p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* DEVICE 3 (Bottom-Right, matching Phone location): Enterprise Wi-Fi 6 Gigabit Router / Switch */}
              <div className="absolute -bottom-6 sm:-bottom-8 right-2 sm:right-6 z-25 animate-hero-float-right transition-transform hover:scale-105">
                <div className="bg-white/90 backdrop-blur-xl border border-blue-200/90 rounded-2xl p-3 sm:p-4 shadow-[0_20px_40px_rgba(37,99,235,0.18)] max-w-[180px] sm:max-w-[210px]">
                  {/* Photo of Gigabit Switch / Router */}
                  <div className="relative w-full h-22 sm:h-24 rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50 border border-slate-200/70 mb-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80"
                      alt="Networking Gigabit Switch & Cables"
                      className="w-full h-full object-cover mix-blend-multiply"
                    />
                    <div className="absolute bottom-1.5 left-2 bg-blue-900/80 backdrop-blur-sm text-blue-200 text-[8px] font-mono px-1.5 py-0.5 rounded">
                      1000 Mbps
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] sm:text-xs font-black text-slate-900 leading-tight">
                        Gigabit Switch
                      </p>
                      <p className="text-[9px] sm:text-[10px] text-blue-600 font-semibold">
                        PoE &amp; Cat6 Infrastructure
                      </p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Wifi className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* DEVICE 4 (Bottom-Center, matching Smartwatch location): Precision Gaming & Office Mouse */}
              <div className="absolute bottom-2 sm:-bottom-4 left-4 sm:left-14 z-35 animate-hero-float-bottom transition-transform hover:scale-105">
                <div className="bg-white/95 backdrop-blur-xl border border-blue-200/90 rounded-2xl p-2.5 sm:p-3 shadow-[0_15px_35px_rgba(37,99,235,0.16)] flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-50 border border-slate-200 flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=300&q=80"
                      alt="Precision Mouse"
                      className="w-full h-full object-cover mix-blend-multiply"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[11px] font-extrabold text-slate-900 leading-tight">
                      Peripherals &amp; Cables
                    </p>
                    <p className="text-[8px] sm:text-[9px] text-blue-600 font-semibold">
                      Mechanical &amp; Optical
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
