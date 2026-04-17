import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface GetNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const APPEXCHANGE_URL = "https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000FZcqBUAT";

const GetNowModal = ({ isOpen, onClose }: GetNowModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    company: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!/^[\d\s\-+()]+$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Please enter a valid phone number";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company/Organization name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const API_URL = import.meta.env.VITE_CONTACT_API_URL || '/api/contact';

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.contactNumber,
        message: `Company/Organization: ${formData.company}`,
        source_url: window.location.href
      };

      // Fire and forget post (we don't wait for success to avoid delaying user's redirect)
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(console.error);

      // Open Salesforce AppExchange in a new tab
      window.open(APPEXCHANGE_URL, "_blank");
        
      // Reset form and close modal
      setIsSubmitting(false);
      onClose();
      setFormData({ name: "", email: "", contactNumber: "", company: "" });
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <div className="w-full max-w-md mx-4 bg-background rounded-2xl sm:rounded-3xl border border-border/50 shadow-2xl overflow-hidden pointer-events-auto">
              {/* Header */}
              <div className="relative h-auto flex items-center justify-center p-5 sm:p-8 border-b border-border/30" style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--secondary-blue) / 0.1))" }}>
                <div className="text-center">
                  <h2 className="text-xl sm:text-2xl font-bold text-text-heading select-none">Get RelationshipVista Now</h2>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 p-2 hover:bg-primary/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-4 sm:space-y-5">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-text-heading mb-2">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name
                        ? "border-destructive/50 bg-destructive/5"
                        : "border-border hover:border-primary/30"
                    } bg-background text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all`}
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-text-heading mb-2">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.email
                        ? "border-destructive/50 bg-destructive/5"
                        : "border-border hover:border-primary/30"
                    } bg-background text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all`}
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Contact Number Field */}
                <div>
                  <label className="block text-sm font-semibold text-text-heading mb-2">
                    Contact Number <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.contactNumber
                        ? "border-destructive/50 bg-destructive/5"
                        : "border-border hover:border-primary/30"
                    } bg-background text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all`}
                  />
                  {errors.contactNumber && (
                    <p className="text-destructive text-xs mt-1">{errors.contactNumber}</p>
                  )}
                </div>

                {/* Company Field */}
                <div>
                  <label className="block text-sm font-semibold text-text-heading mb-2">
                    Company/Organization Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.company
                        ? "border-destructive/50 bg-destructive/5"
                        : "border-border hover:border-primary/30"
                    } bg-background text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all`}
                  />
                  {errors.company && (
                    <p className="text-destructive text-xs mt-1">{errors.company}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-cta w-full justify-center !rounded-xl mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Redirecting..." : "Get It Now"}
                </button>

                <p className="text-xs text-text-muted text-center">
                  You'll be redirected to Salesforce AppExchange to install RelationshipVista
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default GetNowModal;
