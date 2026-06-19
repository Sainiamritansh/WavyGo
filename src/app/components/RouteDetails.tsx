import { Link, useParams } from "react-router-dom";
import { ROUTES } from "../../data";

export function RouteDetails() {
  const { id } = useParams();

  const route = ROUTES.find((r) => r.id === id);

  if (!route) {
    return (
      <div className="p-10 text-center">
        Route not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Link
        to="/"
        className="text-[#1a5c38] hover:underline"
      >
        ← Back to Routes
      </Link>

      {/* Hero Image */}
      <div className="flex justify-center mt-6 mb-8">
        <img
          src={route.img}
          alt={route.title}
          className="w-[400px] rounded-3xl"
        />
      </div>

      {/* Route Tag */}
      <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm mb-4">
        {route.tag}
      </span>

      {/* Title */}
      <h1 className="text-5xl font-bold mb-3">
        {route.title}
      </h1>

      <p className="text-xl text-gray-600 mb-8">
        {route.subtitle}
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-gray-100 p-4 rounded-xl text-center">
          <p className="text-gray-500 text-sm">Distance</p>
          <p className="font-bold">{route.km}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl text-center">
          <p className="text-gray-500 text-sm">Duration</p>
          <p className="font-bold">{route.days}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl text-center">
          <p className="text-gray-500 text-sm">Difficulty</p>
          <p className="font-bold">Moderate</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl text-center">
          <p className="text-gray-500 text-sm">Best Season</p>
          <p className="font-bold">May - Sept</p>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Route Overview
        </h2>

        <p className="text-gray-700 leading-8">
          {route.title} is one of India's most iconic motorcycle
          adventures. Riders experience breathtaking scenery,
          challenging roads, mountain passes, and unforgettable
          landscapes throughout the journey.
        </p>
      </section>

      {/* Highlights */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Route Highlights
        </h2>

        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Beautiful mountain landscapes</li>
          <li>Adventure riding experience</li>
          <li>Scenic photography spots</li>
          <li>Local food and culture</li>
          <li>Perfect for long-distance touring</li>
        </ul>
      </section>

      {/* Travel Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Travel Tips
        </h2>

        <ul className="list-disc pl-6 text-gray-700 leading-8">
          <li>Carry riding gear and rain protection.</li>
          <li>Check fuel stations beforehand.</li>
          <li>Keep emergency contacts available.</li>
          <li>Start early to avoid night riding.</li>
          <li>Service your motorcycle before departure.</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="bg-[#1a5c38] text-white rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-3">
          Ready for this adventure?
        </h3>

        <p className="mb-5">
          Rent the perfect bike and start your journey today.
        </p>

        <Link
          to="/"
          className="inline-block bg-white text-[#1a5c38] px-6 py-3 rounded-xl font-semibold"
        >
          Explore Bikes
        </Link>
      </div>
    </div>
  );
}