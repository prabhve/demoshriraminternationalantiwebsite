import React from 'react';
import { AMENITIES } from '../data/hotelData';
import { 
  Utensils, 
  Wine, 
  Building2, 
  Wifi, 
  Zap, 
  Car, 
  Clock, 
  Train, 
  Sparkles,
  Shield,
  Coffee,
  Tv
} from 'lucide-react';

const iconMap = {
  Utensils: Utensils,
  Wine: Wine,
  Building2: Building2,
  Wifi: Wifi,
  Zap: Zap,
  Car: Car,
  Clock: Clock,
  Train: Train,
};

export const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090e18]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" /> High Standards of Hospitality
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            World-Class <span className="text-gold-gradient">Amenities & Services</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Designed to meet every requirement of executive business stays, power plant visitors, family getaways, and grand weddings in Sonbhadra.
          </p>
        </div>

        {/* Grid of Amenities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((amenity, idx) => {
            const IconComponent = iconMap[amenity.icon] || Shield;
            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-amber-500/15 hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-700/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition">
                    {amenity.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {amenity.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-amber-400 font-medium">
                  <span>Available 24/7 for Guests</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with additional perks */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">100% Uninterrupted Power Backup & Elevator</h4>
              <p className="text-xs sm:text-sm text-slate-400">High-capacity silent generator ensures total comfort during weather or regional grid fluctuations.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right hidden sm:block">
              <div className="text-xs text-amber-400 font-semibold uppercase">Need Special Assistance?</div>
              <div className="text-xs text-slate-400">Call Concierge Desk</div>
            </div>
            <a
              href="tel:+919598614567"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs sm:text-sm font-semibold border border-amber-500/30 transition"
            >
              +91 95986 14567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
