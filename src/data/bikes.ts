import { BikeCategory } from "@/types";

import scooter from "../public/images.jpeg/scooty.jpeg";
import commuter from "../public/images.jpeg/commuter.jpeg";
import cruiser from "../public/images.jpeg/cruiser.jpeg";
import sports from "../public/images.jpeg/sports.jpeg";
import ebike from "../public/images.jpeg/ebike.jpeg";

export const BIKE_CATEGORIES: BikeCategory[] = [
  {
    id: "ebike",
    name: "E-Bike",
    desc: "Eco-friendly urban mobility",
    price: "₹249",
    img: ebike,
    tag: "Eco Choice",
    color: "#e8f5ee",
  },
  {
    id: "commuter",
    name: "Commuter",
    desc: "Daily commutes & short trips",
    price: "₹399",
    img: commuter,
    tag: "Best Value",
    color: "#e8f5ee",
  },
  {
    id: "scooter",
    name: "Scooter",
    desc: "City rides & quick errands",
    price: "₹299",
    img: scooter,
    tag: "Most Popular",
    color: "#e8f5ee",
  },
  {
    id: "cruiser",
    name: "Cruiser",
    desc: "Long highway touring",
    price: "₹999",
    img: cruiser,
    tag: "Premium",
    color: "#e8f5ee",
  },
  {
    id: "sports",
    name: "Sports",
    desc: "High-performance riding",
    price: "₹1,299",
    img: sports,
    tag: "Thrill Seekers",
    color: "#e8f5ee",
  },
];