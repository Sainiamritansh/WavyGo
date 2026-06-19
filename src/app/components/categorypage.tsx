import { useParams } from "react-router-dom";
import { vehicles } from "../../data/vehicles";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();

  const categoryVehicles =
    category && vehicles[category]
      ? vehicles[category]
      : [];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {categoryVehicles.length === 0 ? (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold">
            No vehicles available
          </h2>
          <p className="text-gray-500 mt-2">
            Check your category name and data.
          </p>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6 capitalize">
            {category} Bikes
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h2 className="text-lg font-bold">
                    {vehicle.name}
                  </h2>

                  <p className="text-gray-600 text-sm mt-1">
                    Vendor: {vehicle.vendor}
                  </p>

                  <p className="text-gray-600 text-sm">
                    📍 {vehicle.location}
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <span className="text-yellow-500 font-medium">
                      ⭐ {vehicle.rating}
                    </span>

                    <span className="text-green-600 font-bold">
                      ₹{vehicle.price}/day
                    </span>
                  </div>

                  <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryPage;