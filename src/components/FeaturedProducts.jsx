import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const productImages = [
    "product-cover-1.png",
    "product-cover-2.png",
    "product-cover-3.png",
    "product-cover-4.png",
    "product-cover-5.png",
    "product-cover-6.png",
    "product-cover-6.png",
    "product-cover-7.png",
  ];
  const products = productImages.map((img) => ({
    image: `/images/FeaturedProducts/${img}`,
  }));
  return (
    <div className="bg-[#ffffff] py-10 px-4 w-full">
      <h2 className="text-xl font-normal text-[#737373] mb-4 text-center">
        Featured Products
      </h2>

      <h2 className="text-2xl font-bold text-black mb-3 text-center">
        BESTSELLER <br />
        PRODUCTS
      </h2>

      <p className="text-[#737373] font-normal leading-snug text-center mb-10">
        Problems trying to resolve the
        <br />
        conflict between
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((item, idx) => (
          <ProductCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}
