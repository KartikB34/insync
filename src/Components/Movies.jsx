import React, {useState} from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';

import MovieDetails from './MovieDetails';
import { loadMovies } from '../Actions/Movies';
import Loader from './Loader';

const Movies = ({searchquery}) => {

  const [showModal, setShowModal] = useState(false);
  const [Movie, setMovie] = useState();

  const dispatch = useDispatch();
  const {loading, error, movies} = useSelector((state) => state.movies)
  console.log(movies)

  useEffect(()=>{
    dispatch(loadMovies())

    if(error){
      toast.error(error)
      dispatch({type:"clearError"})
    }
  },[dispatch, error])

  return ( loading ? <Loader /> :
    <div className='mt-6'>
      <p className='font-bold text-2xl'>{searchquery? "Showing search results:" : "Most Recent Movies"}</p>

      {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-4'> */}
      <div className='flex flex-wrap items-center justify-center'>

        {movies && movies.map((movie)=>(
          <div 
            className='relative shadow-lg rounded-md h-[348px] w-[282px] m-6' 
            onClick={()=>{setShowModal(true); setMovie(movie)}}
            key={movie.id}
          >
            <div className='absolute border border-black top-2 left-3 rounded-full bg-white h-[34px] w-[34px] flex justify-center items-center'>
              {movie.vote_average}
            </div>
            <img 
              src={`${process.env.REACT_APP_IMAGE_URL+movie.poster_path}`} 
              alt={movie.title} 
              className='rounded-md h-[348px] w-[282px] object-cover' 
            />
            <p className={`absolute bottom-0 ${showModal? "" : "z-10"} bg-white w-full px-1 text-center py-2 rounded-b-md`}>{movie.title}</p>
          </div>
        ))}

        {movies && movies.length===0 && <p className='flex items-center justify-center text-3xl h-[70vh]'>No movies found..</p>}

      </div>
      {showModal && <MovieDetails setShowModal={setShowModal} movie={Movie} />}
      <ToastContainer />
    </div>
  )
}

export default Movies
