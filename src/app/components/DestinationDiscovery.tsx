import { useState } from "react";
import { MapPin, Clock, Bike, ChevronRight, Navigation, ArrowLeft, ArrowRight } from "lucide-react";
import { useCarousel } from "@/utils/hooks";
import { DESTINATIONS, DIFFICULTY_COLORS } from "../../data";

const CARD_W = 320;
const GAP = 20;

export function DestinationDiscovery() {
  const [active, setActive] = useState<string | null>(null);
  const { trackRef, current, isDragging, prev, next, onMouseDown, onScroll, canPrev, canNext } =
    useCarousel(CARD_W, GAP, DESTINATIONS.length);

  return (
    <section id="destinations" className="py-20 bg-[#f7faf8]">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 px-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Navigation size={14} className="text-[#f5a623]" />
              <p
                className="text-[#f5a623] uppercase tracking-widest"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem" }}
              >
                From Dehradun
              </p>
            </div>
            <h2
              className="text-[#111827]"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              Discover Nearby Destinations
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}>
              Pick where you want to ride, and we'll show you the best bikes for that route.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2.5">
              <MapPin size={14} className="text-[#1a5c38]" />
              <span className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Dehradun, Uttarakhand</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 ml-1" />
            </div>

            {/* Desktop arrows */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={prev}
                disabled={!canPrev}
                aria-label="Previous destination"
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200"
                style={{
                  borderColor: canPrev ? "#1a5c38" : "#e5e7eb",
                  background: canPrev ? "#1a5c38" : "white",
                  color: canPrev ? "white" : "#d1d5db",
                  cursor: canPrev ? "pointer" : "not-allowed",
                }}
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={next}
                disabled={!canNext}
                aria-label="Next destination"
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200"
                style={{
                  borderColor: canNext ? "#1a5c38" : "#e5e7eb",
                  background: canNext ? "#1a5c38" : "white",
                  color: canNext ? "white" : "#d1d5db",
                  cursor: canNext ? "pointer" : "not-allowed",
                }}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Carousel track ─────────────────────────────────── */}
        <div
          ref={trackRef}
          onMouseDown={onMouseDown}
          onScroll={onScroll}
          style={{
            display: "flex",
            gap: GAP,
            paddingLeft: 24,
            paddingRight: 40,          /* peek of next card */
            paddingBottom: 16,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-0.5"
              style={{
                width: CARD_W,
                flexShrink: 0,
                scrollSnapAlign: "start",
              }}
              onMouseEnter={() => !isDragging && setActive(dest.id)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Image — unchanged */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {dest.popular && (
                  <div className="absolute top-3 left-3 bg-[#f5a623] text-white px-2.5 py-1 rounded-full text-xs" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                    Popular
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full" style={{ background: DIFFICULTY_COLORS[dest.difficulty] }} />
                  <span className="text-xs text-gray-700" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{dest.difficulty}</span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-white text-xs opacity-75" style={{ fontFamily: "'Inter', sans-serif" }}>{dest.tagline}</p>
                  <p className="text-white" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "1.3rem" }}>{dest.name}</p>
                </div>
              </div>

              {/* Info — unchanged */}
              <div className="p-4">
                <p className="text-gray-500 text-xs mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>{dest.highlight}</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <MapPin size={12} className="text-[#1a5c38]" />
                    {dest.distance}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <Clock size={12} className="text-[#1a5c38]" />
                    {dest.rideTime}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <Bike size={12} className="text-[#1a5c38]" />
                    {dest.bikes.length} bike types
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  {dest.bikes.map((b) => (
                    <span key={b} className="bg-[#e8f5ee] text-[#1a5c38] px-2.5 py-1 rounded-full text-xs" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                      {b}
                    </span>
                  ))}
                </div>
                <button
                  className="w-full py-2.5 rounded-xl flex items-center justify-center gap-1.5 text-sm transition-all duration-200"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    background: active === dest.id ? "#1a5c38" : "#f7faf8",
                    color: active === dest.id ? "white" : "#1a5c38",
                    border: "1.5px solid",
                    borderColor: active === dest.id ? "#1a5c38" : "#d1e8db",
                  }}
                >
                  Find Bikes for {dest.name}
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}

          {/* Trailing spacer — keeps last card from touching viewport edge */}
          <div style={{ flexShrink: 0, width: 8 }} />
        </div>

        {/* ── Pill dots ──────────────────────────────────────── */}
        <div className="flex justify-center gap-2 mt-5">
          {DESTINATIONS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to destination ${i + 1}`}
              onClick={() => {
                const el = trackRef.current;
                if (el) el.scrollTo({ left: i * (CARD_W + GAP), behavior: "smooth" });
              }}
              style={{
                height: 6,
                width: i === current ? 22 : 6,
                borderRadius: 999,
                background: i === current ? "#1a5c38" : "#cbd5e1",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "width 0.35s cubic-bezier(0.4,0,0.2,1), background 0.35s ease",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
