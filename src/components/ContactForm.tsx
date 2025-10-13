import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Calendar, User, MessageSquare } from "lucide-react";

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

      // TODO: Optional Resend integration for email notifications
      // const emailData = {
      //   from: 'onboarding@resend.dev',
      //   to: 'info@haulpatrol.com',
      //   subject: 'New Lead from Website',
      //   html: `<p>Name: ${formData.get('name')}</p>...`
      // };
      // await fetch('/api/send-email', { method: 'POST', body: JSON.stringify(emailData) });

      toast({
        title: "Success! 🎉",
        description: "We'll get back to you shortly. Thank you!",
      });
      
      form.reset();
      
      // Auto-scroll to confirmation (visual feedback)
      setTimeout(() => {
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
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
    <section className="py-24 bg-gradient-to-b from-accent/5 to-background" id="contact-form">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-primary">
              Get a Free Estimate
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Fill out the form below or call us directly for a quick quote
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact info sidebar */}
            <div className="md:col-span-2 space-y-6">
              <div className="floating-card">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Call Us</h3>
                    <a 
                      href="tel:+17205550123" 
                      className="text-secondary hover:text-primary transition-colors text-xl font-semibold"
                    >
                      (720) 555-0123
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Mon-Sat: 7AM - 7PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="floating-card">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Email Us</h3>
                    <a 
                      href="mailto:info@haulpatrol.com" 
                      className="text-secondary hover:text-primary transition-colors break-all"
                    >
                      info@haulpatrol.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="floating-card">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Book Online</h3>
                    <a 
                      href="https://calendly.com/haulpatrol" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      Schedule on Calendly
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Choose a time that works for you
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <div className="floating-card">
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      required
                      className="pl-12 h-14 rounded-2xl border-2 focus:border-secondary transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      required
                      className="pl-12 h-14 rounded-2xl border-2 focus:border-secondary transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="pl-12 h-14 rounded-2xl border-2 focus:border-secondary transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-muted-foreground" />
                    <Textarea
                      name="message"
                      placeholder="Tell us about your junk removal needs..."
                      rows={5}
                      className="pl-12 pt-6 rounded-2xl border-2 focus:border-secondary transition-colors resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 rounded-2xl bg-gradient-cta text-white text-lg font-semibold hover:shadow-hover transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Get Free Estimate"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    By submitting this form, you agree to receive text messages and calls from Haul Patrol. 
                    Message and data rates may apply.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
