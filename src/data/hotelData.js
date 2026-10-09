// Hotel Shri Ram International - Official Data & Configuration
// Location: Auri More, Near Police Station, Anpara, Sonbhadra, UP - 231225
// Coordinates: 24.2076875, 82.7676875

export const HOTEL_INFO = {
  name: "Hotel Shri Ram International",
  hindiName: "होटल श्री राम इंटरनेशनल",
  tagline: "Premier Luxury & Hospitality in Anpara, Sonbhadra",
  subTagline: "The premier destination for corporate executives, plant professionals, and family celebrations in Sonbhadra's energy corridor.",
  address: "Auri More, Near Police Station, National Highway 75, Anpara, District Sonbhadra, Uttar Pradesh – 231225",
  phone: "+91 95986 14567",
  altPhone: "+91 73173 24963",
  whatsappNumber: "919598614567",
  email: "reservations@hotelshriramintl.com",
  googleMapsUrl: "https://www.google.com/maps/place/Hotel+Shri+Ram+International/@24.1981993,82.7670737,3230m/data=!3m1!1e3!4m10!3m9!1s0x398f2502d5d2a7e7:0xaf4fff11643c43e!5m3!1s2026-10-28!4m1!1i2!8m2!3d24.2076875!4d82.7676875!16s%2Fg%2F1hf124pdk",
  embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.2917724393695!2d82.7651126!3d24.2076875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398f2502d5d2a7e7%3A0xaf4fff11643c43e!2sHotel%20Shri%20Ram%20International!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  rating: 3.9,
  reviewCount: 850,
  checkInTime: "11:00 AM",
  checkOutTime: "11:30 AM",
  totalRooms: 40,
  established: "2012"
};

export const ROOMS = [
  {
    id: "deluxe-exec",
    name: "Executive Deluxe Room",
    category: "Deluxe",
    tag: "Most Popular",
    price: 1899,
    originalPrice: 2499,
    capacity: "2 Adults + 1 Child",
    bed: "1 King Bed / Twin Bed",
    size: "260 sq. ft.",
    view: "City / Highway View",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "Silent Split Air Conditioning",
      "Complimentary High-Speed Wi-Fi",
      "32\" LED TV with Cable Channels",
      "Attached Western Bathroom with 24/7 Hot Water",
      "Executive Work Desk & Ergonomic Chair",
      "Tea & Coffee Maker with Supplies",
      "24/7 In-Room Dining Service"
    ]
  },
  {
    id: "super-deluxe",
    name: "Super Deluxe AC Room",
    category: "Super Deluxe",
    tag: "Business Choice",
    price: 2499,
    originalPrice: 3299,
    capacity: "2 Adults + 2 Children",
    bed: "Luxury King Size Bed",
    size: "340 sq. ft.",
    view: "Panoramic View",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "Spacious Ambient Room with Cozy Sofa Lounge",
      "Complimentary Buffet Breakfast",
      "43\" Smart Full HD Television",
      "Mini Refrigerator & Mineral Water",
      "Premium Bathroom Toiletries & Rain Shower",
      "Electronic Safe for Valuables",
      "Express Daily Laundry Service"
    ]
  },
  {
    id: "royal-suite",
    name: "Royal Heritage Suite",
    category: "Suite",
    tag: "Luxury Stay",
    price: 3799,
    originalPrice: 4999,
    capacity: "3 Adults + 1 Child",
    bed: "Royal Grand King Bed + Daybed",
    size: "480 sq. ft.",
    view: "Corner Suite View",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "Separate Living Lounge with Designer Plush Sofas",
      "Dedicated 24/7 Butler & Priority Room Service",
      "55\" Smart 4K Ultra HD TV with Netflix & OTT",
      "Modern Bathroom with Bathtub & Premium Fixtures",
      "Welcome Drink & Fresh Fruit Basket on Arrival",
      "Complimentary Station Pickup / Drop Facility",
      "High-speed 100 Mbps Dedicated Wi-Fi"
    ]
  },
  {
    id: "presidential-suite",
    name: "Presidential Family Suite",
    category: "Family Suite",
    tag: "VIP Suite",
    price: 4999,
    originalPrice: 6499,
    capacity: "4 Adults + 2 Children",
    bed: "2 King Beds (2 Master Bedrooms)",
    size: "650 sq. ft.",
    view: "Master City Panoramic",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=900&q=80"
    ],
    features: [
      "Interconnected Double Bedroom Luxury Suite",
      "Private Dining Table for Family & Business Meals",
      "2 Luxury Attached Bathrooms with Hot Tub / Shower",
      "Complimentary Breakfast for 4 Guests",
      "VIP Concierge & Car Rental Assistance",
      "Unlimited Mineral Water & Beverages",
      "Late Check-out Privilege (Subject to availability)"
    ]
  }
];

