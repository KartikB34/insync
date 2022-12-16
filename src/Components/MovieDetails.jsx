import React from 'react'
import close from "../Assests/close.svg"

const MovieDetails = ({movie, setShowModal}) => {
    console.log(movie)
  return (
    <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm bg-gray-800 flex justify-center items-center'>
      <div className='bg-white p-6'>

        <div className='flex justify-between items-center my-3'>
            <p>{movie.title}</p>
            <img src={close} alt="close" onClick={()=>{setShowModal(false)}} />
        </div>

        <div className='md:flex md:justify-between md:mt-8'>
            <img 
                src={`${process.env.REACT_APP_IMAGE_URL+movie.poster_path}`} 
                alt={movie.title} 
                onClick={()=>{setShowModal(false)}} 
                className="z-30 w-[100px] md:w-[266px] object-cover"
            />
            <div className='md:ml-6 mt-4 md:mt-0 max-w-[214px]'>
                <p>Release date: {movie.release_date}</p>
                <p className='my-4'>{movie.overview}</p>
                <p className=''>{movie.vote_average}/10{" ("}{movie.vote_count}{" total votes)"}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
