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
    images: [
      {
        url: `/images/FeaturedProducts/${img}`,
      },
    ],
  }));

  return (
    <div className="bg-[#ffffff] py-10 px-4 w-full">
      <h2 className="text-xl font-normal text-[#737373] mb-4 text-center lg:text-xl">
        Featured Products
      </h2>

      <h2 className="text-2xl lg:text-3xl font-bold text-black mb-3 text-center">
        BESTSELLER <br className="block lg:hidden" />
        PRODUCTS
      </h2>

      <p className="text-[#737373] font-normal leading-snug  lg:text-xl text-center mb-10">
        Problems trying to resolve the
        <br className="block lg:hidden" />
        conflict between
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((item, idx) => (
          <ProductCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}
