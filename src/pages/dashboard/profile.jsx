import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import Button from "../../components/core/homepage/Button";
import { TiTick } from "react-icons/ti";

function Profile() {
  const token = useSelector((state) => state.signup.token);
  let decode = "";
  if (token) {
    decode = jwtDecode(token);
    console.log(decode);
  }
  return (
    <div className="bg-[#0F1729] h-screen text-blue-500 p-6">
      <div className=" mb-10">
        <h1 className="text-4xl font-bold text-white">
          Welcome, {decode.name}
        </h1>
        <p className="text-gray-300 my-1 mx-2">
          Manage your courses and track your performance
        </p>
      </div>
      <div className="border border-gray-800 rounded-xl p-6 flex bg-[#141D30]">
        <div className="">
          <img src={`${decode.image}`} className="w-20 h-20 rounded-full" />
        </div>
        <div className="mx-5">
          <h1 className="text-xl text-white font-bold my-1">{decode.name}</h1>
          <p className="text-gray-400">Web Development Expert</p>
          <button className="my-1 transition ease-in-out duration-300 border-2 border-gray-800 rounded-full hover:border-purple-800 px-3 py-2 text-sm text-white">
            Edit Profile
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 mb-8">
        <div className="rounded-xl border border-gray-800 p-3 bg-[#141D30] flex items-center justify-between">
            <div>
              <p className="text-gray-300">Total Courses</p>
              <p className="text-white font-bold text-4xl">8</p>
            </div>
        </div>
        <div className="rounded-xl border border-gray-800 p-3 bg-[#141D30] flex items-center justify-between">
            <div>
              <p className="text-gray-300">Total Students</p>
              <p className="text-white font-bold text-4xl">1234</p>
            </div>
        </div>
                <div className="rounded-xl border border-gray-800 p-3 bg-[#141D30] flex items-center justify-between">
            <div>
              <p className="text-gray-300">Total Earnings</p>
              <p className="text-white font-bold text-4xl">$2000</p>
            </div>
        </div>
      </div>
      <div className="rounded-xl bg-[#141D30] border-gray-800 border p-3">
          <h1 className="text-white text-2xl font-bold">Quick Actions</h1>
          <p className="text-gray-400 text-sm my-3">Get started with managing your courses</p>
          <div className="flex gap-6">
            <button className="bg-[#A855F7] py-2 px-6 rounded-xl text-white hover:scale-105 transition-all duration-300">Create Course</button>
            <button className="text-white border-gray-500 border py-2 px-6 rounded-xl hover:border-purple-600 transition-all duration-300">View Analytics</button>
          </div>
      </div>
    </div>
  );
}

export default Profile;
