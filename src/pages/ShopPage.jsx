import ShopCards from "../components/ShopCards";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import Icons from "../components/common/Icons";

export default function ShopPage() {
  const productImages = [
    "shop-page-card-1.png",
    "shop-page-card-2.jpg",
    "shop-page-card-3.jpg",
    "shop-page-card-3.jpg",
  ];

  const products = productImages.map((img) => ({
    image: `/images/ShopCards/${img}`,
  }));

  const icons = ["hooli", "lyft", "pied-piper-hat", "stripe", "aws", "reddit"];

  return (
    <>
      <div className="w-full flex justify-center text-gray-800 bg-[#FAFAFA]">
        <div className="w-full max-w-6xl px-5 py-5 mb-10">
          <div className="flex flex-col items-center text-center mb-8 lg:flex-row lg:justify-between lg:text-left">
            <h1 className="text-2xl font-semibold mb-2 lg:mb-0">Shop</h1>
            <div className="text-m text-gray-500">
              <span className="text-gray-800 font-medium">Home</span> &gt; Shop
            </div>
          </div>

          <ShopCards />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10">
        <FilterBar />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item, idx) => (
            <ProductCard key={idx} {...item} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-10 mb-10">
          <nav className="inline-flex rounded-md shadow-sm border border-[#E8E8E8] overflow-hidden">
            <button className="px-4 py-5 text-gray-400 bg-gray-100 cursor-not-allowed">
              First
            </button>
            <button className="px-4 py-5 text-[#23A6F0] border border-[#E9E9E9] hover:bg-blue-50">
              1
            </button>
            <button className="px-4 py-5 bg-[#23A6F0] text-white font-semibold">
              2
            </button>
            <button className="px-4 py-5 text-[#23A6F0] border border-[#E9E9E9] hover:bg-blue-50">
              3
            </button>
            <button className="px-4 py-5 text-[#23A6F0] border border-[#E9E9E9] hover:bg-blue-50">
              Next
            </button>
          </nav>
        </div>
      </div>

      <Icons />
    </>
  );
}
