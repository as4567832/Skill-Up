import { createSlice } from "@reduxjs/toolkit"


const initialState = {
     signUpData:null,
     loading:false,
     token:localStorage.getItem('token') ? localStorage.getItem("token") : null,
}

const signupSlice = createSlice({
    name:'signup',
    initialState:initialState,
    reducers:{
        setSignUpData:(state,value)=>{
            // console.log("Dispatched value inside reducer:", value.payload);
            state.signUpData=value.payload;
            // console.log("Dispatched value inside reducer:", value.payload);
        },
        setLoading:(state,value)=>{ 
            state.loading = value.payload;
        },
        setToken:(state,value)=>{
            state.token = value.payload;
        },
        deleteToken:(state,value)=>{
            state.token = null
        }


    }
})

export const{setSignUpData,setLoading,setToken,deleteToken} = signupSlice.actions;
export default signupSlice.reducer;