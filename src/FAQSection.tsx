import { useState } from "react";

const faqs = [
  {
    question: "Is Area 51 Food Park pet-friendly?",
    answer:
      "Yes! We are pet-friendly. Pets must be kept on a leash at all times and are not allowed on the soccer fields.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Parking is available on-site, but it fills up quickly during peak hours. Additional parking is available nearby down the road with a parking attendent to help direct.",
  },
  {
    question: "Is there a cost to perform?",
    answer:
      "No, there is no cost to perform. Performers are booked on a first-come, first-served basis, keep 100% of their tips, and receive a 50% discount on food and beverages.",
  },
  {
    question: "What are your vendor hours?",
    answer:
      "Vendor hours are Friday 5PM–10PM, Saturday 5PM–10PM, and Sunday 12PM–5PM.",
  },
  {
    question: "What kind of items can vendors sell?",
    answer:
      "We welcome a wide array of everything: food, drinks, clothing, toys, jewelry, shoes, bracelets, crafts, handmade goods, and more.",
  },
  {
    question: "Is there an entry fee?",
    answer:
      "General entry in the park is free. Area 51 After Hours (Adult Entertainment) is a $20 entry fee. Some special events may have a cover charge.",
  },
  {
    question: "Is it family-friendly?",
    answer:
      "Yes! Area 51 Food Park is family-friendly during regular hours and welcomes all ages.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-muted-foreground">
          Everything you need to know before landing at Area 51 👽
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg border border-border p-5 cursor-pointer transition hover:bg-muted/50"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <span className="text-primary">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <p className="mt-3 text-sm text-muted-foreground">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
