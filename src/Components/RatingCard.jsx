import React from 'react'
import { ratingImages, ratingStar } from '../../utils'

const RatingCard = () => {
  return (
    <div className=" grid  grid-cols-1 md:grid-cols-3 place-items-center  gap-10 md:gap-4 p-4 w-full h-full">
      {ratingImages.map((img, index) => (
        <div key={index} className="col-span-1 flex  gap-5 items-center">
          <img src={img}  alt={`Rating ${index + 1}`} className="mb-2" />
          <div className="flex" >
            {ratingStar.map((star, starIndex) => (
                <div className='flex flex-col gap-3' key={starIndex}>
              <img  src={star} alt={`Star ${starIndex + 1}`}  />
              <p>4.5 Score, 9 Reviews</p>
                </div>
         
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default RatingCard
