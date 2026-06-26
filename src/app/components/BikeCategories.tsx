import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BIKE_CATEGORIES } from "../../data";

export function BikeCategories() {
  const [hovered, setHovered] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── HEADER ───────────────────────────── */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p
              className="text-[#f5a623] mb-2 uppercase tracking-widest"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "0.78rem",
              }}
            >
              Browse by Type
            </p>

            <h2
              className="text-foreground"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              }}
            >
              Find Your Perfect Ride
            </h2>

            <p
              className="text-muted-foreground mt-2 max-w-lg"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
              }}
            >
              From breezy city scooters to rugged mountain beasts — every bike for every journey.
            </p>
          </div>

          <button
            onClick={() => navigate("/bikes")}
            className="hidden md:flex items-center gap-2 text-primary border border-primary px-5 py-2.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all text-sm"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
            }}
          >
            View All
            <ArrowRight size={15} />
          </button>
        </div>

        {/* ── GRID ───────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {BIKE_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate(`/bikes/${cat.id}`)}
              onMouseEnter={() => setHovered(cat.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: cat.color }}
            >
              {/* TAG */}
              <div className="absolute top-3 left-3 z-10">
                <span
                  className="bg-white/90 backdrop-blur-sm text-primary px-2.5 py-1 rounded-full"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.68rem",
                  }}
                >
                  {cat.tag}
                </span>
              </div>

              {/* IMAGE */}
             <div className="h-48 sm:h-56 md:h-64 overflow-hidden rounded-2xl flex items-center justify-center">
               <img
                 src={cat.img}
                 alt={cat.name}
                 className="w-full h-full object-contain md:object-cover transition-transform duration-300 group-hover:scale-105"
               />
             </div>
              {/* INFO */}
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3
                      className="text-foreground"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                      }}
                    >
                      {cat.name}
                    </h3>

                    <p
                      className="text-muted-foreground text-xs mt-0.5"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {cat.desc}
                    </p>
                  </div>

                  <div className="text-right">
                    <p
                      className="text-primary"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 800,
                        fontSize: "1rem",
                      }}
                    >
                      {cat.price}
                    </p>
                    <p
                      className="text-muted-foreground text-xs"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      /day
                    </p>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/bikes/${cat.id}`);
                  }}
                  className="mt-3 w-full py-2 rounded-xl text-sm transition-all flex items-center justify-center gap-1.5"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    background:
                      hovered === cat.id
                        ? "#1a5c38"
                        : "rgba(26,92,56,0.08)",
                    color: hovered === cat.id ? "white" : "#1a5c38",
                  }}
                >
                  Explore {cat.name}s
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}