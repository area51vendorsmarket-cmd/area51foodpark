import { Phone, MapPin, Clock, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE = "+12102141748";

const hours = [
  ["Monday", "11:00 AM – 9:30 PM"],
  ["Tuesday", "11:00 AM – 9:30 PM"],
  ["Wednesday", "11:00 AM – 9:30 PM"],
  ["Thursday", "11:00 AM – 9:30 PM"],
  ["Friday", "11:00 AM – 11:00 PM"],
  ["Saturday", "11:00 AM – 11:00 PM"],
  ["Sunday", "11:00 AM – 9:00 PM"],
];

const Visit = () => (
  <section id="visit" className="bg-nebula py-16 md:py-24">
    <div className="container grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Visit us</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Touch down on <span className="text-gradient-alien">Potranco Rd</span>.
        </h2>
        <p className="mt-3 text-muted-foreground">
          Easy parking, family-friendly all day, and a vibe that turns electric after dark.
        </p>

        <div className="mt-6 space-y-4">
          <a href={`tel:${PHONE}`} className="card-cosmic flex items-center gap-4 p-4">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Call now</p>
              <p className="font-display font-semibold">(210) 214-1748</p>
            </div>
          </a>

          <a
            href="https://maps.google.com/?q=12275+Potranco+Rd+San+Antonio+TX+78253"
            target="_blank"
            rel="noreferrer"
            className="card-cosmic flex items-center gap-4 p-4"
          >
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent/15 text-accent">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Address</p>
              <p className="font-semibold">12275 Potranco Rd, San Antonio, TX 78253</p>
            </div>
          </a>

          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="card-cosmic flex items-center gap-4 p-4">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-secondary/30 text-secondary-foreground">
              <Facebook className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Follow</p>
              <p className="font-semibold">Facebook updates & events</p>
            </div>
          </a>
        </div>

        <div className="mt-6 flex gap-3">
          <Button asChild size="lg" className="bg-gradient-cta text-primary-foreground hover:opacity-90">
            <a href={`tel:${PHONE}`}>
              <Phone className="mr-2 h-4 w-4" /> Call to Book
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="https://maps.google.com/?q=12275+Potranco+Rd+San+Antonio+TX+78253" target="_blank" rel="noreferrer">
              Directions
            </a>
          </Button>
        </div>
      </div>

      <div className="lg:col-span-3">
        <div className="card-cosmic overflow-hidden">
          <iframe
            title="Area 51 Food Park location map"
            src="https://www.google.com/maps?q=12275+Potranco+Rd+San+Antonio+TX+78253&output=embed"
            width="100%"
            height="320"
            loading="lazy"
            className="border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Clock className="h-4 w-4" /> Hours
            </div>
            <ul className="mt-3 grid gap-1 text-sm sm:grid-cols-2">
              {hours.map(([d, h]) => (
                <li key={d} className="flex justify-between border-b border-border/50 py-1.5">
                  <span className="text-muted-foreground">{d}</span>
                  <span className="font-medium">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Visit;
