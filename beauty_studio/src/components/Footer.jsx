import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="md:w-2/3 w-full px-4 text-black flex flex-col">
        <div className="w-full text-7xl font-bold font-serif">
          <h1 className="w-full md:w-2/3">How can we help you. get in touch</h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-2/3 text-gray-400 font-serif">
            House of Beauty salon providing top-notch haircuts, hairstyling, and
            extension services at affordable price. We are fully dedicated to
            fulfilling your wishes and making your dreams come true.
          </p>
          <div className="w-44 pt-6 md:pt-0">
            <a className="bg-red-300 hover:scale-110 duration-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center cursor-pointer ">
              Contact US
            </a>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex mt-12 mb-6 flex-row justify-between cursor-pointer items-center">
            <div className="">
              <Link to="/">
                <img
                  src="/logo.png"
                  alt="logo"
                  className="hover:scale-110 duration-500"
                  style={{ width: "150px", height: "150px" }}
                />
              </Link>
            </div>
            <Link
              to="/about"
              className="hidden md:block cursor-pointer text-gray-600 font-serif hover:text-red-400 duration-500 "
            >
              About{" "}
            </Link>
            <Link
              to="/gallery"
              className="hidden md:block cursor-pointer text-gray-600 font-serif hover:text-red-400 duration-500 "
            >
              Gallery{" "}
            </Link>
            <Link
              to="/booking"
              className="hidden md:block cursor-pointer text-gray-600 font-serif hover:text-red-400 duration-500 "
            >
              Booking
            </Link>
            <div className="flex flex-row space-x-4 items-center justify-between">
              <a>
                <FaFacebookF className="hover:scale-110 duration-500 cursor-pointer" />
              </a>
              <a>
                <FaInstagram className="hover:scale-110 duration-500 cursor-pointer" />
              </a>
              <a>
                <FaYoutube className="hover:scale-110 duration-500 cursor-pointer" />
              </a>
            </div>
          </div>
          <hr className="border-gray-600" />
          <p className="w-full text-center my-2 text-gray-600">
            Copyright © 2024 House of Beauty - VM
          </p>
        </div>
      </div>
    </div>
  );
}
