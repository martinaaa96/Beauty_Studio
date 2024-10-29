import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const images = ["/home.jpg", "/home1.jpg", "/home2.jpg"];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-screen">
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: -currentIndex * 100 + "%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </motion.div>

      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={handlePrev}
          className="bg-gray-700 text-white rounded-full p-2 opacity-75 hover:opacity-100"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-700 text-white rounded-full p-2 opacity-75 hover:opacity-100"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
