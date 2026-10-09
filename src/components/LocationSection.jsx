import React from 'react';
import { motion } from 'framer-motion';
import { HOTEL_INFO, NEARBY_LANDMARKS } from '../data/hotelData';
import { MapPin, Navigation, Train, ExternalLink, Sparkles, Building } from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';

export const LocationSection = () => {
  return (
    <section id="location" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0b101c] overflow-hidden [perspective:1000px]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3 border border-amber-500/20">
            <MapPin className="w-3.5 h-3.5" /> Prime Strategic Location
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Easy Transit & <span className="text-gold-gradient">Nearby Hubs</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Located right at Auri More on NH-75 in Anpara, we provide effortless connectivity to the railway station, local markets, and all major industrial plants across the Sonbhadra & Singrauli region.
          </p>
        </motion.div>

        {/* Main Grid: Interactive Map + Landmark Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left: 3D Google Map View with Direct Link */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <TiltCard3D maxTilt={6} scale={1.01}>
              <div className="glass-card p-4 sm:p-6 rounded-3xl border border-amber-500/25 shadow-2xl flex flex-col justify-between [transform-style:preserve-3d]">
                <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-slate-800 relative bg-slate-900 shadow-inner">
                  <iframe
                    title="Hotel Shri Ram International Google Map"
                    src="https://maps.google.com/maps?q=24.2076875,82.7676875&hl=en&z=15&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Floating Address Bar */}
                  <div className="absolute bottom-3 left-3 right-3 glass-panel p-3 rounded-xl border border-amber-500/40 text-xs flex items-center justify-between gap-2 shadow-lg backdrop-blur-xl [transform:translateZ(30px)]">
                    <div className="flex items-center gap-2 text-white truncate">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="truncate">{HOTEL_INFO.address}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Google Maps Action CTA */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800 [transform:translateZ(20px)]">
                  <div>
                    <div className="text-xs text-amber-400 font-semibold uppercase">GPS Coordinates</div>
                    <div className="text-sm font-mono text-slate-300">24.2076875° N, 82.7676875° E</div>
                  </div>

                  <a
                    href={HOTEL_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/25 transition hover:scale-105"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </TiltCard3D>
          </motion.div>

          {/* Right: Key Proximities & Landmarks with Stagger */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-3"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              Distance to Essential Locations
            </div>

            {NEARBY_LANDMARKS.map((landmark, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-2xl glass-card border border-slate-800 hover:border-amber-500/40 transition flex items-center justify-between gap-3 group shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition">
                    {landmark.type === 'Transit Hub' ? (
                      <Train className="w-5 h-5" />
                    ) : (
                      <Building className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition">
                      {landmark.name}
                    </h4>
                    <p className="text-[11px] text-slate-400">{landmark.desc}</p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="font-serif text-sm font-bold text-amber-400">{landmark.distance}</div>
                  <div className="text-[10px] text-slate-400">{landmark.driveTime}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
