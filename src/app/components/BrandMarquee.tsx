import { BRANDS } from "../../data";

export function BrandMarquee() {
  return (
    <div className="py-5 bg-white border-b border-gray-100 overflow-hidden">
      <p
        className="text-center text-gray-400 text-xs uppercase tracking-widest mb-4"
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
              className="text-gray-300 hover:text-[#1a5c38] transition-colors cursor-pointer"
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
