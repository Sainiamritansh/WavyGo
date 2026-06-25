import { useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";
import {
  BLOG_POSTS,
  CATEGORY_COLORS,
  CATEGORY_TEXT_COLORS,
} from "../../data";

export function Blog() {
  const navigate = useNavigate();

  return (
    <section id="blog" className="py-20 bg-[#f7faf8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
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
        </div>

        {/* Vertical Blog List */}
        <div className="flex flex-col gap-6">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col md:flex-row"
            >
              {/* Image */}
              <div className="md:w-80 h-56 md:h-auto flex-shrink-0 overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-center flex-1">
                <span
                  className="text-xs px-3 py-1 rounded-full w-fit mb-4"
                  style={{
                    background: CATEGORY_COLORS[post.category],
                    color: CATEGORY_TEXT_COLORS[post.category],
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {post.category}
                </span>

                <h3
                  className="text-[#111827] mb-3"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                  }}
                >
                  {post.title}
                </h3>

                <p
                  className="text-gray-500 leading-relaxed mb-5"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.95rem",
                  }}
                >
                  {post.excerpt}
                </p>

                <div
                  className="flex items-center gap-2 text-gray-400 text-sm"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <Clock size={14} />
                  {post.readTime}
                  <span>•</span>
                  {post.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}