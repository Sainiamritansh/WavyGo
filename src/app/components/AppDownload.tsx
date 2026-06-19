import { CheckCircle, MapPin, Bell, Shield, Star } from "lucide-react";
import { APP_DOWNLOAD_FEATURES } from "../../data";

export function AppDownload() {
  return (
    <section id="app" className="py-20 bg-[#0f3d21] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#f5a623]/30 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Phone mockup */}
          <div className="flex justify-center relative">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-64 h-[500px] bg-gray-900 rounded-[2.5rem] border-4 border-gray-700 shadow-2xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1529653762956-b0a27278529c?w=400&h=700&fit=crop&auto=format"
                  alt="WavyGo app"
                  className="w-full h-full object-cover opacity-70"
                />
                {/* App UI overlay */}
                <div className="absolute inset-0 flex flex-col p-4">
                  <div className="bg-white rounded-2xl p-3 mb-3">
                    <p className="text-[#1a5c38] text-center" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "0.9rem" }}>WavyGo</p>
                    <p className="text-gray-500 text-center text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>Bike Rental</p>
                  </div>
                  <div className="bg-white/90 rounded-xl p-2.5 mb-2">
                    <p className="text-xs text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>📍 Dehradun, UK</p>
                    <p className="text-xs text-[#1a5c38] mt-0.5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>24 bikes available nearby</p>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 mt-auto">
                    {["Scooter · ₹299", "Adventure · ₹799", "Cruiser · ₹999", "E-Bike · ₹249"].map((item) => (
                      <div key={item} className="bg-white/90 rounded-lg p-2 text-center">
                        <p className="text-xs text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-12 top-16 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#e8f5ee] flex items-center justify-center">
                  <CheckCircle size={16} className="text-[#1a5c38]" />
                </div>
                <div>
                  <p className="text-xs text-gray-800" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Booking confirmed</p>
                  <p className="text-xs text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>2 min ago</p>
                </div>
              </div>

              <div className="absolute -right-10 bottom-20 bg-white rounded-xl shadow-lg px-3 py-2">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} fill="#f5a623" className="text-[#f5a623]" />
                  ))}
                </div>
                <p className="text-xs text-gray-800" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>4.8 App Rating</p>
                <p className="text-xs text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>50K+ reviews</p>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <p
              className="text-[#f5a623] mb-3 uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem" }}
            >
              Mobile App
            </p>
            <h2
              className="text-white mb-4"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              Book in 60 Seconds.<br />Ride in Minutes.
            </h2>
            <p className="text-white/70 mb-8" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: 1.7 }}>
              The WavyGo app puts 10,000+ bikes at your fingertips. Browse, compare, book, and ride — all from your phone.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {APP_DOWNLOAD_FEATURES.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#f5a623]" />
                  </div>
                  <p className="text-white/80 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{text}</p>
                </div>
              ))}
            </div>

            {/* Download buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-gray-900 px-5 py-3 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <p className="text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>Download on the</p>
                  <p className="text-sm" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>App Store</p>
                </div>
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 text-white border border-white/20 px-5 py-3 rounded-2xl hover:bg-white/20 transition-colors"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.12-12.1L13.17 8.8 3.18 23.76zm17.83-12.1l-2.97-1.71-3.41 3.4 3.41 3.41 3-1.74c.86-.5.86-1.85-.03-2.36zm-18.82-9.52l10 10 3.12-3.12L4.2.26C3.85.2 3.48.27 3.18.44c-.89.5-.88 1.9.01 2.4v-.7zM.99.44z"/>
                </svg>
                <div>
                  <p className="text-xs text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>Get it on</p>
                  <p className="text-sm" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
