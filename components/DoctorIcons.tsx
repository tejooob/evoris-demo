import type { DoctorMetaIcon } from "@/lib/doctors";

const mStroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function DoctorMetaIconGlyph({ icon }: { icon: DoctorMetaIcon }) {
  if (icon === "experience") {
    return (
      <svg viewBox="0 0 24 24" {...mStroke} aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15.5 14" />
      </svg>
    );
  }
  if (icon === "teaching") {
    return (
      <svg viewBox="0 0 24 24" {...mStroke} aria-hidden="true">
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" {...mStroke} aria-hidden="true">
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
    </svg>
  );
}
