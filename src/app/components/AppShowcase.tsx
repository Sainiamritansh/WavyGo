import { useState, useEffect, useRef } from "react";
import {
  MapPin, Star, Search, ChevronRight, Bell, Home,
  Map, BookOpen, User, Heart, ArrowLeft, Shield,
  Clock, Zap, CheckCircle, Navigation, Filter,
} from "lucide-react";
import { PLAY_STORE_URL } from "@/constants/links";

/* ─── Shared phone shell ──────────────────────────────── */
function PhoneShell({
  children,
  style,
  className = "",
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={`relative flex-shrink-0 ${className}`}
      style={{
        width: 240,
        height: 490,
        borderRadius: 36,
        background: "#111",
        boxShadow:
          "0 40px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 0 2px #222",
        ...style,
      }}
    >
      {/* Side buttons */}
      <div className="absolute -left-[3px] top-20 w-[3px] h-8 bg-[#333] rounded-l-sm" />
      <div className="absolute -left-[3px] top-32 w-[3px] h-12 bg-[#333] rounded-l-sm" />
      <div className="absolute -right-[3px] top-28 w-[3px] h-14 bg-[#333] rounded-r-sm" />

      {/* Screen bezel */}
      <div
        className="absolute inset-[6px] overflow-hidden"
        style={{ borderRadius: 30, background: "#fff" }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#111] z-50 flex items-center justify-center gap-1.5 rounded-b-2xl">
          <div className="w-1.5 h-1.5 rounded-full bg-[#333]" />
          <div className="w-8 h-1 rounded-full bg-[#222]" />
        </div>
        {/* Status bar */}
        <div className="absolute top-5 left-0 right-0 flex items-center justify-between px-4 z-40">
          <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: "0.6rem", color: "#111" }}>9:41</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5 items-end h-3">
              {[3, 5, 7, 9].map((h, i) => (
                <div key={i} className="w-0.5 bg-[#111] rounded-sm" style={{ height: h }} />
              ))}
            </div>
            <svg width="12" height="9" viewBox="0 0 12 9" fill="#111"><path d="M6 1.5C7.84 1.5 9.5 2.25 10.7 3.47L12 2.18C10.44.83 8.32 0 6 0S1.56.83 0 2.18l1.3 1.29C2.5 2.25 4.16 1.5 6 1.5z"/><path d="M6 4.5c1.1 0 2.1.43 2.83 1.13L10.13 4.3C9.03 3.2 7.6 2.5 6 2.5s-3.03.7-4.13 1.8l1.3 1.33A3.97 3.97 0 016 4.5z"/><circle cx="6" cy="8" r="1.5"/></svg>
            <div className="flex items-center gap-0.5">
              <div className="border border-[#111] rounded-sm px-0.5 py-px flex gap-px">
                <div className="w-3 h-1.5 rounded-sm bg-[#111]" />
                <div className="w-0.5 h-1.5 rounded-sm bg-[#111]/30" />
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="absolute inset-0 top-9 overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

/* ─── Screen 1: Home / Discovery ─────────────────────── */
function HomeScreen() {
  const bikes = [
    { name: "Royal Enfield Meteor", type: "Cruiser", price: "₹899", rating: 4.9, dist: "0.4 km", badge: "⭐ Top Pick", img: "https://images.unsplash.com/photo-1550149550-33b46c745e03?w=200&h=120&fit=crop&auto=format" },
    { name: "Honda Activa 6G", type: "Scooter", price: "₹299", rating: 4.7, dist: "0.8 km", badge: "💚 Eco", img: "https://images.unsplash.com/photo-1780504863256-bdbb13bddfbc?w=200&h=120&fit=crop&auto=format" },
  ];

  return (
    <div className="h-full flex flex-col overflow-hidden" style={{ background: "#f7faf8" }}>
      {/* Header */}
      <div className="px-4 pt-2 pb-3" style={{ background: "#1a5c38" }}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: "0.6rem", color: "rgba(255,255,255,0.7)" }}>
              📍 Dehradun, Uttarakhand
            </p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "0.85rem", color: "#fff" }}>
              Find Your Ride
            </p>
          </div>
          <div className="relative">
            <Bell size={16} className="text-white/80" />
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#f5a623]" />
          </div>
        </div>
        {/* Search bar */}
        <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2">
          <Search size={12} className="text-gray-400" />
          <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: "0.65rem", color: "#9ca3af" }}>
            Search bikes or destinations…
          </span>
        </div>
      </div>

      {/* Category pills */}
      <div className="px-4 py-2.5 flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        {["All", "Scooter", "Adventure", "Cruiser", "E-Bike"].map((c, i) => (
          <div
            key={c}
            className="shrink-0 px-3 py-1 rounded-full text-center"
            style={{
              background: i === 0 ? "#1a5c38" : "#e8f5ee",
              color: i === 0 ? "#fff" : "#1a5c38",
              fontFamily: "'Inter',sans-serif",
              fontWeight: 600,
              fontSize: "0.6rem",
            }}
          >
            {c}
          </div>
        ))}
      </div>

      {/* Bikes */}
      <div className="flex-1 overflow-y-auto px-4 pb-14" style={{ scrollbarWidth: "none" }}>
        <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "0.75rem", color: "#111", marginBottom: 8 }}>
          Nearby · 14 available
        </p>
        {bikes.map((b) => (
          <div key={b.name} className="bg-white rounded-2xl overflow-hidden mb-3 shadow-sm">
            <div className="relative h-24">
              <img src={b.img} alt={b.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute top-2 left-2 bg-white/90 rounded-full px-2 py-0.5 text-[0.55rem]" style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, color: "#1a5c38" }}>{b.badge}</span>
              <Heart size={13} className="absolute top-2 right-2 text-white" />
            </div>
            <div className="px-3 py-2">
              <div className="flex justify-between items-start">
                <div>
                  <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "0.7rem", color: "#111" }}>{b.name}</p>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: "0.58rem", color: "#6b7280" }}>{b.type} · {b.dist}</p>
                </div>
                <div className="text-right">
                  <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "0.75rem", color: "#1a5c38" }}>{b.price}</p>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.55rem", color: "#9ca3af" }}>/day</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-1.5">
                <Star size={9} fill="#f5a623" className="text-[#f5a623]" />
                <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: "0.58rem", color: "#374151" }}>{b.rating}</span>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.55rem", color: "#9ca3af" }}>· Unlimited km</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center py-2 px-3">
        {[
          { icon: Home, label: "Home", active: true },
          { icon: Map, label: "Map", active: false },
          { icon: BookOpen, label: "Trips", active: false },
          { icon: User, label: "Profile", active: false },
        ].map(({ icon: Icon, label, active }) => (
          <div key={label} className="flex flex-col items-center gap-0.5">
            <Icon size={16} style={{ color: active ? "#1a5c38" : "#9ca3af" }} />
            <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: active ? 700 : 400, fontSize: "0.52rem", color: active ? "#1a5c38" : "#9ca3af" }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Screen 2: Bike Detail / Booking ────────────────── */
function BookingScreen() {
  return (
    <div className="h-full flex flex-col overflow-hidden bg-white">
      {/* Hero image */}
      <div className="relative h-36 flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1699972551272-e0eaee1916b2?w=400&h=240&fit=crop&auto=format"
          alt="Royal Enfield Himalayan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <button className="absolute top-2 left-3 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center">
          <ArrowLeft size={13} className="text-gray-700" />
        </button>
        <Heart size={14} className="absolute top-3 right-3 text-white" />
        <div className="absolute bottom-3 left-3">
          <span className="bg-[#f5a623] text-white px-2 py-0.5 rounded-full text-[0.55rem]" style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700 }}>
            Adventure
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 overflow-y-auto px-4 py-3" style={{ scrollbarWidth: "none" }}>
        <div className="flex justify-between items-start mb-2">
          <div>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "0.9rem", color: "#111" }}>
              Royal Enfield Himalayan
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <MapPin size={10} className="text-[#1a5c38]" />
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", color: "#6b7280" }}>Rajpur Rd, Dehradun · 1.2 km</span>
            </div>
          </div>
          <div className="text-right">
            <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "1rem", color: "#1a5c38" }}>₹799</p>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.55rem", color: "#9ca3af" }}>/day</p>
          </div>
        </div>

        {/* Rating row */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={9} fill="#f5a623" className="text-[#f5a623]" />)}
            <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: "0.6rem", color: "#374151" }}>4.9 (128 rides)</span>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { icon: Zap, label: "Unlimited km" },
            { icon: Shield, label: "Trip insured" },
            { icon: Clock, label: "24/7 Support" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="bg-[#f7faf8] rounded-xl p-2 flex flex-col items-center gap-1">
              <Icon size={13} className="text-[#1a5c38]" />
              <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: "0.55rem", color: "#374151", textAlign: "center" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Date picker */}
        <div className="bg-[#f7faf8] rounded-2xl p-3 mb-3">
          <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "0.7rem", color: "#111", marginBottom: 8 }}>Select Dates</p>
          <div className="grid grid-cols-2 gap-2">
            {["Pickup", "Return"].map((label) => (
              <div key={label} className="bg-white rounded-xl p-2 border border-gray-100">
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.55rem", color: "#9ca3af" }}>{label}</p>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "0.65rem", color: "#111" }}>
                  {label === "Pickup" ? "Mon, 15 Jun" : "Wed, 17 Jun"}
                </p>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.55rem", color: "#6b7280" }}>
                  {label === "Pickup" ? "10:00 AM" : "10:00 AM"}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-[#e8f5ee] rounded-2xl p-3 mb-4">
          <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "0.7rem", color: "#1a5c38", marginBottom: 6 }}>Pricing Summary</p>
          {[
            ["₹799 × 2 days", "₹1,598"],
            ["Security deposit (refundable)", "₹2,000"],
            ["Trip protection", "Free"],
          ].map(([label, val]) => (
            <div key={label} className="flex justify-between mb-1">
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", color: "#374151" }}>{label}</span>
              <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: "0.6rem", color: "#111" }}>{val}</span>
            </div>
          ))}
          <div className="border-t border-green-200 mt-2 pt-2 flex justify-between">
            <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "0.65rem", color: "#1a5c38" }}>Total</span>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "0.7rem", color: "#1a5c38" }}>₹3,598</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-4 pt-2 border-t border-gray-50 flex-shrink-0">
        <button
          className="w-full py-3 rounded-2xl text-white flex items-center justify-center gap-2"
          style={{ background: "#1a5c38", fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "0.8rem" }}
        >
          <CheckCircle size={14} />
          Book Now — Pay ₹3,598
        </button>
      </div>
    </div>
  );
}

