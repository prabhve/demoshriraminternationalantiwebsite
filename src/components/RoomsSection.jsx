import React, { useState } from 'react';
import { ROOMS } from '../data/hotelData';
import { Users, Bed, Eye, Calendar, Sparkles, Check, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

export const RoomsSection = ({ onSelectRoomForBooking }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedRoomModal, setSelectedRoomModal] = useState(null);

  const categories = ['All', 'Deluxe', 'Super Deluxe', 'Suite', 'Family Suite'];

  const filteredRooms = activeCategory === 'All'
    ? ROOMS
    : ROOMS.filter(r => r.category === activeCategory);

  return (
    <section id="rooms" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0b101c]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" /> Accommodations & Suites
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Curated Rooms for <span className="text-gold-gradient">Supreme Rest</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Every room at Hotel Shri Ram International is thoughtfully appointed with modern air-conditioning, plush bedding, high-speed internet, and round-the-clock room service.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                    : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-amber-400/40 hover:text-white'
                }`}
              >
                {category === 'All' ? 'All Accommodations' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="glass-card rounded-3xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-950/40 flex flex-col group"
            >
              {/* Room Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 shadow-md">
                    {room.tag}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 glass-panel px-4 py-2 rounded-2xl border border-amber-500/30">
                  <div className="text-[11px] text-slate-300 line-through">₹{room.originalPrice}</div>
                  <div className="text-xl font-bold font-serif text-amber-400">
                    ₹{room.price} <span className="text-xs text-slate-300 font-sans font-normal">/ night</span>
                  </div>
                </div>
              </div>

              {/* Room Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                      {room.category}
                    </span>
                    <span className="text-xs text-slate-400">{room.size}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition">
                    {room.name}
                  </h3>

                  {/* Bed & Capacity metadata */}
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 mb-6 pb-6 border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4 text-amber-400" />
                      <span>{room.bed}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-amber-400" />
                      <span>{room.capacity}</span>
                    </div>
                  </div>

                  {/* Room Features (first 4) */}
                  <div className="space-y-2 mb-8">
                    {room.features.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => setSelectedRoomModal(room)}
                    className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-slate-900/90 text-slate-200 text-xs sm:text-sm font-semibold hover:bg-slate-800 border border-slate-700/80 transition cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-slate-400" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => onSelectRoomForBooking(room.id)}
                    className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 text-xs sm:text-sm font-bold shadow-md shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Details Modal */}
      {selectedRoomModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="glass-panel w-full max-w-3xl rounded-3xl overflow-hidden border border-amber-500/30 max-h-[90vh] flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  {selectedRoomModal.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {selectedRoomModal.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedRoomModal(null)}
                className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Image Preview Gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedRoomModal.gallery.map((img, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden aspect-[4/3] border border-slate-800">
                    <img src={img} alt={`${selectedRoomModal.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {/* Pricing & Key Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800 text-center">
                <div>
                  <div className="text-[11px] text-slate-400 uppercase">Tariff</div>
                  <div className="text-lg font-bold text-amber-400">₹{selectedRoomModal.price} <span className="text-xs text-slate-400">/nt</span></div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase">Room Size</div>
                  <div className="text-sm font-bold text-white">{selectedRoomModal.size}</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase">Bedding</div>
                  <div className="text-sm font-bold text-white">{selectedRoomModal.bed}</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase">Occupancy</div>
                  <div className="text-sm font-bold text-white">{selectedRoomModal.capacity}</div>
                </div>
              </div>

              {/* Full Features List */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Room Amenities & Inclusions</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedRoomModal.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400">Direct booking price:</span>
                <div className="text-xl font-bold font-serif text-amber-400">
                  ₹{selectedRoomModal.price} <span className="text-xs text-slate-300 font-sans font-normal">+ taxes</span>
                </div>
              </div>

              <button
                onClick={() => {
                  const id = selectedRoomModal.id;
                  setSelectedRoomModal(null);
                  onSelectRoomForBooking(id);
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/30 hover:scale-105 transition cursor-pointer"
              >
                Proceed to Book This Room
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
