"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100] backdrop-blur-md">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-black sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4 bg-black">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-amber-400 text-black"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4 bg-black">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 bg-black text-xs md:text-sm lg:text-base h-full md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col   dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              {/* <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div> */}
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "data:image/jpeg;base64,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",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "data:image/jpeg;base64,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",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },


];
