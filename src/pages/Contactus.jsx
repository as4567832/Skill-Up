import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Footer from "../components/Common/Footer";
function ContactUs() {
  return (
    <div className="bg-[#0B0D16] min-h-screen flex flex-col items-center justify-center pt-20">
      <div className="text-center p-10">
        <h1 className="text-4xl mb-3 md:text-7xl font-bold text-white">
          Get in <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="text-gray-600">
          Have questions? We'd love to hear from you. Send us a message!
        </p>
      </div>

      <div className="md:flex md:flex-row flex-col p-5 gap-10">
        <div className="w-[50%]">
            <div className=" bg-[#161821] md:p-10 p-5 rounded-xl">
          <h1 className="md:text-4xl mb-5 text-2xl font-bold text-white">
            Contact Information
          </h1>

          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <div className="text-white text-4xl p-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600">
                <MdOutlineEmail />
              </div>
              <div className="items-start text-gray-400 justify-center flex flex-col">
                <p className="font-bold text-lg text-white">Email</p>
                <p>sachanayush493@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-white text-4xl p-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600">
                <MdOutlineEmail />
              </div>
              <div className="items-start text-gray-400 justify-center flex flex-col">
                <p className="font-bold text-lg text-white">Phone</p>
                <p>+917234989790</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-7xl mt-5 p-20 flex items-center justify-center text-red-600 rounded-xl "><IoLocationSharp /></div>
        </div>

        <div className="md:w-[50%] bg-[#161821] md:p-10 p-5 rounded-xl text-white">
          <form action="">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="w-full mb-6 bg-transparent focus:outline-none border border-gray-600 rounded-lg p-2"
              placeholder="Your Full Name"
            />

            <label htmlFor="">Email</label>
            <input
              type="text"
              className="w-full mb-6 bg-transparent focus:outline-none border border-gray-600 rounded-lg p-2"
              placeholder="Your Email Address"
            />

            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              className="w-full mb-6 bg-transparent focus:outline-none border border-gray-600 rounded-lg p-2"
              placeholder="Your Phone Number"
            />

            <label htmlFor="">Message</label>
            <textarea
              type="text"
              cols={40}
              className="resize-none h-32 w-[100%] bg-transparent focus:outline-none border border-gray-600 rounded-lg p-2"
              placeholder="Your Message"
            />
            <button className="w-full p-2 bg-gradient-to-r from-purple-700 to-blue-600 rounded-xl mt-5">Send Message</button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ContactUs;
