import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  updateCount,
  toggleChecked,
  removeFromCart,
} from "../../redux/actions/shoppingCartActions";

export default function ShoppingCartPage() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shoppingCart);
  const user = useSelector((state) => state.client.user);
  const history = useHistory();

  const total = cart
    .filter((item) => item.checked)
    .reduce((t, item) => t + item.count * item.product.price, 0);

  const SHIPPING_PRICE = 29.99;
  const DISCOUNT = total > 150 ? SHIPPING_PRICE : 0;
  const grandTotal = total + SHIPPING_PRICE - DISCOUNT;

  const handleCreateOrder = () => {
    if (!user?.token) {
      history.push("/login");
      return;
    }

    if (cart.filter((item) => item.checked).length === 0) {
      alert("Please select at least one product to continue.");
      return;
    }

    history.push("/create-order");
  };

  return (
    <div className="w-full flex justify-center p-10 bg-gray-50">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
        {/*  LEFT SIDE - CART LIST*/}
        <div className="bg-white shadow p-6 rounded-lg">
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
                      className="text-red-500 hover:text-red-700 text-xl cursor-pointer"
                      title="Remove"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="bg-white shadow p-6 rounded-lg h-fit sticky top-6">
          <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 mb-6">
          <button
            onClick={handleCreateOrder}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 mb-6"
          >
            Create Order →
          </button>

          <h3 className="text-lg font-bold mb-4">Order Summary</h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Products Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${SHIPPING_PRICE.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>- ${DISCOUNT.toFixed(2)}</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-orange-500">${grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
