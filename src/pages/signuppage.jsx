function SignupPage(){
 return (
    <div className="">
      <div className="">
        <h1 className="">
          Unlock your Learning potential with Skillup - Education for everyone!
        </h1>
        <p className="text-gray-400 font-semibold my-1">
          Your digital gateway to knowledge
        </p>
        <form className="flex flex-col gap-4" >
          <div className="my-2 w-[240px] h-[50px] box-border items-center justify-center p-1 flex gap-3 bg-gray-600 rounded-full">
            <button
              name="Student"
              className={`h-[100%] w-[45%] rounded-full text-white  ${
                "Student" ? "bg-[#000814]" : "bg-transparent"
              }`}
            >
              {" "}
              Student{" "}
            </button>
            <button
              name="Instructor"
              className={` h-[100%] rounded-full w-[50%] text-white  ${
               "Instructor" ? "bg-[#000814]" : " bg-transparent"
              } `}
            >
              Instructor
            </button>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col text-white gap-1">
              <label className="bg-transparent" htmlFor="firstName">
                First Name
                <span className="text-red-600">*</span>
              </label>
              <input
                placeholder="Enter First Name"
                className=" border-none bg-[#2C333F] p-3 text-white placeholder-gray-400 rounded-lg"
                type="text"
                name="firstName"
              />
            </div>

            <div className="flex flex-col text-white gap-1">
              <label className="bg-transparent" htmlFor="name">
                Last Name
                <span className="text-red-600">*</span>
              </label>
              <input
                placeholder="Enter Last Name"
                className=" border-none bg-[#2C333F] p-3 text-white placeholder-gray-400 rounded-lg"
                type="text"
                name="lastName"
              />
            </div>
          </div>
          <div className="w-[79%]">
            <div className="flex flex-col text-white gap-1">
              <label className="bg-transparent" htmlFor="email">
                Email Address
                <span className="text-red-600">*</span>
              </label>
              <input
                placeholder="Enter Email Address"
                className=" border-none bg-[#2C333F] p-3 text-white placeholder-gray-400 rounded-lg"
                type="text"
                name="email"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col text-white gap-1">
              <label className="bg-transparent" htmlFor="password">
                Enter Password
                <span className="text-red-600">*</span>
              </label>
              <input
                placeholder="Enter Password"
                className=" border-none bg-[#2C333F] p-3 text-white placeholder-gray-400 rounded-lg"
                type="text"
                name="password"
              />
            </div>
            <div className="flex flex-col text-white gap-1">
              <label className="bg-transparent" htmlFor="name">
                Confirm Password
                <span className="text-red-600">*</span>
              </label>
              <input
                placeholder="Confirm Password"
                className=" border-none bg-[#2C333F] p-3 text-white placeholder-gray-400 rounded-lg"
                type="text"
                name="confirmPassword"
              />
            </div>
          </div>
          <div className="w-[79%] my-5">
            <button type="submit" className="text-center text-richblack-900 bg-yellow-500 py-[8px] px-[12px] font-medium w-full h-[40px] rounded-lg">Create Account</button>
          </div>
        </form>
      </div>
      <div className="back border-2 border-blue-600 relative w-[40%] my-20 rounded-lg mx-20 bg-white"></div>
    </div>
  );
}
export default SignupPage;