import React from 'react';
import { motion } from 'framer-motion';
import { HOTEL_INFO } from '../data/hotelData';
import { Award, Building, Users2, ShieldCheck, Check, Sparkles, MapPin, Train } from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';

export const AboutSection = () => {
  const stats = [
    { value: '40+', label: 'Executive Rooms', detail: 'Fully AC with 24/7 hot water' },
    { value: '850+', label: 'Google Reviews', detail: '3.9★ Verified Guest Rating' },
    { value: '350+', label: 'Banquet Guests', detail: 'Weddings & Corporate Offsites' },
    { value: '1.0 km', label: 'Anpara Station', detail: 'Quick 3-minute cab drive' },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090e18] overflow-hidden [perspective:1000px]">
      {/* Subtle ambient 3D glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3D Interactive Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-6 relative [transform-style:preserve-3d]"
          >
            <TiltCard3D maxTilt={10} scale={1.02} className="mx-auto max-w-lg lg:max-w-none">
              <div className="relative">
                {/* Main Image */}
                <div className="rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-black/90 aspect-[4/3] group">
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                    alt="Hotel Shri Ram International Lobby"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating 3D Badge 1: Location & Transit */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-6 -left-4 sm:left-4 glass-card p-4 rounded-2xl shadow-2xl border border-amber-500/40 max-w-[260px] [transform:translateZ(40px)] backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                      <Train className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Prime Location</div>
                      <div className="text-sm font-bold text-white">1 km to Anpara Station</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating 3D Badge 2: Google Rating */}
                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-6 -right-4 glass-card p-4 rounded-2xl shadow-2xl border border-amber-500/40 max-w-[220px] [transform:translateZ(40px)] backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center text-lg">
                      ★
                    </div>
                    <div>
                      <div className="text-base font-bold text-white">3.9 / 5 Rating</div>
                      <div className="text-xs text-slate-300">850+ Google Reviews</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TiltCard3D>
          </motion.div>

          {/* Right Column: Narrative & 3D Staggered Reveal */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-6 [transform-style:preserve-3d]"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4 border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5" /> Welcome to Sonbhadra’s Premier Stay
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              A Warm Sanctuary for <span className="text-gold-gradient">Corporate Titans</span> & Families
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Strategically positioned at <strong>Auri More, Anpara</strong>, in the energetic heart of Uttar Pradesh’s power and industrial corridor, <strong>Hotel Shri Ram International</strong> has stood as a beacon of comfort and dependability for over a decade.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Whether you are visiting for technical inspections at <strong>NTPC Vindhyachal</strong>, <strong>UPRVUNL Anpara Thermal Power Station</strong>, or <strong>Hindalco Renusagar</strong>, or celebrating a grand wedding in our banquet hall, we deliver spotless hospitality, fine dining, and peace of mind with 100% power backup and 24/7 attentive service.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                'Silent Air Conditioned Rooms',
                'Multi-Cuisine Restaurant & Bar',
                '24/7 Power Backup & Elevator',
                'Corporate GST Invoicing',
                'Banquet & Conference Hall',
                'Free High-Speed Wi-Fi & Parking'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Quick Address Anchor */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 hover:border-amber-500/30 transition">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-300">
                <span className="font-semibold text-white">Physical Address:</span> {HOTEL_INFO.address}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3D Interactive Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16"
        >
          {stats.map((stat, idx) => (
            <TiltCard3D key={idx} maxTilt={14} scale={1.04} className="h-full">
              <div className="glass-card p-6 rounded-2xl border border-amber-500/20 text-center hover:border-amber-500/50 transition duration-300 group h-full flex flex-col justify-center shadow-lg">
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-amber-400 mb-2 group-hover:scale-110 transition-transform [transform:translateZ(25px)]">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white mb-1 [transform:translateZ(15px)]">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 [transform:translateZ(10px)]">
                  {stat.detail}
                </div>
              </div>
            </TiltCard3D>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