export const AMENITIES = [
  {
    icon: "Utensils",
    title: "Multi-Cuisine Restaurant",
    desc: "Authentic North Indian, Mughlai, Tandoori, Chinese delicacies & traditional Thalis served daily."
  },
  {
    icon: "Wine",
    title: "Well-Stocked Bar & Lounge",
    desc: "Unwind after a long day of meetings or exploration with refreshing beverages and appetizers."
  },
  {
    icon: "Building2",
    title: "Grand Banquet & Conferences",
    desc: "Modern conference and banquet hall accommodating up to 350+ guests for corporate meetings, weddings, and parties."
  },
  {
    icon: "Wifi",
    title: "High-Speed Wi-Fi",
    desc: "Seamless connectivity throughout the property for your work and entertainment needs."
  },
  {
    icon: "Zap",
    title: "24/7 Power Backup & Lift",
    desc: "Uninterrupted 100% generator power backup and modern passenger elevator for complete comfort."
  },
  {
    icon: "Car",
    title: "Secure Valet Parking",
    desc: "Ample, dedicated on-site parking with 24/7 CCTV surveillance and valet assistance."
  },
  {
    icon: "Clock",
    title: "24/7 Room Service & Reception",
    desc: "Attentive front desk and round-the-clock room dining service ready to assist you anytime."
  },
  {
    icon: "Train",
    title: "Station & Airport Travel Desk",
    desc: "Just 1 km from Anpara Railway Station with easy cab bookings and industrial plant transit assist."
  }
];

export const MENU_HIGHLIGHTS = [
  {
    category: "Tandoori & Starters",
    items: [
      { name: "Paneer Tikka Achari", price: "₹240", desc: "Charcoal-grilled cottage cheese marinated in fragrant pickling spices." },
      { name: "Murgh Malai Tikka", price: "₹320", desc: "Tender boneless chicken steeped in rich cream, cashew paste and royal herbs." },
      { name: "Crispy Corn & Chilly", price: "₹190", desc: "Golden sweet corn kernels tossed with peppers and scallions." },
      { name: "Chicken Lollipop (6 Pcs)", price: "₹280", desc: "Crispy spiced chicken wings served with fiery Schezwan dip." }
    ]
  },
  {
    category: "Main Course Specialties",
    items: [
      { name: "Paneer Butter Masala", price: "₹260", desc: "Soft cottage cheese simmered in a velvety tomato, butter and cashew gravy." },
      { name: "Dal Makhani Shriram Special", price: "₹220", desc: "Slow-cooked black lentils overnight with churned butter and fresh cream." },
      { name: "Murgh Handi Lazeez", price: "₹360", desc: "Traditional home-style chicken curry cooked in an earthen pot." },
      { name: "Mutton Rogan Josh", price: "₹420", desc: "Tender goat meat slow-braised with Kashmiri chillies and aromatic spices." }
    ]
  },
  {
    category: "Royal Thalis & Rice",
    items: [
      { name: "Executive Veg Thali", price: "₹240", desc: "Paneer dish, Dal Tadka, Seasonal Veg, Jeera Rice, 4 Butter Roti, Sweet & Salad." },
      { name: "Special Shriram Non-Veg Thali", price: "₹340", desc: "Chicken Curry / Mutton Curry, Dal, Rice, 4 Butter Naan/Roti, Raita, Gulab Jamun." },
      { name: "Hyderabadi Chicken Dum Biryani", price: "₹290", desc: "Fragrant basmati rice layered with marinated chicken, saffron & mint." },
      { name: "Subz Dum Biryani", price: "₹220", desc: "Aromatic basmati rice cooked with fresh farm vegetables and whole spices." }
    ]
  }
];

export const NEARBY_LANDMARKS = [
  {
    name: "Anpara Railway Station",
    distance: "1.0 km",
    driveTime: "3 mins",
    type: "Transit Hub",
    desc: "Quick connectivity to regional rail networks connecting Sonbhadra, Singrauli and Varanasi."
  },
  {
    name: "Renusagar Power Plant (Hindalco)",
    distance: "3.5 km",
    driveTime: "8 mins",
    type: "Industrial Hub",
    desc: "Key captive power facility for Hindalco Industries with daily corporate engineers."
  },
  {
    name: "Anpara Thermal Power Station (UPRVUNL)",
    distance: "4.2 km",
    driveTime: "10 mins",
    type: "Major Landmark",
    desc: "One of the largest coal-fired power stations in Uttar Pradesh, power capital of UP."
  },
  {
    name: "Ananteshwar Mahadev Temple",
    distance: "1.1 km",
    driveTime: "4 mins",
    type: "Spiritual",
    desc: "Peaceful local Shiva temple for spiritual devotion and peaceful morning darshan."
  },
  {
    name: "Govind Ballabh Pant Sagar / Rihand Reservoir",
    distance: "14 km",
    driveTime: "25 mins",
    type: "Tourist Scenic",
    desc: "One of India's largest artificial reservoirs, offering scenic sunset views and water breeze."
  },
  {
    name: "NTPC Vindhyachal & Singrauli Plants",
    distance: "18-22 km",
    driveTime: "30-35 mins",
    type: "Mega Power Cluster",
    desc: "India's largest thermal power generating belt spanning UP and MP border."
  }
];

