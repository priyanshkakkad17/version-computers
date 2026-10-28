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
    <div id="products">
      {/* 1. Category Section: Inverted Dark Theme with Sharp/Straight Edge Horizontal Cards */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
        {/* Dark theme ambient lighting accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Heading with inverted dark colors */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
              Catalog &amp; Inventory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Products
            </h2>
            <p className="text-slate-400 mt-3 text-base sm:text-lg">
              Comprehensive range of computer parts, CCTV systems, and networking solutions for all your technology needs.
            </p>
          </div>

          {/* Horizontal Category Cards: Sharp / Square edges (no rounded corners) */}
          <div className="space-y-6">
            {ORIGINAL_CATEGORIES.map((cat) => {
              const isHovered = hoveredCategory === cat.id;

              return (
                <div
                  key={cat.id}
                  onMouseEnter={() => setHoveredCategory(cat.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  onClick={() => handleWhatsAppCategory(cat)}
                  className={`group relative bg-slate-900/90 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 overflow-hidden border cursor-pointer ${
                    isHovered
                      ? 'border-blue-500 shadow-2xl shadow-blue-500/20 -translate-y-1 bg-slate-900'
                      : 'border-slate-800 shadow-lg hover:border-slate-700'
                  }`}
                >
                  {/* 
                    Vertical accent line that slides in from TOP to BOTTOM on hover 
                    with bright vibrant blue
                  */}
                  <span
                    className={`absolute left-0 top-0 w-1.5 bg-gradient-to-b from-blue-500 to-indigo-500 transition-all duration-500 ease-out pointer-events-none ${
                      isHovered ? 'h-full opacity-100' : 'h-0 opacity-0'
                    }`}
                  />

                  {/* Horizontal Flex Layout */}
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
                    {/* Left: Image Thumbnail + Main Info */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 flex-1">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 overflow-hidden bg-slate-800 p-1 border border-slate-700/80 shrink-0 shadow-inner">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={cat.image}
                          alt={cat.title}
                          className={`w-full h-full object-cover transition-transform duration-500 ${
                            isHovered ? 'scale-110' : 'scale-100'
                          }`}
                        />
                        <span className="absolute top-1 left-1 bg-blue-600 text-white font-mono text-[10px] font-bold px-1.5 py-0.5 shadow">
                          {cat.count}
                        </span>
                      </div>

                      <div className="space-y-1.5 max-w-xl">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                            {cat.subtitle}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {cat.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    {/* Middle: Horizontal Badges / Items Row */}
                    <div className="flex flex-wrap items-center gap-2 lg:max-w-md">
                      {cat.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center text-xs font-medium text-slate-300 bg-slate-800/90 border border-slate-700/80 px-3 py-1.5 transition-colors hover:border-blue-500/50 hover:text-white"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-400 mr-2 shrink-0"></span>
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>

                    {/* Right: View Products CTA Button */}
                    <div className="shrink-0 w-full sm:w-auto pt-2 lg:pt-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWhatsAppCategory(cat);
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-md shadow-blue-600/20 group/btn"
                      >
                        <span>View Products</span>
                        <ArrowRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isHovered ? 'translate-x-1' : ''
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Featured Products Section: Clean White Background with Sharp Edges */}
      <section id="featured-products" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 border border-blue-200/60 mb-2">
                Direct Pricing
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Featured Products
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Popular best-selling hardware and surveillance units in Rajkot.
              </p>
            </div>

            {/* Filter buttons - Sharp edges */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategoryTab('all')}
                className={`px-3.5 py-1.5 text-xs font-bold transition border ${
                  activeCategoryTab === 'all'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveCategoryTab('computer-parts')}
                className={`px-3.5 py-1.5 text-xs font-bold transition border ${
                  activeCategoryTab === 'computer-parts'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                }`}
              >
                Computer Parts
              </button>
              <button
                onClick={() => setActiveCategoryTab('cctv-security')}
                className={`px-3.5 py-1.5 text-xs font-bold transition border ${
                  activeCategoryTab === 'cctv-security'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                }`}
              >
                CCTV &amp; Security
              </button>
              <button
                onClick={() => setActiveCategoryTab('networking')}
                className={`px-3.5 py-1.5 text-xs font-bold transition border ${
                  activeCategoryTab === 'networking'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
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
                className="bg-white p-4 text-center hover:shadow-xl border border-slate-200 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-28 w-full overflow-hidden mb-3 bg-slate-50 border border-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.badge && (
                      <span className="absolute top-1.5 left-1.5 bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 shadow-sm">
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
                    className="w-full py-1.5 px-2 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white text-[11px] font-bold transition flex items-center justify-center gap-1 border border-blue-100 hover:border-blue-600"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
