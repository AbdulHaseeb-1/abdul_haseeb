"use client";

import { motion } from "framer-motion";
import CodeIcon from "./icon_box";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "../context/theme-provider";
import clsx from "clsx";

export default function AnimatedHero() {
  const { color } = useTheme();

  return (
    <div className="min-h-screen bg-black flex items-center justify-between px-20">
      <div className="flex flex-col gap-4">
        <div className={`text-white font-bold`}>
          <div  className="text-2xl">I am</div>
          <TypeAnimation
            sequence={["Abdul Haseeb"]}
            speed={1}
            cursor={false}
            className={clsx("text-6xl", `text-${color}`)}
          />
          <motion.p
            className="text-white text-2xl text-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            A full stack web developer
          </motion.p>
        </div>
      </div>
      <div className="relative">
        <CodeIcon />
      </div>
    </div>
  );
}
