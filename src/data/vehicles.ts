import activa6g from "../public/images.jpeg/activa6g.avif";
import gt650 from "../public/images.jpeg/gt650.webp";
import himalayan from "../public/images.jpeg/himalayan.jpg.jpeg";
import hunter from "../public/images.jpeg/hunter.jpg.jpeg";
import jupiter from "../public/images.jpeg/jupiter.jpg.jpeg";
import ninja from "../public/images.jpeg/ninja.jpg.jpeg";
import ola from "../public/images.jpeg/ola.jpg.jpeg";
import splendor from "../public/images.jpeg/splendor.jpg.jpeg";
export interface Vehicle {
  id: number;
  name: string;
  vendor: string;
  location: string;
  price: number;
  rating: number;
  image: string;
}

export const vehicles: Record<string, Vehicle[]> = {
  scooter: [
    {
      id: 1,
      name: "Honda Activa 6G",
      vendor: "Raj Bikes",
      location: "Hyderabad",
      price: 299,
      rating: 4.5,
      image: activa6g,
    },
    {
      id: 2,
      name: "TVS Jupiter",
      vendor: "Speed Rentals",
      location: "Hyderabad",
      price: 320,
      rating: 4.7,
      image: jupiter,
    },
  ],

  commuter: [
    {
      id: 3,
      name: "Hero Splendor",
      vendor: "City Riders",
      location: "Hyderabad",
      price: 399,
      rating: 4.6,
      image: splendor,
    },
  ],

  adventure: [
    {
      id: 4,
      name: "Royal Enfield Himalayan",
      vendor: "Adventure Hub",
      location: "Hyderabad",
      price: 799,
      rating: 4.9,
      image: himalayan,
    },
    {
      id: 5,
      name: "GT 650",
      vendor: "Adventure Hub",
      location: "Hyderabad",
      price: 899,
      rating: 4.8,
      image: gt650,
    }
  ],
    cruiser: [
    {
      id: 6,
      name: "Royal Enfield Hunter 350",
      vendor: "Adventure Hub",
      location: "Hyderabad",
      price: 1999,
      rating: 4.7,
      image: hunter,
    },
  ],
    sports: [
    {
      id: 7,
      name: "Kawasaki Ninja 300",
      vendor: "VN Bikes",
      location: "Hyderabad",
      price: 1499,
      rating: 4.9,
      image: ninja,
    },
  ],
    ebikes: [
    {
      id: 8,
      name: "Ola S1 Pro",
      vendor: "PK Motors",
      location: "Hyderabad",
      price: 599,
      rating: 4.9,
      image: ola,
    },
  ],
};