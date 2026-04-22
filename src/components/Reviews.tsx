import { Star, Quote } from "lucide-react";

const reviews = [
  {
    quote: "This place has fantastic food trucks, live music on Friday and Saturday.",
    author: "Google Review",
  },
  {
    quote: "Various cuisines to choose from, great service, and fun atmosphere!",
    author: "Google Review",
  },
  {
    quote: "Sazón caribeño, sándwich cubano 😋 ⭐️⭐️⭐️⭐️⭐️",
    author: "Customer Update",
  },
];

const Reviews = () => (
  <section className="container py-16 md:py-24">
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <div className="inline-flex items-center gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
        ))}
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Loved by 483+ guests</h2>
      <p className="mt-2 text-muted-foreground">4.5 stars on Google — and counting.</p>
    </div>

    <div className="grid gap-5 md:grid-cols-3">
      {reviews.map((r, i) => (
        <figure key={i} className="card-cosmic p-6">
          <Quote className="h-6 w-6 text-accent" />
          <blockquote className="mt-3 text-foreground/90">"{r.quote}"</blockquote>
          <figcaption className="mt-4 text-sm text-muted-foreground">— {r.author}</figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default Reviews;