/* ─── Screen 3: Map view ─────────────────────────────── */
function MapScreen() {
  const pins = [
    { x: 42, y: 38, price: "₹299", active: false },
    { x: 62, y: 55, price: "₹799", active: true },
    { x: 25, y: 62, price: "₹399", active: false },
    { x: 75, y: 30, price: "₹499", active: false },
    { x: 50, y: 72, price: "₹649", active: false },
  ];

  return (
    <div className="h-full flex flex-col overflow-hidden" style={{ background: "#f7faf8" }}>
      {/* Search bar header */}
      <div className="px-4 pt-2 pb-3 bg-white shadow-sm">
        <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2 mb-2">
          <Search size={12} className="text-gray-400" />
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", color: "#9ca3af" }}>Bikes near Dehradun…</span>
        </div>
        <div className="flex gap-2">
          {["All Types", "Today", "< ₹500"].map((f, i) => (
            <div key={f} className="flex items-center gap-1 px-2.5 py-1 rounded-full border text-[0.55rem]" style={{ borderColor: i === 0 ? "#1a5c38" : "#e5e7eb", color: i === 0 ? "#1a5c38" : "#6b7280", fontFamily: "'Inter',sans-serif", fontWeight: 600, background: i === 0 ? "#e8f5ee" : "white" }}>
              {i === 2 && <Filter size={8} />}
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 relative overflow-hidden">
        {/* Simulated map tiles */}
        <div className="absolute inset-0" style={{ background: "#e8f0e4" }}>
          {/* Road network */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 340" preserveAspectRatio="none">
            <line x1="0" y1="120" x2="240" y2="120" stroke="#c8d8c0" strokeWidth="8" />
            <line x1="0" y1="200" x2="240" y2="200" stroke="#c8d8c0" strokeWidth="5" />
            <line x1="80" y1="0" x2="80" y2="340" stroke="#c8d8c0" strokeWidth="8" />
            <line x1="160" y1="0" x2="160" y2="340" stroke="#c8d8c0" strokeWidth="5" />
            <line x1="0" y1="60" x2="240" y2="280" stroke="#c8d8c0" strokeWidth="3" />
            <rect x="90" y="130" width="60" height="60" fill="#d4e6cc" rx="4" />
            <rect x="20" y="20" width="40" height="30" fill="#d4e6cc" rx="3" />
            <rect x="170" y="220" width="50" height="40" fill="#d4e6cc" rx="3" />
          </svg>

          {/* Pin markers */}
          {pins.map((pin, i) => (
            <div
              key={i}
              className="absolute flex flex-col items-center"
              style={{ left: `${pin.x}%`, top: `${pin.y}%`, transform: "translate(-50%,-100%)" }}
            >
              <div
                className="px-2 py-1 rounded-lg shadow-md"
                style={{
                  background: pin.active ? "#1a5c38" : "white",
                  color: pin.active ? "white" : "#1a5c38",
                  fontFamily: "'Outfit',sans-serif",
                  fontWeight: 800,
                  fontSize: "0.6rem",
                  border: pin.active ? "none" : "1.5px solid #1a5c38",
                  transform: pin.active ? "scale(1.15)" : "scale(1)",
                }}
              >
                {pin.price}
              </div>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: pin.active ? "#1a5c38" : "#1a5c38", marginTop: 1 }} />
            </div>
          ))}

          {/* User dot */}
          <div className="absolute" style={{ left: "62%", top: "55%", transform: "translate(-50%,-50%)" }}>
            <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-lg flex items-center justify-center">
              <Navigation size={7} className="text-white" />
            </div>
            <div className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping" />
          </div>
        </div>

        {/* Bottom card */}
        <div className="absolute bottom-0 left-0 right-0 px-3 pb-16">
          <div className="bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1699972551272-e0eaee1916b2?w=120&h=80&fit=crop&auto=format"
              alt="bike"
              className="w-16 h-12 object-cover rounded-xl"
            />
            <div className="flex-1">
              <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "0.7rem", color: "#111" }}>RE Himalayan 411</p>
              <div className="flex items-center gap-1 mt-0.5">
                <Star size={9} fill="#f5a623" className="text-[#f5a623]" />
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.58rem", color: "#6b7280" }}>4.9 · 1.2 km away</span>
              </div>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "0.75rem", color: "#1a5c38", marginTop: 2 }}>₹799<span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: "0.55rem", color: "#9ca3af" }}>/day</span></p>
            </div>
            <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#1a5c38" }}>
              <ChevronRight size={14} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center py-2 px-3">
        {[
          { icon: Home, label: "Home", active: false },
          { icon: Map, label: "Map", active: true },
          { icon: BookOpen, label: "Trips", active: false },
          { icon: User, label: "Profile", active: false },
        ].map(({ icon: Icon, label, active }) => (
          <div key={label} className="flex flex-col items-center gap-0.5">
            <Icon size={16} style={{ color: active ? "#1a5c38" : "#9ca3af" }} />
            <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: active ? 700 : 400, fontSize: "0.52rem", color: active ? "#1a5c38" : "#9ca3af" }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Feature chips ───────────────────────────────────── */
const FEATURES = [
  { icon: Search, label: "Smart Search", desc: "Filter by location, date, bike type, and price in seconds." },
  { icon: MapPin, label: "Live Map", desc: "See all available bikes near you on an interactive map." },
  { icon: CheckCircle, label: "Instant Booking", desc: "Complete KYC and book in under 3 minutes, no paperwork." },
  { icon: Shield, label: "Ride Protected", desc: "Every rental covered with trip insurance and 24/7 support." },
];

/* ─── Main section ────────────────────────────────────── */
export function AppShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 overflow-hidden relative" style={{ background: "linear-gradient(160deg, #0a2e1c 0%, #0f3d21 50%, #1a5c38 100%)" }}>
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "#f5a623" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: "#4ade80" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
            <span className="text-white/80 text-sm" style={{ fontFamily: "'Inter',sans-serif" }}>
              iOS & Android · Free download
            </span>
          </div>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1.1 }}
          >
            The WavyGo App.<br />
            <span style={{ color: "#f5a623" }}>Every ride in your pocket.</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto" style={{ fontFamily: "'Inter',sans-serif", fontSize: "1rem", lineHeight: 1.7 }}>
            Search, book, and track your ride from anywhere. The app is built for riders who don't want friction between them and the open road.
          </p>
        </div>

        {/* Phone trio */}
        <div
          ref={ref}
          className="flex justify-center items-end gap-6 mb-20"
          style={{ perspective: 1200 }}
        >
          {/* Left phone — Home */}
          <PhoneShell
            style={{
              transform: visible
                ? "rotate(-8deg) translateY(24px)"
                : "rotate(-8deg) translateY(80px)",
              opacity: visible ? 0.9 : 0,
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            <HomeScreen />
          </PhoneShell>

          {/* Center phone — Booking (featured) */}
          <PhoneShell
            style={{
              width: 260,
              height: 530,
              transform: visible ? "translateY(0)" : "translateY(80px)",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
              zIndex: 10,
              boxShadow: "0 60px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1), inset 0 0 0 2px #222",
            }}
          >
            <BookingScreen />
          </PhoneShell>

          {/* Right phone — Map */}
          <PhoneShell
            style={{
              transform: visible
                ? "rotate(8deg) translateY(24px)"
                : "rotate(8deg) translateY(80px)",
              opacity: visible ? 0.9 : 0,
              transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
            }}
          >
            <MapScreen />
          </PhoneShell>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {FEATURES.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="text-center">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mx-auto mb-3">
                <Icon size={22} className="text-[#f5a623]" />
              </div>
              <p className="text-white mb-1" style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>{label}</p>
              <p className="text-white/50 text-xs" style={{ fontFamily: "'Inter',sans-serif", lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Download CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card text-foreground px-6 py-3.5 rounded-2xl hover:opacity-90 transition-colors"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div>
              <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Inter',sans-serif" }}>Download on the</p>
              <p className="text-sm" style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800 }}>App Store</p>
            </div>
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded-2xl hover:bg-white/20 transition-colors"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M3.18 23.76c.3.17.64.24.99.2l12.12-12.1L13.17 8.8 3.18 23.76zm17.83-12.1l-2.97-1.71-3.41 3.4 3.41 3.41 3-1.74c.86-.5.86-1.85-.03-2.36zm-18.82-9.52l10 10 3.12-3.12L4.2.26C3.85.2 3.48.27 3.18.44c-.89.5-.88 1.9.01 2.4v-.7zM.99.44z"/>
            </svg>
            <div>
              <p className="text-xs text-white/60" style={{ fontFamily: "'Inter',sans-serif" }}>Get it on</p>
              <p className="text-sm" style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800 }}>Google Play</p>
            </div>
          </a>
          <div className="flex flex-col items-center">
            {/* QR placeholder */}
            <div className="w-20 h-20 rounded-xl bg-white p-1.5 flex items-center justify-center">
              <div className="w-full h-full grid grid-cols-7 gap-px">
                {Array.from({ length: 49 }).map((_, i) => {
                  const isCorner = [0,1,2,7,8,14,15,16,17,19,21,22,24,26,27,29,30,31,32,34,36,40,41,42,43,44,45,46,47,48].includes(i);
                  return <div key={i} className="rounded-sm" style={{ background: isCorner ? "#111" : "transparent" }} />;
                })}
              </div>
            </div>
            <p className="text-white/40 text-xs mt-1.5" style={{ fontFamily: "'Inter',sans-serif" }}>Scan to download</p>
          </div>
        </div>
      </div>
    </section>
  );
}
