import { PHONE } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <span className="f-brand">EVORIS &middot; Dental Care &amp; Implant Center</span>
        <span>Dr. Shashank Deshpande &middot; Dr. Shivani Vyavahare Deshpande</span>
        <span>
          <a href={`tel:${PHONE}`}>91371 61693</a> &middot; Sector 8, Kharghar
        </span>
      </div>
    </footer>
  );
}
