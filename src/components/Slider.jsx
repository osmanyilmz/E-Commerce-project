import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider({ slides }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black/40">
        <p className="text-xs md:text-sm text-white mb-2 tracking-widest">
          {slides[current].season}
        </p>
        <h2 className="text-[40px] md:text-2xl font-bold text-white mb-2">
          {slides[current].title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h2>
        <p className="text-xl md:text-base text-white mb-4">
          {slides[current].desc.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <button className="bg-green-500 text-white text-sm md:text-base font-semibold px-4 py-2 rounded hover:bg-green-600 transition">
          {slides[current].buttonLabel}
        </button>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 white-500 p-2"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2  p-2"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}
