import EditorsPick from "../components/EditorsPick";
import FeaturedProducts from "../components/FeaturedProducts";
import Slider from "../components/Slider";

const slides = [
  {
    image: "/images/carousel-image.jpg",
    title: "NEW\nCOLLECTION",
    season: "SUMMER 2020",
    desc: "We know how large objects\nwill act, but things on a\nsmall scale.",
    buttonLabel: "SHOP NOW",
  },
  {
    image: "/images/carousel-image2.jpg",
    title: "WINTER COLLECTION",
    season: "WINTER 2020",
    desc: "Comfort and warmth for every season.",
    buttonLabel: "DISCOVER",
  },
];

const productSlides = [
  {
    image: "/images/vita-classic.png",
    season: "SUMMER 2020",
    title: "Vita Classic\nProduct",
    desc: "We know how large objects\nwill act, but things on a\nsmall scale.",
    price: "$16.48",
    buttonLabel: "ADD TO CART",
  },
];

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-[1900px] h-[1000px] ">
          <Slider slides={slides} />
        </div>
      </div>
      <EditorsPick />
      <FeaturedProducts />
      <Slider slides={productSlides} variant="product" />
    </>
  );
}
