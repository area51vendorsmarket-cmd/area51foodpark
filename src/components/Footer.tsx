import { Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-background py-10">
    <div className="container flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
      <div>
        <p className="font-display text-base font-semibold text-foreground">
          👽 Area 51 Food Park
        </p>
        <p>12275 Potranco Rd, San Antonio, TX 78253</p>
      </div>
      <a href="tel:+12102141748" className="inline-flex items-center gap-2 font-medium text-primary hover:underline">
        <Phone className="h-4 w-4" /> (210) 214-1748
      </a>
      <p>© {new Date().getFullYear()} Area 51 Food Park. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
