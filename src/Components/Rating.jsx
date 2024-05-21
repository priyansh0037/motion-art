import React from 'react'

import RatingCard from './RatingCard'

const Rating = () => {
  return (
    <div className='  pt-24 pb-16 lg:pt-28 w-5/6 mx-auto  relative lg:pointer-events-none h-full  '>
     <p className="text-[1.7rem] text-center text-titleColor leading-[2.5rem] lg:text-[2.2rem] lg:leading-[3rem] font-semibold mb-16">Trusted by thousands of users around the world</p>
<RatingCard/>
    </div>
  )
}

export default Rating
