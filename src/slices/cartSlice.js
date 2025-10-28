import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer } from "react-toastify";
import toast from "react-hot-toast";


const initialState = { 
    cart:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")): [],
    total:localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total")) : 0,
    totalItems:localStorage.getItem("totalitems")?JSON.parse(localStorage.getItem("totalitems")):0,



}

const cartSlice = createSlice({ 
    name:"cart",
    initialState:initialState,
    reducers:{
        setTotalItems(state,value){
            state.totalItems = value.payload;
        },
      addToCart(state, value) {
    const course = value.payload;
    const index = state.cart.findIndex((item) => item._id === course._id);
    if (index >= 0) {
        toast.error("Item already exists in your cart");
    } else {
        state.cart.push(course);
        state.totalItems++;
        state.total = Number(state.total) + Number(course.price);

        localStorage.setItem("cart", JSON.stringify(state.cart));
        localStorage.setItem("total", JSON.stringify(state.total));
        localStorage.setItem("totalitems", JSON.stringify(state.totalItems));

        toast.success("Course added successfully");
    }
},

removeFromCart(state, value) {
    const courseId = value.payload;
    const index = state.cart.findIndex((item) => item._id === courseId);
    if (index >= 0) {
        const removedCourse = state.cart[index];
        state.cart.splice(index, 1);
        state.totalItems -= 1;
        state.total = Number(state.total) - Number(removedCourse.price);

        localStorage.setItem("cart", JSON.stringify(state.cart));
        localStorage.setItem("total", JSON.stringify(state.total));
        localStorage.setItem("totalitems", JSON.stringify(state.totalItems));
    }
},

    }
})

export const{setTotalItems,addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;