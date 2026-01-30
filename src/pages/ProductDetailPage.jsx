import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/shoppingCartActions";
import Icons from "../components/common/Icons";
import FeaturedProducts from "../components/FeaturedProducts";
import ProductDetailCard from "../components/ProductDetailPage/ProductDetailCard";
import ProductDetails from "../components/ProductDetailPage/ProductDetails";

export default function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const { product, fetchState } = useSelector((state) => state.product);

  useEffect(() => {
    if (id) dispatch(fetchSingleProduct(id));
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (fetchState === "FETCHING")
    return <div className="text-center mt-20">Loading...</div>;

  if (!product) return <div className="text-center mt-20">Ürün bulunamadı</div>;

  return (
    <div className="flex flex-col items-center p-10">
      <div className="w-full max-w-6xl mb-4 self-start">
        <div className="text-m text-gray-500">
          <span
            onClick={() => history.push("/")}
            className="text-gray-800 font-medium cursor-pointer hover:underline"
          >
            Home
          </span>
          <span className="mx-2">{">"}</span>
          <span
            onClick={() => history.push("/shop")}
            className="cursor-pointer hover:underline"
          >
            Shop
          </span>
        </div>
      </div>

      <ProductDetailCard product={product} onAddToCart={handleAddToCart} />

      <ProductDetails />

      <FeaturedProducts onlyTitle={true} showColors={false} />

      <div className="py-5 w-full">
        <Icons />
      </div>
    </div>
  );
}
