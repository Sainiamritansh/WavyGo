import { useRef, useState, useCallback, useEffect } from "react";

export function useCarousel(itemWidth: number, gap: number, total: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Internal drag state — not reactive, just stored in refs for perf
  const dragStart = useRef(0);
  const scrollStart = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const rafId = useRef<number>(0);

  const stride = itemWidth + gap;

  const scrollTo = useCallback(
    (index: number, smooth = true) => {
      const el = trackRef.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(index, total - 1));
      setCurrent(clamped);
      el.scrollTo({ left: clamped * stride, behavior: smooth ? "smooth" : "instant" });
    },
    [stride, total]
  );

  const prev = useCallback(() => scrollTo(current - 1), [current, scrollTo]);
  const next = useCallback(() => scrollTo(current + 1), [current, scrollTo]);

  // Sync current index when user scrolls natively (touch momentum, etc.)
  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el || isDragging) return;
    const idx = Math.round(el.scrollLeft / stride);
    setCurrent(Math.max(0, Math.min(idx, total - 1)));
  }, [isDragging, stride, total]);

  // ── Mouse drag ──────────────────────────────────────────
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const el = trackRef.current;
    if (!el) return;
    cancelAnimationFrame(rafId.current);
    setIsDragging(true);
    dragStart.current = e.clientX;
    scrollStart.current = el.scrollLeft;
    lastX.current = e.clientX;
    lastTime.current = performance.now();
    velocity.current = 0;
    el.style.scrollSnapType = "none";
    el.style.cursor = "grabbing";
  }, []);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      const el = trackRef.current;
      if (!el) return;
      const now = performance.now();
      const dt = now - lastTime.current;
      if (dt > 0) velocity.current = (e.clientX - lastX.current) / dt;
      lastX.current = e.clientX;
      lastTime.current = now;
      el.scrollLeft = scrollStart.current - (e.clientX - dragStart.current);
    },
    [isDragging]
  );

  const onMouseUp = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      const el = trackRef.current;
      if (!el) return;
      setIsDragging(false);
      el.style.scrollSnapType = "";
      el.style.cursor = "";

      // Momentum flick
      const v = velocity.current * 18;
      const target = el.scrollLeft - v;
      const snapped = Math.round(target / stride);
      scrollTo(snapped);
    },
    [isDragging, stride, scrollTo]
  );

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  return {
    trackRef,
    current,
    isDragging,
    prev,
    next,
    onMouseDown,
    onScroll,
    canPrev: current > 0,
    canNext: current < total - 1,
  };
}
