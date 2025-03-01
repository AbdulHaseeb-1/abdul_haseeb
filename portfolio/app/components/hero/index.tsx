"use client";
import { motion } from "framer-motion";
import HeroText from "./hero_text";
import HeroImage from "./hero_image";

export default function Hero() {
  let lineProperties =
    "absolute h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent w-full";

  let lineVariants = {
    initial: { width: 0 },
    animate: { width: "100%" },
  };
  let componentVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 100 },
  };

  return (
    <div>
      <div className="container m-auto py-8 pb-20 md:h-[800px] grid items-center relative overflow-hidden">
        <div className="grid lg:grid-cols-10 lg:grid-rows-[1fr,100px,1fr]">
          <motion.div
            variants={componentVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.5, delay: 1.5 }}
            className="lg:col-span-6 lg:row-span-2 "
          >
            <HeroText />
          </motion.div>
          <motion.div
            variants={componentVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.5, delay: 2 }}
            className="lg:row-start-2 lg:row-span-2 m-auto lg:col-span-auto lg:col-start-7 mt-10 md:mt-10"
          >
            <HeroImage />
          </motion.div>
        </div>

        {/* // ? Data Shadow */}
        {/* //* Top */}
        <div
          className="hidden md:block w-full h-0.5 top-0 z-50 bg-black absolute"
          style={{
            boxShadow: "0px -40px 200px 180px black",
          }}
        />
        {/* //* Bottom */}
        <div
          className="hidden lg:block w-full h-0.5 bottom-0 z-50 bg-black absolute"
          style={{
            boxShadow: "0px -20px 200px 170px black",
          }}
        />

        {/* // ? Animated Lines */}
        {/* // ! From top to bottom */}
        {/* // * First line  */}
        <motion.div
          variants={lineVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 1 }}
          className={` top-20 -rotate-[10deg] ${lineProperties}`}
        />
        {/* // * Second line */}
        <motion.div
          variants={lineVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 1 }}
          className={` top-20 md:top-44 rotate-[20deg] ${lineProperties}`}
        />
        {/* // * Third line  */}
        <motion.div
          variants={lineVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 1, delay: 0.5 }}
          className={`left-20 -rotate-[45deg] ${lineProperties}`}
        />
        {/* // * Forth line */}
        <motion.div
          variants={lineVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 1, delay: 0.9 }}
          className={`bottom-40 left-0 rotate-[19deg]  ${lineProperties}`}
        />
      </div>
    </div>
  );
}
