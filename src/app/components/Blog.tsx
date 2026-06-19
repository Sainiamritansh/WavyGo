import { useNavigate } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";
import { BLOG_POSTS, CATEGORY_COLORS, CATEGORY_TEXT_COLORS } from "../../data";

export function Blog() {
  const navigate = useNavigate();

  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  return (
    <section id="blog" className="py-20 bg-[#f7faf8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p
              className="text-[#f5a623] mb-2 uppercase tracking-widest"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "0.78rem",
              }}
            >
              Rider Stories
            </p>

            <h2
              className="text-[#111827]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              }}
            >
              Roads Worth Riding
            </h2>

            <p
              className="text-gray-500 mt-2 max-w-xl"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
              }}
            >
              Travel guides, route journals, and riding stories from real
              people who've been there.
            </p>
          </div>

          <button
            className="hidden md:flex items-center gap-2 text-[#1a5c38] text-sm hover:underline"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
            }}
          >
            All stories <ArrowRight size={15} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured post */}
          <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group cursor-pointer">
            <div className="h-24 overflow-hidden">
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: CATEGORY_COLORS[featured.category],
                    color: CATEGORY_TEXT_COLORS[featured.category],
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {featured.category}
                </span>

                <span
                  className="text-gray-400 text-xs"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {featured.date}
                </span>
              </div>

              <h3
                className="text-[#111827] mb-3"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.35rem",
                }}
              >
                {featured.title}
              </h3>

              <p
                className="text-gray-500 text-sm leading-relaxed mb-5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {featured.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1a5c38] flex items-center justify-center">
                    <User size={14} className="text-white" />
                  </div>

                  <div>
                    <p
                      className="text-gray-800 text-xs"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {featured.author}
                    </p>

                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                      <Clock size={10} />
                      {featured.readTime}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/route/${route.id}`)}
                  className="flex items-center gap-1.5 text-xs text-white/80 hover:text-white transition-colors group/btn"
                  style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  }}
              >
                  Explore Route
                  <ArrowRight
                     size={13}
                     className="group-hover/btn:translate-x-1 transition-transform"
                   />
                </button>
              </div>
            </div>
          </div>

          {/* Side posts */}
          <div className="flex flex-col gap-4">
            {rest.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate(`/blog/${post.id}`)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer flex flex-col"
              >
                <div className="h-24 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-4 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs px-2.5 py-0.5 rounded-full"
                      style={{
                        background: CATEGORY_COLORS[post.category],
                        color: CATEGORY_TEXT_COLORS[post.category],
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {post.category}
                    </span>
                  </div>

                  <h3
                    className="text-gray-900 mb-1.5"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                    }}
                  >
                    {post.title}
                  </h3>

                  <div
                    className="flex items-center gap-2 text-gray-400 text-xs"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <Clock size={10} />
                    {post.readTime}
                    <span>·</span>
                    {post.author}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}