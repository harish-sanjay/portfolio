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
    <div className="flex relative w-full ">
      <div>
        <div
          className="absolute left-0 h-full border-none flex items-center justify-center
        z-[3] bg-black pr-3 transition-[transform_400ms] ease-in-out"
        >
          <button
            type="button"
            onClick={prevSlide}
            className="transition-[opacity_400ms] ease-in-out 
            h-[7.5rem] w-6 rounded-lg flex items-center justify-center p-0 m-0
             text-[rgba(255,255,255,0.7)] bg-[rgba(255,255,255,0.1)]"
          >
            <FaChevronLeft />
          </button>
        </div>
      </div>
      <div className="rounded-lg w-full">
        <ul
          className="relative m-0 p-0 flex overflow-x-scroll overflow-y-visible scroll-smooth"
          style={{
            scrollSnapType: "x mandatory",
            scrollMarginInlineStart: "2.5em",
            scrollbarWidth: "none",
          }}
        >
          {items &&
            items.map((item, index) => (
              <li
                key={index}
                style={{ scrollSnapStart: "algin" }}
                className="w-full flex flex-shrink-1 
                2xl:p-[0.55rem_1.375rem] xl:p-[0.5rem_1.375rem] lg:p-[0.4rem_1.375rem]
            p-[0.3rem_0.625rem] xl:[scroll-margin-inline-start:2.75rem] "
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
      {/* <div>
        <div
          className="absolute left-0 h-full border-none flex items-center justify-center
        z-[3] bg-black pr-3 transition-[transform_400ms] ease-in-out"
        >
          <button
            onClick={nextSlide}
            className="transition-[opacity_400ms] ease-in-out 
            h-[7.5rem] w-6 rounded-lg flex items-center justify-center p-0 m-0 text-[rgba(255,255,255,0.7)] bg-[rgba(255,255,255,0.1)]"
          >
            <FaChevronRight />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Carousel;
