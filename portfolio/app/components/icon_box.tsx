"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "../context/theme-provider";
import clsx from "clsx";

export default function CodeIcon() {
  const { color } = useTheme();
  return (
    <div className="relative  w-64 h-64">
      {/* Animated rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className={clsx(
            "absolute w-64 h-64 rounded-full border-0 blur-md ",
            `${color}`
          )}
          animate={{
            scale: [1, 1.2],
            opacity: [0.1, 0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      <Image
        src="/download.png"
        width={300}
        height={300}
        alt="Hero"
        className="absolute   z-50 w-full h-full rounded-full object-cover"
      />
      {/* Background glow effect */}
      <motion.div
        className="absolute w-full h-full rounded-full bg-orange-500/30 blur-xl"
        animate={{
          scale: [1, 1.2],
        }}
      />
    </div>
  );
}
