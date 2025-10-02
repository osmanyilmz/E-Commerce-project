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
      <div className="flex flex-col items-center text-center p-6">
        <p
          className={`text-m md:text-sm mb-2 font-bold mt-30 tracking-widest ${
            isDouble ? "text-[#BDBDBD]" : "text-[#ffffff]"
          }`}
        >
          {slides[current].season}
        </p>

        <h2
          className={`text-[40px] md:text-2xl font-bold mb-2 ${
            isDouble ? "text-black" : "text-white"
          }`}
        >
          {slides[current].title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h2>

        <p
          className={`text-[20px] mb-4 ${
            isDouble ? "text-[#737373]" : "text-white"
          }`}
        >
          {slides[current].desc.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>

        {slides[current].price && (
          <p
            className={`text-lg font-bold mb-4 ${
              isDouble ? "text-black" : "text-white"
            }`}
          >
            {slides[current].price}
          </p>
        )}

        {isDouble ? (
          <div className="flex flex-col gap-3 w-full max-w-[200px]">
            <button className="bg-[#23A6F0] text-white text- md:text-base font-semibold px-6 py-4 rounded hover:bg-blue-600 transition">
              {slides[current].buttonLabel}
            </button>
            <button className="border border-[#23A6F0] text-[#23A6F0] text-sm md:text-base font-semibold px-6 py-4 rounded hover:bg-blue-600 hover:text-white transition">
              Learn More
            </button>
          </div>
        ) : variant === "product" ? (
          <div className="flex items-center justify-center gap-20">
            <button onClick={prevSlide}>
              <ChevronLeft className="w-12 h-20 text-white" />
            </button>
            <button className="bg-[#2DC071] text-white text-sm md:text-base font-semibold px-10 py-4 rounded hover:bg-green-600 transition">
              {slides[current].buttonLabel}
            </button>
            <button onClick={nextSlide}>
              <ChevronRight className="w-12 h-20 text-white" />
            </button>
          </div>
        ) : (
          <button className="bg-green-500 text-white text-sm md:text-base font-semibold px-6 py-2 rounded hover:bg-green-600 transition">
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
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            {renderText()}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </>
      ) : variant === "doubleButton" ? (
        <div className="w-full bg-white flex flex-col items-center justify-center ">
          {renderText()}
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-[500px] object-cover mb-15"
          />
        </div>
      ) : (
        <div className="w-full bg-[#23856D] flex flex-col items-center justify-center">
          {renderText()}
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full bg-[#23856D] h-[700px] object-cover"
          />
        </div>
      )}
    </div>
  );
}
