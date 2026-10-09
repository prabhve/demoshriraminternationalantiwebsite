import React, { useState } from 'react';
import { Star, MapPin, Calendar, Users, ArrowRight, ShieldCheck, Phone, CheckCircle2, BedDouble, Utensils, Sparkles } from 'lucide-react';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';

export const Hero = ({ onOpenBookingWithDetails }) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date();
  dayAfter.setDate(dayAfter.getDate() + 2);

  const [checkIn, setCheckIn] = useState(tomorrow.toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState(dayAfter.toISOString().split('T')[0]);
  const [selectedRoomId, setSelectedRoomId] = useState(ROOMS[0].id);
  const [guests, setGuests] = useState('2 Adults');

  const handleQuickBook = (e) => {
    e.preventDefault();
    onOpenBookingWithDetails({
      checkIn,
      checkOut,
      roomId: selectedRoomId,
      guests
    });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with Dark Luxe Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=85')`,
        }}
      >
        {/* Gradient dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b101c] via-[#0b101c]/80 to-[#0b101c]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b101c] via-transparent to-[#0b101c]" />
      </div>

      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
        {/* Top Badges */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-amber-300 text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-amber-950/40 border border-amber-500/30 animate-fade-in">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Auri More, Anpara • Sonbhadra’s Trusted Hospitality Landmark</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          <span className="hidden sm:inline-flex items-center gap-1 font-semibold text-white">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 3.9★ Google Rating
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.15] mb-6">
          Experience <span className="text-gold-gradient italic">Royal Comfort</span> & Modern Luxury in Anpara
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal mb-8">
          Welcome to <strong className="text-white font-semibold">Hotel Shri Ram International</strong>. 
          Offering 40+ executive air-conditioned rooms, multi-cuisine dining, banquet celebrations, and 24/7 hospitality for corporate leaders & family travelers.
        </p>

        {/* Quick Highlights Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-300 mb-10">
          <span className="flex items-center gap-1.5 text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> 40+ Furnished AC Rooms
          </span>
          <span className="flex items-center gap-1.5 text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> Multi-Cuisine Dine & Bar
          </span>
          <span className="flex items-center gap-1.5 text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> 1 km to Anpara Station
          </span>
          <span className="flex items-center gap-1.5 text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> 24/7 Power Backup & Lift
          </span>
        </div>

        {/* Floating Quick Booking Bar */}
        <div className="glass-panel p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl border border-amber-500/25 max-w-5xl mx-auto backdrop-blur-xl">
          <form onSubmit={handleQuickBook} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {/* Check-In Date */}
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700/60 focus-within:border-amber-400 transition">
              <label className="text-[11px] font-semibold tracking-wider text-amber-400 uppercase flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5" /> Check-In Date
              </label>
              <input
                type="date"
                value={checkIn}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent text-white text-sm font-medium focus:outline-none cursor-pointer"
                required
              />
            </div>

            {/* Check-Out Date */}
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700/60 focus-within:border-amber-400 transition">
              <label className="text-[11px] font-semibold tracking-wider text-amber-400 uppercase flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5" /> Check-Out Date
              </label>
              <input
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-white text-sm font-medium focus:outline-none cursor-pointer"
                required
              />
            </div>

            {/* Room Selection */}
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700/60 focus-within:border-amber-400 transition">
              <label className="text-[11px] font-semibold tracking-wider text-amber-400 uppercase flex items-center gap-1.5 mb-1">
                <BedDouble className="w-3.5 h-3.5" /> Room Category
              </label>
              <select
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
                className="w-full bg-slate-900 text-white text-sm font-medium focus:outline-none cursor-pointer py-0.5"
              >
                {ROOMS.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} (₹{room.price}/nt)
                  </option>
                ))}
              </select>
            </div>

            {/* Guests & Submit Button */}
            <div className="flex flex-col justify-end">
              <button
                type="submit"
                className="w-full h-full min-h-[52px] flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Check Rates & Book</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Secondary CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href="#rooms"
            className="px-6 py-3 rounded-xl glass-card text-white text-sm font-medium hover:bg-slate-800 transition border border-slate-700/80 hover:border-amber-400/50 flex items-center gap-2"
          >
            <span>Explore Rooms & Rates</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </a>

          <a
            href={`tel:${HOTEL_INFO.phone}`}
            className="px-6 py-3 rounded-xl bg-slate-900/80 text-amber-400 text-sm font-medium hover:bg-slate-900 transition border border-amber-500/30 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call Reception ({HOTEL_INFO.phone})</span>
          </a>
        </div>
      </div>
    </section>
  );
};
