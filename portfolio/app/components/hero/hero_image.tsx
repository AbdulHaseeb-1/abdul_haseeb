"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

export default function HeroImage() {
  return (
    <div className="relative  w-64 h-64">
      {/* Animated rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className={clsx(
            "absolute w-64 h-64 rounded-full  border  ",
            `border-amber-400`
          )}
          animate={{
            scale: [1, 1.35],
            opacity: [0.1, 1, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
        />
      ))}

        <Image
          src="/download.png"
          width={300}
          height={300}
          alt="Hero"
          className="absolute border-amber-400/40 border  z-50 w-full h-full rounded-full object-cover"
        />
   
      {/* Background glow effect */}
      <motion.div
        className="absolute w-full h-full rounded-full bg-amber-400 opacity-20 blur-xl "
        animate={{
          scale: [1, 1.2],
        }}
      />
    </div>
  );
}
