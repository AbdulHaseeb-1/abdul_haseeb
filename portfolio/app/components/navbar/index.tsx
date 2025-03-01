"use client";

import { useState } from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";
import { MobileNavLink, NavLink } from "./nav_links";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="z-50 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              {/* <Image
                  src={"/logos/ck-dark.svg"}
                  alt=""
                  className="h-10 w-10"
                  width={1000}
                  height={1000}
                /> */}
              <SlEnergy className="text-amber-400" size={22} />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/testimonials">Testimonials</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md  focus:outline-none"
            >
              {isOpen ? (
                <IoClose className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <BiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavLink href="/">Home</MobileNavLink>
              <MobileNavLink href="/about">About</MobileNavLink>
              <MobileNavLink href="/services">Services</MobileNavLink>
              <MobileNavLink href="/testimonials">Testimonials</MobileNavLink>
              <MobileNavLink href="/contact">Contact</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
