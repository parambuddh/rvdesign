import { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useRecaptcha } from "@/hooks/useRecaptcha";

const LazyMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Load slightly before it comes into view
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mapRef} className="rounded-xl overflow-hidden border border-border/50 h-64 md:h-80 w-full mt-2 bg-muted/20 flex items-center justify-center relative" style={{ minHeight: "224px", flexShrink: 0 }}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/10 animate-pulse">
          <MapPin className="w-8 h-8 text-muted-foreground/30" />
        </div>
      )}
      {isLoaded && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6342.08172427285!2d-121.96206399999998!3d37.36521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fca3b29bd16bd%3A0x1b7e4bbf55b3700b!2s2040%20Martin%20Ave%2C%20Santa%20Clara%2C%20CA%2095050%2C%20USA!5e0!3m2!1sen!2sin!4v1775548501571!5m2!1sen!2sin"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Map - Santa Clara, CA"
          style={{ border: "none", width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
};

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { loadRecaptcha, executeRecaptcha } = useRecaptcha();

  const formRef = useRef<HTMLFormElement>(null);
  const [rightSideHeight, setRightSideHeight] = useState<string>("auto");

  useEffect(() => {
    const updateHeight = () => {
      // Sync right side height with form height on desktop
      if (formRef.current && window.innerWidth >= 768) {
        setRightSideHeight(`${formRef.current.offsetHeight}px`);
      } else {
        setRightSideHeight("auto");
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    if (formRef.current) {
      resizeObserver.observe(formRef.current);
    }

    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
      resizeObserver.disconnect();
    };
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^[\d\s\-+()]+$/.test(form.phone)) e.phone = "Invalid phone number";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // Execute reCAPTCHA V3
      const token = await executeRecaptcha("contact_form");

      // Send form data to PHP backend
      const API_URL = import.meta.env.VITE_CONTACT_API_URL || '/api/contact.php';

      const payload = {
        ...form,
        recaptcha_token: token,
        source_url: window.location.href
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      toast.success("Thank you! We'll be in touch shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (name: string) =>
    `w-full px-4 py-3 rounded-xl border bg-background/50 text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all backdrop-blur-sm ${
      errors[name] ? "border-destructive" : "border-input"
    }`;

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-bold tracking-widest uppercase gradient-text mb-3 inline-block">
              Contact
            </p>
            <h2 className="text-3xl md:text-[38px] font-extrabold font-heading mb-4 text-text-heading">Get in Touch</h2>
            <p className="text-text-body text-lg">
              Have questions or want to learn more? Reach out and we'll get back to you promptly.
            </p>
            <div className="section-divider mt-6" />
          </div>
        </motion.div>

        {/* Two Column Layout - Form Left (Sticky), Info + Map Right (Fixed Height) */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto items-start">
          
          {/* Form - Left Side - Sticky Position, Static Size */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-full"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="md:sticky md:top-24 premium-card p-6 md:p-8 space-y-4 !border-border/40 h-fit flex flex-col"
            >
              <div>
                <label className="block text-sm font-semibold text-text-heading mb-1.5">
                    Your Name <span className="text-destructive">*</span>
                </label>
                <input type="text" value={form.name} onFocus={loadRecaptcha} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass("name")} placeholder="John Doe" />
                {errors.name && <p className="text-xs text-destructive mt-1 font-medium">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-heading mb-1.5">
                    Your Email <span className="text-destructive">*</span>
                </label>
                <input type="email" value={form.email} onFocus={loadRecaptcha} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass("email")} placeholder="john@company.com" />
                {errors.email && <p className="text-xs text-destructive mt-1 font-medium">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-heading mb-1.5">
                    Phone <span className="text-destructive">*</span>
                </label>
                <input type="tel" value={form.phone} onFocus={loadRecaptcha} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass("phone")} placeholder="Enter your phone number" />
                {errors.phone && <p className="text-xs text-destructive mt-1 font-medium">{errors.phone}</p>}
              </div>

              <div className="flex-grow">
                <label className="block text-sm font-semibold text-text-heading mb-1.5">
                    Your Message
                </label>
                <textarea value={form.message} onFocus={loadRecaptcha} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass("message")} resize-none h-32 md:h-40`} placeholder="Tell us about your needs..." />
                {errors.message && <p className="text-xs text-destructive mt-1 font-medium">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cta w-full justify-center !rounded-xl !py-3 flex items-center gap-2"
                >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? "Submitting..." : "Send Message"}
                </button>
              </div>

              {/* reCAPTCHA Badge Notice */}
              <p className="text-xs text-center mt-3 leading-relaxed">
                This site is protected by reCAPTCHA and the Google
                <br />
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="font-semibold text-text-heading hover:text-secondary-blue hover:underline transition-all duration-300">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="font-semibold text-text-heading hover:text-secondary-blue hover:underline transition-all duration-300">Terms of Service</a> apply.
              </p>
            </form>
          </motion.div>

          {/* Right Side - Info + Map (Fixed Height matching form, Scrolls silently) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="flex flex-col gap-6 md:overflow-y-auto overflow-hidden scrollbar-hide premium-card p-6 md:p-8 !border-border/40"
              style={{ maxHeight: rightSideHeight }}
            >
              {/* Contact Info Box - TOP */}
              <div className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold font-heading mb-3 text-text-heading">
                  Quick Contact
                </h3>
                <p className="text-sm text-text-body leading-relaxed mb-6">
                  Get in touch with a representative to see a demo or simply learn more about the product.
                </p>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-background/30 hover:border-primary/30 transition-colors">
                    <div className="icon-box shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <a href="https://maps.google.com/?q=2040+Martin+Ave+Santa+Clara+CA+95050" target="_blank" rel="noopener noreferrer" className="text-sm leading-relaxed hover:opacity-80 transition-opacity">
                      <p className="font-bold text-text-heading hover:text-secondary-blue hover:underline transition-all duration-300">2040 Martin Ave, Santa Clara, CA</p>
                      <p className="text-text-muted hover:text-secondary-blue transition-all duration-300">95050 United States</p>
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-background/30 hover:border-primary/30 transition-colors">
                    <div className="icon-box shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <a href="tel:1.669.777.6838" className="text-sm font-bold text-text-heading hover:text-secondary-blue hover:underline transition-all duration-300">1.669.777.6838</a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-background/30 hover:border-primary/30 transition-colors">
                    <div className="icon-box shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <a href="mailto:info@ardira.com" className="text-sm font-bold text-text-heading hover:text-secondary-blue hover:underline transition-all duration-300">info@ardira.com</a>
                  </div>

                  {/* Support Note */}
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-background/30 hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary">?</span>
                    </div>
                    <div className="text-sm">
                      <p className="text-text-muted">For customer support, email us directly at</p>
                      <p><a href="mailto:support@ardira.com" className="font-bold text-text-heading hover:text-secondary-blue hover:underline transition-all duration-300">support@ardira.com</a></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps - BOTTOM (Lazy loaded) */}
              <LazyMap />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
