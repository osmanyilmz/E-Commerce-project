import EditorsPick from "../components/EditorsPick";
import FeaturedProducts from "../components/FeaturedProducts";
import Slider from "../components/Slider";
import ContentCard from "../components/ContentCard";

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

const doubleButtonSlides = [
  {
    image: "/images/neural-universe.png",
    season: "SUMMER 2020",
    title: "Part of the\nNeural\nUniverse",
    desc: "We know how large\nobjects will act, but\nthings on a small scale.",
    buttonLabel: "BUY NOW",
  },
];

const contentSlides = [
  {
    image: "/images/ContentCards/ContentCard1.png",
    badge: "NEW",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    linkLabel: "Learn More",
  },
  {
    image: "/images/ContentCards/ContentCard2.png",
    badge: "NEW",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    linkLabel: "Learn More",
  },
  {
    image: "/images/ContentCards/ContentCard3.png",
    badge: "NEW",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    linkLabel: "Learn More",
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
      <Slider slides={doubleButtonSlides} variant="doubleButton" />
      <ContentCard slides={contentSlides} />
    </>
  );
}
