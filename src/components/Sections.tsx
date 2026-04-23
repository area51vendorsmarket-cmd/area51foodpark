import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import foodTrucks from "@/assets/food-trucks.jpg";
import soccer from "@/assets/soccer.jpg";
import events from "@/assets/events.jpg";
import afterHours from "@/assets/after-hours.jpg";
import partySpace from "@/assets/party-space.jpg";

type Section = {
  comingSoon?: boolean;
  id: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  boldLead?: string;
  highlights: string[];
  href?: string;
  externalLinks?: {
    label: string;
    url: string;
    description?: string;
  }[];
};

const sections: Section[] = [
  {
    id: "soccer",
    title: "Soccer",
    tagline: "Pickup games & league nights",
    image: soccer,
    description:
      "Lace up and hit the pitch. Our on-site soccer field hosts pickup games, weekend leagues, and watch parties for the matches that matter most.",
    highlights: [
      "On-site field",
      "League & pickup play",
      "Live match watch parties",
      "Family viewing area",
    ],
    href: "/soccer",
  },

  {
    id: "food-trucks",
    title: "Food Trucks",
    tagline: "A galaxy of flavors",
    image: foodTrucks,
    description:
      "Come try food that is out of this world! Our food trucks serve flavors you didn't know existed. Bold flavors, unique food trucks, and a laid-back atmosphere perfect for hanging out. Bring your friends, bring your appetite, and come discover your new favorite bite. Entry is easy... leaving without dessert? Nearly impossible.",
    highlights: [
      "El Pinguino Loco",
      "The Magic Churro",
      "Halal Cousins",
      "The Reaper",
      "Sazon Caribeno",
      "Noods",
      "Jamaican Vybze",
      "Los Santos Tacos",
      "Pollo Al Carbon",
    ],
  },

  {
  id: "events",
  title: "Events",
  tagline: "Live music every weekend",
  image: events,
  description:
    "Friday and Saturday nights come alive with live bands, DJs, and themed events. Private bookings available for parties, birthdays, corporate gatherings, graduations, gender reveals, and more.",

  highlights: [
    "Live music Fri & Sat",
    "Themed nights",
    "Vendor opportunities",
    "Performer bookings",
    "All-ages welcome",
  ],

  externalLinks: [
    {
      label: "Vendors Registration",
      url: "https://forms.gle/ddTJoXK5LDoGSvdD7",
      description:
        "Become a vendor at Area 51 Food Park. We welcome food, drinks, clothing, toys, jewelry, handmade goods, and more. Vendor hours are Friday 5PM–10PM, Saturday 5PM–10PM, and Sunday 12PM–5PM."
    },
    {
      label: "Bands / Performers Registration",
      url: "https://forms.gle/e7MAers8qVkQwyzv6",
      description:
        "Live performers are booked on a first-come, first-served basis. No cost to perform. Sets range from 2–4 hours. Performers keep 100% of tips and receive 50% off food and beverages. All genres welcome."
    }
  ]
},

  {
    id: "after-hours",
    title: "Area 51 After Hours",
    tagline:
      "Fridays & Saturdays · Casino Entertainment · 18+ Entry Minimum, 21+ Alcohol",
    image: afterHours,
    comingSoon: true,
    boldLead: "Private Entertainment.",
    description:
      "After dark, the park shifts into a high-energy nightlife zone — a fusion of casino glamour and bold, after-hours edge. Neon lights, music, and immersive atmosphere create a unique nightlife experience.",
    highlights: [
      "$20 entry at the door",
      "Casino tables, lights & party atmosphere",
      "Alcohol service & entertainment",
      "Entertainment only — no real gambling",
      "No inappropriate behavior tolerated",
      "ID check required before entering",
    ],
  },

  {
    id: "party-space",
    title: 'Need A "Space" To Party',
    tagline: "Private bookings & celebrations",
    image: partySpace,
    description:
      "Private bookings are available for birthdays, parties, corporate gatherings, graduations, gender reveals, proposals, and more. Reserve your own slice of the galaxy. Our team helps coordinate food trucks, music, decor, and activies so you can focus on the fun.",
    highlights: [
      "Private event bookings",
      "Custom food truck lineup",
      "Outdoor space",
      "All-ages celebrations",
      "Bouncy houses/ Bull Riding/ Water Guns/ Nerf Guns",
    ],
   externalLinks: [
  {
    label: "Register here",
    url: "https://forms.gle/h67k1pRpSqLYjqmEA",
  }
],
  },
];

const SectionCard = ({ s, onClick }: { s: Section; onClick: () => void }) => {
 const inner = (
  <>
    {/* IMAGE SECTION */}
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={s.image}
        alt={`${s.title} at Area 51 Food Park`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

      {/* optional COMING SOON */}
      {s.comingSoon && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <span className="text-white font-bold text-lg tracking-widest border border-white px-4 py-2">
            COMING SOON
          </span>
        </div>
      )}

      {/* badge */}
      <div className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
        {s.href ? "Visit page" : "Click to view"}
      </div>
    </div>

    {/* TEXT SECTION */}
    <div className="p-5">
      <h3 className="font-display text-2xl font-bold tracking-tight">{s.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{s.tagline}</p>
      <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
        Explore <ArrowRight className="ml-1 h-4 w-4" />
      </span>
    </div>
  </>
);

  if (s.href) {
    return (
      <Link
        id={s.id}
        to={s.href}
        className="card-cosmic group text-left scroll-mt-24"
        aria-label={`Open ${s.title} page`}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      id={s.id}
      onClick={onClick}
      className="card-cosmic group text-left scroll-mt-24"
      aria-label={`Open ${s.title} details`}
    >
      {inner}
    </button>
  );
};

const Sections = () => {
  const [active, setActive] = useState<Section | null>(null);

  return (
    <section className="container py-16 md:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Explore the park</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Four experiences. One landing zone.
        </h2>
        <p className="mt-3 text-muted-foreground">
          Tap any section to learn more about what makes Area 51 the most fun spot on Potranco Rd.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {sections.map((s) => (
          <SectionCard key={s.id} s={s} onClick={() => !s.href && setActive(s)} />
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto border-border bg-card p-0">
          {active && (
            <>
              <div className="relative aspect-video">
                <img src={active.image} alt={active.title} className="h-full w-full object-cover" />
                {active.comingSoon && (
  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
    <span className="text-white font-bold text-2xl tracking-widest border border-white px-6 py-3">
      COMING SOON
    </span>
  </div>
)}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="font-display text-3xl text-gradient-alien">{active.title}</DialogTitle>
                  <DialogDescription className="text-base text-muted-foreground">
                    {active.tagline}
                  </DialogDescription>
                </DialogHeader>
                <p className="mt-4 text-foreground/90">
                  {active.boldLead && <strong className="font-bold text-foreground">{active.boldLead} </strong>}
                  {active.description}
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {active.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {h}
                    </li>
                  ))}
                </ul>
             {active.externalLinks?.map((link) => (
  <div
    key={link.url}
    className="mt-5 rounded-lg border border-border p-4 hover:bg-muted/50 transition"
  >
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
     className="flex items-center justify-between font-semibold text-primary hover:underline"
    >
      {link.label}
      <ArrowRight className="h-4 w-4" />
    </a>

    {link.description && (
      <p className="mt-2 text-sm text-muted-foreground">
        {link.description}
      </p>
    )}
  </div>
))}
               
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Sections;
