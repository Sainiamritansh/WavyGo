import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const TOGGLE_WIDTH = 56;
const TOGGLE_HEIGHT = 28;
const KNOB_SIZE = 22;
const KNOB_PADDING = 3;

/**
 * Animated pill-shaped dark/light mode toggle.
 * Uses Framer Motion for the sliding knob and smooth colour transition.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        width: TOGGLE_WIDTH,
        height: TOGGLE_HEIGHT,
        borderRadius: TOGGLE_HEIGHT / 2,
        border: "none",
        cursor: "pointer",
        padding: 0,
        background: isDark
          ? "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
          : "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
        transition: "background 250ms ease",
        boxShadow: isDark
          ? "inset 0 1px 3px rgba(0,0,0,0.4), 0 0 8px rgba(99,102,241,0.15)"
          : "inset 0 1px 3px rgba(0,0,0,0.15), 0 0 8px rgba(251,191,36,0.2)",
        outline: "none",
        flexShrink: 0,
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleTheme();
        }
      }}
    >
      {/* Sliding knob */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30, duration: 0.25 }}
        style={{
          position: "absolute",
          top: KNOB_PADDING,
          left: isDark
            ? TOGGLE_WIDTH - KNOB_SIZE - KNOB_PADDING
            : KNOB_PADDING,
          width: KNOB_SIZE,
          height: KNOB_SIZE,
          borderRadius: "50%",
          background: isDark
            ? "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #fef3c7 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: isDark
            ? "0 2px 6px rgba(99,102,241,0.4)"
            : "0 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 360 : 0, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isDark ? (
            <Moon size={13} color="#e0e7ff" strokeWidth={2.5} />
          ) : (
            <Sun size={13} color="#d97706" strokeWidth={2.5} />
          )}
        </motion.div>
      </motion.div>

      {/* Background icons (subtle, opposite side of knob) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 7px",
          pointerEvents: "none",
        }}
      >
        <motion.div
          animate={{ opacity: isDark ? 0.6 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Sun size={12} color="#fbbf24" strokeWidth={2} />
        </motion.div>
        <motion.div
          animate={{ opacity: isDark ? 0 : 0.5 }}
          transition={{ duration: 0.2 }}
        >
          <Moon size={12} color="#64748b" strokeWidth={2} />
        </motion.div>
      </div>
    </button>
  );
}
