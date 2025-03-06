import React from "react";
const IMG_LOC = "/src/assets/trending/";

const TrendingCard = ({ item }) => {
  return (
    <button className="relative p-0 bg-[rgb(35,35,35)] border-none rounded-lg transition-[tranform_0.2s] ease-in-out">
      <div
        className="relative rounded-lg bg-[rgb(35,35,35)] w-28 h-[9.8rem] lg:w-[8.75rem] lg:h-[12.25rem] 
      xl:w-[11.25rem] xl:h-[15.75rem] 2xl:w-[13.375rem] 2xl:h-[18.75rem] "
      >
        <span
          className="absolute z-[2] inset-0 bg-cover w-full bg-no-repeat h-full rounded-lg"
          style={{ backgroundImage: `url('${IMG_LOC}${item.altText}.jpg')` }}
        ></span>
      </div>
      <span
        className="absolute z-[4] text-[120px] font-bold -bottom-6 -left-7
     text-stroke text-secondary"
      >
        {item.rank}
      </span>
    </button>
  );
};

export default TrendingCard;
