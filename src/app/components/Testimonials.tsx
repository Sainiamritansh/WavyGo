import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useCarousel } from "@/utils/hooks";
import { TESTIMONIALS } from "../../data";

const CARD_W = 360;
const GAP = 20;

export function Testimonials() {
  const { trackRef, current, isDragging, prev, next, onMouseDown, onScroll, canPrev, canNext } =
    useCarousel(CARD_W, GAP, TESTIMONIALS.length);

  return (
    <section className="py-20 bg-[#f7faf8]">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 px-6">
          <div>
            <p
              className="text-[#f5a623] mb-2 uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem" }}
            >
              Real Riders, Real Stories
            </p>
            <h2
              className="text-[#111827] mb-3"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              Why Riders Choose WavyGo
            </h2>
            <p className="text-gray-500 max-w-lg" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}>
              From students to seasoned tourers — thousands of riders trust WavyGo for every kind of journey.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Summary stats — preserved from original */}
            <div className="hidden md:flex gap-6">
              {[
                { val: "4.8★", label: "Average rating" },
                { val: "50K+", label: "App reviews" },
                { val: "98%", label: "Would recommend" },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <p className="text-[#1a5c38]" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "1.5rem" }}>{val}</p>
                  <p className="text-gray-500 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{label}</p>
                </div>
              ))}
            </div>

            {/* Desktop arrows */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={prev}
                disabled={!canPrev}
                aria-label="Previous review"
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
                aria-label="Next review"
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
          }}
        >
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative flex-shrink-0"
              style={{
                width: CARD_W,
                scrollSnapAlign: "start",
              }}
            >
              {/* Quote icon — unchanged */}
              <Quote size={28} className="text-gray-100 absolute top-4 right-4" fill="currentColor" />

              {/* Header — unchanged */}
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                  style={{ background: review.color, fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "0.85rem" }}
                >
                  {review.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-gray-900" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "0.95rem" }}>{review.name}</p>
                    {review.verified && (
                      <span className="text-[#1a5c38]" title="Verified rider">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>{review.role}</p>
                </div>
              </div>

              {/* Stars — unchanged */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#f5a623" className="text-[#f5a623]" />
                ))}
              </div>

              {/* Review text — unchanged */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                "{review.text}"
              </p>

              {/* Trip tag — unchanged */}
              <div className="flex items-center justify-between">
                <span
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{ background: "#e8f5ee", color: "#1a5c38", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  {review.tag}
                </span>
                <span className="text-xs text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                  🛣️ {review.trip}
                </span>
              </div>
            </div>
          ))}

          <div style={{ flexShrink: 0, width: 8 }} />
        </div>

        {/* ── Pill dots ──────────────────────────────────────── */}
        <div className="flex justify-center gap-2 mt-5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to review ${i + 1}`}
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