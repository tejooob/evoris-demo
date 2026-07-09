import MobileMenu from "@/components/MobileMenu";

export default function SiteHeader() {
  return (
    <header className="topbar">
      <div className="wrap">
        <a className="brand" href="/" aria-label="Evoris Dental Care and Implant Center, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" width={34} height={34} aria-hidden="true" />
          <span>
            <span className="brand-name">EVORIS</span>
            <span className="brand-sub">Dental Care &amp; Implant Center</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Main">
          <a href="/#about">The Clinic</a>
          <div className="nav-drop">
            <a href="/#doctors" className="nav-drop-trigger">
              Doctors
              <svg className="nav-drop-chev" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </a>
            <div className="nav-drop-menu">
              <a href="/#doctors">Meet both doctors</a>
              <a href="/periodontics-implants">Periodontics &amp; Implants</a>
              <a href="/root-canal-dentistry">Root Canal &amp; Restorative</a>
            </div>
          </div>
          <a href="/treatments">Treatments</a>
          <a href="/#why">Why Us</a>
          <a href="/#visit">Visit Us</a>
          <a className="call-pill" href="/#book">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Book appointment
          </a>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
