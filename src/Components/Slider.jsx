import React, { useState, useEffect } from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router"; 
import { useSwipeable } from "react-swipeable";

// Import images from src/assets
import Slide1 from "../../src/assets/Madrasa.png";
import Slide2 from "../../src/assets/Madrasa.png";
import Slide3 from "../../src/assets/Madrasa.png";



const slides = [
  {
    image: Slide1,
    title: "Learn English Confidently",
    subtitle:
      "Join our English Club t.",
  },
  {
    image: Slide2,
    title: "Spoken English Coaching",
    subtitle:
      "Structured coaching to help you speak fluent, clear, and correct English for real-life situations.",
  },
  {
    image: Slide3,
    title: "Global Communication Skills",
    subtitle:
      "Prepare yourself for global opportunities with strong English communication and professional confidence.",
  },
];


const Slider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => setCurrent(index);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % slides.length),
    onSwipedRight: () =>
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length),
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] xl:h-[95vh] overflow-hidden select-none"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover brightness-50 transition-all duration-700"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 sm:px-10 md:px-16 lg:px-24">
            <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-3 sm:mb-5 drop-shadow-lg leading-tight">
              {slide.title}
            </h1>
            <p className="text-white text-sm sm:text-base md:text-xl lg:text-2xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mb-5 sm:mb-8 drop-shadow-md leading-relaxed">
              {slide.subtitle}
            </p>
            <Link to="/">
              <button className="flex items-center gap-2 bg-red-900 hover:bg-red-800 text-white font-semibold py-2 sm:py-3 px-5 sm:px-8 rounded-full text-sm sm:text-lg transition-all duration-300">
                View More
                <HiArrowRight className="text-xl sm:text-2xl animate-bounce" />
              </button>
            </Link>
          </div>
        </div>
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white scale-110"
                : "bg-black/55 hover:bg-black/80"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;