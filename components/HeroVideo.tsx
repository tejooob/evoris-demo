"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    // Honour reduced-motion: don't autoplay; the first frame stays as a still.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Play only while the hero is on screen (saves battery/CPU when scrolled away).
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="hero-video"
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/hero.mp4" type="video/mp4" />
    </video>
  );
}
