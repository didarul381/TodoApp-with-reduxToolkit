import { configureStore } from "@reduxjs/toolkit";
import  bookReducer from "../features/bookSlice";

const store=configureStore({
    reducer:{
        bookReducer: bookReducer,
    }
});
export default store;