import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = ["/proba.jpg", "/proba4.jpg"];

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

  // Автоматично сменяне на снимките
  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // смяна на всеки 3 секунди

    return () => clearInterval(interval); // почистване при демонтаж
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-screen">
      {/* Карусел контейнер */}
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

      {/* Бутони за навигация */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={handlePrev}
          className="bg-gray-700 text-white rounded-full p-2 opacity-75 hover:opacity-100"
        >
          {"<"}
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-700 text-white rounded-full p-2 opacity-75 hover:opacity-100"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
