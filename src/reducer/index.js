import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";
import cartReducer from "../slices/cartSlice";
import signupReducer from '../slices/signupSlice';
import courseReducer from '../slices/courseslice';
import modalReducer from '../slices/modalslice'
const rootReducer = combineReducers({
    auth:authReducer,
    profile:profileReducer,
    cart:cartReducer,
    signup:signupReducer,
    course:courseReducer,
    modal:modalReducer

})

export default rootReducer;