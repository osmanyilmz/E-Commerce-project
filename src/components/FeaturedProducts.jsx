import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axiosInstance from "../api/axiosInstance";

export default function FeaturedProducts({
  onlyTitle = false,
  showColors = true,
}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const res = await axiosInstance.get("/products?limit=8&offset=2");
        setProducts(Array.isArray(res.data.products) ? res.data.products : []);
      } catch (err) {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="bg-[#ffffff] py-10 px-4 w-full">
      <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4 text-center">
        BESTSELLER <br className="block lg:hidden" />
        PRODUCTS
      </h2>

      {!onlyTitle && (
        <>
          <h2 className="text-xl font-normal text-[#737373] mb-4 text-center">
            Featured Products
          </h2>

          <p className="text-[#737373] font-normal leading-snug text-center mb-10">
            Problems trying to resolve the
            <br className="block lg:hidden" />
            conflict between
          </p>
        </>
      )}

      {loading && <p className="text-center">Yükleniyor...</p>}

      {!loading && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <ProductCard key={item.id} {...item} showColors={showColors} />
          ))}
        </div>
      )}
    </div>
  );
}
