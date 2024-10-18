//import home from "../assets/home.jpg";
//import home2 from "../assets/home2.jpg";
//import home3 from "../assets/home3.jpg";
//import proba from "../assets/proba.jpg";
//import proba4 from "../assets/proba4.jpg";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-indigo-500 grid place-content-center">
        <div className="flex items-center gap-2">
          <button className="min-w-[30px] h-[30px] rounded-full grid place-content-center text-white bg-black bg-opacity-20 hover:bg-opacity-60 duration-200">
            <MdKeyboardArrowLeft />
          </button>
          <div className="max-w-[300px] grid place-items-center rounded-lg h-[200px] bg-white"></div>
          <button className="min-w-[30px] h-[30px] rounded-full grid place-content-center text-white bg-black bg-opacity-20 hover:bg-opacity-60 duration-200">
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
