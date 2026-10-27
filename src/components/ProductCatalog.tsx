'use client';

import React, { useState } from 'react';
import {
  ORIGINAL_CATEGORIES,
  ORIGINAL_FEATURED_PRODUCTS,
  FeaturedProduct,
  CategoryCardData,
} from '@/data/products';
import {
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

export default function ProductCatalog() {
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('all');
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleWhatsAppProduct = (prod: FeaturedProduct) => {
    const text = encodeURIComponent(
      `Hello Version Computers! I am interested in inquiring about:\n\n*Product:* ${prod.name}\n*Price Range:* ${prod.price}\n\nPlease confirm models in stock and current quotation.`
    );
    window.open(`https://wa.me/919327107280?text=${text}`, '_blank');
  };

  const handleWhatsAppCategory = (category: CategoryCardData) => {
    const text = encodeURIComponent(
      `Hello Version Computers! I am viewing your category:\n\n*Category:* ${category.title}\n*Items of Interest:* ${category.items.join(', ')}\n\nPlease share price details and available brands.`
    );
    window.open(`https://wa.me/919327107280?text=${text}`, '_blank');
  };

  const filteredFeatured =
    activeCategoryTab === 'all'
      ? ORIGINAL_FEATURED_PRODUCTS
      : ORIGINAL_FEATURED_PRODUCTS.filter((p) => p.category === activeCategoryTab);

  return (
    <section id="products" className="py-20 bg-[#f8fafc] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching original site */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Products
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Comprehensive range of computer parts, CCTV systems, and networking solutions for all your technology needs.
          </p>
        </div>

        {/* Categories Grid matching reference layout with top-to-bottom sliding accent line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {ORIGINAL_CATEGORIES.map((cat) => {
            const isHovered = hoveredCategory === cat.id;

            return (
              <div
                key={cat.id}
                onMouseEnter={() => setHoveredCategory(cat.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`relative bg-white rounded-2xl p-7 transition-all duration-300 overflow-hidden flex flex-col justify-between border cursor-pointer ${
                  isHovered
                    ? 'border-blue-500 shadow-xl shadow-blue-500/10 -translate-y-1'
                    : 'border-slate-200/90 shadow-sm hover:border-slate-300'
                }`}
              >
                {/* 
                  Vertical accent line that slides in from TOP to BOTTOM on hover 
                  (matching the user's reference image where the left border line animates down)
                */}
                <span
                  className={`absolute left-0 top-0 w-1.5 bg-blue-600 rounded-r-md transition-all duration-500 ease-out pointer-events-none ${
                    isHovered ? 'h-full opacity-100' : 'h-0 opacity-0'
                  }`}
                />

                {/* Top Row: Thumbnail + Category Count */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 p-1.5 border border-slate-200/80 flex items-center justify-center shadow-inner">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className={`w-full h-full object-cover rounded-lg transition-transform duration-500 ${
                          isHovered ? 'scale-110' : 'scale-100'
                        }`}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-300 tracking-wider">
                      {cat.count}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>

                  {/* Available Items Tags */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                    {cat.items.slice(0, 4).map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs text-slate-600 truncate"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 shrink-0"></span>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                    {cat.items.length > 4 && (
                      <span className="text-[11px] text-blue-600 font-semibold pl-3.5 block">
                        +{cat.items.length - 4} more items
                      </span>
                    )}
                  </div>
                </div>

                {/* View Products CTA with Arrow matching reference screenshot */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleWhatsAppCategory(cat)}
                    className="w-full inline-flex items-center justify-between text-xs font-bold tracking-wider uppercase text-blue-600 hover:text-blue-700 transition group/btn"
                  >
                    <span>View Products</span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isHovered ? 'translate-x-1.5' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Products Section (exact 6 items from original website) */}
        <div id="featured-products" className="pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Direct Pricing
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                Featured Products
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Popular best-selling hardware and surveillance units in Rajkot.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategoryTab('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeCategoryTab === 'all'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveCategoryTab('computer-parts')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeCategoryTab === 'computer-parts'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Computer Parts
              </button>
              <button
                onClick={() => setActiveCategoryTab('cctv-security')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeCategoryTab === 'cctv-security'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                CCTV &amp; Security
              </button>
              <button
                onClick={() => setActiveCategoryTab('networking')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeCategoryTab === 'networking'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Networking
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {filteredFeatured.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-4 text-center hover:shadow-xl border border-slate-200/80 hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-28 w-full rounded-xl overflow-hidden mb-3 bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.badge && (
                      <span className="absolute top-1.5 left-1.5 bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {product.name}
                  </h4>
                  <p className="text-xs font-bold text-blue-600 mt-1">
                    {product.price}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => handleWhatsAppProduct(product)}
                    className="w-full py-1.5 px-2 rounded-lg bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white text-[11px] font-bold transition flex items-center justify-center gap-1"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
