'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm font-sans bg-white">
      {/* Top Info Bar */}
      <div className="bg-[#0f172a] text-slate-300 text-[11px] py-2 px-4 border-b border-slate-800 font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Left contact info */}
          <div className="flex items-center space-x-4 sm:space-x-6 flex-wrap">
            <a
              href="tel:+919327107280"
              className="flex items-center hover:text-blue-400 transition"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400 mr-1.5" />
              <span>+91 9327107280</span>
            </a>
            <a
              href="tel:+919327113245"
              className="hidden sm:flex items-center hover:text-blue-400 transition"
            >
              <span>+91 9327113245</span>
            </a>
            <a
              href="mailto:vcrajkot@gmail.com"
              className="hidden md:flex items-center hover:text-blue-400 transition"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400 mr-1.5" />
              <span>vcrajkot@gmail.com</span>
            </a>
          </div>

          {/* Right location & hours */}
          <div className="flex items-center space-x-4 sm:space-x-6 text-slate-300">
            <span className="hidden lg:flex items-center">
              <MapPin className="w-3.5 h-3.5 text-blue-400 mr-1.5" />
              <span>Rajkot, Gujarat, India</span>
            </span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 text-blue-400 mr-1.5" />
              <span>Mon-Sat: 10:00AM - 8:30PM</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Brand & Nav Bar */}
      <nav className="bg-white border-b-2 border-blue-600 px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Official VC Logo */}
          <Link href="/" className="flex items-center group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Version Computers Logo"
              className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1 font-bold text-xs tracking-wider uppercase">
            <a
              href="#home"
              className="px-4 py-2 rounded-md bg-blue-50 text-blue-600 font-bold"
            >
              Home
            </a>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <a
                href="#products"
                className="px-3.5 py-2 text-slate-700 hover:text-blue-600 transition flex items-center gap-1 font-bold"
              >
                Products <ChevronDown className="w-3.5 h-3.5" />
              </a>

              {productsDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-slate-100 rounded-xl py-2 z-50 animate-in fade-in duration-150">
                  <a
                    href="#products"
                    className="block px-4 py-2 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-bold"
                  >
                    Computer Parts
                  </a>
                  <a
                    href="#products"
                    className="block px-4 py-2 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-bold"
                  >
                    CCTV &amp; Security
                  </a>
                  <a
                    href="#products"
                    className="block px-4 py-2 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-bold"
                  >
                    Networking Items
                  </a>
                  <a
                    href="#featured-products"
                    className="block px-4 py-2 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-bold"
                  >
                    Featured Products
                  </a>
                </div>
              )}
            </div>

            <a
              href="#services"
              className="px-3.5 py-2 text-slate-700 hover:text-blue-600 transition font-bold"
            >
              Services
            </a>

            <a
              href="#distributors"
              className="px-3.5 py-2 text-slate-700 hover:text-blue-600 transition font-bold"
            >
              Distributors
            </a>

            <a
              href="#about"
              className="px-3.5 py-2 text-slate-700 hover:text-blue-600 transition font-bold"
            >
              About Us
            </a>

            <a
              href="#contact"
              className="px-3.5 py-2 text-slate-700 hover:text-blue-600 transition font-bold"
            >
              Contact
            </a>
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold tracking-wider uppercase shadow-md shadow-blue-500/20 transition-all transform hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 pt-3 pb-4 space-y-2 font-semibold text-sm">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg bg-blue-50 text-blue-700"
            >
              Home
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-slate-700 hover:bg-slate-50"
            >
              Products
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-slate-700 hover:bg-slate-50"
            >
              Services
            </a>
            <a
              href="#distributors"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-slate-700 hover:bg-slate-50"
            >
              Distributors
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-slate-700 hover:bg-slate-50"
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-slate-700 hover:bg-slate-50"
            >
              Contact
            </a>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-2.5 rounded-lg bg-blue-600 text-white font-bold text-xs uppercase tracking-wider"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
