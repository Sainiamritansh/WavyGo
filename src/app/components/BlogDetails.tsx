import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS } from "../../data";

export function BlogDetails() {
  const { id } = useParams();

  const blog = BLOG_POSTS.find(
    (post) => post.id === Number(id)
  );

  if (!blog) {
    return (
      <div className="p-10 text-center">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        to="/"
        className="text-green-700 hover:underline"
      >
        ← Back to Blogs
      </Link>

      {/* Hero Image */}
      <img
        src={blog.img}
        alt={blog.title}
        className="w-full max-w-3xl h-96 object-cover rounded-2xl mx-auto mt-6 mb-8"
      />

      {/* Blog Meta */}
      <div className="text-center">
        <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm mb-3">
          {blog.category}
        </span>

        <h1 className="text-4xl font-bold mb-4">
          {blog.title}
        </h1>

        <p className="text-gray-500">
          {blog.date} • By {blog.author}
        </p>

        <p className="text-gray-500 mt-1">
          {blog.readTime}
        </p>
      </div>

      {/* Intro */}
      <div className="mt-10 text-lg text-gray-700 leading-8">
        <p>{blog.excerpt}</p>
      </div>

      {/* Main Content */}
      <div className="mt-10 space-y-6 text-gray-700 leading-8">
        <h2 className="text-2xl font-bold text-black">
          Why This Route Is Special
        </h2>

        <p>
          Motorcycle journeys are more than transportation.
          They offer freedom, adventure, and unforgettable
          memories. Every road has its own story, scenery,
          and challenges.
        </p>

        <p>
          Riders often choose these routes because of
          beautiful landscapes, smooth highways, mountain
          passes, and unique local experiences.
        </p>

        <h2 className="text-2xl font-bold text-black">
          Travel Tips
        </h2>

        <ul className="list-disc pl-6">
          <li>Wear proper riding gear.</li>
          <li>Check your bike before departure.</li>
          <li>Carry water and emergency supplies.</li>
          <li>Plan fuel stops in advance.</li>
          <li>Ride within speed limits.</li>
        </ul>

        <h2 className="text-2xl font-bold text-black">
          Best Time To Visit
        </h2>

        <p>
          The ideal riding season depends on the destination,
          but generally October to February offers pleasant
          weather and safer riding conditions.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        <div className="bg-gray-100 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500">
            Difficulty
          </p>
          <p className="font-bold">Easy</p>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500">
            Duration
          </p>
          <p className="font-bold">2-3 Days</p>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500">
            Best Season
          </p>
          <p className="font-bold">Oct-Feb</p>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500">
            Road Quality
          </p>
          <p className="font-bold">Excellent</p>
        </div>
      </div>
    </div>
  );
}