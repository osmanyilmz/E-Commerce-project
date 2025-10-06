import ShopCards from "../components/ShopCards";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";

export default function ShopPage() {
  3;
  const productImages = [
    "shop-page-card-1.png",
    "shop-page-card-2.jpg",
    "shop-page-card-3.jpg",
    "shop-page-card-3.jpg",
  ];

  const products = productImages.map((img) => ({
    image: `/images/ShopCards/${img}`,
  }));

  return (
    <>
      <div className="w-full min-h-screen flex justify-center bg-white text-gray-800">
        <div className="w-full max-w-3xl px-6 py-10">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold mb-5">Shop</h1>
            <div className="text-sm text-gray-500 mb-2">
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
      </div>
    </>
  );
}
