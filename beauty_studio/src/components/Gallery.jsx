import aboutpics from "/aboutpics.jpg";

import { gallery } from "../utils/gallery";
import { useState } from "react";
export default function Gallery() {
  const [pictures, setPictures] = useState(gallery);

  const [filtered, setFiltered] = useState("");

  const filteredPicture =
    filtered === ""
      ? pictures
      : gallery.filter((picture) => picture.category.includes(filtered));

  return (
    <>
      <>
        <div className="flex flex-wrap justify-center mt-8 space-y-4 md:space-y-0 md:space-x-2 font-serif">
          <button
            className=" text-black hover:underline hover:text-red-400 focus:ring-opacity-40 py-2 px-4 rounded mx-2"
            onClick={() => setFiltered("Haircuts")}
          >
            Haircuts
          </button>
          <button
            className=" text-black hover:text-red-400 
            focus:ring-opacity-40 py-2 px-4 rounded mx-2"
            onClick={() => setFiltered("Styling")}
          >
            Styling
          </button>
          <button
            className="bg-gradient-to-r text-black hover:text-red-400 
            focus:ring-opacity-40 py-2 px-4 rounded mx-2"
            onClick={() => setFiltered("Coloring")}
          >
            Coloring
          </button>
          <button
            className="bg-gradient-to-r text-black hover:text-red-400 
            focus:ring-opacity-40 py-2 px-4 rounded mx-2"
            onClick={() => setFiltered("Hair Extentions")}
          >
            Hair Extentions
          </button>
          <button
            className="bg-gradient-to-r text-black hover:text-red-400 
            focus:ring-opacity-40 py-2 px-4 rounded mx-2"
            onClick={() => setFiltered("Manicure")}
          >
            Manicure
          </button>
          <button
            className="bg-gradient-to-r text-black hover:text-red-400 
            focus:ring-opacity-40 py-2 px-4 rounded mx-2"
            onClick={() => setFiltered("Pedicure")}
          >
            Pedicure
          </button>
          <button
            className="bg-gradient-to-r text-black hover:text-red-400 
            focus:ring-opacity-40 py-2 px-4 rounded mx-2"
            onClick={() => setFiltered("Deep Cleasing")}
          >
            Deep Cleasing
          </button>
          <button
            className="bg-gradient-to-r text-black hover:text-red-400 
            focus:ring-opacity-40 py-2 px-4 rounded mx-2"
            onClick={() => setFiltered("")}
          >
            All
          </button>
        </div>
        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {filteredPicture.map((picture) => (
            <div
              key={picture.id}
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl flex flex-col"
            >
              <a href="#">
                <img
                  src={picture.image}
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-xl"
                />
              </a>
            </div>
          ))}
        </section>
      </>
    </>
  );
}
