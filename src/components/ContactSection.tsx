import { useState } from "react";
import { MapPin, Phone, Mail, HelpCircle } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-[38px] font-extrabold font-heading mb-4">Contact Us</h2>
          <p className="text-text-body text-lg">
            Have questions or want to learn more? Reach out and we'll get back to you promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Form - AgentVista style */}
          <div className="lg:col-span-3 bg-card rounded-2xl border border-border/60 p-7 shadow-sm">
            {submitted ? (
              <div className="bg-primary-light rounded-xl p-10 text-center border border-primary/20">
                <p className="text-primary font-bold text-xl mb-2">Thank you!</p>
                <p className="text-text-body">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { key: "name", label: "Name", type: "text", placeholder: "Your full name" },
                  { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                  { key: "phone", label: "Phone", type: "tel", placeholder: "+1 (555) 000-0000" },
                ].map(({ key, label, type, placeholder }) => (
                  <div key={key}>
                    <label className="block text-sm font-semibold text-text-heading mb-1.5">
                      {label} <span className="text-destructive">*</span>
                    </label>
                    <input
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold text-text-heading mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your needs..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>
                <button type="submit" className="btn-cta w-full justify-center rounded-lg">
                  Send Message
                </button>
                <p className="text-xs text-text-muted leading-relaxed">
                  We're committed to your privacy. RelationshipVista uses the information you provide
                  to contact you about relevant content, products, and services. You may unsubscribe
                  from these communications at any time.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info - AgentVista style cards */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h3 className="text-xl font-bold font-heading mb-2">Quick Contact</h3>
              <p className="text-sm text-text-body leading-relaxed">
                Get in touch with a representative to see a demo or simply learn more about the product.
              </p>
            </div>

            {[
              {
                icon: MapPin,
                title: "Address",
                content: "2040 Martin Ave, Santa Clara, CA 95050, United States",
              },
              { icon: Mail, title: "Email", content: "info@ardira.com" },
              { icon: Phone, title: "Phone", content: "1.669.777.6838" },
              {
                icon: HelpCircle,
                title: "Support",
                content: "For customer support, email us directly at support@ardira.com",
                highlight: "support@ardira.com",
              },
            ].map(({ icon: Icon, title, content }, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-border/60 bg-card hover:border-primary/20 transition-colors">
                <div className="icon-box">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-heading mb-0.5">{title}</p>
                  <p className="text-sm text-text-muted leading-relaxed">{content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
