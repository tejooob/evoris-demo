"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const links: [string, string][] = [
  ["Home", "/"],
  ["About", "/#about"],
  ["Treatments", "/treatments"],
  ["Gallery", "/#gallery"],
  ["Testimonials", "/#testimonials"],
  ["Contact", "/#visit"],
  ["Book", "/#book"],
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 1024) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector("a")?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  function close() {
    setOpen(false);
    btnRef.current?.focus();
  }

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        className="burger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="burger-box" data-open={open || undefined}>
          <span />
          <span />
          <span />
        </span>
      </button>

      {mounted &&
        createPortal(
          <>
            <div
              className={`m-overlay${open ? " open" : ""}`}
              onClick={close}
              aria-hidden="true"
            />
            <nav
              id="mobile-nav"
              ref={panelRef}
              className={`m-panel${open ? " open" : ""}`}
              aria-label="Site"
              inert={!open || undefined}
            >
              <div className="m-panel-head">
                <span className="m-panel-title">Menu</span>
                <button
                  type="button"
                  className="m-close"
                  aria-label="Close menu"
                  onClick={close}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
              <ul>
                {links.map(([label, href]) => (
                  <li key={href}>
                    <a href={href} onClick={close}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <a className="m-call" href="tel:+919137161693" onClick={close}>
                Call us · <b>91371 61693</b>
              </a>
            </nav>
          </>,
          document.body
        )}
    </>
  );
}
