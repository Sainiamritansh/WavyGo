import { BIKE_CATEGORIES } from "./constants";
export const VENDORS = [
  {
    id: "v1",
    name: "Mumbai Bike Hub",
    location: "Bandra",
    distance: 2.1,
    bikes: [
      {
        id: "activa",
        name: "Honda Activa 6G",
        category: BIKE_CATEGORIES.SCOOTER,
        price: 600,
        image: "/bikes/activa.jpg",
      },
      {
        id: "himalayan",
        name: "Royal Enfield Himalayan",
        category: BIKE_CATEGORIES.ADVENTURE,
        price: 1800,
        image: "/bikes/himalayan.jpg",
      },
      {
        id: "ktm",
        name: "KTM RC 390",
        category: BIKE_CATEGORIES.SPORTS,
        price: 2200,
        image: "/bikes/ktm.jpg",
      },
    ],
  },
];
