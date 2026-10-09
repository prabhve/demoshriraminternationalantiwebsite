import React from 'react';
import { Phone, MessageSquare, BedDouble, Calendar, ShieldCheck } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const MobileBottomNav = ({ onOpenBooking, onOpenAdmin, pendingCount }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#070b14]/95 backdrop-blur-xl border-t border-amber-500/30 px-3 py-2 shadow-2xl pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-5 items-center gap-1 text-center">
        
        {/* Call Hotel */}
        <a
          href={`tel:${HOTEL_INFO.phone}`}
          className="flex flex-col items-center justify-center py-1 text-slate-300 hover:text-amber-400 active:scale-95 transition"
        >
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 mb-0.5 border border-slate-700">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-semibold text-slate-300">Call</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=Hello%20Hotel%20Shri%20Ram%20International,%20I%20want%20to%20inquire%20about%20room%20booking.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-slate-300 hover:text-emerald-400 active:scale-95 transition"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-0.5 border border-emerald-500/30">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-semibold text-slate-300">WhatsApp</span>
        </a>

        {/* Primary Action: Book Now (Center Elevated) */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-1 -mt-4 active:scale-95 transition cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-600 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/40 border-2 border-amber-300 mb-0.5 animate-bounce-subtle">
            <Calendar className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="text-[10px] font-bold text-amber-400">Book Room</span>
        </button>

        {/* Rooms Tariff */}
        <a
          href="#rooms"
          className="flex flex-col items-center justify-center py-1 text-slate-300 hover:text-amber-400 active:scale-95 transition"
        >
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 mb-0.5 border border-slate-700">
            <BedDouble className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-semibold text-slate-300">Rooms</span>
        </a>

        {/* Admin Staff */}
        <button
          onClick={onOpenAdmin}
          className="flex flex-col items-center justify-center py-1 text-slate-300 hover:text-amber-400 active:scale-95 transition cursor-pointer relative"
        >
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-amber-300 mb-0.5 border border-amber-500/30">
            <ShieldCheck className="w-4 h-4" />
            {pendingCount > 0 && (
              <span className="absolute top-0 right-3 w-3.5 h-3.5 bg-amber-500 text-black text-[9px] font-bold rounded-full flex items-center justify-center">
                {pendingCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-semibold text-slate-300">Admin</span>
        </button>

      </div>
    </div>
  );
};
