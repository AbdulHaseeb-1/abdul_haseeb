import React from "react";
import { DiJavascript } from "react-icons/di";

export default function Skills() {
  let after =
    " after:absolute after:top-0  after:bg-gradient-to-b after:from-black after:via-amber-400 after:to-black  after:w-full after:h-[300px]  ";
  let before =
    " before:absolute before:bottom-0  before:bg-gradient-to-b before:from-black before:via-amber-400 before:to-black before:w-full before:h-[300px]  ";
  return (
    <div className="relative container m-auto h-[700px] text-white grid overflow-hidden mt-20 md:mt-0 ">
      <div
        className={`absolute left-[50%] rotate-[80deg]  md:rotate-45 font-bold w-1 m-auto  h-[700px]  ${after} ${before}`}
      >
        <div className="absolute text-4xl text-amber-400 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2  -rotate-90">
          Skills
        </div>
      </div>

      {/* <div className="w-[100px] border border-amber-400"></div> */}
      <div className="grid grid-rows-[1fr,100px,1fr] md:grid-rows-2 md:grid-cols-[100px,1fr,100px] ">
        {/*  */}
        <div className=" text-white  rounded-md lg:m-auto  grid grid-cols-[60px,1fr] md:col-span-2 md:grid-cols-[60px,1fr]    items-center  gap-5">
          <div className="w-[60px]  flex flex-col items-center justify-end  py-1 border h-64   border-amber-400">
            <DiJavascript size={40} color="orange" />
            <DiJavascript size={40} />
            <DiJavascript size={40} />
            <DiJavascript size={40} />
            <DiJavascript size={40} />
          </div>
          <div className="md:grid md:grid-cols-2 ">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-amber-400">Frontend</h1>
              <div className="w-full h-1 bg-gradient-to-l rounded-full from-black to-amber-400  mt-1"></div>
              <p className="mt-1 text-sm md:text-base ">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className=" text-white rounded-md row-start-3 md:row-start-2 md:col-start-2 lg:m-auto grid grid-cols-[1fr,60px] md:col-span-2 md:grid-cols-[1fr,60px]  items-center  gap-5">
          <div className="md:grid md:grid-cols-2">
            <div className="col-start-2">
            <h1 className="text-2xl lg:text-3xl font-bold text-amber-400 text-end">
              Backend
            </h1>
            <div className="w-full h-1 bg-gradient-to-r rounded-full from-black to-amber-400 mt-1"></div>
            <p className="mt-1 text-sm  md:text-base text-end ">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
            </div>
          </div>
          <div className="w-[60px]  flex flex-col items-center justify-end  py-1 border h-64 border-amber-400">
            <DiJavascript size={40} color="orange" />
            <DiJavascript size={40} />
            <DiJavascript size={40} />
            <DiJavascript size={40} />
            <DiJavascript size={40} />
          </div>
        </div>
      </div>

      {/*  */}

      {/* <div className="w-[100px] border border-amber-400"></div> */}
    </div>
  );
}
