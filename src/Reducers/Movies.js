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

    //search movies request
    searchMoviesRequest: (state) => {
        state.loading = true
    },
    searchMoviesSuccess: (state, action) => {
        state.loading = false;
        state.movies = action.payload;
    },
    searchMoviesFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    clearError: (state) =>{
        state.error = null
    }
})