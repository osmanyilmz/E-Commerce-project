const categories = [
  { image: "/images/ShopCards/card-cover-1.jpg" },
  { image: "/images/ShopCards/card-cover-2.jpg" },
  { image: "/images/ShopCards/card-cover-3.jpg" },
  { image: "/images/ShopCards/card-cover-4.jpg" },
  { image: "/images/ShopCards/card-cover-5.jpg" },
];

export default function ShopCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {categories.map((cat, index) => (
        <div key={index} className="relative group overflow-hidden shadow-md">
          <img
            src={cat.image}
            alt="Category"
            className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center transition duration-300 group-hover:bg-black/50">
            <h2 className="text-lg font-semibold tracking-wide">CLOTHS</h2>
            <p className="text-sm mt-1">5 Items</p>
          </div>
        </div>
      ))}
    </div>
  );
}
