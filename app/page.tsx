import BookForm from "@/components/BookForm";
import SiteEnhancements from "@/components/SiteEnhancements";

const PHONE = "+919137161693";
const WHATSAPP =
  "https://wa.me/919137161693?text=Hello%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Evoris%20Dental.";
const MAPS_SEARCH =
  "https://www.google.com/maps/search/?api=1&query=Evoris+Dental+Care+%26+Implant+Center+Sector+8+Kharghar+Navi+Mumbai";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Evoris%20Dental%20Care%20%26%20Implant%20Center%2C%20Sector%208%2C%20Kharghar%2C%20Navi%20Mumbai%20410210&output=embed";

function PhoneIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.5.6 3.7.1.3 0 .7-.2 1l-2.3 2.1Z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0l2 6h6l-5 3.7L13 16 8 12.3 3 16l2-6.3L0 6h6z" />
    </svg>
  );
}

const services: [string, string][] = [
  ["Root Canal Treatment", "Painless single-visit and retreatment root canals that save your natural tooth."],
  ["Gum & Bone Care", "Treatment for bleeding gums, bad breath, loose teeth and receding gums."],
  ["Smile Design & Veneers", "Cosmetic corrections for chipped, stained, gapped or uneven front teeth."],
  ["Teeth Whitening", "In-clinic whitening for a visibly brighter smile in a single sitting."],
  ["Crowns & Bridges", "Metal-free ceramic and zirconia crowns matched to your natural shade."],
  ["Wisdom Tooth Removal", "Safe surgical extraction of impacted and painful wisdom teeth."],
  ["Kids' Dentistry", "Gentle checkups, fillings and fluoride care for children of all ages."],
  ["Cleaning & Polishing", "Ultrasonic scaling and polishing to keep gums healthy between visits."],
];

const whyItems: { icon: React.ReactNode; title: string; body: string }[] = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "MDS-qualified specialists only",
    body: "Both consultants hold postgraduate MDS degrees. You see the specialist, every visit, for every procedure.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "No hidden costs",
    body: "Full written treatment plan with costs explained before any procedure begins. What is quoted is what you pay.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Evening hours until 10 pm",
    body: "Open six days a week from 5 pm to 10 pm, so working professionals can get specialist care without taking leave.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Sterile instruments, every time",
    body: "Sealed autoclave-sterilized kits opened in front of you before every treatment. No shortcuts on infection control.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Both specialists under one roof",
    body: "Implants and root canals planned together. Complex cases are handled in-house, not referred out to a stranger's clinic.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Sunday visits available",
    body: "Cannot make it on a weekday? Sunday appointments are available for those who need them.",
  },
];

const testimonials = [
  {
    initials: "PR",
    name: "Priya Rajput",
    loc: "Kharghar, Navi Mumbai",
    quote:
      "I had been putting off a root canal for two years out of fear. Dr. Shivani made the whole procedure completely painless. She explained every step, I barely felt anything, and it was done in a single visit. Wish I had come sooner.",
  },
  {
    initials: "SM",
    name: "Suresh Mahajan",
    loc: "Sector 10, Kharghar",
    quote:
      "Dr. Shashank placed two implants for me. The process was well-planned, he went over the X-rays with me and gave me a clear cost breakdown before starting. Three months later the crowns are on and they feel completely natural.",
  },
  {
    initials: "AK",
    name: "Anita Kulkarni",
    loc: "Sector 7, Kharghar",
    quote:
      "I brought my 8-year-old daughter here and Dr. Shivani was incredibly gentle with her. My daughter was not anxious at all by the end. The clinic is clean, the staff are calm, and I finally have a dentist I trust for the whole family.",
  },
];

const docCameraIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7h3l1.5-2h9L18 7h3v12H3z" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
);

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="wrap">
          <a className="brand" href="#top" aria-label="Evoris Dental Care and Implant Center, home">
            <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path d="M20 4c-4.5 0-6 2.6-9 2.6S6.7 9 6.7 13.4c0 7 4.6 12.8 6.6 19.2.7 2.2 3.2 2.3 3.7 0 .5-2.5.6-7.2 3-7.2s2.5 4.7 3 7.2c.5 2.3 3 2.2 3.7 0 2-6.4 6.6-12.2 6.6-19.2 0-4.4-1.3-6.8-4.3-6.8S24.5 4 20 4Z" stroke="oklch(0.515 0.088 68)" strokeWidth="1.6" />
              <circle cx="20" cy="14" r="3.4" fill="oklch(0.72 0.088 82 / 0.7)" />
            </svg>
            <span>
              <span className="brand-name">EVORIS</span>
              <span className="brand-sub">Dental Care &amp; Implant Center</span>
            </span>
          </a>
          <nav className="topnav" aria-label="Main">
            <a href="#about">The Clinic</a>
            <a href="#doctors">Doctors</a>
            <a href="#services">Treatments</a>
            <a href="#why">Why Us</a>
            <a href="#book">Book</a>
            <a href="#visit">Visit Us</a>
            <a className="call-pill" href={`tel:${PHONE}`}>
              <PhoneIcon size={14} />
              91371 61693
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <div className="hero-intro">
              <p className="hero-kicker">Sector 8, Kharghar &middot; Navi Mumbai</p>
              <h1>
                EVORIS
                <small>DENTAL CARE &amp; IMPLANT CENTER</small>
              </h1>
              <p className="hero-lede">
                Specialist implant, root canal and gum care in Sector 8, Kharghar,
                led by <strong>two MDS consultants</strong> under one roof. Careful
                diagnosis first, honest advice always.
              </p>
              <div className="hero-cta">
                <a className="btn btn-gold" href={`tel:${PHONE}`}>
                  <PhoneIcon />
                  Call to book a visit
                </a>
                <a className="btn btn-ghost" href={WHATSAPP} target="_blank" rel="noopener">
                  WhatsApp the clinic
                </a>
              </div>
              <p className="hero-note">
                Open Monday to Saturday &middot; <b>10 am – 2 pm</b> and{" "}
                <b>5 pm – 10 pm</b> &middot; Sunday on appointment
              </p>
            </div>
            <figure className="hero-figure reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=80"
                alt="A relaxed, confident smile, the result Evoris works toward with every patient"
                width={420}
                height={525}
                fetchPriority="high"
              />
              <figcaption>Healthy teeth, kept for life</figcaption>
            </figure>
          </div>
        </section>

        <div className="ribbon" role="presentation">
          <div className="wrap">
            <p className="ribbon-item"><b>Implants &amp; Gum Care</b>by an MDS Periodontist</p>
            <p className="ribbon-item"><b>Root Canal &amp; Smile Design</b>by an MDS Endodontist</p>
            <p className="ribbon-item"><b>Sector 8, Kharghar</b>2 minutes from Vasundhara-II CHS gate</p>
          </div>
        </div>

        <section id="about" className="section">
          <div className="wrap about-grid">
            <div className="reveal">
              <div className="gold-rule" />
              <h2 style={{ fontSize: "clamp(1.9rem,3.6vw,2.7rem)", color: "var(--navy)" }}>
                A specialist clinic, built around careful dentistry
              </h2>
              <p style={{ marginTop: "1rem", color: "var(--ink-soft)" }}>
                Evoris is a husband-and-wife specialist practice in the heart of
                Kharghar. Every treatment plan starts with a proper examination and
                X-ray diagnosis, explained to you in plain language before any work
                begins.
              </p>
              <ul className="about-points">
                <li><b>Specialists, not generalists:</b>{" "}both consultants hold MDS degrees in their fields.</li>
                <li><b>Sterilization you can see:</b>{" "}sealed, autoclaved instrument kits opened in front of you.</li>
                <li><b>Evening hours that fit office life:</b>{" "}open until 10 pm, six days a week.</li>
                <li><b>Honest treatment plans:</b>{" "}clear costs upfront, no surprise add-ons mid-treatment.</li>
              </ul>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="reveal"
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.1.0&auto=format&fit=crop&w=1100&q=80"
              alt="A bright, modern dental operatory with a fully equipped chair"
              width={550}
              height={412}
              loading="lazy"
            />
          </div>
        </section>

        <section id="doctors" className="section doctors">
          <div className="wrap">
            <div className="section-head">
              <div className="gold-rule" />
              <h2>Two specialists. One standard of care.</h2>
              <p>
                Your implant surgeon and your root canal specialist work side by
                side, so complex cases never need a referral across town.
              </p>
            </div>

            <article className="doc-feature reveal">
              <div className="doc-photo" aria-hidden="true">
                {docCameraIcon}
                <span>Photo placeholder<b>Dr. Shashank Deshpande</b></span>
              </div>
              <div className="doc-info">
                <p className="doc-degree">BDS, MDS &middot; Periodontics</p>
                <h3>Dr. Shashank Deshpande</h3>
                <p>
                  Gum specialist and oral implantologist. Dr. Shashank handles dental
                  implants, gum disease treatment, bone grafting and surgical
                  extractions, restoring teeth that other clinics write off.
                </p>
                <div className="doc-tags">
                  <span>Dental Implants</span>
                  <span>Gum Treatments</span>
                  <span>Bone Grafting</span>
                  <span>Oral Surgery</span>
                </div>
              </div>
            </article>

            <article className="doc-feature reverse reveal">
              <div className="doc-photo" aria-hidden="true">
                {docCameraIcon}
                <span>Photo placeholder<b>Dr. Shivani Vyavahare Deshpande</b></span>
              </div>
              <div className="doc-info">
                <p className="doc-degree">BDS, MDS &middot; Endodontics</p>
                <h3>Dr. Shivani Vyavahare Deshpande</h3>
                <p>
                  Root canal specialist and cosmetic dental surgeon. Dr. Shivani
                  performs single-visit and complex root canals and designs smile
                  makeovers, saving natural teeth wherever possible.
                </p>
                <div className="doc-tags">
                  <span>Root Canal Treatment</span>
                  <span>Smile Design</span>
                  <span>Cosmetic Dentistry</span>
                  <span>Crowns &amp; Veneers</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="services" className="section">
          <div className="wrap">
            <div className="section-head">
              <div className="gold-rule" />
              <h2>Treatments at Evoris</h2>
              <p>
                From a routine cleaning to full-mouth implant rehabilitation, planned
                and performed in-house by the specialists themselves.
              </p>
            </div>

            <div className="svc-feature reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1593022356769-11f762e25ed9?ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=80"
                alt="A dental model showing a titanium implant placed between natural teeth"
                width={450}
                height={360}
                loading="lazy"
              />
              <div>
                <h3>Dental implants: a fixed tooth, not a loose denture</h3>
                <p>
                  A missing tooth replaced with a titanium root and a permanent crown
                  that looks, feels and chews like your own. Planned on X-ray by our
                  implantologist, with single-tooth, multiple-teeth and full-arch
                  options.
                </p>
                <a className="btn btn-navy" href={`tel:${PHONE}`}>Ask about implant options</a>
              </div>
            </div>

            <div className="svc-list">
              {services.map(([title, body]) => (
                <div className="svc" key={title}>
                  <h4>
                    <StarIcon />
                    {title}
                  </h4>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="section why">
          <div className="wrap">
            <div className="section-head">
              <div className="gold-rule" />
              <h2>Why patients choose Evoris</h2>
              <p>
                A specialist clinic is different from a general dental practice. Here
                is what that means for your care.
              </p>
            </div>
            <div className="why-grid">
              {whyItems.map((item) => (
                <div className="why-card reveal" key={item.title}>
                  <div className="why-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section testi">
          <div className="wrap">
            <div className="section-head">
              <div className="gold-rule" />
              <h2>What our patients say</h2>
              <p>
                Feedback from patients treated at Evoris Dental Care &amp; Implant
                Center, Kharghar.
              </p>
            </div>
            <div className="testi-grid">
              {testimonials.map((t) => (
                <article className="testi-card reveal" key={t.initials}>
                  <div className="testi-stars" aria-label="5 out of 5 stars">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <p className="testi-quote">{t.quote}</p>
                  <div className="testi-author">
                    <div className="testi-av" aria-hidden="true">{t.initials}</div>
                    <div>
                      <p className="testi-name">{t.name}</p>
                      <p className="testi-loc">{t.loc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="section visit">
          <div className="wrap visit-grid">
            <div className="reveal">
              <div className="gold-rule" style={{ background: "var(--gold)" }} />
              <h2>Visit the clinic</h2>
              <p className="visit-sub">Monday to Saturday &middot; Sunday on appointment</p>
              <address>
                <b>Evoris Dental Care &amp; Implant Center</b>
                <br />
                Shop No. 3, Vasundhara-II CHS,
                <br />
                Sector 8, Kharghar,
                <br />
                Navi Mumbai 410210
              </address>
              <a className="visit-phone" href={`tel:${PHONE}`}>+91 91371 61693</a>
              <dl className="hours">
                <div>
                  <dt>Monday – Saturday, morning</dt>
                  <dd>10:00 am – 2:00 pm</dd>
                </div>
                <div>
                  <dt>Monday – Saturday, evening</dt>
                  <dd>5:00 pm – 10:00 pm</dd>
                </div>
                <div>
                  <dt>Sunday</dt>
                  <dd>On appointment</dd>
                </div>
              </dl>
              <div className="visit-cta">
                <a className="btn btn-gold" href={MAPS_SEARCH} target="_blank" rel="noopener">
                  Get directions on Google Maps
                </a>
              </div>
            </div>
            <div className="map-shell reveal">
              <iframe
                title="Map showing Evoris Dental Care & Implant Center, Sector 8, Kharghar"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                src={MAPS_EMBED}
              />
            </div>
          </div>
        </section>

        <section id="book" className="section book">
          <div className="wrap">
            <div className="section-head">
              <div className="gold-rule" />
              <h2>Book an appointment</h2>
              <p>
                Fill in your details and the team will confirm your slot by phone
                within a few hours.
              </p>
            </div>
            <div className="book-grid">
              <div className="book-aside reveal">
                <h3>Come see us in Kharghar</h3>
                <p>
                  Walk-ins are welcome but a prior booking means no waiting. We will
                  call to confirm the time that works for you.
                </p>
                <div className="book-info">
                  <div className="book-info-row">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span><b>+91 91371 61693</b></span>
                  </div>
                  <div className="book-info-row">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>Shop No. 3, Vasundhara-II CHS, Sector 8, Kharghar, Navi Mumbai 410210</span>
                  </div>
                  <div className="book-info-row">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>
                      Mon – Sat: <b>10 am – 2 pm</b> and <b>5 pm – 10 pm</b>
                      <br />
                      Sunday: <b>On appointment</b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="reveal">
                <BookForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span className="f-brand">EVORIS &middot; Dental Care &amp; Implant Center</span>
          <span>Dr. Shashank Deshpande &middot; Dr. Shivani Vyavahare Deshpande</span>
          <span>
            <a href={`tel:${PHONE}`}>91371 61693</a> &middot; Sector 8, Kharghar
          </span>
        </div>
      </footer>

      <a className="fab" href={`tel:${PHONE}`} aria-label="Call Evoris Dental at 91371 61693">
        <PhoneIcon size={24} />
      </a>

      <a
        className="wa-fab"
        href={WHATSAPP}
        target="_blank"
        rel="noopener"
        aria-label="Chat with Evoris Dental on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.86 9.86 0 0 0 4.73 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01ZM12.04 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.18 8.18 0 0 1 5.82 2.42 8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
        </svg>
      </a>

      <SiteEnhancements />
    </>
  );
}
