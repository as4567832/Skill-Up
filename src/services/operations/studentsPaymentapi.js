import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import logo from '../../assets/images/logo.png';
import { Navigate } from "react-router-dom";
const { studentEndpoints } = require("../apis");



const {COURSE_PAYMENT_API,COURSE_VERIFY_API} = studentEndpoints;
function loadscript(src){
    return new Promise((resolve)=>{
        const script = document.createElement("script");
        script.src = src;

        script.onload = ()=>{
            resolve(true);
        }
        script.onerror = ()=>{
            resolve(false)
        }
        document.body.appendChild(script);
    })
}

export async function buyCourse(token,courses,userDetails,navigate,dispatch){
    const toastId = toast.loading("Loading....");
    try{
        const response = await loadscript("https://checkout.razorpay.com/v1/checkout.js");

        if(!response){
            toast.error("Razorpay SDK failed to load");
            return;
        }
        // initiating order

        const orderResponse = await apiConnector("POST",COURSE_PAYMENT_API,{courses},{Authorization:`Bearer ${token}`})
        console.log("order response is:",orderResponse.data.message);
        if(!orderResponse.data.success){
            throw new Error(orderResponse.data.message);
        }
        // create options for payment

        const options = {
            key:orderResponse.data.key,
            currency:orderResponse.data.message.currency,
            amount:`${orderResponse.data.message.amount}`,
            order_id:orderResponse.data.message.id,
            name:"Skill Up",
            description:"Thanks for choosing us",
            image:logo,
            prefill:{
                name:`${userDetails.firstName}`,
                email:userDetails.email
            },
            handler:function(response){
                //send successfulol email

                //vereify payment
                verifyPayment({...response,courses},token,navigate,dispatch);
            }
        
        }
        const paymentObject =new window.Razorpay(options);
        paymentObject.open();
        paymentObject.on("payment-failed",function(response){
            toast.error("oops! payment failed");
        })

    }catch(error){
        console.error("Payment api error......",error);
        toast.error("Could not make payment");

    }
    toast.dismiss(toastId);
}


async function verifyPayment(bodyData,token,navigate,dispatch){
    const toastId = toast.loading("verifying payment....");
    // dispatch(setPaymentLoading(true));
    try{
        const response = await apiConnector("POST",COURSE_VERIFY_API,bodyData,{Authorization:`Bearer ${token}`})
        if(!response.data.success){
            throw new Error(response.data.message)
        }
        toast.success("You have successfully bought a course");
        navigate("/dashboard");
        // dispatch(resetCart());

    }catch(error){
        console.log("Payment verification failed");
       

    }
     toast.dismiss(toastId);
    //  dispatch(setPaymentLoading(false));

}