import { configureStore } from "@reduxjs/toolkit";
import  bookReducer from "../features/bookSlice";
import postsReducer from "../fetchDataUsingDeduxToolkit/postsSlice";

const store=configureStore({
    reducer:{
        bookReducer: bookReducer,
        posts:postsReducer
    }
});
export default store;