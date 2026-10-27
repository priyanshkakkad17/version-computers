'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Computer Parts & Accessories',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch (err) {}

    setTimeout(() => {
      setStatus('success');
      const text = encodeURIComponent(
        `*New Inquiry via Version Computers Website*\n` +
        `*Name:* ${formData.name}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Email:* ${formData.email || 'N/A'}\n` +
        `*Interest:* ${formData.interest}\n` +
        `*Message:* ${formData.message}`
      );
      window.open(`https://wa.me/919327107280?text=${text}`, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Connect With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Contact Us
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Get in touch with us for all your computer and CCTV needs. We&apos;re here to help you with quality products and services.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Store Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 p-7 rounded-3xl border border-slate-200/80 space-y-6">
              <h3 className="text-lg font-bold text-slate-900">Get in Touch</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Store Address</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      9A, Manahar plot Cornet, Mangla Main Rd,<br />
                      Rajkot, Gujarat - 360002
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Phone Numbers</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      <a href="tel:+919327107280" className="hover:text-blue-600 font-semibold transition">
                        +91 9327107280
                      </a>{' '}
                      /{' '}
                      <a href="tel:+919327113245" className="hover:text-blue-600 transition">
                        +91 9327113245
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Email Address</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      <a href="mailto:vcrajkot@gmail.com" className="hover:text-blue-600 font-semibold transition">
                        vcrajkot@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Business Hours</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Monday to Saturday: 10:00 AM – 8:30 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm h-64 w-full">
              <iframe
                title="Version Computers Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8!2d70.7959328!3d22.2878237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca110333eee7%3A0xcc3cf6d98eb92d31!2s9A%2C%20Manahar%20plot%20Cornet%2C%20Mangla%20Main%20Rd%2C%20Rajkot%2C%20Gujarat%20360002!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/80">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Send us a Message</h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Fill in your details below and we will get back to you promptly.
            </p>

            {status === 'success' ? (
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-blue-600 mx-auto" />
                <h4 className="text-lg font-bold text-blue-900">Message Sent Successfully!</h4>
                <p className="text-xs text-blue-700 max-w-md mx-auto">
                  Your inquiry has been processed. If WhatsApp did not open automatically, please reach out to +91 9327107280.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-3 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Interested In
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Computer Parts & Accessories">Computer Parts &amp; Accessories</option>
                      <option value="CCTV & Security Solutions">CCTV &amp; Security Solutions</option>
                      <option value="Networking Items & Infrastructure">Networking Items &amp; Infrastructure</option>
                      <option value="Wholesale Supply & Bulk Inquiry">Wholesale Supply &amp; Bulk Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Requirements / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Enter your requirement or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/25 transition flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
