import React, { useState, useEffect } from 'react';
import { ROOMS, HOTEL_INFO } from '../data/hotelData';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  BedDouble, 
  CheckCircle, 
  X, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Sparkles,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const BookingModal = ({ isOpen, onClose, initialData, onAddBooking }) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date();
  dayAfter.setDate(dayAfter.getDate() + 2);

  const [roomId, setRoomId] = useState(ROOMS[0].id);
  const [checkIn, setCheckIn] = useState(tomorrow.toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState(dayAfter.toISOString().split('T')[0]);
  const [guests, setGuests] = useState('2 Adults');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [needGstInvoice, setNeedGstInvoice] = useState(false);
  const [stationPickup, setStationPickup] = useState(false);

  const [submittedBooking, setSubmittedBooking] = useState(null);

  // Sync initialData if passed (from hero or room card)
  useEffect(() => {
    if (initialData) {
      if (initialData.roomId) setRoomId(initialData.roomId);
      if (initialData.checkIn) setCheckIn(initialData.checkIn);
      if (initialData.checkOut) setCheckOut(initialData.checkOut);
      if (initialData.guests) setGuests(initialData.guests);
    }
  }, [initialData]);

  if (!isOpen) return null;

  const selectedRoom = ROOMS.find(r => r.id === roomId) || ROOMS[0];

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = checkOutDate.getTime() - checkInDate.getTime();
  const calculatedNights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  // Pricing calculation
  const subtotal = selectedRoom.price * calculatedNights;
  const gst = Math.round(subtotal * 0.12);
  const directDiscount = Math.round(subtotal * 0.05); // 5% direct discount
  const grandTotal = subtotal + gst - directDiscount;

  const handleSubmit = (e) => {
    e.preventDefault();

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newBookingId = `SRI-2026-${randomSuffix}`;

    const requestsList = [];
    if (stationPickup) requestsList.push('Station Pickup Requested');
    if (needGstInvoice) requestsList.push('Corporate GST Invoice Required');
    if (specialRequest.trim()) requestsList.push(specialRequest.trim());

    const newBooking = {
      id: newBookingId,
      customerName: customerName.trim(),
      phone: phone.trim(),
      email: email.trim() || 'Not Provided',
      city: city.trim() || 'Sonbhadra / Visiting',
      roomType: selectedRoom.name,
      roomId: selectedRoom.id,
      checkIn,
      checkOut,
      nights: calculatedNights,
      guests,
      totalAmount: grandTotal,
      status: 'Pending',
      specialRequest: requestsList.length > 0 ? requestsList.join(' | ') : 'None',
      bookedAt: new Date().toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' })
    };

    // Save to App state and localStorage
    onAddBooking(newBooking);
    setSubmittedBooking(newBooking);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleCloseModal = () => {
    setSubmittedBooking(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto [perspective:1200px]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.92, y: 30, rotateX: 6 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel w-full max-w-2xl rounded-3xl overflow-hidden border border-amber-500/40 shadow-2xl my-6 flex flex-col max-h-[92vh] [transform-style:preserve-3d]"
      >
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-slate-900/95 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <BedDouble className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                {submittedBooking ? 'Booking Request Submitted!' : 'Reserve Your Stay'}
              </h3>
              <p className="text-xs text-amber-400">
                Hotel Shri Ram International • Auri More, Anpara
              </p>
            </div>
          </div>

          <button
            onClick={handleCloseModal}
            className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {submittedBooking ? (
            /* SUCCESS CONFIRMATION SCREEN */
            <div className="text-center py-4 space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Request Received
                </span>
                <h4 className="font-serif text-2xl font-bold text-white mt-1">
                  Thank You, {submittedBooking.customerName}!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
                  Your booking inquiry has been recorded in the Hotel Shri Ram International Admin Dashboard. Our reservation manager will review and confirm availability.
                </p>
              </div>

              {/* Booking Reference Card */}
              <div className="glass-card p-5 rounded-2xl border border-amber-500/30 text-left max-w-md mx-auto space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs text-slate-400">Booking Reference ID:</span>
                  <span className="font-mono text-sm font-bold text-amber-400">{submittedBooking.id}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Room Type:</span>
                  <span className="font-semibold text-white">{submittedBooking.roomType}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Dates:</span>
                  <span className="font-semibold text-white">
                    {submittedBooking.checkIn} to {submittedBooking.checkOut} ({submittedBooking.nights} {submittedBooking.nights === 1 ? 'Night' : 'Nights'})
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Guests:</span>
                  <span className="font-semibold text-white">{submittedBooking.guests}</span>
                </div>
                <div className="flex items-center justify-between border-t border-slate-800 pt-2">
                  <span className="text-xs text-slate-400">Estimated Total:</span>
                  <span className="font-serif text-base font-bold text-amber-400">₹{submittedBooking.totalAmount}</span>
                </div>
              </div>

              {/* Direct Actions: WhatsApp & Call */}
              <div className="space-y-3 max-w-md mx-auto pt-2">
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Hotel Shri Ram International,\n\nI have submitted a booking inquiry on your website.\n\nBooking ID: ${submittedBooking.id}\nGuest Name: ${submittedBooking.customerName}\nPhone: ${submittedBooking.phone}\nRoom: ${submittedBooking.roomType}\nDates: ${submittedBooking.checkIn} to ${submittedBooking.checkOut} (${submittedBooking.nights} nights)\nEstimated Amount: ₹${submittedBooking.totalAmount}\nRequests: ${submittedBooking.specialRequest}\n\nPlease confirm availability!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Request to Hotel on WhatsApp</span>
                </a>

                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-semibold text-xs sm:text-sm border border-amber-500/30 transition cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Hotel Front Desk ({HOTEL_INFO.phone})</span>
                </a>

                <button
                  onClick={handleCloseModal}
                  className="w-full py-2.5 text-xs text-slate-400 hover:text-white transition cursor-pointer"
                >
                  Close & Return to Website
                </button>
              </div>
            </div>
          ) : (
            /* BOOKING FORM */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Room Selection */}
              <div>
                <label className="block text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1.5">
                  Select Room Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ROOMS.map((room) => (
                    <button
                      type="button"
                      key={room.id}
                      onClick={() => setRoomId(room.id)}
                      className={`p-3 rounded-xl text-left border transition cursor-pointer flex items-center justify-between ${
                        roomId === room.id
                          ? 'bg-amber-500/15 border-amber-400 text-white shadow-md'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-white">{room.name}</div>
                        <div className="text-[11px] text-slate-400">{room.bed}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold font-serif text-amber-400">₹{room.price}</div>
                        <div className="text-[10px] text-slate-400">/night</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dates & Guests Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700/80">
                  <label className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                    <Calendar className="w-3 h-3" /> Check-In
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-transparent text-white text-xs font-medium focus:outline-none cursor-pointer"
                    required
                  />
                </div>

                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700/80">
                  <label className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                    <Calendar className="w-3 h-3" /> Check-Out
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-transparent text-white text-xs font-medium focus:outline-none cursor-pointer"
                    required
                  />
                </div>

                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700/80">
                  <label className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                    <Users className="w-3 h-3" /> Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-slate-900 text-white text-xs font-medium focus:outline-none cursor-pointer"
                  >
                    <option value="1 Adult">1 Adult</option>
                    <option value="2 Adults">2 Adults</option>
                    <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                    <option value="3 Adults">3 Adults</option>
                    <option value="4 Adults (Family)">4 Adults (Family)</option>
                  </select>
                </div>
              </div>

              {/* Customer Contact Details */}
              <div className="space-y-3 pt-1">
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  Guest Contact Details
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full p-3.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-[16px] sm:text-xs placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Mobile Number (e.g. 9839XXXXXX) *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-[16px] sm:text-xs placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email Address (Optional)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-[16px] sm:text-xs placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="City / Company Name (Optional)"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full p-3.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-[16px] sm:text-xs placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Checkbox Options */}
                <div className="flex flex-wrap gap-4 pt-1">
                  <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={stationPickup}
                      onChange={(e) => setStationPickup(e.target.checked)}
                      className="rounded accent-amber-500"
                    />
                    <span>Pickup assistance from Anpara Railway Station</span>
                  </label>

                  <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={needGstInvoice}
                      onChange={(e) => setNeedGstInvoice(e.target.checked)}
                      className="rounded accent-amber-500"
                    />
                    <span>Need GST Corporate Tax Invoice</span>
                  </label>
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Any special requests? (e.g., quiet room, early arrival, extra towel)"
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-xs placeholder:text-slate-500 focus:border-amber-400 focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Price Estimation Card */}
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-amber-500/20 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Room Tariff ({calculatedNights} {calculatedNights === 1 ? 'night' : 'nights'} × ₹{selectedRoom.price}):</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Taxes & Service GST (12%):</span>
                  <span>+₹{gst}</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Direct Website Booking Discount (5%):</span>
                  <span>-₹{directDiscount}</span>
                </div>
                <div className="border-t border-slate-800 pt-2 flex justify-between items-center text-sm font-bold text-white">
                  <span>Estimated Total Amount:</span>
                  <span className="font-serif text-lg text-amber-400">₹{grandTotal}</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  * Payment can be made at check-in (Cash, UPI, Credit Card, or Corporate Account).
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/30 hover:scale-[1.01] active:scale-[0.99] transition cursor-pointer"
              >
                Submit Booking Request
              </button>
            </form>
          )}
        </div>

      </motion.div>
    </div>
  );
};
