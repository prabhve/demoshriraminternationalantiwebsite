import React from 'react';
import { Phone, MessageSquare, Calendar, Navigation } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const FloatingActions = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp Quick Chat */}
      <a
        href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=Hello%20Hotel%20Shri%20Ram%20International,%20I%20want%20to%20inquire%20about%20room%20booking%20and%20rates.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/50 hover:scale-110 active:scale-95 transition-all duration-300 group"
        title="Chat on WhatsApp"
        aria-label="WhatsApp Contact"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-14 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1 rounded-lg border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Chat on WhatsApp
        </span>
      </a>

      {/* Phone Call Quick Dial */}
      <a
        href={`tel:${HOTEL_INFO.phone}`}
        className="w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/40 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
        title="Call Hotel Front Desk"
        aria-label="Call Hotel"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute right-14 bg-slate-900 text-amber-300 text-xs font-semibold px-2.5 py-1 rounded-lg border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Call Reception
        </span>
      </a>

      {/* Book Room Floating Action Button */}
      <button
        onClick={onOpenBooking}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-2xl shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-amber-300"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Room</span>
      </button>
    </div>
  );
};
