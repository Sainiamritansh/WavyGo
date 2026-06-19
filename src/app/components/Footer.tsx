import { MapPin, Mail, Phone, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { FOOTER_LINKS, FOOTER_CONTACT } from "../../data";

export function Footer() {
  return (
    <footer style={{ background: "#0a1a0f" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <path d="M4 22 Q10 8 16 14 Q22 20 28 6" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" fill="none"/>
                <circle cx="28" cy="6" r="3" fill="#f5a623"/>
              </svg>
              <span
                className="text-white"
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "1.3rem" }}
              >
                WavyGo
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
              India's trusted bike & scooter rental marketplace. Explore destinations, plan road trips, and ride freely.
            </p>

            <div className="flex flex-col gap-2.5 mb-6">
              <div className="flex items-center gap-2 text-gray-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                <MapPin size={13} className="text-[#4ade80]" />
                {FOOTER_CONTACT.address}
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                <Mail size={13} className="text-[#4ade80]" />
                {FOOTER_CONTACT.email}
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                <Phone size={13} className="text-[#4ade80]" />
                {FOOTER_CONTACT.phone}
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#1a5c38")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
                >
                  <Icon size={15} className="text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <p
                className="text-white mb-4"
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}
              >
                {title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App badges */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t border-white/10">
          <div>
            <p className="text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
              WavyGo — Bike Rental Mobile Application
            </p>
            <div className="flex gap-3">
              <a href="#" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors border border-white/10 px-4 py-2.5 rounded-xl">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <p className="text-gray-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>Download on</p>
                  <p className="text-white text-xs" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors border border-white/10 px-4 py-2.5 rounded-xl">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.12-12.1L13.17 8.8 3.18 23.76zm17.83-12.1l-2.97-1.71-3.41 3.4 3.41 3.41 3-1.74c.86-.5.86-1.85-.03-2.36zm-18.82-9.52l10 10 3.12-3.12L4.2.26C3.85.2 3.48.27 3.18.44c-.89.5-.88 1.9.01 2.4v-.7z"/>
                </svg>
                <div>
                  <p className="text-gray-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>Get it on</p>
                  <p className="text-white text-xs" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>Google Play</p>
                </div>
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-xs mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
              © 2026 WavyGo. All rights reserved.
            </p>
            <div className="flex gap-4 justify-center md:justify-end">
              {["Privacy Policy", "Terms & Conditions", "Blogs"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-500 text-xs hover:text-white transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
