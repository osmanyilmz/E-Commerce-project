import ProductDetailCard from "../components/ProductDetailCard";
import Icons from "../components/Icons";
import ProductCard from "../components/ProductCard";

export default function ProductDetailPage() {
  const productImages = [
    "product-detail-page-1.jpg",
    "product-detail-page-2.jpg",
    "product-detail-page-3.jpg",
    "product-detail-page-4.jpg",
  ];

  const products = productImages.map((img) => ({
    image: `/images/ProductDetailPage/${img}`,
  }));

  return (
    <>
      <ProductDetailCard />
      <div className="bg-[#ffffff] py-10 px-4 w-full">
        <h2 className="text-2xl lg:text-3xl font-bold text-black mb-3 text-center">
          BESTSELLER PRODUCTS
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item, idx) => (
            <ProductCard key={idx} {...item} />
          ))}
        </div>
      </div>
      <Icons />
    </>
  );
}
