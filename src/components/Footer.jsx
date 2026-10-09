import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  ShieldCheck, 
  Navigation, 
  Heart, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export const Footer = ({ onOpenAdmin, onOpenBooking }) => {
  return (
    <footer className="bg-[#05080f] text-slate-400 pt-16 pb-28 md:pb-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Property Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center text-slate-950 font-serif font-black text-lg shadow-md shadow-amber-500/20 border border-amber-300">
                SRI
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white">
                  Hotel Shri Ram International
                </h3>
                <p className="text-[11px] text-amber-400 font-sans tracking-wider uppercase">
                  {HOTEL_INFO.hindiName}
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              Anpara’s premier hotel destination since 2012. Offering premium AC rooms, fine multi-cuisine dining, restro-bar, and royal banquet facilities in the heart of Sonbhadra’s energy corridor.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-white">3.9 / 5 Rating</span>
              <span className="text-slate-400">(850+ Google Reviews)</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-amber-400 transition">About The Property</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-amber-400 transition">Rooms & Suites Tariff</a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-amber-400 transition">Amenities & Facilities</a>
              </li>
              <li>
                <a href="#dining" className="hover:text-amber-400 transition">Multi-Cuisine Restaurant & Bar</a>
              </li>
              <li>
                <a href="#banquet" className="hover:text-amber-400 transition">Banquet & Wedding Hall</a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition">Location & Proximities</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-amber-400 transition">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-white transition">
                  {HOTEL_INFO.phone} / {HOTEL_INFO.altPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-white transition">
                  {HOTEL_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Corporate & Reservations */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Reservations & Billing
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Serving executives and contractors from NTPC Vindhyachal, Singrauli Super Thermal, Renusagar Hindalco, and UPRVUNL Anpara. Official GST invoicing provided.
            </p>

            <div className="space-y-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition cursor-pointer"
              >
                Instant Online Booking Request
              </button>

              <button
                onClick={onOpenAdmin}
                className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 text-xs font-semibold border border-amber-500/30 transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Hotel Staff / Admin Portal</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Hotel Shri Ram International, Anpara. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Auri More, Anpara, Sonbhadra, UP 231225</span>
            <span>•</span>
            <span className="text-slate-400">Luxury Hospitality</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
