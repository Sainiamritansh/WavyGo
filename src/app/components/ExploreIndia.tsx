import { ArrowRight, ArrowLeft } from "lucide-react";
import { useCarousel } from "@/utils/hooks";
import { ROUTES, TAG_COLORS } from "@/data";

/* Featured card is wider & taller to preserve the editorial hierarchy */
const FEATURED_W = 460;
const CARD_W = 300;
const CARD_H = 340;
const FEATURED_H = 400;
const GAP = 20;

export function ExploreIndia() {
  const { trackRef, current, isDragging, prev, next, onMouseDown, onScroll, canPrev, canNext } =
    useCarousel(CARD_W, GAP, ROUTES.length);

  return (
    <section id="explore" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 px-6">
          <div>
            <p
              className="text-[#f5a623] mb-2 uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem" }}
            >
              Road Trip Inspiration
            </p>
            <h2
              className="text-[#111827]"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              Iconic Rides Across India
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}>
              From Himalayan highways to coastal curves — discover routes that riders talk about for a lifetime.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              className="hidden md:flex items-center gap-2 text-[#1a5c38] text-sm hover:underline"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              See all routes <ArrowRight size={15} />
            </button>

            {/* Desktop arrows */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={prev}
                disabled={!canPrev}
                aria-label="Previous route"
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
                aria-label="Next route"
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
            paddingRight: 40,
            paddingBottom: 16,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            cursor: isDragging ? "grabbing" : "grab",
            alignItems: "flex-end",   /* cards of different heights align at bottom */
          }}
        >
          {ROUTES.map((route) => {
            const w = route.featured ? FEATURED_W : CARD_W;
            const h = route.featured ? FEATURED_H : CARD_H;

            return (
              <div
                key={route.id}
                className="relative rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0"
                style={{
                  width: w,
                  height: h,
                  scrollSnapAlign: "start",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                }}
              >
                {/* Image — unchanged */}
                <img
                  src={route.img}
                  alt={route.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Tag — unchanged */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-white px-3 py-1 rounded-full text-xs uppercase tracking-wider"
                    style={{ background: TAG_COLORS[route.tag] || "#f5a623", fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                  >
                    {route.tag}
                  </span>
                </div>

                {/* Content — unchanged */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white/70 text-xs mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>{route.subtitle}</p>
                  <h3
                    className="text-white mb-2"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 800,
                      fontSize: route.featured ? "1.6rem" : "1.1rem",
                    }}
                  >
                    {route.title}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full" style={{ fontFamily: "'Inter', sans-serif" }}>{route.km}</span>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full" style={{ fontFamily: "'Inter', sans-serif" }}>{route.days}</span>
                  </div>
                  <button
                    className="flex items-center gap-1.5 text-xs text-white/80 hover:text-white transition-colors group/btn"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                  >
                    Explore Route
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}

          <div style={{ flexShrink: 0, width: 8 }} />
        </div>

        {/* ── Pill dots ──────────────────────────────────────── */}
        <div className="flex justify-center gap-2 mt-5">
          {ROUTES.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to route ${i + 1}`}
              onClick={() => {
                const el = trackRef.current;
                if (!el) return;
                /* Account for first card being wider */
                const offset =
                  i === 0
                    ? 0
                    : FEATURED_W + GAP + (i - 1) * (CARD_W + GAP);
                el.scrollTo({ left: offset, behavior: "smooth" });
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
