import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ stars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setRating(index);
  }

  function handleMouseEnter(index) {
    setHover(index);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Star Rating</h1>

        <p className="text-gray-500 mb-6">
          Click a star to rate
        </p>

        <div className="flex justify-center gap-2">
          {[...Array(stars)].map((_, index) => {
            index += 1;

            return (
              <FaStar
                key={index}
                size={45}
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={`
                  cursor-pointer
                  transition-all
                  duration-200
                  hover:scale-125
                  ${
                    index <= (hover || rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                `}
              />
            );
          })}
        </div>

        <p className="mt-6 text-lg font-semibold text-gray-700">
          Rating: {rating} / {stars}
        </p>
      </div>
    </div>
  );
};

export default StarRating;  