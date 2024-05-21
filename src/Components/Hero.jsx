import React from "react";

const Hero = () => {
  return (
    <div className="grid-cols-1 w-full px-5 lg:p-0 lg:w-5/6 mx-auto h-full bg-red- relative grid lg:grid-cols-5 lg:mt-24 pointer-events-none  ">

      <div className=" col-span-1 lg:col-span-1 space-y-2  mt-9  text-center lg:text-left   ">
        <div className="lg:space-y-2 space-y-0 ">

        <div >
          <span className="text-3xl bg-gradient-to-r from-orange-500 to-purple-700 text-transparent bg-clip-text font-semibold">
            Transform
          </span>
        </div>
        <div>
          <span className="text-3xl bg-gradient-to-r from-orange-500 to-purple-700 text-transparent bg-clip-text font-semibold">
            Your Website
          </span>
        </div>

        </div>

        <div className="space-y-4 lg:space-y-2">
          <p className="text-3xl  hidden lg:block">With Motion Art</p>
          <p className="text-3xl hidden lg:block">Effect</p>
          <p className="text-3xl block lg:hidden">With Motion Art Effect</p>
          
        </div>
      </div>

      <div className="text-center lg:text-left col-span-1 lg:col-span-3  lg:px-16  mt-6 lg:mt-0 ">
        <h2 className="text-5xl leading-[4rem]  lg:text-8xl lg:leading-[7rem] font-semibold ">Attract Your</h2>
        <h2 className="text-5xl leading-[4rem] lg:text-8xl  lg:leading-[7rem] font-semibold">Visitors Attention</h2>
        <h2 className="text-5xl leading-[4rem] lg:text-8xl lg:leading-[7rem] font-semibold  ">With Colorful</h2>

        <span className="text-5xl leading-[4rem] lg:text-8xl bg-gradient-to-r from-orange-500 to-purple-700 text-transparent bg-clip-text">Motion Art Effect</span>
        <div className="mt-6 lg:mt-10">
            <p className="text-[1.4rem] text-center lg:text-left leading-[2.5rem] lg:text-[1.7rem] lg:leading-[3rem]">Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
