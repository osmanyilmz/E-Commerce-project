import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../api/axiosInstance";
import { useHistory } from "react-router-dom";

export default function Step2Payment() {
  const history = useHistory();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.shoppingCart.cart);
  const addressId = useSelector(
    (state) => state.client.order.shippingAddressId,
  );

  const cartTotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.product?.price || 0);
    const count = parseInt(item.count || 1);
    return sum + price * count;
  }, 0);

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [editingCard, setEditingCard] = useState(null);
  const [loading, setLoading] = useState(false);

  const [paymentCvv, setPaymentCvv] = useState("");
  const [installment, setInstallment] = useState(1);
  const [use3D, setUse3D] = useState(false);

  const [form, setForm] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
  });

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 12 }, (_, i) => 2024 + i);

  /* ---------------- API ---------------- */
  const fetchCards = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/user/card");
      setCards(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("FETCH CARD ERROR", err);
      setCards([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleSaveOrUpdate = async () => {
    try {
      const payload = {
        card_no: form.card_no,
        name_on_card: form.name_on_card,
        expire_month: Number(form.expire_month),
        expire_year: Number(form.expire_year),
      };

      if (editingCard) {
        await axiosInstance.put("/user/card", {
          id: editingCard.id,
          ...payload,
        });
      } else {
        await axiosInstance.post("/user/card", payload);
      }

      resetForm();
      fetchCards();
    } catch {
      alert("Kart kaydedilemedi");
    }
  };

  const deleteCard = async (id) => {
    if (!window.confirm("Kart silinsin mi?")) return;
    await axiosInstance.delete(`/user/card/${id}`);
    setSelectedCard(null);
    fetchCards();
  };

  const createOrder = async () => {
    if (!selectedCard) {
      alert("Lütfen bir kart seçin");
      return;
    }

    if (!paymentCvv || paymentCvv.length !== 3) {
      alert("CVV geçersiz");
      return;
    }

    try {
      const payload = {
        address_id: addressId,
        order_date: new Date().toISOString(),
        card_no: Number(selectedCard.card_no),
        card_name: selectedCard.name_on_card,
        card_expire_month: Number(selectedCard.expire_month),
        card_expire_year: Number(selectedCard.expire_year),
        card_ccv: Number(paymentCvv),
        price: Number(cartTotal.toFixed(2)),
        products: cart.map((item) => ({
          product_id: item.product.id,
          count: Number(item.count),
          detail: "",
        })),
      };

      await axiosInstance.post("/order", payload);

      alert("🎉 Siparişiniz başarıyla oluşturuldu!");
      dispatch({ type: "CLEAR_CART" });
      setPaymentCvv("");
      history.push("/");
    } catch (err) {
      console.error(err);
      alert("❌ Sipariş oluşturulamadı");
    }
  };

  const resetForm = () => {
    setForm({
      card_no: "",
      expire_month: "",
      expire_year: "",
      name_on_card: "",
    });
    setEditingCard(null);
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <div className="border rounded-lg p-5 bg-white">
          <h3 className="font-semibold mb-4">
            {editingCard ? "Kart Güncelle" : "Yeni Kart Ekle"}
          </h3>

          <input
            className="w-full border rounded px-3 py-2 mb-3"
            placeholder="Kart Numarası"
            value={form.card_no}
            onChange={(e) => setForm({ ...form, card_no: e.target.value })}
          />

          <div className="flex gap-3 mb-3">
            {/* AY */}
            <select
              className="w-1/4 border rounded px-3 py-2"
              value={form.expire_month}
              onChange={(e) =>
                setForm({ ...form, expire_month: e.target.value })
              }
            >
              <option value="">Ay</option>
              {months.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>

            {/* YIL */}
            <select
              className="w-1/4 border rounded px-3 py-2"
              value={form.expire_year}
              onChange={(e) =>
                setForm({ ...form, expire_year: e.target.value })
              }
            >
              <option value="">Yıl</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>

            {/* CVV */}
            <input
              className="w-1/4 border rounded px-3 py-2"
              placeholder="CVV"
              maxLength={3}
              value={paymentCvv}
              onChange={(e) => setPaymentCvv(e.target.value.replace(/\D/g, ""))}
            />
          </div>

          <input
            className="w-full border rounded px-3 py-2 mb-4"
            placeholder="Kart Üzerindeki İsim"
            value={form.name_on_card}
            onChange={(e) => setForm({ ...form, name_on_card: e.target.value })}
          />

          <label className="flex items-center gap-2 mb-4 text-sm">
            <input
              type="checkbox"
              checked={use3D}
              onChange={() => setUse3D(!use3D)}
            />
            🔐 3D Secure ile ödemek istiyorum
          </label>

          <div className="flex gap-3">
            <button
              onClick={handleSaveOrUpdate}
              className="bg-orange-500 text-white px-5 py-2 rounded disabled:bg-gray-300"
              disabled={!form.card_no}
            >
              {editingCard ? "Güncelle" : "Kaydet"}
            </button>

            {editingCard && (
              <button onClick={resetForm} className="border px-5 py-2 rounded">
                İptal
              </button>
            )}
          </div>
        </div>

        {/* -------- SAVED CARDS -------- */}
        <div>
          <h3 className="font-semibold mb-3">Kayıtlı Kartlar</h3>

          {loading && <p>Yükleniyor...</p>}
          {!loading && cards.length === 0 && (
            <p className="text-sm text-gray-500">Kart yok</p>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card)}
                className={`border rounded-lg p-4 cursor-pointer ${
                  selectedCard?.id === card.id
                    ? "border-orange-500"
                    : "border-gray-300"
                }`}
              >
                <p className="font-mono">
                  **** **** **** {card.card_no.slice(-4)}
                </p>
                <p className="text-sm">
                  {card.expire_month}/{card.expire_year}
                </p>
                <p className="text-sm">{card.name_on_card}</p>

                <div className="flex gap-2 mt-3">
                  <button
                    className="text-sm px-3 py-1 border rounded"
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditingCard(card);
                      setForm({
                        card_no: card.card_no,
                        name_on_card: card.name_on_card,
                        expire_month: card.expire_month,
                        expire_year: card.expire_year,
                      });
                    }}
                  >
                    Düzenle
                  </button>

                  <button
                    className="text-sm px-3 py-1 bg-red-500 text-white rounded"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteCard(card.id);
                    }}
                  >
                    Sil
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* -------- INSTALLMENT -------- */}
        <div className="border rounded-lg p-5 bg-white">
          <h3 className="font-semibold mb-3">🧾 Taksit Seçenekleri</h3>

          {[1, 3, 6].map((i) => {
            const selected = installment === i;

            return (
              <label
                key={i}
                className={`flex justify-between items-center border rounded-lg p-4 mb-3 cursor-pointer transition ${
                  selected
                    ? "border-orange-500 bg-orange-50 text-orange-600"
                    : "border-gray-300 hover:border-orange-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    checked={selected}
                    onChange={() => setInstallment(i)}
                    className="hidden"
                  />
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      selected ? "border-orange-500" : "border-gray-400"
                    }`}
                  >
                    {selected && (
                      <span className="w-2 h-2 bg-orange-500 rounded-full" />
                    )}
                  </span>
                  <span>{i === 1 ? "Tek Çekim" : `${i} Taksit`}</span>
                </div>
                <span className="font-semibold">
                  {(cartTotal / i).toFixed(2)} TL
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* ================= RIGHT ================= */}
      <div className="border rounded-lg p-5 bg-white h-fit">
        <h3 className="font-semibold mb-4">Sipariş Özeti</h3>

        <div className="flex justify-between text-sm mb-2">
          <span>Ürünler</span>
          <span>{cartTotal.toFixed(2)} TL</span>
        </div>

        <div className="flex justify-between text-sm mb-2">
          <span>Taksit</span>
          <span>{installment === 1 ? "Tek Çekim" : `${installment} Ay`}</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-semibold">
          <span>Aylık Ödeme</span>
          <span>{(cartTotal / installment).toFixed(2)} TL</span>
        </div>

        <button
          onClick={createOrder}
          disabled={!selectedCard || !addressId}
          className="w-full bg-orange-500 text-white py-3 rounded mt-4 disabled:bg-gray-300"
        >
          Ödeme Yap
        </button>
      </div>
    </div>
  );
}
