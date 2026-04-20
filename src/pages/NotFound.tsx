import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-sky-50/50 to-indigo-50/50 relative overflow-hidden px-4">
      {/* Background decorative elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-[hsl(202,35%,62%)]/10 rounded-full blur-[80px]"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-[hsl(113,42%,42%)]/10 rounded-full blur-[80px]"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 40, -20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-md"
      >
        {/* 404 Number */}
        <motion.h1
          className="text-8xl md:text-9xl font-extrabold gradient-text mb-4 font-heading tracking-tighter"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          404
        </motion.h1>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-heading mb-3">Page Not Found</h2>
          <p className="text-base md:text-lg text-text-body leading-relaxed mb-8">
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Back Button */}
          <motion.button
            onClick={() => navigate(-1)}
            className="btn-outline flex items-center justify-center gap-2 !px-7 py-3 transition-all duration-300 font-medium cursor-pointer"
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </motion.button>

          {/* Home Button */}
          <motion.button
            onClick={() => navigate("/")}
            className="btn-cta flex items-center justify-center gap-2 !px-7 py-3 hover:shadow-lg transition-all duration-300 font-medium cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home className="w-5 h-5" />
            Return Home
          </motion.button>
        </motion.div>

        {/* Path Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 pt-8 border-t border-border/40 text-xs md:text-sm text-text-muted break-all"
        >
          Requested path: <span className="font-mono text-primary bg-primary/5 px-2 py-1 rounded">{location.pathname}</span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default NotFound;
