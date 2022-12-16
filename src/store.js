import {configureStore} from "@reduxjs/toolkit"
import { moviesReducer } from "./Reducers/Movies";

const store = configureStore({
    reducer:{
        movies:moviesReducer,
    }
});

export default store;