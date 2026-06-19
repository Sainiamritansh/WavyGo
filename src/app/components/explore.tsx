import { useSearchParams } from "react-router-dom";
import { VENDORS } from "./vendors";

console.log("Explore page loaded");

export function Explore() {
  const [params] = useSearchParams();
  const category = params.get("category") || "all";

  return (
    <section className="py-10 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">
        Explore Bike Rentals
      </h1>

      <p className="text-gray-500 mb-6">
        Category:{" "}
        <span className="font-semibold text-black">
          {category}
        </span>
      </p>

      <div className="space-y-6">
        {VENDORS?.map((vendor) => {
          const bikes = (vendor.bikes || []).filter((b) => {
            return (
              category === "all" ||
              b.category?.toLowerCase().trim() ===
                category.toLowerCase().trim()
            );
          });

          if (bikes.length === 0) return null;

          return (
            <div
              key={vendor.id}
              className="border rounded-xl p-4 shadow-sm"
            >
              <h2 className="text-xl font-semibold">
                {vendor.name}
              </h2>

              <p className="text-sm text-gray-500 mb-3">
                {vendor.location} • {vendor.distance} km away
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {bikes.map((bike) => (
                  <div
                    key={bike.id}
                    className="border rounded-lg overflow-hidden"
                  >
                    <img
                      src={bike.image}
                      className="h-36 w-full object-cover"
                    />

                    <div className="p-3">
                      <h3 className="font-medium">
                        {bike.name}
                      </h3>

                      <p className="text-gray-500 text-sm">
                        ₹{bike.price}/day
                      </p>

                      <button className="mt-2 w-full bg-green-700 text-white py-2 rounded">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {(!VENDORS || VENDORS.length === 0) && (
        <div className="text-center text-gray-400 mt-10">
          No vendors available
        </div>
      )}
    </section>
  );
}