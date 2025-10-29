import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast"; // ✅ stays imported here

type ContactFormProps = {
  variant?: "full" | "minimal";
};

const ContactForm = ({ variant = "full" }: ContactFormProps) => {
  const { toast } = useToast(); // ✅ moved inside the component

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    company: "", // honeypot
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 🧠 Honeypot check — block spam bots
    if (formData.company && formData.company.trim() !== "") {
      console.warn("Spam bot detected — ignoring submission");
      return;
    }

    try {
      await fetch("https://hook.us2.make.com/2o34dqr7kyc7ao3amkt33ab72htdgogy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          source:
            variant === "minimal" ? "Top Contact Form" : "Bottom Contact Form",
          timestamp: new Date().toISOString(),
        }),
      });

      toast({
        title: "✅ Message Sent!",
        description: "Thanks — our team will reach out shortly. 📞",
        duration: 4000,
        variant: "success",
      });
    } catch (error) {
      console.error("Error sending to Make.com:", error);
      toast({
        title: "⚠️ Oops, something went wrong!",
        description:
          "Please try again or call us directly at (720) 210-8173.",
        duration: 5000,
        variant: "destructive",
      });
    }

    (e.target as HTMLFormElement).reset();
  };


  const isMinimal = variant === "minimal";

  return (
    <section
      className={`${
        isMinimal
          ? "py-10 bg-transparent"
          : "py-20 bg-gradient-to-b from-white to-accent/10 border-t border-accent/10"
      }`}
      id={isMinimal ? "contact-form-top" : "contact-form"}
    >
      <div className="container mx-auto px-4 flex justify-center">
        <div
          className={`w-full max-w-2xl ${
            isMinimal
              ? "bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-100"
              : "bg-white shadow-xl rounded-3xl p-10 sm:p-12 border border-gray-100"
          }`}
        >
          {/* Header */}
          {variant === "full" ? (
            <div className="text-center mb-8 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
                Still Need a Quote? 💬
              </h2>
              <p className="text-muted-foreground mb-6 text-base sm:text-lg">
                No problem — just drop your info below and our team will text or call
                you with a fast, no-pressure estimate.
              </p>

              {/* Optional trust badges */}
              <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-sm sm:text-base mb-8">
                <span>⭐ 5-Star Local Service</span>
                <span>•</span>
                <span>Same-Day Pickups</span>
                <span>•</span>
                <span>No Hidden Fees</span>
              </div>
            </div>
          ) : (
            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                Get a Fast Quote 🚚
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Same-day pickups available — enter your info below.
              </p>
            </div>
          )}

          {/* Form */}
          <form
            name={`contact-${variant}`}
            method="POST"
            data-netlify="true"
            netlify-honeypot="company"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Honeypot Field */}
            <input
              type="text"
              name="company"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              value={formData.company}
              onChange={handleChange}
            />

            {/* Hidden Fields */}
            <input type="hidden" name="form-name" value={`contact-${variant}`} />
            <input
              type="hidden"
              name="source"
              value={isMinimal ? "Top Contact Form" : "Bottom Contact Form"}
            />

            {/* Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                required
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                required
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <Input
              required
              name="email"
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
            />

            <Textarea
              name="message"
              placeholder={
                isMinimal
                  ? "Tell us what you need removed (optional)"
                  : "What items do you need removed? (optional)"
              }
              value={formData.message}
              onChange={handleChange}
            />

            <Button
              type="submit"
              size="lg"
              className={`w-full font-bold text-lg py-6 bg-gradient-cta text-white hover:opacity-90 transition-all ${
                isMinimal ? "" : "mt-4"
              }`}
            >
              {isMinimal ? "Get My Free Estimate" : "Get My Quote Now 🚀"}
            </Button>
          </form>

          {/* Secondary reassurance text for bottom form */}
          {!isMinimal && (
            <p className="text-center text-sm text-muted-foreground mt-6">
              We respect your privacy — your info is safe and never shared.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
