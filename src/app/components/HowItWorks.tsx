import { HOW_IT_WORKS_STEPS } from "../../data";

export function HowItWorks() {
  return (
    <section className="py-20 bg-[#f7faf8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p
            className="text-[#f5a623] mb-2 uppercase tracking-widest"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem" }}
          >
            Simple by Design
          </p>
          <h2
            className="text-[#111827]"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
          >
            Rent a Bike in 4 Easy Steps
          </h2>
          <p className="text-gray-500 mt-2 max-w-lg mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}>
            From searching to riding, the whole process takes under 10 minutes the first time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{ background: "linear-gradient(to right, #1a5c38, #d97706, #2563eb, #7c3aed)" }}
          />

          {HOW_IT_WORKS_STEPS.map(({ icon: Icon, step, title, desc, color, iconColor }) => (
            <div key={step} className="relative flex flex-col items-center text-center group">
              {/* Icon circle */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 relative z-10 group-hover:scale-110 transition-transform duration-300"
                style={{ background: color, border: `2px solid ${iconColor}20` }}
              >
                <Icon size={30} style={{ color: iconColor }} />
                {/* Step number */}
                <div
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white"
                  style={{ background: iconColor, fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "0.7rem" }}
                >
                  {step}
                </div>
              </div>

              <h3
                className="text-gray-900 mb-2"
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1rem" }}
              >
                {title}
              </h3>
              <p
                className="text-gray-500 text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full hover:opacity-90 transition-all"
            style={{ background: "#1a5c38", fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1rem" }}
          >
            Find a Bike Near You
          </button>
          <p className="text-gray-400 text-sm mt-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            No account needed to browse · Sign up only at checkout
          </p>
        </div>
      </div>
    </section>
  );
}
