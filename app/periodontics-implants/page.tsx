import type { Metadata } from "next";
import SpecialtyPage from "@/components/SpecialtyPage";
import { doctors } from "@/lib/doctors";

export const metadata: Metadata = {
  title: "Periodontics & Dental Implants in Kharghar",
  description:
    "Gum disease treatment and dental implants in Sector 8, Kharghar with Dr. Shashank Deshpande, MDS Periodontist & Oral Implantologist. Bone grafting, gum surgery, immediate implants and peri-implant care.",
  alternates: { canonical: "/periodontics-implants" },
};

const doctor = doctors.find((d) => d.slug === "shashank-deshpande")!;

const conditions = [
  "Bleeding or swollen gums",
  "Receding gums and tooth sensitivity",
  "Loose or shifting teeth",
  "One or more missing teeth",
  "Persistent bad breath linked to gum disease",
  "Bone loss around teeth or old dentures",
  "A gummy smile needing crown lengthening",
  "Discomfort or infection around an existing implant",
];

const steps = [
  {
    title: "Examination & X-ray diagnosis",
    desc: "A full gum and bone assessment, including X-rays, to understand the exact extent of gum disease or bone loss before recommending anything.",
  },
  {
    title: "A written treatment plan",
    desc: "Costs and options explained clearly before any procedure begins, so there are no surprise add-ons mid-treatment.",
  },
  {
    title: "Treatment, planned for comfort",
    desc: "Scaling, gum surgery or implant placement performed with painless, minimally invasive technique.",
  },
  {
    title: "Healing & maintenance",
    desc: "Follow-up visits and a maintenance schedule to keep gums and implants healthy for the long term.",
  },
];

const faqs = [
  {
    q: "Is gum treatment painful?",
    a: "Modern scaling, root planing and periodontal surgery are performed under local anaesthesia with minimally invasive technique, so most patients feel little to no pain and recover quickly.",
  },
  {
    q: "How long do dental implants last?",
    a: "With good oral hygiene and regular check-ups, dental implants can last well over 15 to 20 years, and often a lifetime.",
  },
  {
    q: "Do I need a bone graft before an implant?",
    a: "Only if there isn't enough bone at the implant site. Dr. Shashank checks this on your X-ray and explains whether grafting or ridge augmentation is needed.",
  },
  {
    q: "Can I get an implant immediately after a tooth extraction?",
    a: "In many cases, yes. Immediate implant placement is one of Dr. Shashank's areas of focus, though suitability depends on the individual case.",
  },
  {
    q: "Is smoking a problem for gum treatment or implants?",
    a: "Smoking slows healing and increases the risk of gum disease and implant failure. It is not an automatic disqualifier, but it will be discussed as part of your treatment plan.",
  },
];

export default function PeriodonticsImplants() {
  return (
    <SpecialtyPage
      kicker="Periodontology & Oral Implantology"
      title="Periodontics & Dental Implants in Kharghar"
      lede={
        <>
          Gum disease care and dental implant treatment in Sector 8, Kharghar, led by{" "}
          <strong>{doctor.name}</strong>, {doctor.degree}.
        </>
      }
      conditions={conditions}
      serviceSlugs={["dental-implants", "gum-treatment", "implant-dentures", "full-mouth-rehab", "wisdom-tooth"]}
      serviceTitleOverrides={{ "full-mouth-rehab": "Full Mouth Implant Rehabilitation" }}
      doctor={doctor}
      steps={steps}
      faqs={faqs}
      otherSpecialty={{ href: "/root-canal-dentistry", label: "Root canal & restorative dentistry" }}
    />
  );
}
