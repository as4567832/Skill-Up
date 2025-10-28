import { Link, matchPath, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { NavbarLinks } from "../../Data/navbar-links";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { useState, useEffect } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { jwtDecode } from "jwt-decode";
import ProfileDropdown from "../core/profileDropdown/profileDropdown";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const token = useSelector((state) => state.signup.token);
  const { totalItems } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.profile.user);
  const location = useLocation();

  // decode token safely
  let role = "";
  if (token) {
    try {
      const decoded = jwtDecode(token);
      role = decoded?.role || "";
    } catch (err) {
      console.error("Invalid token:", err);
    }
  }

  // fetch categories for Catalog
  const [subLinks, setSubLinks] = useState([]);
  const fetchSubLinks = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      setSubLinks(result?.data || []);
    } catch (error) {
      console.error("Error fetching sublinks:", error);
      setSubLinks([]);
    }
  };

  useEffect(() => {
    fetchSubLinks();
  }, []);

  function routematch(route) {
    return matchPath({ path: route }, location.pathname);
  }

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* ================= Desktop Navbar ================= */}
      <div className="hidden md:flex h-14 items-center justify-center border-b border-gray-800 bg-[#151C31]">
        <div className="flex w-11/12 max-w-maxContent items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <p className="font-bold text-white text-xl">Skill Up</p>
          </Link>

          {/* Navbar Links */}
          <nav>
            <ul className="flex gap-x-6 text-white">
              {NavbarLinks.map((link, index) => (
                <li key={index}>
                  {link.title === "Catalog" ? (
                    <div className="relative group text-gray-400 font-medium transition-all duration-300 ease-out hover:text-white">
                      <p className="flex items-center gap-1">
                        {link.title}
                        <IoIosArrowDropdownCircle className="text-lg" />
                      </p>

                      {/* Dropdown */}
                      <div className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-col w-[200px] bg-white text-gray-800 rounded-md shadow-lg transition-all duration-200 ease-in-out">
                        {Array.isArray(subLinks) && subLinks.length > 0 ? (
                          subLinks.map((sublink, i) => (
                            <Link
                              key={i}
                              to={sublink.link}
                              className="px-3 py-2 hover:bg-gray-200 rounded-md"
                            >
                              {sublink.title}
                            </Link>
                          ))
                        ) : (
                          <p className="px-3 py-2 text-gray-500">Loading...</p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link to={link?.path}>
                      <p
                        className={`${
                          routematch(link.path)
                            ? "text-purple-600 font-bold border-b-2 border-[#B874F8]"
                            : "text-white font-medium transition-colors duration-200 ease-in-out hover:text-[#B874F8] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[#B874F8]"
                        }`}
                      >
                        {link.title}
                      </p>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section */}
          <div className="flex gap-x-4 items-center justify-center">
            {/* Cart */}
            {role !== "Instructor" && (
              <Link to={"/cart"} className="relative">
                <AiOutlineShoppingCart
                  color="#fcfbfbff"
                  className="hover:text-[#007BFF]"
                  size={"30px"}
                />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                    {totalItems}
                  </span>
                )}
              </Link>
            )}

            {/* Login / Signup / Profile */}
            {token === null && (
              <>
                <Link to={"/login"}>
                  <button className="border border-[#20283C] shadow-lg font-semibold transform hover:translate-y-[2px] hover:scale-110 transition-all duration-200 hover:border-[#B874F8] bg-[#151E32] px-[12px] py-[2px] text-white rounded-md">
                    Log in
                  </button>
                </Link>

                <Link to={"/signup"}>
                  <button className="font-semibold bg-[#FB7E5A] text-white px-3 py-1 rounded-xl transform transition-all duration-200 ease-in-out hover:shadow-[0_0_15px_#FB7E5A] hover:translate-y-[2px] hover:scale-110">
                    Sign Up
                  </button>
                </Link>
              </>
            )}

            {token !== null && !location.pathname.startsWith("/dashboard") && (
              <div className="border-2 rounded-full border-blue-500 hover:bg-[#007BFF]">
                <ProfileDropdown />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= Mobile Navbar ================= */}
      <div className="md:hidden sticky top-0 bg-[#151C31] flex items-center justify-between px-4 py-2 border-b border-gray-700">
        <Link to="/">
          <p className="font-bold text-white text-lg">Skill Up</p>
        </Link>

        <button onClick={() => setOpen(!open)} className="text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= Mobile Dropdown Menu ================= */}
      {open && (
        <div className="md:hidden absolute top-10 min-h-screen left-0 w-full bg-[#151C31] flex flex-col gap-3 p-4 text-white border-t border-gray-700 shadow-lg">
          {NavbarLinks.map((link, index) => (
            <div key={index}>
              {link.title === "Catalog" ? (
                <div>
                  <p className="font-semibold mb-2">{link.title}</p>
                  {Array.isArray(subLinks) && subLinks.length > 0 ? (
                    subLinks.map((sublink, i) => (
                      <Link
                        key={i}
                        to={sublink.link}
                        onClick={() => setOpen(false)}
                        className="block py-1 px-2 hover:bg-gray-700 rounded"
                      >
                        {sublink.title}
                      </Link>
                    ))
                  ) : (
                    <p className="text-gray-400">Loading...</p>
                  )}
                </div>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="hover:text-[#B874F8]"
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}

          {/* Buttons / Profile */}
          {token === null ? (
            <div className="flex flex-col gap-2 mt-3">
              <Link to="/login" onClick={() => setOpen(false)}>
                <button className="border border-[#20283C] px-3 py-1 rounded-md bg-[#151E32] text-white w-full hover:border-[#B874F8]">
                  Log in
                </button>
              </Link>
              <Link to="/signup" onClick={() => setOpen(false)}>
                <button className="font-semibold bg-[#FB7E5A] text-white px-3 py-1 rounded-xl w-full hover:shadow-[0_0_15px_#FB7E5A]">
                  Sign Up
                </button>
              </Link>
            </div>
          ) : (
            <div className="mt-3">
              <ProfileDropdown />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
