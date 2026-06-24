import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Smartphone } from "lucide-react";
import { PLAY_STORE_URL, DEALER_APP_URL, openInNewTab } from "@/constants/links";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M4 22 Q10 8 16 14 Q22 20 28 6" stroke="#1a5c38" strokeWidth="3" strokeLinecap="round" fill="none" />
              <circle cx="28" cy="6" r="3" fill="#f5a623" />
              <circle cx="4" cy="22" r="2" fill="#1a5c38" />
            </svg>
            <span
              className="text-[1.35rem] tracking-tight"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, color: "#1a5c38" }}
            >
              WavyGo
            </span>
          </div>
        </a>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#destinations"
            className={`text-sm transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-white/90"}`}
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            Destinations
          </a>
          <a
            href="#explore"
            className={`text-sm transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-white/90"}`}
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            Explore India
          </a>
          <a
            href="#blog"
            className={`text-sm transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-white/90"}`}
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            Riding Guides
          </a>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => openInNewTab(DEALER_APP_URL)}
            className={`text-sm px-4 py-2 rounded-full border transition-all ${scrolled
              ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              : "border-white/60 text-white hover:bg-white/10"
              }`}
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            List My Bike
          </button>
          <button
            onClick={() => openInNewTab(PLAY_STORE_URL)}
            className={`flex items-center gap-1.5 text-sm px-4 py-2 rounded-full transition-all ${scrolled
              ? "bg-primary text-primary-foreground hover:bg-primary/85"
              : "bg-white/15 text-white hover:bg-white/25"
              }`}
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            <Smartphone size={15} />
            Get App
          </button>
          <ThemeToggle />
          <Link
            to="/login"
            className={`text-sm px-4 py-2 rounded-full transition-all ${scrolled
              ? "text-foreground hover:text-primary"
              : "text-white/80 hover:text-white"
              }`}
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            Login
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className={`p-2 rounded-lg ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-4">
          {["Destinations", "Explore India", "Riding Guides"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-foreground text-sm py-2 border-b border-border last:border-0"
              style={{ fontFamily: "'Inter', sans-serif" }}
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => { openInNewTab(DEALER_APP_URL); setMobileOpen(false); }}
              className="flex-1 text-center text-sm px-4 py-2.5 rounded-full border border-primary text-primary"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Link My Bike
            </button>
            <Link
              to="/login"
              className="flex-1 text-center text-sm px-4 py-2.5 rounded-full bg-primary text-primary-foreground"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}