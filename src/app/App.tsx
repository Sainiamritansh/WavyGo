import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { BlogDetails } from "./components/BlogDetails";
import { useEffect, useRef, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StatsStrip } from "./components/StatsStrip";
import { BrandMarquee } from "./components/BrandMarquee";
import { BikeCategories } from "./components/BikeCategories";
import { HowItWorks } from "./components/HowItWorks";
import { DestinationDiscovery } from "./components/DestinationDiscovery";
import { ExploreIndia } from "./components/ExploreIndia";
import { AppDownload } from "./components/AppDownload";
import { AppShowcase } from "./components/AppShowcase";
import { HostSection } from "./components/HostSection";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { RouteDetails } from "./components/RouteDetails";
import CategoryPage from "./components/categorypage";

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <div
              className="min-h-screen"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <Header />
              <Hero />
              <StatsStrip />
              <BrandMarquee />
              <ScrollReveal><BikeCategories /></ScrollReveal>
              <ScrollReveal><HowItWorks /></ScrollReveal>
              <ScrollReveal><DestinationDiscovery /></ScrollReveal>
              <ScrollReveal><ExploreIndia /></ScrollReveal>
              <AppShowcase />
              <ScrollReveal><AppDownload /></ScrollReveal>
              <ScrollReveal><HostSection /></ScrollReveal>
              <ScrollReveal><Testimonials /></ScrollReveal>
              <ScrollReveal><FAQ /></ScrollReveal>
              <ScrollReveal><Blog /></ScrollReveal>
              <Footer />
              <WhatsAppButton />
            </div>
          }
        />

        <Route
          path="/blog/:id"
          element={<BlogDetails />}
        />
        <Route
          path="/route/:id"
          element={<RouteDetails />}
        />
        <Route
          path="/bikes/:category"
          element={<CategoryPage />}
        />
      

      </Routes>
    </BrowserRouter>
  );
}