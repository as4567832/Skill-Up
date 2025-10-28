import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../slices/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { buyCourse } from "../../services/operations/studentsPaymentapi";

function Cart() {
  const { cart, total, totalItems } = useSelector((state) => state.cart);
  const {user} = useSelector((state)=>state.profile);
  const {token} = useSelector((state)=>state.signup);
  const key = process.env.RAZORPAY_KEY;
  console.log(token);
  console.log(cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courseId = cart.map((courses)=>courses._id);
  console.log(courseId);

  const handleBuyCourse = ()=>{
    if(token){
        buyCourse(token,courseId,user,navigate,dispatch);
    }

  }
  return (
    <div className="min-h-screen w-full bg-[#0B0D16] text-white flex flex-col items-center pt-10 px-5 md:px-20">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#8B5CF6] mb-10 self-start">
        Shopping Cart
      </h1>

      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-10 w-full">
          {/* Left: Cart Items */}
          <div className="flex flex-col gap-6 w-full md:w-[60%]">
            {cart.map((course, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-[#121826] border border-gray-700 rounded-xl overflow-hidden p-4 shadow-lg hover:shadow-purple-700/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={course.thumbnail}
                    alt={course.courseName}
                    className="w-28 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">
                      {course.courseName}
                    </h2>
                    <p className="text-gray-400 text-sm">by {course.instructor.firstName || "Instructor"}</p>
                    <p className="text-[#8B5CF6] font-semibold mt-1">
                      ₹{course.price}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(course._id))}
                  className="text-red-500 hover:text-red-600 transition text-xl"
                >
                  🗑
                </button>
              </div>
            ))}
          </div>

          {/* Right: Order Summaryrtge */}
          <div className="bg-[#121826] border border-gray-700 rounded-xl p-6 w-full md:w-[35%] shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between text-gray-400 text-sm mb-3">
              <span>Subtotal</span>
              <span>₹{(total * 0.1).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-400 text-sm border-b border-gray-700 pb-3 mb-3">
              <span>Tax</span>
              <span>₹{(total * 0.1).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-[#8B5CF6]">₹{total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleBuyCourse}
              className="w-full mt-6 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] py-3 rounded-lg font-semibold text-white hover:opacity-90 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 space-y-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13l-1.5-7M7 13h10M10 21h4"
            />
          </svg>
          <h2 className="text-2xl font-semibold">Your Cart is Empty</h2>
          <p className="text-gray-400 text-center max-w-xs">
            Looks like you haven’t added any courses yet. Browse and add your
            favorite ones!
          </p>
          <Link to="/course">
            <button className="mt-4 px-6 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white rounded-lg hover:opacity-90 transition">
              Browse Courses
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
