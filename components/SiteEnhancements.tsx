"use client";

import { useEffect } from "react";

export default function SiteEnhancements() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    document
      .querySelectorAll(".reveal, .gold-rule")
      .forEach((el) => io.observe(el));

    // eslint-disable-next-line no-console
    console.log(
      "%cEvoris Dental Care & Implant Center",
      "font:600 15px Georgia,serif;color:#a07c3a"
    );
    // eslint-disable-next-line no-console
    console.log(
      "Sector 8, Kharghar, Navi Mumbai. Built with care — questions? Call 91371 61693."
    );

    return () => io.disconnect();
  }, []);

  return null;
}
