import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import aboutpics from "/aboutpics.jpg";
export default function Contacts() {
  return (
    <div className="flex justify-between p-10 mt-2 bg-white text-black font-serif ">
      <div className="gap-48 py-20 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-700 sm:text-lg ">
          <h2 className="mb-16 text-5xl tracking-tight font-extrabold text-gray-900 items-center">
            Contacts us
          </h2>
          <ul>
            <li className="text-black mb-4">Address</li>
            <div className="flex items-center mb-8">
              <FaLocationDot className=" text-red-300" />
              <span className="ml-2">Sofia,bul. Bulgaria 031 </span>
            </div>
            <li className="text-black mb-4">Phones</li>
            <div className="flex items-center mb-8">
              <FaPhoneSquare className=" text-red-300" />
              <span className="ml-2">+359 852 882 055 </span>
            </div>
            <li className="text-black mb-4">Email</li>
            <div className="flex tems-center mb-8">
              <MdEmail className=" text-red-300" />
              <span className="ml-2"> houseOfbeauty@gm.com </span>
            </div>
            <li className="text-black mb-4">Opening Hours</li>
            <div className="flex items-center mb-8">
              <FaRegClock className=" text-red-300" />
              <span className="ml-2">
                <p>Mon-Fri: 09:00 - 20:00</p>
                <p>Sat-Sun: 09:00 - 19:00</p>
              </span>
            </div>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8">
          <img className="w-full rounded-lg" src={aboutpics} alt="content 1" />
        </div>
      </div>
    </div>
  );
}
