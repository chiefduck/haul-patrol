import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Calendar, User, MessageSquare, Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(formData as any).toString() });
      toast({ title: "Success! 🎉", description: "We'll get back to you shortly. Thank you!" });
      form.reset();
      setTimeout(() => { form.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 100);
    } catch (error) {
      toast({ title: "Error", description: "Something went wrong. Please call us instead.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-primary px-6 py-3 rounded-full font-bold text-sm md:text-base shadow-elevated border-2 border-yellow-500 animate-pulse">
            <span>💰 100% FREE ESTIMATE - NO OBLIGATION</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-4xl mx-auto">Get Your FREE Quote in Minutes</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We respond within 1 hour • Starting at $150 • Same-day service available
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card backdrop-blur-md rounded-3xl p-8 border shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <a href="tel:+17202108173" className="text-muted-foreground hover:text-primary transition-colors">
                      (720) 210-8173
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a href="mailto:info@haulpatrol.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@haulpatrol.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Schedule Online</p>
                    <a 
                      href="https://calendly.com/haulpatrol" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Book an appointment →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl space-y-6 border">
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
                disabled={isSubmitting} 
                className="w-full bg-gradient-cta text-white text-lg py-6 rounded-xl hover:shadow-hover transition-all duration-300 font-semibold"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
              
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-accent/10 p-4 rounded-xl border border-accent/20">
                <span className="text-secondary text-lg">🔒</span>
                <span className="font-medium">Secure form — we'll respond within 1 hour</span>
              </div>
              
              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;