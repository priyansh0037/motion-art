import React from 'react'
import lightning from "../assets/motionarteffect-img9.png"
import thumbsUp from "../assets/motionarteffect-img6.png"
import moon from "../assets/motionarteffect-img7.png"
import AllRoundCards from './AllRoundCards'



const AllRound = () => {
  return (
    <div className=' pt-16 pb-8 lg:pt-24 px-5 lg:w-5/6 mx-auto relative pointer-events-none h-full'>      

    <div className='lg:w-[50%] w-full mx-auto flex flex-col gap-7'>
        <p className='text-4xl leading-[3.5rem] lg:text-6xl font-semibold lg:leading-[4rem] text-center'>
        An All-Round Plugin With Powerful Features
        </p>
        <p  className='text-[#B0A9C2] text-center text-xl leading-[2.5rem] lg:text-2xl lg:leading-[2.7rem]' >Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
    </div>

<div className='grid grid-cols-1 lg:grid-cols-3 gap-7 mt-20'>

<AllRoundCards img={lightning} heading={"Light Weight"} para={"Motion Art for Elementor is designed to be lightweight."}/>
<AllRoundCards img={thumbsUp} heading={"100% Responsive"} para={"Create a consistent visual experience across all devices"}/>
<AllRoundCards img={moon} heading={"User Friendly Interface"} para ={"Ensure a smooth experience for both applicants and administrators."}/>
</div>
    </div>
  )
}

export default AllRound
