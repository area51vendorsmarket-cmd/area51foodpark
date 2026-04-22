import { Phone, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-area51.jpg";

const PHONE = "+12102141748";

const Hero = () => (
  <section id="top" className="relative overflow-hidden">
    {/* Twinkling stars */}
    <div className="pointer-events-none absolute inset-0">
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-foreground animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>

    <div className="container relative grid gap-10 py-16 md:grid-cols-2 md:py-24 lg:py-28">
      <div className="flex flex-col justify-center">
        <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Star className="h-3.5 w-3.5 fill-primary" /> 4.5 ★ · 483 Google Reviews
        </div>
        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          An out-of-this-world{" "}
          <span className="text-gradient-alien">food park</span> in San Antonio.
        </h1>
        <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          Diverse food trucks, live soccer, weekend events, and after-hours vibes — all under the
          Texas stars. Family-friendly by day, electric by night.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-gradient-cta text-primary-foreground glow-primary hover:opacity-90">
            <a href={`tel:${PHONE}`}>
              <Phone className="mr-2 h-5 w-5" /> Call (210) 214-1748
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent/60 text-accent hover:bg-accent/10 hover:text-accent">
            <a href="https://maps.google.com/?q=12275+Potranco+Rd+San+Antonio+TX+78253" target="_blank" rel="noreferrer">
              <MapPin className="mr-2 h-5 w-5" /> Get Directions
            </a>
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {["LGBTQ+ Friendly", "Veteran-Owned", "Women-Owned", "Family-Friendly"].map((b) => (
            <span key={b} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elevated)]">
          <img
            src={hero}
            alt="Area 51 Food Park alien-themed illustration with food trucks and soccer field"
            width={1920}
            height={1024}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
        </div>
        <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-card/90 p-4 backdrop-blur sm:block">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Open Today</p>
          <p className="font-display text-lg font-semibold text-primary">Until 9:30 PM</p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
