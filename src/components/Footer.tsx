import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b172a] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="Version Computers"
                className="h-10 w-auto object-contain brightness-110"
              />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Leading supplier of computer parts, CCTV products, and wholesale components in Rajkot. Your one-stop shop for all technology products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#distributors" className="hover:text-blue-400 transition">
                  Distributors
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Our Products
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#products" className="hover:text-blue-400 transition">
                  Computer Parts
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400 transition">
                  CCTV &amp; Security
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400 transition">
                  Networking Items
                </a>
              </li>
              <li>
                <a href="#featured-products" className="hover:text-blue-400 transition">
                  Featured Hardware
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 text-blue-400 mr-2 shrink-0 mt-0.5" />
                <span>9A, Manahar plot Cornet, Mangla Main Rd, Rajkot, Gujarat 360002</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 text-blue-400 mr-2 shrink-0" />
                <span>+91 9327107280</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 text-blue-400 mr-2 shrink-0" />
                <span>vcrajkot@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Version Computers. All rights reserved.</p>
          <p>
            Designed with ❤️ for Rajkot
          </p>
        </div>
      </div>
    </footer>
  );
}
