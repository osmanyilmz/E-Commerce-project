import ProductDetailCard from "../components/ProductDetailPage/ProductDetailCard";
import ProductDetails from "../components/ProductDetailPage/ProductDetails";
import Icons from "../components/common/Icons";
import ProductCard from "../components/ProductCard";

export default function ProductDetailPage() {
  const productImages = [
    "product-detail-page-1.png",
    "product-detail-page-2.png",
    "product-detail-page-3.png",
    "product-detail-page-4.png",
  ];

  const products = productImages.map((img) => ({
    image: `/images/ProductDetailPage/${img}`,
  }));

  return (
    <>
      <ProductDetailCard />
      <ProductDetails />
      <div className="bg-[#FAFAFA] py-10 px-4 w-full">
        <h2 className="text-2xl lg:text-3xl font-bold text-black mb-3 text-center">
          BESTSELLER PRODUCTS
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
          {products.map((item, idx) => (
            <ProductCard key={idx} {...item} />
          ))}
        </div>
      </div>
      <Icons />
    </>
  );
}
