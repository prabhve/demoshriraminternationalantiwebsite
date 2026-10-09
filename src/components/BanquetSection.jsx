import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Users2, Sparkles, Check, Phone, CalendarCheck, MessageSquare, Mic2 } from 'lucide-react';

export const BanquetSection = ({ onOpenBooking }) => {
  return (
    <section id="banquet" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090e18]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Details */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4 border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5" /> Events & Celebrations
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Royal Banquet & <span className="text-gold-gradient">Corporate Conference</span> Hall
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-6">
              From high-stakes board meetings and technical seminars for regional industrial giants to memorable weddings, sangeet ceremonies, and grand receptions — our banquet facilities offer unmatched scale and elegance in Anpara.
            </p>

            {/* Key Banquet Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Seating Capacity', desc: 'Accommodates 50 to 350+ attendees comfortably.' },
                { title: 'Audio-Visual Tech', desc: 'High-definition projectors, cordless mics & acoustic sound.' },
                { title: 'Bespoke Catering', desc: 'Customizable vegetarian & non-veg lavish buffet spreads.' },
                { title: 'Full Climate Control', desc: 'Centralized air conditioning and backup power guarantee.' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-1">
                    <Check className="w-4 h-4" /> {item.title}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=Hello%20Hotel%20Shri%20Ram%20International,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20Banquet%20Hall%20for%20an%20event.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 hover:scale-105 transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire for Banquet / Event</span>
              </a>

              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-amber-400 font-semibold text-sm border border-amber-500/30 hover:bg-slate-700 transition"
              >
                <Phone className="w-4 h-4" />
                <span>Call Event Coordinator</span>
              </a>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl group aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"
                alt="Royal Banquet Hall Hotel Shri Ram International"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-2xl border border-amber-500/30 flex items-center justify-between">
                <div>
                  <div className="text-white font-bold text-base">Grand Celebrations & Corporate Meets</div>
                  <div className="text-xs text-amber-400">Custom packages with room blocks available</div>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-black text-xs">
                  350+ Cap
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
