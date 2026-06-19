import { useState } from "react";
import { MapPin, Calendar, Search, Star, Shield, Zap, ChevronRight } from "lucide-react";
import { LOCATIONS, HERO_TRUST_CARDS } from "../../data";

export function Hero() {
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleLocationChange = (val: string) => {
    setLocation(val);
    if (val.length > 0) {
      setSuggestions(LOCATIONS.filter((l) => l.toLowerCase().includes(val.toLowerCase())));
    } else {
      setSuggestions([]);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a2e1c]">
        <img
          src="https://images.unsplash.com/photo-1703439409619-41dcf45a5e15?w=1920&h=1080&fit=crop&auto=format"
          alt="Motorcycle on mountain road"
          className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2e1c]/95 via-[#0a2e1c]/70 to-[#0a2e1c]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — Heading + Booking Card */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f5a623] animate-pulse" />
              <span className="text-white/90 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                10,000+ bikes available across India
              </span>
            </div>

            <h1
              className="text-white mb-4 leading-[1.1]"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}
            >
              Your Next<br />
              <span style={{ color: "#f5a623" }}>Adventure</span><br />
              Starts Here
            </h1>
            <p
              className="text-white/70 mb-8 max-w-md"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", lineHeight: 1.7 }}
            >
              Rent bikes and scooters for road trips, mountain routes, and city commutes.
              Explore Uttarakhand, Himachal and beyond — your way, your pace.
            </p>

            {/* Booking Card */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-lg">
              <p
                className="text-[#1a5c38] mb-4"
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
              >
                Book Self-Drive Bikes
              </p>

              {/* Location */}
              <div className="relative mb-3">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Where are you headed?"
                  value={location}
                  onChange={(e) => handleLocationChange(e.target.value)}
                  className="w-full pl-9 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-[#1a5c38] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
                {suggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-100 rounded-xl shadow-lg mt-1 overflow-hidden z-20">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                        onClick={() => { setLocation(s); setSuggestions([]); }}
                      >
                        <MapPin size={13} className="text-[#1a5c38]" />
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="relative">
                  <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="datetime-local"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-[#1a5c38] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <div className="relative">
                  <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="datetime-local"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-[#1a5c38] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
              </div>

              <button
                className="w-full py-3.5 rounded-xl text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.98]"
                style={{ background: "#1a5c38", fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1rem" }}
              >
                <Search size={18} />
                Search Available Bikes
              </button>

              {/* Trust signals */}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                {[
                  { icon: Shield, text: "100% Trip Protection" },
                  { icon: Zap, text: "Instant Booking" },
                  { icon: Star, text: "4.8★ Rated Platform" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <Icon size={12} className="text-[#1a5c38]" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile stats — visible below md */}
          <div className="flex lg:hidden gap-4 mt-6">
            {[
              { value: "10K+", label: "Bikes" },
              { value: "∞", label: "Unlimited km" },
              { value: "4.8★", label: "Rating" },
            ].map(({ value, label }) => (
              <div key={label} className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                <p className="text-white" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "1.2rem" }}>{value}</p>
                <p className="text-white/60 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>{label}</p>
              </div>
            ))}
          </div>

          {/* Right — Trust visuals */}
          <div className="hidden lg:flex flex-col gap-4">
            {HERO_TRUST_CARDS.map((card) => (
              <div key={card.label} className="relative rounded-2xl overflow-hidden group cursor-pointer">
                <img
                  src={card.img}
                  alt={card.label}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                  <div>
                    <span className="text-xs text-[#f5a623] uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                      {card.tag}
                    </span>
                    <p className="text-white mt-0.5" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}>
                      {card.label}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star size={12} fill="#f5a623" className="text-[#f5a623]" />
                    <span className="text-white text-xs" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                      {card.rating} · {card.reviews} rides
                    </span>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-white/15 backdrop-blur-sm rounded-full p-1.5 group-hover:bg-white/25 transition-colors">
                  <ChevronRight size={14} className="text-white" />
                </div>
              </div>
            ))}

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "10K+", label: "Bikes listed" },
                { value: "∞", label: "Unlimited kms" },
                { value: "24/7", label: "Support" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                  <p className="text-white" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "1.4rem" }}>
                    {value}
                  </p>
                  <p className="text-white/60 text-xs mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
