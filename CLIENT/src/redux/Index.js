import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer  from "./UserSlice"
import productSliceReducer from "./ProductSlice"


export const store= configureStore({
    reducer: {
        user:userSliceReducer,
        product:productSliceReducer
    },
  })   
   //You go directly to the produce section (user slice) and pick the apple. Much quicker and avoids unnecessary effort.useSelector function is you walking directly to the produce section and grabbing just what you need.
  //During sign-up, save the profile image to the Redux state.When rendering the home page, retrieve the image from the Redux state.