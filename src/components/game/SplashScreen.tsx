"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  /** Called when the splash finishes (auto-timeout or user click) */
  onDone: () => void;
  /** How long (ms) to show the splash before auto-fading. Default: 1600 */
  displayMs?: number;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onDone,
  displayMs = 1600,
}) => {
  const [visible, setVisible] = useState(true);

  // Auto-dismiss after displayMs
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), displayMs);
    return () => clearTimeout(t);
  }, [displayMs]);

  // When framer finishes fading out, notify parent
  const handleExitComplete = () => onDone();

  const handleClick = () => setVisible(false);

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          onClick={handleClick}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white cursor-pointer select-none"
        >
          {/* Logo */}
          <motion.img
            src="/logo.png"
            alt="Prompt or Get Fired"
            draggable="false"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="w-[75vw] max-w-[480px] h-auto object-contain"
          />

          {/* Subtle hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 font-['Inter'] text-xs tracking-widest uppercase text-[#94a3b8]"
          >
            Click to start
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
