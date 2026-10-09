import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { RoomsSection } from './components/RoomsSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { DiningSection } from './components/DiningSection';
import { BanquetSection } from './components/BanquetSection';
import { LocationSection } from './components/LocationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { AdminDashboard } from './components/AdminDashboard';
import { FloatingActions } from './components/FloatingActions';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { INITIAL_BOOKINGS } from './data/hotelData';

export function App() {
  // Load bookings from localStorage or fallback to INITIAL_BOOKINGS
  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('sri_hotel_bookings');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return INITIAL_BOOKINGS;
  });

  // Persist bookings to localStorage whenever changed
  useEffect(() => {
    try {
      localStorage.setItem('sri_hotel_bookings', JSON.stringify(bookings));
    } catch {
      // ignore
    }
  }, [bookings]);

  // Modal visibility states
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Count pending bookings for staff notification badge
  const pendingCount = bookings.filter((b) => b.status === 'Pending').length;

  // Add new customer booking
  const handleAddBooking = (newBooking) => {
    setBookings((prev) => [newBooking, ...prev]);
  };

  // Admin status update
  const handleUpdateStatus = (bookingId, newStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: newStatus } : b))
    );
  };

  // Admin delete booking
  const handleDeleteBooking = (bookingId) => {
    if (window.confirm(`Are you sure you want to remove booking #${bookingId}?`)) {
      setBookings((prev) => prev.filter((b) => b.id !== bookingId));
    }
  };

  // Reset to initial demo bookings
  const handleResetBookings = () => {
    if (window.confirm('Reset all reservations to default sample bookings?')) {
      setBookings(INITIAL_BOOKINGS);
    }
  };

  // Open booking modal with specific room
  const handleSelectRoomForBooking = (roomId) => {
    setBookingInitialData({ roomId });
    setIsBookingModalOpen(true);
  };

  // Open booking modal with quick-bar dates & room
  const handleOpenBookingWithDetails = (details) => {
    setBookingInitialData(details);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b101c] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* 3D Golden Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Navigation Header */}
      <Navbar
        onOpenBooking={() => {
          setBookingInitialData(null);
          setIsBookingModalOpen(true);
        }}
        onOpenAdmin={() => setIsAdminOpen(true)}
        pendingCount={pendingCount}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenBookingWithDetails={handleOpenBookingWithDetails} />
        <AboutSection />
        <RoomsSection onSelectRoomForBooking={handleSelectRoomForBooking} />
        <AmenitiesSection />
        <DiningSection onOpenBooking={() => setIsBookingModalOpen(true)} />
        <BanquetSection onOpenBooking={() => setIsBookingModalOpen(true)} />
        <LocationSection />
        <ReviewsSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenBooking={() => {
          setBookingInitialData(null);
          setIsBookingModalOpen(true);
        }}
      />

      {/* Desktop Floating Action Buttons */}
      <FloatingActions onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Mobile Sticky Thumb Navigation Dock */}
      <MobileBottomNav
        onOpenBooking={() => {
          setBookingInitialData(null);
          setIsBookingModalOpen(true);
        }}
        onOpenAdmin={() => setIsAdminOpen(true)}
        pendingCount={pendingCount}
      />

      {/* Interactive Customer Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialData={bookingInitialData}
        onAddBooking={handleAddBooking}
      />

      {/* Full-featured Hotel Admin Portal */}
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        bookings={bookings}
        onUpdateStatus={handleUpdateStatus}
        onDeleteBooking={handleDeleteBooking}
        onAddManualBooking={handleAddBooking}
        onResetBookings={handleResetBookings}
      />
    </div>
  );
}

export default App;
