import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';

import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import { loadMovies } from './Actions/Movies';

function App() {

  const dispatch = useDispatch();
  const {loading, error, movies} = useSelector((state) => state.movies)

  useEffect(()=>{
    dispatch(loadMovies())

    if(error){
      toast.error(error)
    }
  },[dispatch, error])

  return ( 
    <div className="px-2 py-4 md:py-6 md:px-20">
      <Navbar />
      {loading? <p>loading...</p> :<Movies movies={movies}/>}
      <ToastContainer />
    </div>
  );
}

export default App;
