import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const FAQCard = ({ item }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShowAnswer(!showAnswer);
        }}
        className="flex justify-between items-center p-5 bg-[rgb(45,45,45)] hover:bg-[rgb(75,75,75)] w-full "
      >
        <h4 className="text-[22px] max-md:text-xl">{item.question}</h4>
        <span>
          <AiOutlinePlus
            className={`w-8 h-8 max-lg:w-7 max-lg:h-7 ${
              showAnswer ? "rotate-45" : ""
            } transition-transform duration-150`}
          />
        </span>
      </button>
      {showAnswer && (
        <div className="mt-1 p-5 bg-[rgb(45,45,45)] text-xl ">
          <p>
            {item.answer}
            {item.answer2 && (
              <span>
                <br></br>
                <br></br>
                {item.answer2}
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQCard;
