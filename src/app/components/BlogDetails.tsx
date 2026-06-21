import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS, CATEGORY_COLORS, CATEGORY_TEXT_COLORS } from "../../data";
import { Calendar, Clock, User, AlertCircle, Lightbulb, Info, ArrowRight, ChevronRight } from "lucide-react";

export function BlogDetails() {
  const { id } = useParams();

  const blog = BLOG_POSTS.find((post) => post.id === Number(id));
  const relatedBlogs = BLOG_POSTS.filter(
    (post) => post.category === blog?.category && post.id !== blog?.id
  ).slice(0, 3);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Not Found</h1>
          <Link to="/" className="text-[#1a5c38] hover:underline">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  // Dynamic content sections based on category
  const getContentSections = () => {
    const baseContent = {
      "Rental Guide": {
        intro: "Your complete roadmap to understanding bike rentals",
        sections: [
          {
            title: "Understanding the Basics",
            content: [
              "Bike rentals offer flexibility and freedom without the commitment of ownership. Whether you're planning a weekend getaway or exploring new routes, knowing the fundamentals helps you make confident choices.",
              "From documentation requirements to understanding rental agreements, this guide walks you through every step of the process."
            ]
          },
          {
            title: "Step-by-Step Process",
            content: [
              "1. Choose your rental partner and browse available bikes\n2. Verify your identification and riding credentials\n3. Inspect the bike thoroughly before accepting it\n4. Understand the rental terms and insurance coverage\n5. Complete all paperwork and pay required deposits\n6. Take photos of the bike's condition\n7. Ride responsibly and return on time"
            ]
          },
          {
            title: "Key Takeaways",
            highlight: true,
            items: [
              "Always inspect the bike before and after your ride",
              "Keep all rental documents safe and accessible",
              "Understand your insurance coverage thoroughly",
              "Know the fuel policy and return expectations",
              "Contact support immediately if you encounter issues"
            ]
          }
        ],
        tips: [
          "Compare rental rates across multiple platforms",
          "Book in advance during peak seasons",
          "Ask about damage waiver policies",
          "Keep photos of the bike condition as proof"
        ]
      },
      "Safety": {
        intro: "Protecting yourself on every ride",
        sections: [
          {
            title: "The Importance of Riding Safely",
            content: [
              "Safety isn't just about following rules—it's about making it home safely every single day. Motorcycle riding comes with inherent risks, but proper knowledge and habits can significantly reduce them.",
              "Understanding potential hazards and developing defensive riding skills are essential for all riders."
            ]
          },
          {
            title: "Critical Safety Checks",
            content: [
              "• Brakes: Test both front and rear brakes\n• Tyres: Check pressure and tread depth\n• Lights: Verify headlight, taillight, and turn signals\n• Mirrors: Ensure clear visibility on both sides\n• Fuel: Start with a full tank\n• Chain: Check tension and lubrication\n• Fluids: Verify oil, coolant, and brake fluid levels"
            ]
          },
          {
            title: "Essential Takeaways",
            highlight: true,
            items: [
              "Never skip pre-ride inspections",
              "Invest in quality protective gear",
              "Ride within your skill level",
              "Stay alert to traffic and road conditions",
              "Take advanced riding courses when possible"
            ]
          }
        ],
        warnings: [
          "Riding without proper gear significantly increases injury risk",
          "Fatigued riders have slower reaction times—take breaks",
          "Weather changes can affect road grip—adjust speed accordingly",
          "Never ride after consuming alcohol"
        ]
      },
      "Riding Tips": {
        intro: "Master the techniques that experienced riders swear by",
        sections: [
          {
            title: "Developing Rider Skills",
            content: [
              "Every expert rider started as a beginner. The difference between confident and hesitant riders comes down to practice, proper technique, and continuous learning.",
              "These tips have been refined through thousands of miles of real-world riding experience."
            ]
          },
          {
            title: "Core Riding Techniques",
            content: [
              "1. Body positioning: Lean with the bike, keep your arms relaxed\n2. Throttle control: Smooth acceleration prevents wheel spin\n3. Braking: Progressive braking rather than sudden stops\n4. Cornering: Look through the turn, not at the pavement\n5. Defensive awareness: Anticipate other road users\n6. Trail braking: Brake while entering corners for better control"
            ]
          },
          {
            title: "Pro Tips",
            highlight: true,
            items: [
              "Practice emergency maneuvers in safe environments",
              "Maintain steady throttle through curves",
              "Use both brakes smoothly, not abruptly",
              "Always scan ahead for potential hazards",
              "Build speed gradually—don't rush progress"
            ]
          }
        ],
        tips: [
          "Take MSF (Motorcycle Safety Foundation) courses",
          "Practice in parking lots before riding streets",
          "Film yourself riding for technique analysis",
          "Ride with experienced riders and learn from them"
        ]
      },
      "Travel Tips": {
        intro: "Pack smart, ride smart, enjoy more",
        sections: [
          {
            title: "Preparation is Everything",
            content: [
              "The difference between a memorable trip and a frustrating one often comes down to preparation. Packing efficiently means you travel faster, more comfortably, and with less fatigue.",
              "Smart riders plan their journeys with attention to detail."
            ]
          },
          {
            title: "Essential Packing Categories",
            content: [
              "• Protective Gear: Helmet, jacket, gloves, boots, pants\n• Tools & Spares: Multi-tool, spare tubes, chain oil, levers\n• Documents: License, registration, insurance, permits\n• Navigation: Maps, GPS, phone charger\n• Comfort: Toiletries, medications, quick-dry clothes\n• Emergency: First aid kit, flashlight, reflective gear"
            ]
          },
          {
            title: "Packing Essentials",
            highlight: true,
            items: [
              "Use compression bags to save space",
              "Distribute weight evenly on the bike",
              "Keep important documents in waterproof pouches",
              "Pack a compact emergency kit",
              "Leave room for souvenirs and discoveries"
            ]
          }
        ],
        tips: [
          "Weigh your loaded bike to ensure balance",
          "Do a practice ride with full luggage",
          "Store valuables close to your body",
          "Take photos of your packing arrangement"
        ]
      },
      "Comparison": {
        intro: "Rental vs Ownership: Which is right for you?",
        sections: [
          {
            title: "Understanding Your Options",
            content: [
              "The choice between renting and owning depends on your lifestyle, budget, and riding frequency. Both options have distinct advantages.",
              "Making an informed decision helps you maximize value and enjoyment."
            ]
          },
          {
            title: "Rental Advantages",
            content: [
              "• No maintenance responsibilities\n• Access to different bike types\n• No insurance burden\n• Lower upfront costs\n• Perfect for occasional riders\n• Professional support\n• Flexibility to change bikes"
            ]
          },
          {
            title: "Ownership Advantages",
            content: [
              "• Complete control and customization\n• Cost-effective for frequent riders\n• No usage restrictions\n• Build familiarity with your machine\n• Better for long-term projects\n• Emotional connection to your bike"
            ]
          },
          {
            title: "Decision Matrix",
            highlight: true,
            items: [
              "Rent if: You ride occasionally, want variety, prefer low commitment",
              "Own if: You ride frequently, want customization, value long-term investment",
              "Hybrid approach: Rent for adventures, own for daily commuting"
            ]
          }
        ],
        tips: [
          "Calculate annual costs for both options",
          "Consider storage and parking availability",
          "Try before you buy—rent different models",
          "Factor in maintenance and repair costs"
        ]
      },
      "Destination Story": {
        intro: "Discovering hidden gems off the beaten path",
        sections: [
          {
            title: "Why Explore Hidden Routes",
            content: [
              "The best riding experiences often happen on roads that aren't crowded with tourists. Hidden routes offer authenticity, adventure, and genuine connections with local communities.",
              "These lesser-known destinations showcase the true character of a region."
            ]
          },
          {
            title: "Finding Your Next Adventure",
            content: [
              "Hidden routes are discovered through local knowledge, detailed research, and willingness to explore. Start with travel forums, local riders, and regional tourism resources.",
              "The best discoveries often come from conversations with locals who know the area intimately."
            ]
          },
          {
            title: "Destination Essentials",
            highlight: true,
            items: [
              "Research road conditions before visiting",
              "Connect with local riding communities",
              "Respect local customs and regulations",
              "Support local businesses along your route",
              "Leave the place better than you found it"
            ]
          }
        ],
        tips: [
          "Time your visit for optimal weather",
          "Learn basic local language phrases",
          "Carry extra water and supplies",
          "Document your journey responsibly"
        ]
      }
    };

    return baseContent[blog.category as keyof typeof baseContent] || baseContent["Rental Guide"];
  };

  const content = getContentSections();
  const tableOfContents = content.sections.map(s => s.title);

  return (
    <div className="bg-white">
      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-6 py-6 border-b border-gray-100">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-[#1a5c38] hover:gap-2 transition-all"
        >
          <ChevronRight size={16} className="rotate-180" />
          Back to Blogs
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-6">
          <span
            className="text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider"
            style={{
              background: CATEGORY_COLORS[blog.category],
              color: CATEGORY_TEXT_COLORS[blog.category],
            }}
          >
            {blog.category}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {blog.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1a5c38] to-[#f5a623] rounded-full flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">By</p>
              <p className="font-semibold text-gray-900">{blog.author}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Calendar size={18} className="text-[#f5a623]" />
            <span>{blog.date}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={18} className="text-[#f5a623]" />
            <span>{blog.readTime}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Introduction */}
          <div className="mb-12 p-6 bg-blue-50 border-l-4 border-[#1a5c38] rounded-r-xl">
            <p
              className="text-lg text-gray-700 leading-relaxed italic"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {blog.excerpt}
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-white border border-gray-200 rounded-2xl">
            <h3 className="font-bold text-lg mb-4 text-gray-900">In This Article</h3>
            <div className="space-y-2">
              {tableOfContents.map((item, idx) => (
                <a
                  key={idx}
                  href={`#section-${idx}`}
                  className="flex items-center gap-3 text-[#1a5c38] hover:text-[#f5a623] transition-colors py-2"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1a5c38] text-white text-xs flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="hover:underline">{item}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {content.sections.map((section, idx) => (
              <div key={idx} id={`section-${idx}`} className="scroll-mt-20">
                <h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {section.title}
                </h2>

                {section.highlight ? (
                  <div className="bg-gradient-to-r from-[#1a5c38]/5 to-[#f5a623]/5 border border-[#1a5c38]/20 rounded-2xl p-6 mb-6">
                    <div className="flex gap-3 mb-4">
                      <Lightbulb size={24} className="text-[#f5a623] flex-shrink-0 mt-1" />
                      <h4 className="text-lg font-semibold text-gray-900">Key Takeaways</h4>
                    </div>
                    <ul className="space-y-3">
                      {section.items?.map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray-700">
                          <CheckmarkIcon />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    {section.content?.map((para, i) => (
                      <p key={i} className="text-base">
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tips Section */}
          {content.tips && (
            <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
              <div className="flex gap-3 mb-4">
                <Lightbulb size={24} className="text-amber-600 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-semibold text-gray-900">Pro Tips</h3>
              </div>
              <ul className="space-y-3">
                {content.tips.map((tip, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <ArrowIcon />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Warnings Section */}
          {content.warnings && (
            <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-2xl">
              <div className="flex gap-3 mb-4">
                <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-semibold text-gray-900">Important Warnings</h3>
              </div>
              <ul className="space-y-3">
                {content.warnings.map((warning, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-red-600 font-bold">•</span>
                    <span>{warning}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <div className="bg-gray-50 py-16 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Related Articles
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  to={`/blog/${relatedBlog.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={relatedBlog.img}
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-[#f5a623] font-semibold mb-2">{relatedBlog.category}</p>
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#1a5c38] transition-colors">
                      {relatedBlog.title}
                    </h4>
                    <p className="text-xs text-gray-500">{relatedBlog.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <div className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 mb-6">Ready to explore more riding stories and guides?</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#1a5c38] text-white font-semibold rounded-lg hover:bg-[#0f3d27] transition-colors"
          >
            Back to All Articles
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function CheckmarkIcon() {
  return (
    <span className="text-[#1a5c38] font-bold text-xl mt-0.5 flex-shrink-0">✓</span>
  );
}

function ArrowIcon() {
  return (
    <span className="text-[#f5a623] font-bold mt-0.5 flex-shrink-0">→</span>
  );
}