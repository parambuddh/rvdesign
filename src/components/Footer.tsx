import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="bg-text-heading text-background/80 section-padding !py-12">
      <div className="container-narrow">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoIcon} alt="RelationshipVista" className="h-7 w-7" />
              <span className="font-heading font-bold text-lg text-background">
                RelationshipVista
              </span>
            </div>
            <p className="text-sm text-background/60 mb-4">
              Relationship Intelligence for Salesforce
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-background mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Features", "Use Cases", "Benefits", "Contact Us"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-background mb-4 text-sm uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>info@ardira.com</li>
              <li>1.669.777.6838</li>
              <li className="pt-2">Support: support@ardira.com</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold text-background mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#" className="hover:text-background transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center">
          <p className="text-xs text-background/40">
            © 2026 Ardira Corporation. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
