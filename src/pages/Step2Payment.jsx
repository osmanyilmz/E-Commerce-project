import { useSelector } from "react-redux";
import axiosInstance from "../api/axiosInstance";

const Step2Payment = () => {
  const { shippingAddressId, receiptAddressId } = useSelector(
    (state) => state.client.order
  );

  const cart = useSelector((state) => state.shoppingCart.cart);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.count,
    0
  );

  const orderPayload = {
    shippingAddressId,
    receiptAddressId,
    items: cart.map((item) => ({
      productId: item.product.id,
      count: item.count,
    })),
    totalPrice,
  };

  const handleCreateOrder = async () => {
    try {
      const res = await axiosInstance.post("/order", orderPayload);
      console.log("Order created:", res.data);
      alert("Order created successfully 🎉");
    } catch (err) {
      console.error("Order error:", err);
      alert("Order failed");
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Payment Step</h2>

      <p>
        <strong>Shipping Address ID:</strong> {shippingAddressId}
      </p>

      <p>
        <strong>Receipt Address ID:</strong> {receiptAddressId}
      </p>

      <p className="mt-4 font-semibold">Order Summary</p>

      {cart.map((item) => (
        <div key={item.product.id}>
          {item.product.name} × {item.count}
        </div>
      ))}

      <p className="mt-2">
        <strong>Total:</strong> {totalPrice.toFixed(2)} TL
      </p>

      <button
        onClick={handleCreateOrder}
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded"
      >
        Place Order
      </button>
    </>
  );
};

export default Step2Payment;
