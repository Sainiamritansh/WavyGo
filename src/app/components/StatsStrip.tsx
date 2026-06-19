import { STATS } from "../../data";

export function StatsStrip() {
  return (
    <div className="bg-[#1a5c38] py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/20">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4 md:px-8 first:md:pl-0 last:md:pr-0">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-[#f5a623]" />
              </div>
              <div>
                <p
                  className="text-white"
                  style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "1.3rem", lineHeight: 1.1 }}
                >
                  {value}
                </p>
                <p
                  className="text-white/60 mt-0.5"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem" }}
                >
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
