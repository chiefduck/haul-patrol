import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Calendar, User, MessageSquare, Send, CheckCircle } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long").optional().or(z.literal("")),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

const ContactForm = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Create mailto link with form data
    const subject = encodeURIComponent("Junk Removal Quote Request");
    const body = encodeURIComponent(
      `Name: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email || "Not provided"}\n\nMessage:\n${values.message || "No additional message"}`
    );
    
    toast({
      title: "Information Collected! ✓",
      description: (
        <div className="space-y-2">
          <p>Thank you {values.name}!</p>
          <p className="font-semibold">Please call us at (720) 210-8173 for fastest service</p>
          <p className="text-sm">Or click below to send via email</p>
        </div>
      ),
      action: (
        <a 
          href={`mailto:info@haulpatrol.com?subject=${subject}&body=${body}`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          <Mail className="h-4 w-4" />
          Send Email
        </a>
      ),
      duration: 10000,
    });
    
    form.reset();
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-card backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl space-y-6 border">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input 
                            placeholder="Your Name *" 
                            className="pl-12 h-14 rounded-2xl border-2 focus:border-secondary transition-colors"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input 
                            type="tel"
                            placeholder="Phone Number *" 
                            className="pl-12 h-14 rounded-2xl border-2 focus:border-secondary transition-colors"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input 
                            type="email"
                            placeholder="Email Address (optional)" 
                            className="pl-12 h-14 rounded-2xl border-2 focus:border-secondary transition-colors"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-muted-foreground" />
                          <Textarea 
                            placeholder="Tell us about your junk removal needs..." 
                            rows={5} 
                            className="pl-12 pt-6 rounded-2xl border-2 focus:border-secondary transition-colors resize-none"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={form.formState.isSubmitting} 
                  className="w-full bg-gradient-cta text-white text-lg py-6 rounded-xl hover:shadow-hover transition-all duration-300 font-semibold"
                >
                  {form.formState.isSubmitting ? (
                    <span className="animate-pulse">Processing...</span>
                  ) : (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Get My Free Quote
                    </>
                  )}
                </Button>
                
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-accent/10 p-4 rounded-xl border border-accent/20">
                  <span className="text-secondary text-lg">🔒</span>
                  <span className="font-medium">Secure form — Call (720) 210-8173 for fastest service</span>
                </div>
                
                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;