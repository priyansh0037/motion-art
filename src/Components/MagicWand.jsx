import React from 'react'
import wand from "../assets/motionarteffect-img5.png"
import { IoIosArrowRoundForward } from "react-icons/io"
const MagicWand = () => {
  return (
    <div className=' pb-16 lg:pt-20 lg:pb-20 px-5 lg:px-0 lg:w-5/6 mx-auto  relative pointer-events-none  lg:flex     '>
 <div className='flex flex-col flex-[3] gap-10 '>
 <h2 className='lg:text-6xl lg:leading-[5rem] text-4xl  leading-[3.5rem]   font-semibold lg:text-left text-center text-titleColor'> 
    Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
    </h2>
    <p className='text-[1.4rem] text-center lg:text-left  leading-[2.5rem] lg:text-[1.5rem] lg:leading-[2.7rem] '>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements</p>

<div className='flex items-center gap-2 justify-center lg:justify-start '>

    <button class=" bg-custom-gradient hover:bg-gradient-to-r from-pink-500 to-yellow-500 w-fit text-xl bg-white rounded-2xl  py-3 px-5 cursor-pointer hover:bg-transparent  pointer-events-none text-white flex items-center gap-2 justify-center ">
   Purchase From Envato
<IoIosArrowRoundForward size={32}/>
  </button> 
</div>
  
  </div>
 <div className='flex flex-[1.8] lg:justify-end justify-center w-full mt-20 lg:mt-0 '>
  <img src={wand} alt="" className='w-64 h-64' />

 </div>
   </div>
  )
}

export default MagicWand
