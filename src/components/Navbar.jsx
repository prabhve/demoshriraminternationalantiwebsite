import React, { useState } from 'react';
import { Phone, MapPin, Star, Calendar, ShieldCheck, Menu, X, MessageSquare, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const Navbar = ({ onOpenBooking, onOpenAdmin, pendingCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Rooms & Suites', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Dining', href: '#dining' },
    { name: 'Banquet & Events', href: '#banquet' },
    { name: 'Location', href: '#location' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#070b14] border-b border-amber-500/20 text-xs py-2 px-4 sm:px-8 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{HOTEL_INFO.rating}★ on Google ({HOTEL_INFO.reviewCount}+ Reviews)</span>
            </span>
            <span className="hidden md:inline-block text-slate-600">•</span>
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>Auri More, Anpara (1 km from Railway Station)</span>
            </span>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a 
              href={`tel:${HOTEL_INFO.phone}`} 
              className="flex items-center gap-1 text-slate-300 hover:text-amber-400 transition"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{HOTEL_INFO.phone}</span>
            </a>
            <span className="text-slate-600">•</span>
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800 hover:bg-amber-500/20 text-amber-300 text-[11px] font-semibold border border-amber-500/30 transition hover:border-amber-400"
            >
              <ShieldCheck className="w-3 h-3" />
              <span>Hotel Admin</span>
              {pendingCount > 0 && (
                <span className="w-4 h-4 bg-amber-500 text-black text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {pendingCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="glass-panel border-b border-slate-800/80 px-4 sm:px-8 py-3.5 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Hotel Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center text-slate-950 font-serif font-black text-xl shadow-lg shadow-amber-500/20 border border-amber-300 group-hover:scale-105 transition-transform duration-300">
              SRI
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white group-hover:text-amber-300 transition">
                Hotel Shri Ram International
              </div>
              <div className="text-[11px] font-sans tracking-widest uppercase text-amber-400/90 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> Luxury Stay • Anpara, Sonbhadra
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=Hello%20Hotel%20Shri%20Ram%20International,%20I%20would%20like%20to%20inquire%20about%20room%20availability.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 transition hover:scale-105"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-semibold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book A Room</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700/60"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c1322]/95 backdrop-blur-xl border-b border-amber-500/20 px-6 py-6 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-amber-400 py-2 border-b border-slate-800/60"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/30"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Room Now</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 text-amber-300 font-medium text-sm border border-amber-500/30"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Hotel Staff / Admin Panel</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
