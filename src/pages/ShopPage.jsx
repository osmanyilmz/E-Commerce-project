import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setCategory } from "../redux/actions/productActions";
import { useLocation } from "react-router-dom";

import ShopCards from "../components/ShopCards";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import Icons from "../components/common/Icons";
import Pagination from "../components/Pagination";

export default function ShopPage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const {
    productList,
    fetchState,
    total,
    category,
    filter,
    sort,
    limit,
    offset,
  } = useSelector((state) => state.product);

  useEffect(() => {
    const path = location.pathname || "";
    const match = path.match(/\/shop(?:\/[^/]+){2}\/(\d+)(?:\/|$)/);

    if (match && match[1]) {
      dispatch(setCategory(match[1]));
    } else {
      dispatch(setCategory(null));
    }
  }, [location.pathname, dispatch]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [category, filter, sort, limit, offset, dispatch]);

  if (fetchState === "FETCHING") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
      </div>
    );
  }

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
          {productList.map((item, idx) => (
            <ProductCard key={idx} {...item} />
          ))}
        </div>

        <Pagination />

        <div className="flex justify-center items-center mt-10 mb-10">
          <p className="text-gray-600">Total Products: {total}</p>
        </div>
      </div>

      <Icons />
    </>
  );
}
