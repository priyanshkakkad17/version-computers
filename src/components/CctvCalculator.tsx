'use client';

import React, { useState } from 'react';
import { Camera, HardDrive, ShieldCheck, Check, Calculator, Send, Sparkles } from 'lucide-react';

export default function CctvCalculator() {
  const [cameraType, setCameraType] = useState<'2mp' | '5mp' | '4k'>('5mp');
  const [cameraCount, setCameraCount] = useState<number>(4);
  const [storageOption, setStorageOption] = useState<'1tb' | '2tb' | '4tb'>('2tb');
  const [includeInstallation, setIncludeInstallation] = useState<boolean>(true);
  const [propertyType, setPropertyType] = useState<string>('Shop / Showroom');

  // Pricing formula estimate
  const cameraPriceMap = {
    '2mp': 1600,
    '5mp': 2600,
    '4k': 4200,
  };

  const dvrPriceMap = {
    '2mp': 3200,
    '5mp': 4600,
    '4k': 7500,
  };

  const storagePriceMap = {
    '1tb': 3500,
    '2tb': 5200,
    '4tb': 7800,
  };

  const cameraCost = cameraPriceMap[cameraType] * cameraCount;
  const dvrCost = cameraCount <= 4 ? dvrPriceMap[cameraType] : dvrPriceMap[cameraType] * 1.6;
  const storageCost = storagePriceMap[storageOption];
  const cablingAndAccessories = cameraCount * 450 + 800; // Power supply, connectors, bnc
  const installationLabour = includeInstallation ? cameraCount * 500 : 0;

  const totalEstimate = Math.round(
    cameraCost + dvrCost + storageCost + cablingAndAccessories + installationLabour
  );

  const handleSendQuoteWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Version Computers! I configured a custom CCTV estimate on your website:\n\n` +
      `*Property Type:* ${propertyType}\n` +
      `*Camera Resolution:* ${cameraType.toUpperCase()} Night Vision\n` +
      `*Total Cameras:* ${cameraCount} Units\n` +
      `*Hard Drive Storage:* ${storageOption.toUpperCase()} Surveillance Grade\n` +
      `*Installation & Cabling:* ${includeInstallation ? 'Yes (Complete Setup)' : 'No (Equipment Only)'}\n` +
      `*Estimated Package Total:* ~₹${totalEstimate.toLocaleString('en-IN')}\n\n` +
      `Please provide the final quotation and site visit schedule.`
    );
    window.open(`https://wa.me/919327107280?text=${text}`, '_blank');
  };

  return (
    <section id="cctv-quote" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100/70 text-cyan-800 text-xs font-bold tracking-wide uppercase mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Interactive CCTV Package Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Design Your CCTV Security System in Minutes
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Select your preferred camera clarity, count, and storage. Get an instant transparent budget estimate with genuine Hikvision &amp; CP PLUS systems in Rajkot.
          </p>
        </div>

        {/* Interactive Builder Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/80 space-y-8">
            {/* Step 1: Property Type */}
            <div>
              <label className="text-sm font-bold text-slate-800 block mb-3">
                1. Where are you installing the cameras?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {['Home / Villa', 'Shop / Showroom', 'Office / Firm', 'Factory / Warehouse'].map(
                  (type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPropertyType(type)}
                      className={`p-3 text-xs font-semibold rounded-xl border transition text-center ${
                        propertyType === type
                          ? 'border-blue-600 bg-blue-50/70 text-blue-700 shadow-sm'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {type}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Step 2: Camera Clarity */}
            <div>
              <label className="text-sm font-bold text-slate-800 block mb-3">
                2. Choose Camera Clarity &amp; Night Vision
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setCameraType('2mp')}
                  className={`p-4 rounded-2xl border text-left transition ${
                    cameraType === '2mp'
                      ? 'border-blue-600 bg-blue-50/50 shadow-sm ring-1 ring-blue-600'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <p className="font-bold text-slate-900 text-sm">2MP (1080p FHD)</p>
                  <p className="text-xs text-slate-500 mt-1">Standard clear HD viewing for indoor rooms &amp; small retail.</p>
                </button>

                <button
                  type="button"
                  onClick={() => setCameraType('5mp')}
                  className={`p-4 rounded-2xl border text-left transition relative ${
                    cameraType === '5mp'
                      ? 'border-blue-600 bg-blue-50/50 shadow-sm ring-1 ring-blue-600'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="absolute -top-2.5 right-3 bg-cyan-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Recommended
                  </span>
                  <p className="font-bold text-slate-900 text-sm">5MP (ColorVu / Full Color)</p>
                  <p className="text-xs text-slate-500 mt-1">24/7 Color night vision, sharp vehicle numbers &amp; faces.</p>
                </button>

                <button
                  type="button"
                  onClick={() => setCameraType('4k')}
                  className={`p-4 rounded-2xl border text-left transition ${
                    cameraType === '4k'
                      ? 'border-blue-600 bg-blue-50/50 shadow-sm ring-1 ring-blue-600'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <p className="font-bold text-slate-900 text-sm">8MP / 4K Ultra HD</p>
                  <p className="text-xs text-slate-500 mt-1">Enterprise precision, perimeter AI analytics &amp; zoom.</p>
                </button>
              </div>
            </div>

            {/* Step 3: Camera Count Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-800">
                  3. Total Number of Cameras:
                </label>
                <span className="text-lg font-black text-blue-600 px-3 py-0.5 rounded-lg bg-blue-50">
                  {cameraCount} Cameras
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="16"
                step="2"
                value={cameraCount}
                onChange={(e) => setCameraCount(Number(e.target.value))}
                className="w-full accent-blue-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
                <span>2 Cameras</span>
                <span>4</span>
                <span>8</span>
                <span>12</span>
                <span>16 Cameras</span>
              </div>
            </div>

            {/* Step 4: Storage */}
            <div>
              <label className="text-sm font-bold text-slate-800 block mb-3">
                4. Surveillance Hard Disk (Continuous Recording)
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: '1tb', label: '1TB HDD', days: '~7-10 Days recording' },
                  { id: '2tb', label: '2TB HDD', days: '~15-20 Days recording' },
                  { id: '4tb', label: '4TB HDD', days: '~30+ Days recording' },
                ].map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setStorageOption(st.id as any)}
                    className={`p-3 rounded-xl border text-center transition ${
                      storageOption === st.id
                        ? 'border-blue-600 bg-blue-50/70 text-blue-800 font-bold'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <p className="text-xs sm:text-sm font-bold">{st.label}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{st.days}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: On-site Installation toggle */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-slate-900">Include On-Site Installation &amp; Wiring</p>
                  <p className="text-xs text-slate-500">Neat cable casing, camera mounting, DVR setup, mobile app connection.</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={includeInstallation}
                onChange={(e) => setIncludeInstallation(e.target.checked)}
                className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
              />
            </div>
          </div>

          {/* Quotation Summary Card Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-7 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-5 border-b border-slate-700">
              <h3 className="text-lg font-bold">Estimated Investment</h3>
              <span className="text-xs uppercase font-semibold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800">
                Transparent Pricing
              </span>
            </div>

            {/* Price Breakdown Details */}
            <div className="py-6 space-y-3.5 text-sm">
              <div className="flex justify-between text-slate-300">
                <span>{cameraCount}x {cameraType.toUpperCase()} Night Vision Cameras</span>
                <span className="font-semibold text-white">₹{cameraCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Central DVR/NVR Hub</span>
                <span className="font-semibold text-white">₹{dvrCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Surveillance Grade {storageOption.toUpperCase()} HDD</span>
                <span className="font-semibold text-white">₹{storageCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Power Supply, Connectors &amp; Cabling</span>
                <span className="font-semibold text-white">₹{cablingAndAccessories.toLocaleString('en-IN')}</span>
              </div>
              {includeInstallation && (
                <div className="flex justify-between text-slate-300">
                  <span>Professional Labor &amp; App Setup</span>
                  <span className="font-semibold text-emerald-400">₹{installationLabour.toLocaleString('en-IN')}</span>
                </div>
              )}
            </div>

            {/* Total box */}
            <div className="pt-6 border-t border-slate-700/80">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Approximate Total (Inclusive of GST)
              </p>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-4xl font-extrabold text-white">
                  ₹{totalEstimate.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-400">*Subject to site wiring length</span>
              </div>
            </div>

            {/* Package inclusions checklist */}
            <div className="mt-6 pt-5 border-t border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-cyan-400 mr-2 shrink-0" />
                <span>1 Year Official Brand Replacement Warranty</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-cyan-400 mr-2 shrink-0" />
                <span>Free Live Smartphone Viewing Setup (iOS &amp; Android)</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-cyan-400 mr-2 shrink-0" />
                <span>Local Rajkot On-Site Support &amp; Maintenance</span>
              </div>
            </div>

            {/* Action WhatsApp Quote */}
            <button
              onClick={handleSendQuoteWhatsApp}
              className="mt-8 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition flex items-center justify-center gap-2 group"
            >
              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              <span>Book Site Visit &amp; Confirm Quote via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
