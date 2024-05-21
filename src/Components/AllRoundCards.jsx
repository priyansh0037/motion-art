import React from 'react'

const AllRoundCards = ({img, heading, para}) => {
  return (
    <div className='w-full h-full border-[1.5px] border-custom-border bg-suportedBrowserGreadient rounded-2xl px-10 pb-16 py-4 pointer-events-none'> 
    
      <img src={img} alt="" />

      <div className='flex gap-7 flex-col mt-5'>
<h2 className='text-4xl font-semibold text-[#EBE2FC]'>{heading}</h2>
<p className='text-[#B0A9C2] text-2xl leading-[2rem]'>{para}</p>
      </div>
    </div>
  )
}

export default AllRoundCards
