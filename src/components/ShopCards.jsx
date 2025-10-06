const categories = [
  {
    image: "/images/ShopCards/card-cover-1.jpg",
  },
  {
    image: "/images/ShopCards/card-cover-2.jpg",
  },
  {
    image: "/images/ShopCards/card-cover-3.jpg",
  },
  {
    image: "/images/ShopCards/card-cover-4.jpg",
  },
  {
    image: "/images/ShopCards/card-cover-5.jpg",
  },
];

export default function ShopCards() {
  return (
    <div className="flex flex-col gap-6">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="relative group rounded-md overflow-hidden shadow-md"
        >
          <img
            src={cat.image}
            alt="Cloths"
            className="w-full h-[300px] transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-center text-white transition duration-300 group-hover:bg-opacity-50">
            <h2 className="text-lg font-semibold tracking-wide">CLOTHS</h2>
            <p className="text-sm mt-1">5 Items</p>
          </div>
        </div>
      ))}
    </div>
  );
}
