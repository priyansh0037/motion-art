import React from 'react'

import card1 from "../assets/motionarteffect-img11.png"

const ApplyCard = ({card}) => {
  return (
    <div className='w-full  h-full  bg-suportedBrowserGreadient p-16 rounded-[20px] border-[1.6px]  border-custom-border pointer-events-none '>

<div className='flex flex-col gap-7 justify-center'>

      <p className=' text-3xl lg:text-4xl font-semibold text-center lg:text-left'>Apply On Section</p>
      <p className='text-[1.4rem] leading-[2.5rem] lg:text-[1.4rem] lg:leading-[2.2rem] text-center lg:text-left text-gray-400'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>

      <img src={card1} alt="" />
</div>
        </div>
  )
}

export default ApplyCard
