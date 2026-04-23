import { Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const PHONE = "+12102141748";
const PHONE_DISPLAY = "(210) 214-1748";

const links = [
  { href: "#soccer", label: "Soccer" },
  { href: "#food-trucks", label: "Food Trucks" },
  { href: "#events", label: "Events" },
  { href: "#after-hours", label: "Area 51 After Hours" },
  { href: "#party-space", label: "Need A "Space" To Party" },
  { href: "#visit", label: "Visit" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-alien glow-primary">
            <span className="text-base">👽</span>
          </span>
          <span className="text-gradient-alien">Area 51</span>
          <span className="hidden text-foreground sm:inline">Food Park</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="default" size="sm" className="bg-gradient-cta text-primary-foreground hover:opacity-90">
            <a href={`tel:${PHONE}`}>
              <Phone className="mr-2 h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </Button>
        </div>

        <button
          className="md:hidden rounded-md p-2 text-foreground"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-card md:hidden">
          <nav className="container flex flex-col gap-1 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2 bg-gradient-cta text-primary-foreground">
              <a href={`tel:${PHONE}`}>
                <Phone className="mr-2 h-4 w-4" /> Call {PHONE_DISPLAY}
              </a>
            </Button>
            <Button asChild variant="outline" className="mt-1">
              <a href="https://maps.google.com/?q=12275+Potranco+Rd+San+Antonio+TX+78253" target="_blank" rel="noreferrer">
                <MapPin className="mr-2 h-4 w-4" /> Directions
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
