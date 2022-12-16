import axios from "axios"


//Load movies request
export const loadMovies = () => async (dispatch) => {

    try {
        
        dispatch({
            type:"LoadMoviesRequest"
        })

        const {data} = await axios.get(`${process.env.REACT_APP_API}/movie?primary_release_date.gte=2022-10-10&primary_release_date.lte=2022-12-22&api_key=${process.env.REACT_APP_API_KEY}`);
        // console.log(data.results)

        dispatch({
            type:"LoadMoviesSuccess",
            payload:data.results,
        })
    } catch (error) {

        dispatch({
            type:"LoadMoviesFailure",
            payload:error.response.data.message,
        })
        console.log(error.response.data.message)
        
    }
}

export const searchMovies = (text) => async (dispatch) => {

    try {
        
        dispatch({
            type:"searchMoviesRequest"
        })

        // console.log("reached here for god sake")
        const API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${text}`
        // console.log(API)
        const {data} = await axios.get(API);
        console.log("reached here")
        console.log(data)

        dispatch({
            type:"searchMoviesSuccess",
            payload:data.results,
        })
    } catch (error) {

        dispatch({
            type:"searchMoviesFailure",
            payload:error.response.data.message,
        })
        
    }
}