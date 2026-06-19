import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "../../data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p
            className="text-[#f5a623] mb-2 uppercase tracking-widest"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem" }}
          >
            Got Questions?
          </p>
          <h2
            className="text-[#111827]"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="border rounded-2xl overflow-hidden transition-all"
              style={{ borderColor: open === i ? "#1a5c38" : "#e5e7eb" }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="text-gray-900 pr-4"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: open === i ? "#1a5c38" : "#111827",
                  }}
                >
                  {faq.q}
                </span>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{ background: open === i ? "#1a5c38" : "#f0f5f2" }}
                >
                  {open === i
                    ? <Minus size={14} className="text-white" />
                    : <Plus size={14} className="text-[#1a5c38]" />
                  }
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            Still have questions? Our team is always ready to help.
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1a5c38] text-white px-6 py-3 rounded-full text-sm hover:bg-[#0f3d21] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            Chat with Support
          </a>
        </div>
      </div>
    </section>
  );
}
