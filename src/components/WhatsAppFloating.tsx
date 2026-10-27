'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloating() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end group">
      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 mb-2 mr-1 bg-slate-900 text-white text-xs py-1 px-3 rounded-lg shadow-lg whitespace-nowrap">
        Need quick advice? Chat on WhatsApp!
      </div>
      <a
        href="https://wa.me/919327107280?text=Hello%20Version%20Computers,%20I%20have%20an%20inquiry%20regarding%20products%20and%20pricing."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/35 hover:scale-110 transition-transform duration-200"
        aria-label="Chat on WhatsApp with Version Computers"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </aside>
  );
}
