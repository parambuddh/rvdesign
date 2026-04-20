import React from "react";
import logo from "@/assets/logo.webp";
import { Link, useNavigate } from "react-router-dom";
import { Globe, Mail, Phone } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "linear-gradient(180deg, hsl(210, 14%, 16%), hsl(210, 14%, 12%))" }} className="relative overflow-hidden pt-6 sm:pt-8 pb-0">
      <div className="container relative pb-0 px-4 md:px-8 mx-auto max-w-7xl">
        <div className="pt-4 sm:pt-6 pb-1">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 mb-8 sm:mb-10">
            {/* Company Info - Left (Col 1) */}
            <div className="flex flex-col items-start md:col-span-1">
              <Link
                to="/"
                aria-label="RelationshipVista - Return to Home"
                className="flex items-center gap-2.5 mb-6 hover:opacity-80 transition-opacity bg-none border-none cursor-pointer p-0"
              >
                <img src={logo} alt="RelationshipVista" className="h-10 sm:h-12 w-auto" loading="lazy" decoding="async" width={180} height={48} />
              </Link>
              <p className="text-sm leading-relaxed max-w-xs text-justify" style={{ color: "hsl(210, 8%, 65%)" }}>
                Turn complex relationships into clear, actionable insights your team can explore and understand instantly Natively within Salesforce.
              </p>
            </div>

            {/* Spacer (Col 2) */}
            <div className="hidden md:block md:col-span-1"></div>

            {/* Quick Links - Center (Col 3) */}
            <div className="flex flex-col md:items-center md:col-span-1">
              <div className="w-fit">
                <h3 className="font-bold text-white mb-4 sm:mb-6 text-sm sm:text-base tracking-wider font-heading">Quick Links</h3>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  {[
                    { label: "Home", href: "#home" },
                    { label: "Overview", href: "#overview" },
                    { label: "Features", href: "#features" },
                    { label: "Benefits", href: "#benefits" },
                    { label: "Use Cases", href: "#use-cases" },
                    { label: "Contact Us", href: "#contact" },
                  ].map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => {
                          const el = document.getElementById(link.href.slice(1));
                          if (el) {
                            window.scrollTo({
                              top: el.getBoundingClientRect().top + window.pageYOffset - 120,
                              behavior: "smooth",
                            });
                          } else {
                            navigate("/" + link.href);
                          }
                        }}
                        className="transition-colors duration-300 bg-none border-none cursor-pointer p-0 block text-left"
                        style={{ color: "hsl(210, 8%, 65%)" }}
                        onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.color = "hsl(113, 42%, 60%)")}
                        onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.color = "hsl(210, 8%, 65%)")}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Spacer (Col 4) */}
            <div className="hidden md:block md:col-span-1"></div>

            {/* Contact Info - Right (Col 5) */}
            <div className="flex flex-col md:items-end md:col-span-1">
              <div className="w-fit">
                <h3 className="font-bold text-white mb-4 sm:mb-6 text-sm sm:text-base tracking-wider font-heading">Contact Info</h3>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <li className="flex items-center gap-2">
                    <Globe className="h-4 w-4 shrink-0" style={{ color: "hsl(113, 42%, 60%)" }} aria-hidden="true" />
                    <a
                      href="https://www.relationshipvista.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300"
                      style={{ color: "hsl(210, 8%, 65%)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(113, 42%, 60%)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(210, 8%, 65%)")}
                    >
                      www.relationshipvista.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 shrink-0" style={{ color: "hsl(113, 42%, 60%)" }} aria-hidden="true" />
                    <a
                      href="mailto:support@ardira.com"
                      className="transition-colors duration-300"
                      style={{ color: "hsl(210, 8%, 65%)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(113, 42%, 60%)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(210, 8%, 65%)")}
                    >
                      support@ardira.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0" style={{ color: "hsl(113, 42%, 60%)" }} aria-hidden="true" />
                    <a
                      href="tel:+16697776838"
                      className="transition-colors duration-300"
                      style={{ color: "hsl(210, 8%, 65%)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(113, 42%, 60%)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(210, 8%, 65%)")}
                    >
                      1.669.777.6838
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="py-3 flex flex-col gap-2 sm:gap-3 md:flex-row md:items-center md:justify-between" style={{ borderTop: "1px solid hsl(210, 8%, 22%)" }}>
            <p className="text-xs order-2 md:order-1" style={{ color: "hsl(210, 8%, 65%)" }}>
              © {currentYear} RelationshipVista. All Rights Reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 text-[10px] sm:text-xs order-1 md:order-2">
              <Link
                to="/terms-of-use"
                className="transition-colors duration-300"
                style={{ color: "hsl(210, 8%, 65%)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(113, 42%, 60%)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(210, 8%, 65%)")}
              >
                Terms of Use
              </Link>
              <Link
                to="/privacy-policy"
                className="transition-colors duration-300"
                style={{ color: "hsl(210, 8%, 65%)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(113, 42%, 60%)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(210, 8%, 65%)")}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



