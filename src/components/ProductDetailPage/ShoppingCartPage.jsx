import { useSelector, useDispatch } from "react-redux";
import {
  updateCount,
  toggleChecked,
  removeFromCart,
} from "../../redux/actions/shoppingCartActions";

export default function ShoppingCartPage() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shoppingCart);

  const total = cart
    .filter((item) => item.checked)
    .reduce((t, item) => t + item.count * item.product.price, 0);

  return (
    <div className="w-full flex justify-center p-10">
      <div className="w-full max-w-5xl bg-white shadow p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <>
            <div className="grid grid-cols-[50px_1fr_140px_120px_80px] gap-4 pb-3 border-b text-gray-600 font-semibold">
              <div>Select</div>
              <div>Product</div>
              <div className="text-center">Count</div>
              <div className="text-right">Price</div>
              <div className="text-center">Actions</div>
            </div>

            {cart.map((item) => (
              <div
                key={item.product.id}
                className="grid grid-cols-[50px_1fr_140px_120px_80px] gap-4 py-4 border-b items-center hover:bg-gray-50"
              >
                <div>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => dispatch(toggleChecked(item.product.id))}
                  />
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={item.product.images?.[0]?.url}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span className="font-medium">{item.product.name}</span>
                </div>

                <div className="flex justify-center items-center gap-2">
                  <button
                    onClick={() => dispatch(updateCount(item.product.id, -1))}
                    className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    −
                  </button>

                  <span className="w-6 text-center font-semibold">
                    {item.count}
                  </span>

                  <button
                    onClick={() => dispatch(updateCount(item.product.id, 1))}
                    className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                <div className="text-right font-bold">
                  ${(item.product.price * item.count).toFixed(2)}
                </div>

                <div className="text-center">
                  <button
                    onClick={() => dispatch(removeFromCart(item.product.id))}
                    className="text-red-500 hover:text-red-700 text-xl hover:cursor-pointer"
                    title="Remove"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </>
        )}

        <div className="flex justify-end mt-6">
          <div className="text-xl font-bold">
            Total: <span className="text-green-600">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
