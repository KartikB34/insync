import React from 'react'
import pathan from "../Assests/pathan.jpg"

const Movies = () => {
  return (
    <div className='mt-6'>
      <p className='font-bold text-2xl'>Most Recent Movies</p>

      <div className='grid grid-cols-4 gap-4'>

        <div className='relative shadow-lg my-4 rounded-md h-[348px] w-[282px] col-span-1'>
          <div className='absolute border border-black top-2 left-3 rounded-full bg-white h-[34px] w-[34px] flex justify-center items-center'>7.9</div>
          <img src={pathan} alt="movie" className='rounded-md h-[348px] w-[282px] object-cover' />
          <p className='absolute bottom-0 z-10 bg-white w-full text-center py-2 rounded-b-md'>Pathan</p>
        </div>
        <div className='relative shadow-lg my-4 rounded-md h-[348px] w-[282px] col-span-1'>
          <div className='absolute border border-black top-2 left-3 rounded-full bg-white h-[34px] w-[34px] flex justify-center items-center'>7.9</div>
          <img src={pathan} alt="movie" className='rounded-md h-[348px] w-[282px] object-cover' />
          <p className='absolute bottom-0 z-10 bg-white w-full text-center py-2 rounded-b-md'>Pathan</p>
        </div>
        <div className='relative shadow-lg my-4 rounded-md h-[348px] w-[282px] col-span-1'>
          <div className='absolute border border-black top-2 left-3 rounded-full bg-white h-[34px] w-[34px] flex justify-center items-center'>7.9</div>
          <img src={pathan} alt="movie" className='rounded-md h-[348px] w-[282px] object-cover' />
          <p className='absolute bottom-0 z-10 bg-white w-full text-center py-2 rounded-b-md'>Pathan</p>
        </div>
        <div className='relative shadow-lg my-4 rounded-md h-[348px] w-[282px] col-span-1'>
          <div className='absolute border border-black top-2 left-3 rounded-full bg-white h-[34px] w-[34px] flex justify-center items-center'>7.9</div>
          <img src={pathan} alt="movie" className='rounded-md h-[348px] w-[282px] object-cover' />
          <p className='absolute bottom-0 z-10 bg-white w-full text-center py-2 rounded-b-md'>Pathan</p>
        </div>
        <div className='relative shadow-lg my-4 rounded-md h-[348px] w-[282px] col-span-1'>
          <div className='absolute border border-black top-2 left-3 rounded-full bg-white h-[34px] w-[34px] flex justify-center items-center'>7.9</div>
          <img src={pathan} alt="movie" className='rounded-md h-[348px] w-[282px] object-cover' />
          <p className='absolute bottom-0 z-10 bg-white w-full text-center py-2 rounded-b-md'>Pathan</p>
        </div>

      </div>
    </div>
  )
}

export default Movies
