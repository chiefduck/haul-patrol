import { HelpCircle, Shield, CreditCard, Recycle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      icon: CreditCard,
      question: "What forms of payment do you accept?",
      answer: "We accept cash, all major credit cards, Venmo, and Zelle. Payment is due upon completion of the job. No upfront deposits required!"
    },
    {
      icon: Shield,
      question: "Are you licensed and insured?",
      answer: "Absolutely! Haul Patrol is fully licensed and insured. We carry comprehensive liability insurance to protect your property and our crew during every job."
    },
    {
      icon: Recycle,
      question: "What do you do with the junk you haul away?",
      answer: "We're committed to eco-friendly disposal. We donate usable items to local charities, recycle materials whenever possible, and only send truly unusable items to the landfill as a last resort."
    },
    {
      question: "How do you determine pricing?",
      answer: "Pricing is based on the volume of junk (how much space it takes in our truck). We offer free estimates over the phone or in person. Our $150 starting price covers smaller loads, and we'll never surprise you with hidden fees."
    },
    {
      question: "Do I need to be present during the haul?",
      answer: "Not necessarily! As long as you clearly mark what needs to go and we have access, you can be anywhere. Many customers leave us a key or garage code and return to a clutter-free space."
    },
    {
      question: "How quickly can you come out?",
      answer: "We offer same-day and next-day service in most cases. Call us by noon for potential same-day pickup. We know your time is valuable!"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full mb-4">
              <HelpCircle className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Common Questions</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Haul Patrol's junk removal service
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border-2 border-primary/10 rounded-2xl px-6 hover:border-accent/30 transition-colors shadow-sm hover:shadow-md"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    {faq.icon && <faq.icon className="w-5 h-5 text-accent flex-shrink-0" />}
                    <span className="text-lg font-semibold text-primary">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pt-2 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a
              href="tel:+17205550123"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline text-lg"
            >
              📞 Call us at (720) 555-0123
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
