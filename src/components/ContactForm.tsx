import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Calendar } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Using Netlify Forms
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      toast({
        title: "Success!",
        description: "We'll get back to you shortly. Thank you!",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please call us instead.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-background" id="contact-form">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Get a Free Estimate
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below or call us directly for a quick quote
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-8 shadow-soft space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Call Us</h3>
                    <a 
                      href="tel:+17205550123" 
                      className="text-secondary hover:underline text-lg font-medium"
                    >
                      (720) 555-0123
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Mon-Sat: 7AM - 7PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email Us</h3>
                    <a 
                      href="mailto:info@haulpatrol.com" 
                      className="text-secondary hover:underline"
                    >
                      info@haulpatrol.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Book Online</h3>
                    <a 
                      href="https://calendly.com/haulpatrol" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline"
                    >
                      Schedule on Calendly
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Choose a time that works for you
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your junk removal needs..."
                    rows={4}
                    className="rounded-xl resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full rounded-xl btn-hero"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Get Free Estimate"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to receive text messages and calls from Haul Patrol
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
