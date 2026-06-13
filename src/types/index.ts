/**
 * Type definitions for WavyGo
 */

export interface BikeCategory {
  id: string;
  name: string;
  desc: string;
  price: string;
  img: string;
  tag: string;
  color: string;
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  distance: string;
  rideTime: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  img: string;
  bikes: string[];
  highlight: string;
  popular: boolean;
}

export interface Route {
  id: string;
  title: string;
  subtitle: string;
  km: string;
  days: string;
  img: string;
  tag: string;
  featured: boolean;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  color: string;
  rating: number;
  text: string;
  tag: string;
  trip: string;
  verified: boolean;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  category: string;
  date: string;
  img: string;
  featured: boolean;
}

export interface Step {
  icon: React.ComponentType<{ size: number; style?: React.CSSProperties }>;
  step: string;
  title: string;
  desc: string;
  color?: string;
  iconColor?: string;
}

export interface Stat {
  icon: React.ComponentType<{ size: number; className?: string }>;
  value: string;
  label: string;
}

export interface Feature {
  icon: React.ComponentType<{ size: number; className?: string }>;
  text: string;
}

export interface HostStat {
  value: string;
  label: string;
  sub: string;
}

export interface HostStep {
  step: string;
  title: string;
  desc: string;
}

export interface BikeCategoryHost {
  id: string;
  name: string;
  type: string;
  price: string;
  rating: number;
  dist: string;
  badge: string;
  img: string;
}

export interface LocationSuggestion {
  name: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLinks {
  [category: string]: string[];
}
