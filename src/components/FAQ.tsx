import { HelpCircle, Shield, CreditCard, Recycle, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLocationContext } from "@/hooks/useLocationContext";

const FAQ = () => {
  const { neighborhood } = useLocationContext();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [openItem, setOpenItem] = useState<string | undefined>();
  
  const faqs = [
    {
      icon: MapPin,
      question: `Do you serve my area in ${neighborhood}?`,
      answer: `Absolutely! We proudly serve ${neighborhood} and the surrounding Denver metro area. If you're located in ${neighborhood} or nearby neighborhoods, we can help with your junk removal needs. Give us a call to confirm service availability for your specific location.`
    },
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
      question: `How quickly can you come out to ${neighborhood}?`,
      answer: `We offer same-day and next-day service in ${neighborhood} and throughout the Denver metro area. Call us by noon for potential same-day pickup. We know your time is valuable!`
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>

          <Accordion 
            type="single" 
            collapsible 
            className="space-y-4"
            value={openItem}
            onValueChange={setOpenItem}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white border-2 border-primary/10 rounded-2xl px-6 hover:border-accent/30 transition-colors shadow-sm hover:shadow-md"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center gap-3">
                      {faq.icon && (
                        <motion.div
                          animate={openItem === `item-${index}` ? { 
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0] 
                          } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          <faq.icon className="w-5 h-5 text-accent flex-shrink-0" />
                        </motion.div>
                      )}
                      <span className="text-lg font-semibold text-primary">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pt-2 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a
              href="tel:+17202108173"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline text-lg"
            >
              📞 Call us at (720) 210-8173
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
