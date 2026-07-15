import React, { useEffect, useState } from "react";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
} from "react-icons/bs";

const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(url) {
    try {
      setLoading(true);

      const response = await fetch(`${url}?page=1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
      }

      setLoading(false);
    } catch (err) {
      setErrorMsg(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  function handlePrevious() {
    setCurrentSlide(
      currentSlide === 0 ? images.length - 1 : currentSlide - 1
    );
  }

  function handleNext() {
    setCurrentSlide(
      currentSlide === images.length - 1 ? 0 : currentSlide + 1
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600 text-xl">
        Error: {errorMsg}
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10">

      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl cursor-pointer z-10 hover:scale-110 transition select-none"
      />

      <div className="overflow-hidden rounded-xl shadow-2xl">
        {images &&
          images.map((image, index) => (
            <img
              key={image.id}
              src={image.download_url}
              alt={`Slide ${index + 1}`}
              className={`w-full h-150 object-cover duration-500 ${
                currentSlide === index ? "block" : "hidden"
              }`}
            />
          ))}
      </div>

      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl cursor-pointer z-10 hover:scale-110 transition select-none"
      />

      <div className="flex justify-center gap-3 mt-5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-black scale-125"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;