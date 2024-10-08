import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { HiXMark } from "react-icons/hi2";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="flex w-full justify-between items-center h-20 px-4 top-0 left-0 z-10 bg-white shadow-md font-serif">
        <ul className=" hidden md:flex">
          <li className="text-gray-800 hover:text-red-400 duration-500">
            <Link to="/" className="my-7 md:my-0 md:ml-8">
              Home
            </Link>
          </li>
          <li className="text-gray-800 hover:text-red-400 duration-500">
            <Link to="/about" className="my-7 md:my-0 md:ml-8">
              About
            </Link>
          </li>
          <li className="text-gray-800 hover:text-red-400 duration-500">
            <Link to="/gallery" className="my-7 md:my-0 md:ml-8">
              Gallery
            </Link>
          </li>
          <li className="text-gray-800 hover:text-red-400 duration-500">
            <Link to="/services" className="my-7 md:my-0 md:ml-8">
              Services
            </Link>
          </li>
        </ul>
        <div>
          <Link to="/" className="my-7 md:my-0 md:ml-8 cursor: pointer">
            <img
              src="/logo.png"
              alt="logo"
              className="hover:scale-110 duration-500"
              style={{ width: "150px" }}
            />
          </Link>
        </div>
        <ul className="hidden md:flex">
          <li className="text-gray-800 hover:text-red-400 duration-500">
            <Link to="/booking" className="my-7 md:my-0 md:ml-8">
              Booking
            </Link>
          </li>
          <li className="text-gray-800 hover:text-red-400 duration-500">
            <Link to="/contacts" className="my-7 md:my-0 md:ml-8">
              Contacts
            </Link>
          </li>
          <li className="text-gray-800 hover:text-red-400 duration-500">
            <Link to="/login" className="my-7 md:my-0 md:ml-8">
              Login
            </Link>
          </li>
          <li className="text-gray-800 hover:text-red-400 duration-500">
            <Link to="/register" className="my-7 md:my-0 md:ml-8">
              Register
            </Link>
          </li>
        </ul>

        <div onClick={handleNav} className="md:hidden z-10">
          {open ? <HiXMark size={20} /> : <RiMenu3Fill size={20} />}
        </div>
        <div
          onClick={handleNav}
          className={
            open
              ? "absolute left-0 top-0 w-full bg-pink-100/90 px-4 py-7 flex flex-col"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className="text-gray-800 border-b hover:text-red-400 duration-500">
              <Link
                to="/"
                className="my-7 md:my-0 md:ml-8 "
                onClick={handleNav}
              >
                Home
              </Link>
            </li>
            <li className="text-gray-800 border-b hover:text-red-400 duration-500">
              <Link
                to="/about"
                className="my-7 md:my-0 md:ml-8"
                onClick={handleNav}
              >
                About
              </Link>
            </li>
            <li className="text-gray-800 border-b hover:text-red-400 duration-500">
              <Link
                to="/catalog"
                className="my-7 md:my-0 md:ml-8"
                onClick={handleNav}
              >
                Gallery
              </Link>
            </li>
            <li className="text-gray-800 border-b hover:text-red-400 duration-500">
              <Link
                to="/services"
                className="my-7 md:my-0 md:ml-8"
                onClick={handleNav}
              >
                Services
              </Link>
            </li>
            <li className="text-gray-800 border-b hover:text-red-400 duration-500">
              <Link
                to="/catalog"
                className="my-7 md:my-0 md:ml-8"
                onClick={handleNav}
              >
                Booking
              </Link>
            </li>

            <li className="text-gray-800 border-b hover:text-red-400 duration-500">
              <Link
                to="/contacts"
                className="my-7 md:my-0 md:ml-8"
                onClick={handleNav}
              >
                Contacts
              </Link>
            </li>

            <li className="text-gray-800 border-b hover:text-red-400 duration-500">
              <Link
                to="/catalog"
                className="my-7 md:my-0 md:ml-8"
                onClick={handleNav}
              >
                Login
              </Link>
            </li>
            <li className="text-gray-800 border-b hover:text-red-400 duration-500">
              <Link
                to="/catalog"
                className="my-7 md:my-0 md:ml-8"
                onClick={handleNav}
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
