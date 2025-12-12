import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/shoppingCartActions";

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
      <button
        onClick={() => history.goBack()}
        className="px-4 py-2 bg-gray-200 rounded-md mb-8 hover:bg-gray-300 self-start"
      >
        ← Back
      </button>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        <img
          src={product.images?.[0]?.url}
          alt={product.name}
          className="w-full max-w-sm h-auto object-cover rounded-lg shadow"
        />

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-3">{product.description}</p>

          <p className="text-2xl font-semibold mt-5">${product.price}</p>

          <button
            onClick={handleAddToCart}
            className="mt-5 px-6 py-3 bg-[#23A6F0] text-white rounded-md hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>

          <p className="text-gray-500 mt-3">
            Stock: <strong>{product.stock}</strong>
          </p>

          <p className="text-gray-500">
            Rating: ⭐ <strong>{product.rating}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
