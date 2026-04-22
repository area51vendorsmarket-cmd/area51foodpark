import { Phone } from "lucide-react";

const MobileCallBar = () => (
  <a
    href="tel:+12102141748"
    className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-center gap-2 rounded-full bg-gradient-cta px-5 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] glow-primary md:hidden"
    aria-label="Call Area 51 Food Park"
  >
    <Phone className="h-5 w-5" /> Call (210) 214-1748
  </a>
);

export default MobileCallBar;
