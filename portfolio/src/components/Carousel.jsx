import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items && items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {item}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 
        transform -translate-y-1/2 bg-gray-600 text-white p-1 rounded-full shadow-md
        hover:bg-gray-800"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-1 
        rounded-full shadow-md hover:bg-gray-800"
      >
        <FaChevronRight />
      </button>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center space-x-2 mt-3">
        {items && items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full ${current === index ? "bg-gray-800" : "bg-gray-400"}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
