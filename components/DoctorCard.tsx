import { DoctorMetaIconGlyph } from "@/components/DoctorIcons";
import type { Doctor } from "@/lib/doctors";

export default function DoctorCard({
  doctor: d,
  reverse = false,
  showLink = false,
}: {
  doctor: Doctor;
  reverse?: boolean;
  showLink?: boolean;
}) {
  return (
    <article className={`doc-card${d.photo ? "" : " no-photo"} reveal${reverse ? " reverse" : ""}`}>
      {d.photo && (
        <div className="doc-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={d.photo} alt={`Portrait of ${d.name}`} loading="lazy" />
        </div>
      )}
      <div className="doc-info">
        <p className="doc-degree">{d.degree}</p>
        <h3>{d.name}</h3>
        <div className="doc-roles">
          {d.roles.map((r) => (
            <span key={r}>{r}</span>
          ))}
        </div>
        <p className="doc-bio">{d.bio}</p>
        <ul className="doc-meta">
          {d.meta.map((m) => (
            <li key={m.text}>
              <DoctorMetaIconGlyph icon={m.icon} />
              <span>{m.text}</span>
            </li>
          ))}
        </ul>
        <p className="doc-focus-label">Focus areas</p>
        <div className="doc-tags">
          {d.expertise.map((e) => (
            <span key={e}>{e}</span>
          ))}
        </div>
        {showLink && (
          <a className="doc-specialty-link" href={d.specialtyHref}>
            Learn more about {d.specialtyLabel}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}
