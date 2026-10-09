import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_HIGHLIGHTS, HOTEL_INFO } from '../data/hotelData';
import { Wine, Phone, ChefHat, Sparkles } from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';

export const DiningSection = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="dining" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0b101c] overflow-hidden [perspective:1000px]">
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
            <ChefHat className="w-3.5 h-3.5" /> Gourmet Dining & Bar
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Shri Ram <span className="text-gold-gradient">Multi-Cuisine Restaurant</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Savor an authentic culinary journey celebrating North Indian curries, aromatic Mughlai tandoor, comforting Chinese wok, and wholesome Thalis prepared with fresh local ingredients.
          </p>
        </motion.div>

        {/* Highlight Banner / Gallery Grid with 3D Depth */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left: Atmospheric Food Image Collage with 3D Stagger */}
          <motion.div 
            initial={{ opacity: 0, x: -40, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 [transform-style:preserve-3d]"
          >
            <div className="space-y-4">
              <TiltCard3D maxTilt={10} scale={1.03}>
                <div className="rounded-2xl overflow-hidden aspect-square border border-amber-500/30 shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=80"
                    alt="Indian Curry Cuisine"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </TiltCard3D>
              <TiltCard3D maxTilt={10} scale={1.03}>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-amber-500/30 shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80"
                    alt="Tandoori Tikka Platter"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </TiltCard3D>
            </div>

            <div className="space-y-4 pt-6">
              <TiltCard3D maxTilt={10} scale={1.03}>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-amber-500/30 shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80"
                    alt="Royal Thali and Dal Makhani"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </TiltCard3D>
              <TiltCard3D maxTilt={10} scale={1.03}>
                <div className="rounded-2xl overflow-hidden aspect-square border border-amber-500/30 shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80"
                    alt="Restaurant Dining Ambiance"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </TiltCard3D>
            </div>
          </motion.div>

          {/* Right: Dining Narrative & 3D Tilt Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-7 lg:pl-6"
          >
            <TiltCard3D maxTilt={8} scale={1.01}>
              <div className="glass-card p-6 sm:p-10 rounded-3xl border border-amber-500/25 shadow-2xl [transform-style:preserve-3d]">
                <div className="flex items-center gap-3 mb-6 [transform:translateZ(30px)]">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shadow-md">
                    <Wine className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">Fine Dining & Restro-Bar Lounge</h3>
                    <div className="text-xs text-amber-400">Open 7:30 AM – 11:00 PM Daily</div>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 [transform:translateZ(20px)]">
                  Our in-house restaurant is renowned throughout Anpara and Renusagar for its rich Mughlai curries, fragrant biryanis, and sizzling tandoori items. We cater to executive business lunches, corporate plant dinners, as well as family get-togethers with private dining and buffet options.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 [transform:translateZ(25px)]">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/30 transition">
                    <div className="text-xs text-amber-400 font-semibold mb-1">In-Room Dining</div>
                    <div className="text-xs text-slate-400">Hot meals delivered straight to your room 24/7 with zero hassle.</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/30 transition">
                    <div className="text-xs text-amber-400 font-semibold mb-1">Weekend Specials</div>
                    <div className="text-xs text-slate-400">Handcrafted seasonal chef specials, kebabs, and live tandoor platters.</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 [transform:translateZ(30px)]">
                  <a
                    href={`tel:${HOTEL_INFO.phone}`}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/30 hover:scale-105 transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Reserve Table / Order Food</span>
                  </a>

                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-slate-700 transition hover:scale-105"
                  >
                    Stay & Dine Package
                  </button>
                </div>
              </div>
            </TiltCard3D>
          </motion.div>
        </div>

        {/* Interactive Menu Highlights with Smooth Transition */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">Signature Menu Favorites</h3>
            <p className="text-xs sm:text-sm text-slate-400">Popular dishes loved by our guests and local food lovers</p>
            
            {/* Category Switcher Tabs (Mobile Horizontal Scrollable) */}
            <div className="flex sm:flex-wrap items-center sm:justify-center gap-2 mt-6 overflow-x-auto pb-2 sm:pb-0 px-2 sm:px-0 scrollbar-none max-w-full">
              {MENU_HIGHLIGHTS.map((menuCat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-2.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer shrink-0 whitespace-nowrap ${
                    activeTab === idx
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/25 scale-105'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
                  }`}
                >
                  {menuCat.category}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Menu Items Grid with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
            >
              {MENU_HIGHLIGHTS[activeTab].items.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-amber-500/40 transition flex items-start justify-between gap-4 group"
                >
                  <div>
                    <h4 className="font-semibold text-white text-base mb-1 group-hover:text-amber-300 transition">{item.name}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="font-serif text-amber-400 font-bold text-base shrink-0">
                    {item.price}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="text-center mt-8 text-xs text-slate-400">
            * Complete extensive menu with Chinese, Continental, Desserts & Beverages available at the hotel restaurant.
          </div>
        </motion.div>

      </div>
    </section>
  );
};
