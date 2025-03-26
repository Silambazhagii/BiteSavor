import { createSlice } from '@reduxjs/toolkit'

// Initial cake section:(Initial State)
//if we don't give anything here,it will show empty
const initialState={
   email:"",
   firstName:"",
   lastName:"",
   image:"",
   _id:"",

}

// Create a cake recipe (Redux Slice)
export const userSlice=createSlice({
    name:"user",        // Naming this section "user" (like a cake section in a bakery)
    initialState,       // Starting with an empty section
    reducers:{          // Define a method (Reducer) to add ingredients to our cake (Handle user login)
        loginRedux:(state,action)=>{
            const userData = action.payload.data || action.payload;
            //console.log(action.payload.data)  // Log the action of adding ingredients (user login data)
            //state.user= action.payload.data        //to give data which we given into initial state
        state._id=userData._id
        state.firstName=userData.firstName
        state.lastName=userData.lastName
        state.email=userData.email
        state.image=userData.image
        },
        logoutRedux :(state,redux)=>{
        state._id='';
        state.firstName='';
        state.lastName='';
        state.email='';
        state.image=''; 
        }
    }
})

export const { loginRedux ,logoutRedux } = userSlice.actions;

export default userSlice.reducer;