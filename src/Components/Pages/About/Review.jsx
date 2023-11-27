import { Rating } from '@smastrom/react-rating';
import React from 'react'


const Review = ({rView}) => {
    const {image, rating, review, occupation, name, id} = rView;
  return (
    <div className='rounded-md h-[350px] overflow-hidden shadow-xl'>
        <div className="flex justify-center items-center py-5 bg-purple-700">
            <img src={image} alt="" className='rounded-full w-[100px] h-[100px] object-cover' />
        </div>
        <div className="p-5 flex flex-col justify-center items-center">
            <h2 className='text-xl font-bold '>{name}</h2>
            <p>{occupation}</p>
            <Rating style={{ maxWidth: 120}} value={rating} readOnly />
            <p className='text-center'>{review}</p>
        </div>
    </div>
  )
}

export default Review