export const REVIEWS = [
  {
    id: 1,
    author: "Rakesh Kumar Sharma",
    role: "Project Manager, NTPC Vendor",
    rating: 5,
    date: "February 2026",
    text: "Best hotel in Anpara without a doubt! Clean rooms, fast Wi-Fi for evening reports, and the food at the restaurant is delicious and hygienic. The staff was very polite and arranged a cab to the plant promptly."
  },
  {
    id: 2,
    author: "Dr. Alok Verma",
    role: "Family Traveler",
    rating: 5,
    date: "January 2026",
    text: "We stayed here for 2 nights for a family wedding function. The banquet hall arrangements and buffet food were fantastic. Location at Auri More is very convenient with ample parking space."
  },
  {
    id: 3,
    author: "Siddharth Jain",
    role: "Corporate Executive, Hindalco",
    rating: 4,
    date: "December 2025",
    text: "Stayed in the Super Deluxe room. Good air conditioning, 24/7 hot water, and helpful front desk. Definitely the most reliable place to stay in the Anpara-Renusagar belt."
  },
  {
    id: 4,
    author: "Neha & Manish Pandey",
    role: "Weekend Travelers",
    rating: 5,
    date: "November 2025",
    text: "Clean bed linens, courteous room service, and tasty Kadai Paneer with Tandoori Naan. Highly recommended if you are visiting Sonbhadra or Rihand Dam area."
  }
];

export const FAQS = [
  {
    q: "What are the standard Check-in and Check-out timings?",
    a: "Standard Check-in time is 11:00 AM and Check-out time is 11:30 AM. Early check-in or late check-out is subject to room availability upon request."
  },
  {
    q: "How far is the hotel from Anpara Railway Station?",
    a: "Hotel Shri Ram International is located just 1 km (3 minutes drive) from Anpara Railway Station at Auri More. Pickup assistance can be arranged upon request."
  },
  {
    q: "Do you have corporate billing and GST invoice facility?",
    a: "Yes! We provide official GST-compliant tax invoices for corporate clients, power plant contractors, and business executives."
  },
  {
    q: "Is parking available on the hotel premises?",
    a: "Yes, we offer secure on-site parking with 24/7 security and valet assistance free of charge for our registered hotel guests and restaurant visitors."
  },
  {
    q: "Can I host a wedding, reception, or corporate conference here?",
    a: "Absolutely. Our Royal Banquet and Conference Hall can comfortably host up to 350+ guests with customized audio-visual setup and catering packages."
  }
];

// Initial demo bookings for Admin Dashboard
export const INITIAL_BOOKINGS = [
  {
    id: "SRI-2026-9021",
    customerName: "Vikramaditya Singh",
    phone: "+91 98391 24510",
    email: "vikram.singh@ntpcpower.in",
    roomType: "Super Deluxe AC Room",
    roomId: "super-deluxe",
    checkIn: "2026-10-12",
    checkOut: "2026-10-15",
    nights: 3,
    guests: "2 Adults",
    totalAmount: 8397,
    status: "Confirmed",
    specialRequest: "High floor quiet room, early morning cab to Renusagar plant.",
    bookedAt: "2026-10-08 14:30"
  },
  {
    id: "SRI-2026-9022",
    customerName: "Pooja & Amit Tiwari",
    phone: "+91 94520 88123",
    email: "amit.tiwari@gmail.com",
    roomType: "Royal Heritage Suite",
    roomId: "royal-suite",
    checkIn: "2026-10-18",
    checkOut: "2026-10-20",
    nights: 2,
    guests: "2 Adults + 1 Child",
    totalAmount: 8509,
    status: "Pending",
    specialRequest: "Extra bedding for child and vegetarian dinner thali upon arrival.",
    bookedAt: "2026-10-09 11:15"
  },
  {
    id: "SRI-2026-9023",
    customerName: "Rajesh Kumar Srivastava",
    phone: "+91 91254 33908",
    email: "rajesh.sri@bhelservices.com",
    roomType: "Executive Deluxe Room",
    roomId: "deluxe-exec",
    checkIn: "2026-10-10",
    checkOut: "2026-10-11",
    nights: 1,
    guests: "1 Adult",
    totalAmount: 2127,
    status: "Checked-In",
    specialRequest: "GST invoice under BHEL contractor account.",
    bookedAt: "2026-10-09 09:40"
  },
  {
    id: "SRI-2026-9024",
    customerName: "Sunil Agrawal",
    phone: "+91 97931 44552",
    email: "sunil.agrawal@hindalco.adityabirla.com",
    roomType: "Presidential Family Suite",
    roomId: "presidential-suite",
    checkIn: "2026-10-25",
    checkOut: "2026-10-28",
    nights: 3,
    guests: "4 Adults",
    totalAmount: 16797,
    status: "Confirmed",
    specialRequest: "Late check-in at 9 PM after plant inspection.",
    bookedAt: "2026-10-07 18:20"
  }
];
