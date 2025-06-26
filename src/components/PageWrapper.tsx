import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 50); // Krátká prodleva kvůli React hydration
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      style={{ overflowX: "hidden" }} // Pokud máš animace s X posunem
    >
      {children}
    </motion.div>
  );
};
