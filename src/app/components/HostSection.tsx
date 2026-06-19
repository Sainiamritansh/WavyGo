import { TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { HOST_STATS, HOST_STEPS } from "../../data";

export function HostSection() {
  return (
    <section id="host" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image + Stats overlay */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1699972901575-a27de02f4916?w=700&h=700&fit=crop&auto=format"
                alt="Bike owner hosting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d21]/60 via-transparent to-transparent" />
            </div>

            {/* Earnings card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-5 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-800" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.05rem" }}>
                  Your Potential Earnings
                </p>
                <TrendingUp size={18} className="text-[#1a5c38]" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {HOST_STATS.map(({ value, label, sub }) => (
                  <div key={label} className="text-center">
                    <p className="text-[#1a5c38]" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "1.2rem" }}>{value}</p>
                    <p className="text-gray-600 text-xs leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>{label}</p>
                    <p className="text-gray-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>{sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified badge */}
            <div className="absolute top-6 left-6 bg-white rounded-xl shadow-md px-3 py-2 flex items-center gap-2">
              <CheckCircle size={16} className="text-[#1a5c38]" />
              <span className="text-sm text-gray-700" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Verified Host Program</span>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <p
              className="text-[#f5a623] mb-3 uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem" }}
            >
              For Bike Owners
            </p>
            <h2
              className="text-[#111827] mb-4"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              Turn Your Parked Bike<br />Into Passive Income
            </h2>
            <p className="text-gray-500 mb-8" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: 1.75 }}>
              Your bike sits idle most of the day. List it on WavyGo and earn every time someone rides it — with full trip insurance, verified renters, and zero hassle.
            </p>

            {/* Steps */}
            <div className="flex flex-col gap-6 mb-10">
              {HOST_STEPS.map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#e8f5ee" }}
                  >
                    <span className="text-[#1a5c38]" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "0.85rem" }}>{step}</span>
                  </div>
                  <div>
                    <p className="text-gray-900 mb-0.5" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1rem" }}>{title}</p>
                    <p className="text-gray-500 text-sm" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["Zero upfront cost", "Full trip insurance", "Verified renters", "24/7 host support"].map((item) => (
                <div key={item} className="flex items-center gap-1.5 bg-[#f7faf8] border border-[#d1e8db] rounded-full px-3 py-1.5">
                  <CheckCircle size={12} className="text-[#1a5c38]" />
                  <span className="text-xs text-gray-600" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>

            <button
              className="flex items-center gap-2 text-white px-7 py-3.5 rounded-full hover:opacity-90 transition-all"
              style={{ background: "#1a5c38", fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1rem" }}
            >
              Start Hosting Today
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
