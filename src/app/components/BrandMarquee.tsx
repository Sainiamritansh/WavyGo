import { BRANDS } from "../../data";

export function BrandMarquee() {
  return (
    <div className="py-5 bg-card border-b border-border overflow-hidden">
      <p
        className="text-center text-muted-foreground text-xs uppercase tracking-widest mb-4"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
      >
        Bikes from India's top manufacturers
      </p>
      <div className="relative flex gap-10 overflow-hidden">
        <div
          className="flex gap-10 items-center shrink-0"
          style={{
            animation: "marquee 25s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          {BRANDS.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="text-muted-foreground/50 hover:text-primary transition-colors cursor-pointer"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.02em" }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
