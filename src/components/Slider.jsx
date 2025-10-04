import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider({ slides, variant = "default" }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const renderText = () => {
    const isDouble = variant === "doubleButton";

    return (
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left p-6 max-w-2xl">
        <p
          className={`text-m md:text-sm mb-2 font-bold mt-30 tracking-widest lg:text-xl lg:mb-10 ${
            isDouble ? "text-[#BDBDBD]" : "text-[#ffffff]"
          }`}
        >
          {slides[current].season}
        </p>

        <h2
          className={`text-[40px] md:text-2xl font-bold mb-2 lg:text-6xl lg:mb-10 ${
            isDouble ? "text-black" : "text-white"
          }`}
        >
          {slides[current].title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br className="block lg:hidden" />
            </span>
          ))}
        </h2>

        <p
          className={`text-[20px] mb-4 lg:text-2xl lg:mb-10 ${
            isDouble ? "text-[#737373]" : "text-white"
          }`}
        >
          {slides[current].desc.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br className="block lg:hidden" />
            </span>
          ))}
        </p>

        {slides[current].price && (
          <p
            className={`text-lg font-bold mb-4 ${
              isDouble ? "text-black" : "text-white"
            } lg:hidden`}
          >
            {slides[current].price}
          </p>
        )}

        {isDouble ? (
          <div className="flex flex-col lg:flex-row gap-3 w-full max-w-[200px] lg:max-w-none">
            <button className="bg-[#23A6F0] text-white text- md:text-base font-semibold px-6 py-4 rounded hover:bg-blue-600 transition lg:bg-[#2DC071]">
              {slides[current].buttonLabel}
            </button>
            <button className="border border-[#23A6F0] lg:border-[#2DC071] text-[#23A6F0] text-sm md:text-base font-semibold px-6 py-4 rounded hover:bg-blue-600 hover:text-white transition lg:text-[#2DC071]">
              READ MORE
            </button>
          </div>
        ) : variant === "product" ? (
          <div className="flex items-center justify-center gap-20">
            <button
              className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-12 h-20 lg:w-20 lg:h-32 text-white" />
            </button>

            <div className="flex items-center gap-4">
              {slides[current].price && (
                <p className="hidden lg:inline text-white text-xl font-bold">
                  {slides[current].price}
                </p>
              )}
              <button className="bg-[#2DC071] text-white text-sm md:text-base font-semibold  px-10 py-4 rounded hover:bg-green-100 transition">
                {slides[current].buttonLabel}
              </button>
            </div>

            <button
              className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2"
              onClick={nextSlide}
            >
              <ChevronRight className="w-12 h-20 lg:w-20 lg:h-32 text-white" />
            </button>
          </div>
        ) : (
          <button className="bg-green-500 text-white text-sm md:text-base font-semibold px-6 py-2 rounded hover:bg-green-600 transition lg:px-20 lg:py-4">
            {slides[current].buttonLabel}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {variant === "default" ? (
        <>
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center ">
            {renderText()}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 "
          >
            <ChevronLeft className="w-5 h-5 lg:w-20 lg:h-20 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2"
          >
            <ChevronRight className="w-5 h-5 lg:w-20 lg:h-20 text-white" />
          </button>
        </>
      ) : variant === "doubleButton" ? (
        <div className="w-full bg-white flex flex-col lg:flex-row items-center justify-center ">
          <div className="flex-1 flex justify-center order-1 lg:order-2">
            {renderText()}
          </div>
          <div className="flex-1 flex justify-center order-2 lg:order-1">
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-[1000px] object-cover mb-15"
            />
          </div>
        </div>
      ) : (
        <div className="w-full bg-[#23856D] flex flex-col lg:flex-row items-center justify-center">
          <div className="flex-1 flex justify-center">{renderText()}</div>
          <div className="flex-1 flex justify-center">
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full bg-[#23856D] h-[1000px] object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
