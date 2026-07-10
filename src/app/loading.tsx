"use client";

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center">
      {/* Logo animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative mb-8"
      >
        <div className="w-20 h-20 rounded-full overflow-hidden bg-dark-300 border-2 border-primary/30 flex items-center justify-center shadow-2xl shadow-primary/30">
          {logoError ? (
            <span className="text-primary font-black text-2xl font-heading">SC</span>
          ) : (
            <Image
              src="/Logo.png"
              alt="GRES São Clemente"
              width={80}
              height={80}
              className="w-full h-full object-cover scale-125"
              onError={() => setLogoError(true)}
              priority
            />
          )}
        </div>
        <motion.div
          className="absolute -inset-2 rounded-full border-2 border-primary/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Loading bar */}
      <div className="w-48 h-1 rounded-full bg-dark-300 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary via-primary-dark to-primary"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            boxShadow: "0 0 8px rgba(255, 212, 0, 0.4)",
          }}
        />
      </div>

      {/* Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-sm text-gray-500 mt-4 font-medium tracking-wider uppercase"
      >
        Carregando...
      </motion.p>
    </div>
  );
}
