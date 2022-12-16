import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadMovies } from '../Actions/Movies';
import { ToastContainer, toast } from 'react-toastify';

const Movies = () => {

  const dispatch = useDispatch();
  const {loading, error, movies} = useSelector((state) => state.movies)
  console.log(movies)

  useEffect(()=>{
    dispatch(loadMovies())

    if(error){
      toast.error(error)
    }
  },[dispatch, error])


  return ( loading ? <p>Loading</p> :
    <div className='mt-6'>
      <p className='font-bold text-2xl'>Most Recent Movies</p>

      {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-4'> */}
      <div className='flex flex-wrap items-center justify-center'>

        {movies && movies.map((movie)=>(
          <div className='relative shadow-lg rounded-md h-[348px] w-[282px] m-6'>
            <div className='absolute border border-black top-2 left-3 rounded-full bg-white h-[34px] w-[34px] flex justify-center items-center'>
              {movie.vote_average}
            </div>
            <img src={`${process.env.REACT_APP_IMAGE_URL+movie.poster_path}`} alt={movie.title} className='rounded-md h-[348px] w-[282px] object-cover' />
            <p className='absolute bottom-0 z-10 bg-white w-full text-center py-2 rounded-b-md'>{movie.title}</p>
          </div>
        ))}

      </div>
      <ToastContainer />
    </div>
  )
}

export default Movies
