import MobileMenu from "@/components/MobileMenu";

export default function SiteHeader() {
  return (
    <header className="topbar">
      <div className="wrap">
        <a className="brand" href="/" aria-label="Evoris Dental Care and Implant Center, home">
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
          <a href="/#about">The Clinic</a>
          <a href="/#doctors">Doctors</a>
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
