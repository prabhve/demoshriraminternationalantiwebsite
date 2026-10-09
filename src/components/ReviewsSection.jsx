import React from 'react';
import { REVIEWS, HOTEL_INFO } from '../data/hotelData';
import { Star, Quote, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';

export const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090e18]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Google Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" /> Guest Experiences
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Over <span className="text-gold-gradient">850+ Guests on Google</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Read what corporate professionals, plant executives, and vacationing families say about their stay at Hotel Shri Ram International.
          </p>
        </div>

        {/* Rating Breakdown Banner */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/20 mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Overall Score */}
            <div className="text-center sm:text-left flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-amber-500 text-slate-950 flex flex-col items-center justify-center font-black shadow-lg shadow-amber-500/20 shrink-0">
                <span className="text-3xl font-serif leading-none">3.9</span>
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider">/ 5.0</span>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <Star className="w-5 h-5 fill-amber-400/50 text-amber-400" />
                </div>
                <div className="font-bold text-white text-base">Google Verified Rating</div>
                <div className="text-xs text-slate-400">Based on 850+ authentic traveler reviews</div>
              </div>
            </div>

            {/* Direct Google Reviews Link */}
            <a
              href={HOTEL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs sm:text-sm font-semibold border border-amber-500/30 transition shrink-0"
            >
              <span>View All 850+ Reviews on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Sub-ratings */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-800 text-center">
            <div>
              <div className="text-xs text-slate-400">Location Score</div>
              <div className="text-lg font-bold text-amber-400">4.5 ★</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Restaurant & Food</div>
              <div className="text-lg font-bold text-amber-400">4.3 ★</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Staff Behavior</div>
              <div className="text-lg font-bold text-amber-400">4.2 ★</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Room Hygiene</div>
              <div className="text-lg font-bold text-amber-400">4.1 ★</div>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 hover:border-amber-500/30 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{review.date}</span>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <div>
                  <div className="font-bold text-white text-sm">{review.author}</div>
                  <div className="text-xs text-amber-400">{review.role}</div>
                </div>

                <div className="flex items-center gap-1 text-emerald-400 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Guest</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
