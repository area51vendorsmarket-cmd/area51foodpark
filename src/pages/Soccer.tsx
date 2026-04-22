import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Calendar, MapPin, Trophy, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import soccer from "@/assets/soccer.jpg";

const SOCCER_PHONE = "+12104017817";
const SEASON_PHONE = "(210) 401-1748";

const programs = [
  {
    title: "2026 Spring Soccer Season",
    badge: "Registration Open",
    body:
      "Registration for the Spring Soccer season is open! Regular fee $180 per player, with a $30 discount for returning players. Season runs 03/21 through 05/23. Space is limited — register today!",
  },
  {
    title: "Pre-Season Training Camp",
    badge: "$50 · 4 Days",
    body:
      "Registered Spring season players get a 4-day pre-training camp for only $50. Camp runs March 2nd through March 5th. Don't miss it!",
  },
  {
    title: "Summer Soccer Camps",
    badge: "Beginner to Advanced",
    body:
      "Our Soccer Clinic is geared to train and develop the skills needed for competitive soccer while building confidence, endurance, and stamina. New and seasoned players alike learn through drills and small-sided games in a fun, safe environment.",
  },
  {
    title: "Season Games",
    badge: "On-Site Play",
    body:
      "All teams play games within the league and on-site. Games begin 2 weeks into the season — giving every child time to practice before putting on a uniform and hitting the field. The season ends with a Soccer Combine, a unique experience for each player.",
  },
];

const news = [
  {
    date: "Feb 4, 2026",
    title: "Pre-Season Training Camp",
    body:
      "Registered players for the Spring soccer season get a 4-day pre-training camp for only $50. Camp starts March 2nd through March 5th.",
  },
  {
    date: "Jan 4, 2026",
    title: "⚽ 2026 Spring Soccer Season",
    body:
      "Registration is open for children ages 4–12. Season: March 21st – May 23rd. Don't wait until the last minute — secure your child's spot today!",
  },
  {
    date: "Oct 22, 2025",
    title: "Free Soccer Camp",
    body:
      "Free soccer camps for children 4–12 years old. Bring a soccer ball and come ready to learn and have fun. Attendees receive a promo code for season discounts.",
  },
  {
    date: "Apr 23, 2025",
    title: "San Antonio FC Kids Night",
    body:
      "A fun weeknight out for the whole family at Toyota Field — a great chance to enjoy an evening together with the SAFC.",
  },
];

const requirements = [
  "Black socks & black shorts",
  "Shin guards",
  "Artificial turf cleats (MANDATORY for all ages)",
  "Soccer ball: Size 4 (ages 6–11) / Size 5 (age 12+)",
];

const Soccer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={soccer} alt="Soccer at Area 51 Food Park" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        </div>
        <div className="container relative z-10 py-16 md:py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Area 51 Food Park
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Alien Sports San Antonio
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Youth Soccer at <span className="text-gradient-alien">Area 51</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Register today for the Spring Season. Leagues, camps, and clinics for kids ages 4–12 — all played on-site at
            12275 Potranco Rd, inside Area 51 Food Park.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${SOCCER_PHONE}`}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-cta px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="h-5 w-5" /> Call (210) 401-7817
            </a>
            <a
              href="https://www.aliensports.info/Default.aspx?tabid=2355904"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold transition-colors hover:border-primary"
            >
              Register Online
            </a>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="container py-12 md:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Users, label: "Ages", value: "4–12 years" },
            { icon: Calendar, label: "Spring Season", value: "Mar 21 – May 23" },
            { icon: Trophy, label: "Spring Fee", value: "$180 ($150 returning)" },
            { icon: MapPin, label: "Location", value: "12275 Potranco Rd" },
          ].map((f) => (
            <div key={f.label} className="card-cosmic p-5">
              <f.icon className="h-6 w-6 text-primary" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{f.label}</p>
              <p className="mt-1 font-display text-lg font-bold">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="container pb-16">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Programs & Camps</h2>
        <p className="mt-2 text-muted-foreground">From first-time kickers to seasoned competitors — we've got a season for every player.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {programs.map((p) => (
            <article key={p.title} className="card-cosmic p-6">
              <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                {p.badge}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Season details */}
      <section className="border-y border-border bg-card/40">
        <div className="container py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold">Winter Season Details</h2>
              <p className="mt-2 text-muted-foreground">Registration open for children 6 to 12 years old.</p>
              <dl className="mt-6 space-y-4">
                {[
                  ["Season Dates", "November 5th – December 13th · 5 weeks, 5 games"],
                  ["New Players", "$150 (includes practice t-shirt)"],
                  ["Returning Players", "$100 (no other discounts apply)"],
                  ["Sibling Discount", "$10 (new players at full price only)"],
                  ["Practice T-Shirt", "$17 per player"],
                  ["Practice", "Wednesdays at 6:00 PM"],
                  ["Games", "Saturday mornings starting Nov 8th"],
                  ["Location", "12275 Potranco Rd · inside Area 51 Food Park"],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-1 border-b border-border/50 pb-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <dt className="text-sm font-semibold uppercase tracking-wider text-accent">{k}</dt>
                    <dd className="text-foreground/90 sm:text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold">What to Bring</h2>
              <p className="mt-2 text-muted-foreground">Make sure your child is game-ready every week.</p>
              <ul className="mt-6 space-y-3">
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 rounded-lg border border-border bg-background/60 p-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span className="text-foreground/90">{r}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground italic">
                Tennis shoes are allowed but not recommended.
              </p>
              <div className="mt-6 rounded-lg border border-primary/30 bg-primary/10 p-5">
                <p className="font-semibold">Questions about the season?</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Call us at <a href="tel:+12104011748" className="text-primary underline">{SEASON_PHONE}</a> — thank you for your support! 🙌
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="container py-16">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Latest News</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {news.map((n) => (
            <article key={n.title} className="card-cosmic p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{n.date}</p>
              <h3 className="mt-2 font-display text-xl font-bold">{n.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{n.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container pb-20">
        <div className="card-cosmic overflow-hidden p-8 text-center md:p-12">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to Play?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Spots fill fast each season. Call now or register online to lock in your child's place on the pitch.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${SOCCER_PHONE}`}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-cta px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="h-5 w-5" /> (210) 401-7817
            </a>
            <a
              href="https://www.aliensports.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold transition-colors hover:border-primary"
            >
              Visit Alien Sports
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default Soccer;
