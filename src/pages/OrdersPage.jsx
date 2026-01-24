import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [openOrderId, setOpenOrderId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axiosInstance.get("/order");
        setOrders(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("ORDER FETCH ERROR", err);
        setError("Siparişler yüklenemedi");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p className="text-center mt-10">Yükleniyor...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-6">📦 Siparişlerim</h2>

      {orders.length === 0 && (
        <p className="text-gray-500">Henüz siparişiniz bulunmuyor.</p>
      )}

      {orders.map((order) => {
        const isOpen = openOrderId === order.id;

        return (
          <div key={order.id} className="border rounded mb-4">
            <div
              onClick={() => setOpenOrderId(isOpen ? null : order.id)}
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div>
                <p className="font-semibold">Sipariş #{order.id}</p>
                <p className="text-sm text-gray-600">
                  {new Date(order.order_date).toLocaleString()}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-semibold">{order.price} TL</span>
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
            </div>

            {isOpen && (
              <div className="p-4">
                <table className="w-full text-sm border">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2 text-left">Ürün</th>
                      <th className="border p-2 text-center">Adet</th>
                      <th className="border p-2 text-center">Birim Fiyat</th>
                      <th className="border p-2 text-center">Toplam</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.products.map((product) => (
                      <tr key={product.id}>
                        <td className="border p-2">
                          <div className="flex items-center gap-3">
                            {product.images?.[0]?.url && (
                              <img
                                src={product.images[0].url}
                                alt={product.name}
                                className="w-12 h-12 object-cover rounded"
                              />
                            )}
                            <div>
                              <p className="font-semibold">{product.name}</p>
                              <p className="text-xs text-gray-500">
                                {product.description}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="border p-2 text-center">
                          {product.count}
                        </td>
                        <td className="border p-2 text-center">
                          {product.price} TL
                        </td>
                        <td className="border p-2 text-center font-semibold">
                          {(product.price * product.count).toFixed(2)} TL
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
