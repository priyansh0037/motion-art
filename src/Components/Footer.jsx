import React from 'react'

const Footer = () => {
  return (
    <div className='relative w-full h-full bg-custom-gradient p-5 lg:p-0 '>
        <div className='h-full w-5/6 mx-auto flex lg:flex-row flex-col  justify-between items-center  '>

        <p className='order-2 lg:order-1 text-center  text-lg opacity-80'>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
        <div className='order-1 lg:order-2 text-lg opacity-80 flex gap-5'>
            <p>Documentation</p>
            <p>Support</p>
        </div>
      
        </div>
    </div>
  )
}

export default Footer
