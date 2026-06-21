import { Stat, HostStat, HostStep } from "@/types";
import { Bike, MapPin, Shield, Star, Search, CreditCard, Key, Map } from "lucide-react";

export const STATS: Stat[] = [
  { icon: Bike, value: "10,000+", label: "Bikes listed across India" },
  { icon: MapPin, value: "50+", label: "Cities & destinations covered" },
  { icon: Shield, value: "100%", label: "Trip protection on every ride" },
  { icon: Star, value: "4.8★", label: "Average rating from 50K+ riders" },
];

export const HOW_IT_WORKS_STEPS = [
  {
    icon: Search,
    step: "01",
    title: "Search Your Destination",
    desc: "Enter where you're going and your travel dates. Filter by bike type, price range, or specific models.",
    color: "#e8f5ee",
    iconColor: "#1a5c38",
  },
  {
    icon: CreditCard,
    step: "02",
    title: "Book Instantly",
    desc: "Complete your KYC on the app in under 3 minutes. Pay securely online — no upfront cash needed.",
    color: "#fef9ee",
    iconColor: "#d97706",
  },
  {
    icon: Key,
    step: "03",
    title: "Pick Up & Ride",
    desc: "Head to the pickup point. Do a quick inspection, grab the key, and you're on your way.",
    color: "#eff6ff",
    iconColor: "#2563eb",
  },
  {
    icon: Map,
    step: "04",
    title: "Explore Freely",
    desc: "Unlimited kms, 24/7 roadside support. Return the bike when done — that's all there is to it.",
    color: "#f5f3ff",
    iconColor: "#7c3aed",
  },
];

export const DIFFICULTY_COLORS: Record<string, string> = {
  Easy: "#16a34a",
  Moderate: "#d97706",
  Challenging: "#dc2626",
};

export const TAG_COLORS: Record<string, string> = {
  "Epic Route": "#f5a623",
  Adventure: "#dc2626",
  Scenic: "#2563eb",
  Heritage: "#7c3aed",
  Coastal: "#0891b2",
};

export const CATEGORY_COLORS: Record<string, string> = {
  "Route Guide": "#e8f5ee",
  "Budget Travel": "#fef9ee",
  "Destination Story": "#eff6ff",
  "Riding Tips": "#fef2f2",
};

export const CATEGORY_TEXT_COLORS: Record<string, string> = {
  "Route Guide": "#1a5c38",
  "Budget Travel": "#d97706",
  "Destination Story": "#2563eb",
  "Riding Tips": "#dc2626",
};

export const HOST_STATS: HostStat[] = [
  { value: "₹18,000", label: "Avg. monthly earnings", sub: "per bike" },
  { value: "3,200+", label: "Active hosts", sub: "across India" },
  { value: "92%", label: "Booking fulfillment", sub: "rate" },
];

export const HOST_STEPS: HostStep[] = [
  { step: "01", title: "List your bike", desc: "Add your bike details, photos, and availability in under 10 minutes." },
  { step: "02", title: "Set your price", desc: "You control your daily rate. We suggest optimal pricing based on demand." },
  { step: "03", title: "Start earning", desc: "Get paid directly to your bank account after every completed rental." },
];

export const LOCATIONS = [
  "Dehradun", "Mussoorie", "Rishikesh", "Haridwar",
  "Manali", "Shimla", "Nainital", "Auli",
];

export const BRANDS = [
  "Royal Enfield", "Honda", "TVS", "Bajaj", "Hero MotoCorp",
  "Yamaha", "Suzuki", "KTM", "Jawa", "Ather Energy",
  "Royal Enfield", "Honda", "TVS", "Bajaj", "Hero MotoCorp",
  "Yamaha", "Suzuki", "KTM", "Jawa", "Ather Energy",
];

export const HERO_TRUST_CARDS = [
  {
    img: "https://images.unsplash.com/photo-1768410318156-b010055e2f59?w=600&h=400&fit=crop&auto=format",
    label: "Leh–Ladakh",
    tag: "Adventure Route",
    rating: 4.9,
    reviews: 312,
  },
  {
    img: "https://images.unsplash.com/photo-1770827963132-313f050341c3?w=600&h=400&fit=crop&auto=format",
    label: "Mussoorie Hills",
    tag: "Weekend Escape",
    rating: 4.8,
    reviews: 218,
  },
];

export const WHATSAPP_PHONE = "919876543210";
export const WHATSAPP_MESSAGE = "Hi WavyGo! I'd like to book a bike. Can you help me?";
