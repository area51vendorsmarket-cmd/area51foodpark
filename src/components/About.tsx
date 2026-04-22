import { Heart, Shield, Users } from "lucide-react";
import alien from "@/assets/alien-mascot.png";

const badges = [
  { icon: Heart, title: "LGBTQ+ Friendly", desc: "Everyone welcome — always." },
  { icon: Shield, title: "Veteran-Owned", desc: "Proudly serving our community." },
  { icon: Users, title: "Women-Owned", desc: "Locally rooted, family-led." },
];

const About = () => (
  <section id="about" className="bg-nebula py-16 md:py-24">
    <div className="container grid items-center gap-10 md:grid-cols-2">
      <div className="relative mx-auto max-w-sm">
        <img
          src={alien}
          alt="Friendly Area 51 alien mascot"
          width={768}
          height={768}
          loading="lazy"
          className="animate-float drop-shadow-[0_20px_40px_hsl(145_90%_45%/0.35)]"
        />
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">About us</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          San Antonio's friendliest <span className="text-gradient-alien">landing zone</span>.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Area 51 Food Park is a community-first gathering spot on Potranco Rd. We bring together
          incredible local food trucks, live soccer, weekend events, and an after-hours scene —
          all in one welcoming place built for every age and every appetite.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {badges.map((b) => (
            <div key={b.title} className="rounded-xl border border-border bg-card/60 p-4">
              <b.icon className="h-5 w-5 text-primary" />
              <p className="mt-2 font-semibold">{b.title}</p>
              <p className="text-xs text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
