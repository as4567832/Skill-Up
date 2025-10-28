import { useState, useRef, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToken } from "../../../slices/signupSlice";
import toast from "react-hot-toast";

function ProfileDropdown() {
  const token = useSelector((state) => state.signup.token);
  let imgurl = '/img.png';
  const dispatch = useDispatch();
  let decode = {};
  if(token){
      decode = jwtDecode(token);
       imgurl = decode?.image || imgurl;
      //  // console.log(decode);
  }


  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // bahar click karne par dropdown close ho jaye
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  function handleLogout(){
    localStorage.removeItem('token');
    dispatch(deleteToken(null));
    toast.success("Logged out successfully");
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar (sirf navbar pe dikhna chahiye) */}
      <img
        onClick={() => setOpen((prev) => !prev)}
        src={imgurl}
        alt="User"
        className="w-10 h-10 rounded-full border border-gray-500 object-cover cursor-pointer"
      />

      {/* Dropdown (sirf click par open hoga) */}
      {open && (
        <div className="absolute right-0 mt-2 bg-[#101325] rounded-lg shadow-lg border z-50">
          <ul className="py-2 text-gray-700 w-48">
            <li>
              <Link
                to="/dashboard"
                className="block px-4 py-2 text-white"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="w-full text-left block px-4 py-2 text-white">
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
