import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
    //Quien es el admon? REDUCER
    reducer: {
        actualUser: userSlice
    }
});

export default store