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
        
    }
}