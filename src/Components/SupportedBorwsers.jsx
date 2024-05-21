import React from "react";
import Browsers from "../assets/motionarteffect-img8.png"

const SupportedBorwsers = () => {
  return (
    <div className="px-5 lg:px-0 w-full h-full ">


    <div className="relative pointer-events-none h-full bg-suportedBrowserGreadient mx-auto lg:w-5/6 p-14 lg:p-20
    rounded-[20px] border-[1.6px]  border-custom-border ">
      <div className="lg:w-[53%] w-[100%] h-full   lg:mx-auto">

      <div className="flex gap-6 lg:gap-10 flex-col justify-center">
        <p className="text-3xl leading-[2.8rem] lg:leading-none lg:text-5xl font-semibold">Supported by All Popular Browsers</p>
        <p className="text-[1.5rem] lg:text-3xl text-[#B0A9C2] text-center">
          Rest assured, Motion Art is designed to be compatible with all major
          web browsers.
        </p>
      </div>
      <div className="flex w-full h-full justify-center mt-12">

      <img src={Browsers} alt="Browsers" className="lg:w-[80%] lg:h-[80%] w-full h-full" />
      </div>


      </div>
    </div>
    </div>
  );
};

export default SupportedBorwsers;
