import {createReducer} from "@reduxjs/toolkit"

const initialState = {}

export const moviesReducer = createReducer(initialState, {

    
    //Load movies request
    LoadMoviesRequest: (state) => {
        state.loading = true
    },
    LoadMoviesSuccess: (state, action) => {
        state.loading = false;
        state.movies = action.payload;
    },
    LoadMoviesFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    clearErrors: (state) =>{
        state.error = null
    }
})