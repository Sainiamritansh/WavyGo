import { useNavigate } from "react-router-dom";
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { BLOG_POSTS, CATEGORY_COLORS, CATEGORY_TEXT_COLORS } from "../../data";
import { useCarousel } from "../../utils/hooks/useCarousel";

export function Blog() {
  const navigate = useNavigate();
  const { trackRef, current, prev, next, canPrev, canNext, onMouseDown, onScroll } = useCarousel(320, 24, BLOG_POSTS.length);

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

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={!canPrev}
              className="p-2 rounded-full hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} className="text-[#1a5c38]" />
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              className="p-2 rounded-full hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} className="text-[#1a5c38]" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            onMouseDown={onMouseDown}
            onScroll={onScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>{`
              .scroll-smooth::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate(`/blog/${post.id}`)}
                className="flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group cursor-pointer flex flex-col h-full snap-center"
              >
                <div className="h-32 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-4 flex-1 flex flex-col">
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
                    className="text-gray-900 mb-2 flex-1"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                    }}
                  >
                    {post.title}
                  </h3>

                  <div className="flex flex-col gap-2 text-gray-500 text-xs">
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {post.date}
                    </p>
                    <div
                      className="flex items-center gap-2 text-gray-400"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <Clock size={12} />
                      {post.readTime}
                      <span>·</span>
                      {post.author}
                    </div>
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