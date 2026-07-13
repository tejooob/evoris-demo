import type { Metadata } from "next";
import SpecialtyPage from "@/components/SpecialtyPage";
import { doctors } from "@/lib/doctors";

export const metadata: Metadata = {
  title: "Root Canal & Restorative Dentistry in Kharghar",
  description:
    "Root canal treatment, comprehensive cosmetic dentistry and smile design in Sector 8, Kharghar with Dr. Shivani Vyavahare Deshpande, MDS Conservative Dentistry & Endodontics. Single-sitting root canals, veneers, aesthetic restorations and full mouth rehabilitation.",
  alternates: { canonical: "/root-canal-dentistry" },
};

const doctor = doctors.find((d) => d.slug === "shivani-vyavahare-deshpande")!;

const conditions = [
  "Toothache or sensitivity to hot and cold",
  "A cracked, chipped or fractured tooth",
  "Deep decay reaching the nerve",
  "An old, failing or leaking filling",
  "Discoloured or stained front teeth",
  "Gaps, chips or uneven edges affecting your smile",
  "A tooth that has darkened after an old root canal or injury",
  "Wanting a full smile makeover before an event",
];

const steps = [
  {
    title: "Diagnosis & X-ray",
    desc: "Pinpointing the exact tooth and the cause of pain or damage before any treatment starts.",
  },
  {
    title: "A clear treatment plan",
    desc: "Costs and the number of visits explained upfront, so there are no surprises mid-treatment.",
  },
  {
    title: "Precise, minimally invasive treatment",
    desc: "Root canal, comprehensive cosmetic dentistry or veneers completed with modern, evidence-based technique.",
  },
  {
    title: "A natural-looking finish",
    desc: "Shade-matched restorations that blend with your natural teeth and function comfortably.",
  },
];

const faqs = [
  {
    q: "Is root canal treatment painful?",
    a: "No. Modern root canal treatment is done under local anaesthesia and is generally comfortable. Most of the pain patients associate with root canals is actually the infection that existed before treatment.",
  },
  {
    q: "How many visits does a root canal take?",
    a: "Many cases can be completed in a single sitting. More complex cases may need two visits, which Dr. Shivani will explain after your diagnosis.",
  },
  {
    q: "Will veneers damage my natural teeth?",
    a: "Veneers require minimal, conservative reduction of the tooth surface. Dr. Shivani's approach favours preserving as much natural tooth structure as possible.",
  },
  {
    q: "How long does teeth whitening last?",
    a: "In-clinic whitening results typically last one to two years, depending on diet, smoking and oral hygiene. Touch-ups can extend this.",
  },
  {
    q: "Can a badly broken-down tooth still be saved?",
    a: "Often, yes. Full-mouth rehabilitation and restorative options can rebuild badly worn or broken teeth without resorting to extraction, though each case is assessed individually.",
  },
];

export default function RootCanalDentistry() {
  return (
    <SpecialtyPage
      kicker="Conservative Dentistry & Endodontics"
      title="Root Canal & Restorative Dentistry in Kharghar"
      lede={
        <>
          Root canal treatment, comprehensive cosmetic dentistry and smile design in
          Sector 8, Kharghar, led by <strong>{doctor.name}</strong>, {doctor.degree}.
        </>
      }
      conditions={conditions}
      serviceSlugs={["single-sitting-rct", "cosmetic-care", "veneers", "teeth-whitening", "smile-makeover", "full-mouth-rehab"]}
      doctor={doctor}
      steps={steps}
      faqs={faqs}
      otherSpecialty={{ href: "/periodontics-implants", label: "Periodontics & dental implants" }}
    />
  );
}
