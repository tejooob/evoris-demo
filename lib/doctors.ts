export type DoctorMetaIcon = "experience" | "teaching" | "research";

export type Doctor = {
  slug: string;
  degree: string;
  name: string;
  photo?: string;
  roles: string[];
  bio: string;
  meta: { icon: DoctorMetaIcon; text: string }[];
  expertise: string[];
  specialtyHref: string;
  specialtyLabel: string;
};

export const doctors: Doctor[] = [
  {
    slug: "shashank-deshpande",
    degree: "BDS, MDS · Periodontology & Oral Implantology",
    name: "Dr. Shashank Deshpande",
    roles: ["Periodontist", "Oral Implantologist", "PhD Scholar"],
    bio: "A gum specialist and oral implantologist focused on advanced, evidence-based care with an emphasis on patient comfort and long-term oral health. He diagnoses and treats gum disease, performs periodontal surgery and places advanced implants, restoring both function and aesthetics with precision and painless, minimally invasive techniques.",
    meta: [
      { icon: "teaching", text: "Assistant Professor at a reputed dental college in Mumbai" },
      { icon: "research", text: "PhD Scholar in Periodontology & Oral Implantology" },
    ],
    expertise: [
      "Immediate dental implants",
      "Gum & soft-tissue disease",
      "Full mouth implant supported fixed teeth",
      "Implant supported fixed dentures for geriatric patients",
      "Scaling & root planing",
      "Periodontal flap surgery",
      "Bone grafting & ridge augmentation",
      "Gum grafting",
      "Crown lengthening",
      "Peri-implant care",
    ],
    specialtyHref: "/periodontics-implants",
    specialtyLabel: "periodontics & dental implants",
  },
  {
    slug: "shivani-vyavahare-deshpande",
    degree: "BDS, MDS · Conservative Dentistry & Endodontics",
    name: "Dr. Shivani Vyavahare Deshpande",
    roles: ["Endodontist", "Cosmetic Dental Surgeon"],
    bio: "A conservative dentistry and endodontics specialist dedicated to preserving natural teeth and restoring confident smiles through precise, minimally invasive care. Known for her gentle approach, she takes time to understand each patient and builds personalized, evidence-based treatment plans for comfortable, long-lasting results.",
    meta: [
      { icon: "teaching", text: "Faculty, MGM Dental College & Hospital, Kamothe, Mumbai" },
      { icon: "teaching", text: "Assistant Professor at a reputed dental college in Mumbai" },
      { icon: "research", text: "BDS, Government Dental College, Nagpur" },
      { icon: "research", text: "MDS in Conservative Dentistry and Endodontics" },
    ],
    expertise: [
      "Root canal treatment",
      "Aesthetic restorations/tooth coloured fillings",
      "Full-mouth rehabilitation",
      "Dental veneers",
      "Smile designing",
      "Dental crowns and bridge",
      "Teeth whitening",
      "Minimally invasive dentistry",
    ],
    specialtyHref: "/root-canal-dentistry",
    specialtyLabel: "root canal & restorative dentistry",
  },
];
