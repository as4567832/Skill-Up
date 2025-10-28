import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    isLoggedIn:false,
    user:null,
}

export const loginSlice = createSlice({
    name:"login",
    initialState:initialState,
    reducers:{
        loginUser:(state,value)=>{
            state.isLoggedIn =true;
          state.user= value.payload;
        },
        logoutUser:(state,value)=>{
            state.isLoggedIn= false;
            value.payload = null;

        }
    }
});

export const{loginUser,logoutUser} = loginSlice.actions;
export default loginSlice.reducer;