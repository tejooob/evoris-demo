"use client";

import { useState } from "react";

type QuizOption = {
  key: string;
  label: string;
  result: {
    title: string;
    desc: string;
    href: string;
    linkLabel: string;
    serviceSlug: string;
    serviceAlt: string;
  };
};

const options: QuizOption[] = [
  {
    key: "pain",
    label: "Tooth pain, sensitivity or a cracked tooth",
    result: {
      title: "Root canal & restorative care",
      desc: "This usually points to a root canal or a restoration, both led by our endodontics specialist, Dr. Shivani Vyavahare Deshpande.",
      href: "/root-canal-dentistry",
      linkLabel: "See root canal & restorative care",
      serviceSlug: "single-sitting-rct",
      serviceAlt: "Root canal treatment in progress",
    },
  },
  {
    key: "missing",
    label: "A missing tooth or a loose denture",
    result: {
      title: "Dental implants",
      desc: "A fixed, implant-supported tooth or denture is usually the most comfortable long-term fix, led by our implantologist, Dr. Shashank Deshpande.",
      href: "/periodontics-implants",
      linkLabel: "See periodontics & dental implants",
      serviceSlug: "dental-implants",
      serviceAlt: "Dental implant model",
    },
  },
  {
    key: "gums",
    label: "Bleeding, swollen or receding gums",
    result: {
      title: "Gum care & periodontics",
      desc: "This points to gum disease, best assessed early by our periodontist, Dr. Shashank Deshpande, before it affects the bone.",
      href: "/periodontics-implants",
      linkLabel: "See periodontics & dental implants",
      serviceSlug: "gum-treatment",
      serviceAlt: "Close-up of healthy gums and teeth",
    },
  },
  {
    key: "smile",
    label: "A stained, gapped or uneven smile",
    result: {
      title: "Smile design & cosmetic care",
      desc: "Whitening, veneers or contouring can usually correct this in a few visits with our cosmetic specialist, Dr. Shivani Vyavahare Deshpande.",
      href: "/root-canal-dentistry",
      linkLabel: "See smile design & cosmetic care",
      serviceSlug: "smile-makeover",
      serviceAlt: "A bright, well-designed smile",
    },
  },
  {
    key: "crowding",
    label: "Crowded, crooked or gapped teeth",
    result: {
      title: "Orthodontics & Aligners",
      desc: "Braces or clear aligners can gradually straighten teeth without surgery, planned around your bite and schedule.",
      href: "/treatments#orthodontics",
      linkLabel: "See orthodontic treatment",
      serviceSlug: "orthodontics",
      serviceAlt: "Orthodontic dental braces",
    },
  },
  {
    key: "checkup",
    label: "Nothing specific, just a routine checkup",
    result: {
      title: "Checkup & cleaning",
      desc: "A routine exam and cleaning is a great way to catch small issues early, before they turn into bigger ones.",
      href: "/treatments#cleaning-polishing",
      linkLabel: "See cleaning & checkups",
      serviceSlug: "cleaning-polishing",
      serviceAlt: "Dental cleaning and polishing",
    },
  },
];

export default function SmileQuiz() {
  const [selected, setSelected] = useState<string | null>(null);
  // Once the user has seen a result and come back, the scroll-reveal observer
  // has already run, so re-mounted options must render already-revealed.
  const [reshow, setReshow] = useState(false);
  const picked = options.find((o) => o.key === selected);

  return (
    <div className="quiz">
      {!picked ? (
        <div className="quiz-options" role="group" aria-label="What's bothering you the most?">
          {options.map((o, i) => (
            <button
              type="button"
              className={`quiz-option reveal${reshow ? " in" : ""}`}
              style={{ ["--i"]: i } as React.CSSProperties}
              key={o.key}
              onClick={() => setSelected(o.key)}
            >
              {o.label}
            </button>
          ))}
        </div>
      ) : (
        <div className="quiz-result">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/services/${picked.result.serviceSlug}.jpg`} alt={picked.result.serviceAlt} />
          <div className="quiz-result-body">
            <p className="quiz-result-label">Our suggestion</p>
            <h3>{picked.result.title}</h3>
            <p>{picked.result.desc}</p>
            <div className="quiz-result-cta">
              <a className="btn btn-gold" href={picked.result.href}>
                {picked.result.linkLabel}
              </a>
              <a className="btn btn-ghost" href="/#book">
                Book an appointment
              </a>
            </div>
            <button
              type="button"
              className="quiz-restart"
              onClick={() => {
                setReshow(true);
                setSelected(null);
              }}
            >
              &larr; Try a different answer
            </button>
          </div>
        </div>
      )}
      <p className="quiz-disclaimer">
        This is a rough guide, not a diagnosis. Dr. Shashank or Dr. Shivani will
        confirm what you need with a proper in-person exam.
      </p>
    </div>
  );
}
