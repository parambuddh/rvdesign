import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background elements to match main site branding */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-narrow relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <div className="mb-8 relative inline-block">
            <h1 className="text-9xl font-extrabold font-heading tracking-tighter opacity-10 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-text-heading">
                Lost in <span className="text-primary">Space?</span>
              </h2>
            </div>
          </div>

          <p className="text-xl text-text-body mb-10 leading-relaxed">
            The page you're looking for ( <code className="bg-muted px-2 py-1 rounded text-primary text-sm font-mono">{location.pathname}</code> ) doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="btn-cta flex items-center gap-2 !px-8 py-3.5"
            >
              <Home className="w-5 h-5" />
              Return Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-outline flex items-center gap-2 !px-8 py-3.5"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
          
          <div className="mt-12 pt-12 border-t border-border/40">
            <p className="text-text-muted text-sm">
              If you believe this is a technical error, please contact us at <span className="font-semibold text-text-heading">support@ardira.com</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;

