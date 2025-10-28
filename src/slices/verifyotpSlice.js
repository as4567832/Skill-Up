import { createSlice } from "@reduxjs/toolkit"
const initialState = {
verifiedValues:null
}

const VerifyotpSlice = createSlice({
    name:'verifyotp',
    initialState:initialState,
    reducers:{
        verifyotp:(state,value)=>{
            state.otp = value.payload; 
        }
    }
})