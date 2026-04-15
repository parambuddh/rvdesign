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
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Contact Us</h2>
          <p className="text-text-body text-lg">
            Have questions or want to learn more? Reach out and we'll get back to you promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-accent rounded-xl p-8 text-center">
                <p className="text-primary font-bold text-xl mb-2">Thank you!</p>
                <p className="text-text-body">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { key: "name", label: "Name", type: "text" },
                  { key: "email", label: "Email", type: "email" },
                  { key: "phone", label: "Phone", type: "tel" },
                ].map(({ key, label, type }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-text-heading mb-1.5">
                      {label} <span className="text-destructive">*</span>
                    </label>
                    <input
                      type={type}
                      required
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-text-heading mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>
                <p className="text-xs text-text-muted">
                  We're committed to your privacy. RelationshipVista uses the information you provide
                  to contact you about relevant content, products, and services.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold font-heading mb-2">Quick Contact</h3>
              <p className="text-sm text-text-body">
                Get in touch with a representative to see a demo or simply learn more about the product.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-text-body">
                  2040 Martin Ave<br />
                  Santa Clara, CA 95050<br />
                  United States
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <p className="text-sm text-text-body">1.669.777.6838</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <p className="text-sm text-text-body">info@ardira.com</p>
              </div>
              <div className="flex items-start gap-3">
                <HelpCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-text-body">
                  For customer support, email us at<br />
                  <span className="font-medium">support@ardira.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
