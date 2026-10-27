'use client';

import React from 'react';
import { ShieldCheck, Clock, Award, MapPin } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              About Version Computers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Rajkot&apos;s Premier Computer Parts &amp; CCTV Solutions Supplier
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Established as Rajkot&apos;s premier computer parts and CCTV products supplier, <strong>Version Computers</strong> has been serving customers with quality products and exceptional service for years.
            </p>
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100">
              <h3 className="text-sm font-bold text-blue-900 mb-1">Our Mission</h3>
              <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
                To provide quality computer parts, reliable CCTV products, and wholesale supply to businesses and individuals in Rajkot and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <Clock className="w-5 h-5 text-blue-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm">Quick Delivery</h4>
                <p className="text-xs text-slate-500 mt-1">Fast delivery of quality products in Rajkot.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <ShieldCheck className="w-5 h-5 text-indigo-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm">Quality Guarantee</h4>
                <p className="text-xs text-slate-500 mt-1">All services come with quality assurance.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <Award className="w-5 h-5 text-sky-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm">Product Expertise</h4>
                <p className="text-xs text-slate-500 mt-1">Expert knowledge to choose the right products.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 text-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80"
                alt="Version Computers Store"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-base text-white">Store Location</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      9A, Manahar plot Cornet, Mangla Main Rd, Rajkot, Gujarat 360002
                    </p>
                    <a
                      href="https://maps.google.com/?q=Version+Computers+Rajkot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-xs font-bold text-blue-400 hover:text-blue-300 transition"
                    >
                      View on Google Maps →
                    </a>
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
