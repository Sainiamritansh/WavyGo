import { ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCarousel } from "@/utils/hooks";
import { ROUTES, TAG_COLORS } from "../../data";

/* Featured card sizing */
const FEATURED_W = 460;
const CARD_W = 300;
const CARD_H = 340;
const FEATURED_H = 400;
const GAP = 20;

export function ExploreIndia() {
  const navigate = useNavigate();

  const {
    trackRef,
    current,
    isDragging,
    prev,
    next,
    onMouseDown,
    onScroll,
    canPrev,
    canNext,
  } = useCarousel(CARD_W, GAP, ROUTES.length);

  return (
    <section id="explore" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* ── HEADER ───────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 px-6">
          <div>
            <p className="text-[#f5a623] mb-2 uppercase tracking-widest text-xs font-semibold">
              Road Trip Inspiration
            </p>

            <h2 className="text-[#111827] text-3xl font-extrabold">
              Iconic Rides Across India
            </h2>

            <p className="text-gray-500 mt-2 max-w-xl text-sm">
              From Himalayan highways to coastal curves — discover routes that riders talk about for a lifetime.
            </p>
          </div>

          {/* optional: global explore button */}
          <button
            onClick={() => navigate("/routes")}
            className="flex items-center gap-1.5 text-xs text-white bg-[#1a5c38] px-4 py-2 rounded-full hover:opacity-90 transition"
          >
            Explore All Routes
            <ArrowRight size={14} />
          </button>
        </div>

        {/* ── CAROUSEL ───────────────────────────── */}
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
            alignItems: "flex-end",
          }}
        >
          {ROUTES.map((route) => {
            const w = route.featured ? FEATURED_W : CARD_W;
            const h = route.featured ? FEATURED_H : CARD_H;

            return (
              <div
                key={route.id}
                onClick={() => navigate(`/route/${route.id}`)}
                className="relative rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0"
                style={{
                  width: w,
                  height: h,
                  scrollSnapAlign: "start",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                }}
              >
                {/* Image */}
                <img
                  src={route.img}
                  alt={route.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  draggable={false}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-white px-3 py-1 rounded-full text-xs uppercase tracking-wider"
                    style={{
                      background: TAG_COLORS[route.tag] || "#f5a623",
                      fontWeight: 700,
                    }}
                  >
                    {route.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white/70 text-xs mb-1">
                    {route.subtitle}
                  </p>

                  <h3
                    className="text-white mb-2"
                    style={{
                      fontWeight: 800,
                      fontSize: route.featured ? "1.6rem" : "1.1rem",
                    }}
                  >
                    {route.title}
                  </h3>

                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-full">
                      {route.km}
                    </span>
                    <span className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-full">
                      {route.days}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevents double trigger
                      navigate(`/route/${route.id}`);
                    }}
                    className="flex items-center gap-1.5 text-xs text-white/80 hover:text-white transition"
                  >
                    Explore Route
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}

          <div style={{ flexShrink: 0, width: 8 }} />
        </div>

        {/* ── DOT INDICATORS ───────────────────────── */}
        <div className="flex justify-center gap-2 mt-5">
          {ROUTES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = trackRef.current;
                if (!el) return;

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
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}