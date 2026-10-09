import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  CheckCircle, 
  Clock, 
  XCircle, 
  AlertCircle, 
  Download, 
  Plus, 
  Trash2, 
  MessageSquare, 
  ExternalLink, 
  X, 
  Lock, 
  Eye, 
  DollarSign, 
  BedDouble, 
  Building,
  RotateCcw
} from 'lucide-react';
import { ROOMS, HOTEL_INFO } from '../data/hotelData';

export const AdminDashboard = ({ 
  isOpen, 
  onClose, 
  bookings, 
  onUpdateStatus, 
  onDeleteBooking, 
  onAddManualBooking, 
  onResetBookings 
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Default true for seamless review, with PIN switch
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);

  const [activeTab, setActiveTab] = useState('bookings'); // 'bookings' | 'rooms' | 'new-booking'
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBookingDetails, setSelectedBookingDetails] = useState(null);

  // New manual booking form state
  const [manualName, setManualName] = useState('');
  const [manualPhone, setManualPhone] = useState('');
  const [manualRoomId, setManualRoomId] = useState(ROOMS[0].id);
  const [manualCheckIn, setManualCheckIn] = useState(new Date().toISOString().split('T')[0]);
  const [manualCheckOut, setManualCheckOut] = useState(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [manualGuests, setManualGuests] = useState('2 Adults');
  const [manualSpecialReq, setManualSpecialReq] = useState('');

  if (!isOpen) return null;

  // Verify PIN
  const handleVerifyPin = (e) => {
    e.preventDefault();
    if (pinInput === '1234' || pinInput.toLowerCase() === 'admin') {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  // KPIs
  const totalBookingsCount = bookings.length;
  const pendingCount = bookings.filter(b => b.status === 'Pending').length;
  const confirmedCount = bookings.filter(b => b.status === 'Confirmed').length;
  const checkedInCount = bookings.filter(b => b.status === 'Checked-In').length;
  const totalRevenue = bookings
    .filter(b => b.status !== 'Cancelled')
    .reduce((acc, curr) => acc + (curr.totalAmount || 0), 0);

  // Filter & Search logic
  const filteredBookings = bookings.filter(b => {
    const matchesStatus = statusFilter === 'All' || b.status === statusFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery = 
      !q ||
      b.id.toLowerCase().includes(q) ||
      b.customerName.toLowerCase().includes(q) ||
      b.phone.toLowerCase().includes(q) ||
      b.roomType.toLowerCase().includes(q);
    return matchesStatus && matchesQuery;
  });

  // Handle Manual Booking Submit
  const handleCreateManualBooking = (e) => {
    e.preventDefault();
    const selRoom = ROOMS.find(r => r.id === manualRoomId) || ROOMS[0];

    const cIn = new Date(manualCheckIn);
    const cOut = new Date(manualCheckOut);
    const diff = Math.max(1, Math.ceil((cOut - cIn) / (1000 * 60 * 60 * 24)));
    const amount = Math.round(selRoom.price * diff * 1.07);

    const newBooking = {
      id: `SRI-WALK-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: manualName.trim(),
      phone: manualPhone.trim(),
      email: 'walkin@hotelshriramintl.com',
      city: 'Front Desk Walk-In',
      roomType: selRoom.name,
      roomId: selRoom.id,
      checkIn: manualCheckIn,
      checkOut: manualCheckOut,
      nights: diff,
      guests: manualGuests,
      totalAmount: amount,
      status: 'Confirmed',
      specialRequest: manualSpecialReq.trim() || 'Manual reservation recorded by staff',
      bookedAt: new Date().toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' })
    };

    onAddManualBooking(newBooking);
    setActiveTab('bookings');
    // reset form
    setManualName('');
    setManualPhone('');
    setManualSpecialReq('');
  };

  // Export to CSV
  const handleExportCSV = () => {
    const headers = ['Booking ID,Customer Name,Phone,Email,Room Type,Check In,Check Out,Nights,Guests,Total Amount,Status,Booked At,Notes'];
    const rows = bookings.map(b => 
      `"${b.id}","${b.customerName}","${b.phone}","${b.email}","${b.roomType}","${b.checkIn}","${b.checkOut}",${b.nights},"${b.guests}",${b.totalAmount},"${b.status}","${b.bookedAt}","${(b.specialRequest || '').replace(/"/g, '""')}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `hotel_shriram_bookings_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'Pending':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30 animate-pulse';
      case 'Checked-In':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Completed':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Cancelled':
        return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
      default:
        return 'bg-slate-700 text-slate-300';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-hidden">
      <div className="glass-panel w-full max-w-6xl rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl flex flex-col h-[94vh] bg-[#0c1220]">
        
        {/* Top Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-amber-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg sm:text-2xl font-bold text-white">
                  Hotel Staff & Reservation Management
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                  LIVE PORTAL
                </span>
              </div>
              <p className="text-xs text-amber-400">
                Hotel Shri Ram International • Auri More, Anpara, Sonbhadra
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleExportCSV}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition cursor-pointer"
              title="Download Bookings as CSV spreadsheet"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>

            <button
              onClick={onResetBookings}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition cursor-pointer"
              title="Reset sample test bookings"
            >
              <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Reset Demo</span>
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 cursor-pointer"
              aria-label="Close Admin Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Admin Navigation Tabs & KPIs */}
        <div className="bg-slate-950/60 p-4 border-b border-slate-800/80 shrink-0">
          {/* KPI Cards Row */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-4">
            <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
              <div className="text-[10px] uppercase font-bold text-slate-400">Total Bookings</div>
              <div className="text-xl font-bold font-serif text-white">{totalBookingsCount}</div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-2xl border border-amber-500/30">
              <div className="text-[10px] uppercase font-bold text-amber-400 flex items-center gap-1">
                <span>Pending Requests</span>
                {pendingCount > 0 && <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>}
              </div>
              <div className="text-xl font-bold font-serif text-amber-400">{pendingCount}</div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
              <div className="text-[10px] uppercase font-bold text-emerald-400">Confirmed</div>
              <div className="text-xl font-bold font-serif text-emerald-400">{confirmedCount}</div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
              <div className="text-[10px] uppercase font-bold text-blue-400">Checked-In</div>
              <div className="text-xl font-bold font-serif text-blue-400">{checkedInCount}</div>
            </div>

            <div className="col-span-2 sm:col-span-1 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
              <div className="text-[10px] uppercase font-bold text-slate-400">Est. Revenue</div>
              <div className="text-xl font-bold font-serif text-amber-300">₹{totalRevenue.toLocaleString()}</div>
            </div>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('bookings')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeTab === 'bookings'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 text-slate-300 hover:text-white'
                }`}
              >
                Customer Bookings ({bookings.length})
              </button>

              <button
                onClick={() => setActiveTab('new-booking')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'new-booking'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 text-slate-300 hover:text-white'
                }`}
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New Walk-in / Phone Reservation</span>
              </button>

              <button
                onClick={() => setActiveTab('rooms')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeTab === 'rooms'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 text-slate-300 hover:text-white'
                }`}
              >
                Room Rates & Inventory
              </button>
            </div>

            {/* Live Filter / Search if on Bookings tab */}
            {activeTab === 'bookings' && (
              <div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                <div className="relative flex-1 sm:w-48">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search guest or ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-slate-900 border border-slate-700 text-xs text-white rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  <option value="All">All Statuses</option>
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Checked-In">Checked-In</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {activeTab === 'bookings' && (
            <div>
              {filteredBookings.length === 0 ? (
                <div className="text-center py-16 text-slate-400">
                  <AlertCircle className="w-12 h-12 mx-auto mb-3 text-slate-600" />
                  <p className="text-base font-semibold text-slate-300">No bookings found</p>
                  <p className="text-xs text-slate-500 mt-1">Try clearing your search query or filter</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4"
                    >
                      {/* Left: Info & Guest */}
                      <div className="space-y-1 min-w-[280px]">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-amber-400">
                            {booking.id}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getStatusBadge(booking.status)}`}>
                            {booking.status}
                          </span>
                          <span className="text-[10px] text-slate-500">{booking.bookedAt}</span>
                        </div>

                        <div className="font-bold text-white text-base">
                          {booking.customerName}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3 text-amber-400" />
                            <a href={`tel:${booking.phone}`} className="hover:text-amber-400">
                              {booking.phone}
                            </a>
                          </span>
                          <span>•</span>
                          <span className="text-slate-400">{booking.email}</span>
                        </div>
                      </div>

                      {/* Center: Stay details */}
                      <div className="space-y-1 text-xs text-slate-300">
                        <div className="font-semibold text-white flex items-center gap-1.5">
                          <BedDouble className="w-3.5 h-3.5 text-amber-400" />
                          <span>{booking.roomType}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <Calendar className="w-3 h-3" />
                          <span>{booking.checkIn} → {booking.checkOut} ({booking.nights}N)</span>
                          <span>•</span>
                          <span>{booking.guests}</span>
                        </div>
                        {booking.specialRequest && booking.specialRequest !== 'None' && (
                          <div className="text-[11px] text-amber-300/90 italic line-clamp-1 max-w-sm">
                            Note: {booking.specialRequest}
                          </div>
                        )}
                      </div>

                      {/* Right: Amount & Status Management Actions */}
                      <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-between lg:justify-end pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-800">
                        <div className="text-left lg:text-right mr-3">
                          <div className="text-[10px] text-slate-400 uppercase">Total Bill</div>
                          <div className="font-serif text-base font-bold text-amber-400">
                            ₹{booking.totalAmount}
                          </div>
                        </div>

                        {/* Status Change Selector */}
                        <select
                          value={booking.status}
                          onChange={(e) => onUpdateStatus(booking.id, e.target.value)}
                          className="bg-slate-900 border border-slate-700 text-xs text-white rounded-xl px-2 py-1.5 focus:border-amber-400 cursor-pointer"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirm</option>
                          <option value="Checked-In">Check-In</option>
                          <option value="Completed">Complete</option>
                          <option value="Cancelled">Cancel</option>
                        </select>

                        {/* WhatsApp Guest */}
                        <a
                          href={`https://wa.me/${booking.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                            `Hello ${booking.customerName}, Greetings from Hotel Shri Ram International, Anpara! Regarding your booking #${booking.id} for ${booking.roomType} (${booking.checkIn} to ${booking.checkOut}). Your booking is ${booking.status}. How may we assist your arrival?`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 transition cursor-pointer"
                          title="Message Customer on WhatsApp"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                        </a>

                        {/* View Full Details Modal */}
                        <button
                          onClick={() => setSelectedBookingDetails(booking)}
                          className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition cursor-pointer"
                          title="View Complete Guest Request"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>

                        {/* Delete Booking */}
                        <button
                          onClick={() => onDeleteBooking(booking.id)}
                          className="p-2 rounded-xl bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 border border-rose-500/30 transition cursor-pointer"
                          title="Remove Booking Record"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tab 2: New Manual Walk-in / Phone Reservation */}
          {activeTab === 'new-booking' && (
            <div className="max-w-xl mx-auto py-4">
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800">
                <h4 className="font-serif text-xl font-bold text-white mb-2">
                  Create Walk-in / Phone Reservation
                </h4>
                <p className="text-xs text-slate-400 mb-6">
                  Log an immediate offline booking made via phone call or direct walk-in front desk.
                </p>

                <form onSubmit={handleCreateManualBooking} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Guest Full Name *</label>
                      <input
                        type="text"
                        required
                        value={manualName}
                        onChange={(e) => setManualName(e.target.value)}
                        placeholder="e.g. Ramesh Chandra"
                        className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={manualPhone}
                        onChange={(e) => setManualPhone(e.target.value)}
                        placeholder="+91 98XXXXXXXX"
                        className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Room Category</label>
                    <select
                      value={manualRoomId}
                      onChange={(e) => setManualRoomId(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                    >
                      {ROOMS.map(r => (
                        <option key={r.id} value={r.id}>
                          {r.name} (₹{r.price}/night)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Check-In</label>
                      <input
                        type="date"
                        value={manualCheckIn}
                        onChange={(e) => setManualCheckIn(e.target.value)}
                        className="w-full p-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none cursor-pointer"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Check-Out</label>
                      <input
                        type="date"
                        value={manualCheckOut}
                        min={manualCheckIn}
                        onChange={(e) => setManualCheckOut(e.target.value)}
                        className="w-full p-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none cursor-pointer"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Guests</label>
                      <select
                        value={manualGuests}
                        onChange={(e) => setManualGuests(e.target.value)}
                        className="w-full p-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none cursor-pointer"
                      >
                        <option value="1 Adult">1 Adult</option>
                        <option value="2 Adults">2 Adults</option>
                        <option value="3 Adults">3 Adults</option>
                        <option value="4 Adults">4 Adults</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Internal Reception Notes</label>
                    <textarea
                      rows={2}
                      value={manualSpecialReq}
                      onChange={(e) => setManualSpecialReq(e.target.value)}
                      placeholder="e.g. Paid in cash at counter, NTPC executive visit."
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:bg-amber-400 transition cursor-pointer"
                  >
                    Confirm & Save Reservation
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Tab 3: Room Rates & Inventory */}
          {activeTab === 'rooms' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-400 mb-2">
                Live Room Inventory Status for Hotel Shri Ram International (Total 40 Rooms)
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ROOMS.map(room => (
                  <div
                    key={room.id}
                    className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <img src={room.image} alt={room.name} className="w-16 h-16 rounded-xl object-cover" />
                      <div>
                        <div className="text-sm font-bold text-white">{room.name}</div>
                        <div className="text-xs text-amber-400 font-serif font-bold">₹{room.price} / night</div>
                        <div className="text-[11px] text-slate-400">{room.size} • {room.capacity}</div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
                        Operational
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Selected Booking Full Details Modal */}
        {selectedBookingDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="glass-panel w-full max-w-lg rounded-3xl border border-amber-500/30 p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <span className="font-mono text-xs text-amber-400 font-bold">{selectedBookingDetails.id}</span>
                  <h4 className="font-serif text-xl font-bold text-white">{selectedBookingDetails.customerName}</h4>
                </div>
                <button
                  onClick={() => setSelectedBookingDetails(null)}
                  className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Phone:</span>
                  <span className="text-white font-bold">{selectedBookingDetails.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Email:</span>
                  <span className="text-white">{selectedBookingDetails.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">City / Org:</span>
                  <span className="text-white">{selectedBookingDetails.city || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Room Category:</span>
                  <span className="text-amber-400 font-bold">{selectedBookingDetails.roomType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Check-In / Out:</span>
                  <span className="text-white font-bold">{selectedBookingDetails.checkIn} to {selectedBookingDetails.checkOut} ({selectedBookingDetails.nights} Nights)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Guests:</span>
                  <span className="text-white">{selectedBookingDetails.guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Special Notes:</span>
                  <span className="text-amber-300 font-medium">{selectedBookingDetails.specialRequest || 'None'}</span>
                </div>
                <div className="flex justify-between border-t border-slate-800 pt-2 text-sm font-bold">
                  <span className="text-slate-300">Total Billed:</span>
                  <span className="font-serif text-amber-400 text-base">₹{selectedBookingDetails.totalAmount}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`tel:${selectedBookingDetails.phone}`}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 text-center text-amber-400 text-xs font-bold border border-amber-500/30 hover:bg-slate-700 transition"
                >
                  Call Guest
                </a>
                <a
                  href={`https://wa.me/${selectedBookingDetails.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    `Hello ${selectedBookingDetails.customerName}, this is regarding your reservation #${selectedBookingDetails.id} at Hotel Shri Ram International Anpara.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-emerald-600 text-center text-white text-xs font-bold hover:bg-emerald-500 transition"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
