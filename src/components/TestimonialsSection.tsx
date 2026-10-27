'use client';

import React from 'react';
import { ORIGINAL_TESTIMONIALS } from '@/data/products';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100/60 px-3 py-1 rounded-full border border-blue-200">
            Customer Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            What Our Customers Say
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our products and quality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ORIGINAL_TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-between hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >
              <div>
                <div className="flex items-center space-x-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm italic leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-md shadow-blue-500/20">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
