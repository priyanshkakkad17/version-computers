'use client';

import React, { useState, useEffect } from 'react';
import { ORIGINAL_TESTIMONIALS } from '@/data/products';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  // Automatically cycle to the next review every 5 seconds with newspaper drop animation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ORIGINAL_TESTIMONIALS.length);
      setAnimKey((k) => k + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ORIGINAL_TESTIMONIALS.length) % ORIGINAL_TESTIMONIALS.length);
    setAnimKey((k) => k + 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ORIGINAL_TESTIMONIALS.length);
    setAnimKey((k) => k + 1);
  };

  const currentTestimonial = ORIGINAL_TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-100 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/70 shadow-sm inline-block mb-3">
            Customer Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            What Our Customers Say
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 font-normal">
            Real experiences from retail partners, business owners, and IT clients across Rajkot.
          </p>
        </div>

        {/* Newspaper Drop Display Arena */}
        <div className="max-w-2xl mx-auto relative perspective-[1200px] min-h-[380px] sm:min-h-[340px] flex items-center justify-center">
          {/* Ghost Stack behind to simulate paper stack depth */}
          <div className="absolute inset-x-8 sm:inset-x-12 top-6 bottom-0 bg-slate-100/70 rounded-3xl border border-slate-200/50 -rotate-1 pointer-events-none" />
          <div className="absolute inset-x-4 sm:inset-x-6 top-3 bottom-0 bg-slate-50 rounded-3xl border border-slate-200/60 rotate-1 pointer-events-none" />

          {/* Active Newspaper Card that drops from behind with spin */}
          <div
            key={animKey}
            className="animate-newspaper-drop w-full relative bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12)] flex flex-col justify-between"
          >
            {/* Top Bar: Newspaper Header Stamp + Stars */}
            <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-slate-900 text-white px-2.5 py-1 rounded">
                  VERIFIED REVIEW
                </span>
                <span className="text-xs font-semibold text-slate-400 font-mono">
                  0{currentIndex + 1} / 0{ORIGINAL_TESTIMONIALS.length}
                </span>
              </div>

              {/* 5 Star Rating */}
              <div className="flex items-center space-x-1 text-amber-400">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="relative mb-8">
              <Quote className="absolute -top-3 -left-3 w-8 h-8 text-blue-100 -z-10 rotate-180" />
              <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed italic">
                &ldquo;{currentTestimonial.text}&rdquo;
              </p>
            </div>

            {/* Bottom: Reviewer Profile + 5s Progress Bar */}
            <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-extrabold flex items-center justify-center text-base shadow-md shadow-blue-500/25">
                  {currentTestimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-xs text-blue-600 font-medium">
                    {currentTestimonial.business}
                  </p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Review"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Review"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 5 Second Progress Timer Indicator Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100 rounded-b-3xl overflow-hidden">
              <div
                key={`bar-${animKey}`}
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 w-0"
                style={{
                  animation: 'timerProgress 5s linear forwards',
                }}
              />
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {ORIGINAL_TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setAnimKey((k) => k + 1);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
