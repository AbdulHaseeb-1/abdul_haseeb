import React from "react";
import { BsGithub, BsWhatsapp } from "react-icons/bs";

export default function HeroText() {
  return (
    <div className="text-white p-2 pt-20 pb-10 w-full">
      <div className="">
        <div className="text-base sm:text-xl font-bold">I am</div>
        
        <div className="text-4xl sm:text-5xl font-bold text-amber-400">Abdul Haseeb</div>
        <div className="pl-0 text-center md:text-pretty lg:text-start  lg:pl-40 font-bold text-base sm:text-base md:text-xl ">A full-stack web developer</div>
      </div>
      <div className="text-sm md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, unde
        tempora. Dolorum, alias illo eligendi commodi et ratione perspiciatis
        est?
      </div>
      <div className="flex gap-x-4 pt-2 items-center">
        <div className="sm:text-xl ">Links:</div>
        <div className="flex gap-3">
          <BsGithub size={22}  />
          <BsWhatsapp size={22} color="lime" />
        </div>
      </div>
    </div>
  );
}
