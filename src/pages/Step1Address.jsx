import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../api/axiosInstance";

const CITIES = ["İstanbul", "Ankara", "İzmir", "Bursa"];

export default function Step1Address({ onNext }) {
  const dispatch = useDispatch();

  const [addresses, setAddresses] = useState([]);
  const [shippingAddressId, setShippingAddressId] = useState(null);
  const [receiptAddressId, setReceiptAddressId] = useState(null);
  const [sameAsShipping, setSameAsShipping] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",
  });

  useEffect(() => {
    axiosInstance.get("/user/address").then((res) => {
      setAddresses(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: form.title,
      name: form.name,
      surname: form.surname,
      phone: form.phone,
      city: form.city,
      district: form.district,
      neighborhood: form.neighborhood,
      address: form.address,
    };

    if (editingId) {
      await axiosInstance.put("/user/address", { id: editingId, ...payload });
    } else {
      await axiosInstance.post("/user/address", payload);
    }

    const res = await axiosInstance.get("/user/address");
    setAddresses(res.data);

    setShowForm(false);
    setEditingId(null);
    setForm({
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    });
  };

  const handleEdit = (addr) => {
    setEditingId(addr.id);
    setForm(addr);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    await axiosInstance.delete(`/user/address/${id}`);
    setAddresses(addresses.filter((a) => a.id !== id));
  };

  const handleNext = () => {
    dispatch({ type: "SET_SHIPPING_ADDRESS", payload: shippingAddressId });
    dispatch({ type: "SET_RECEIPT_ADDRESS", payload: receiptAddressId });
    onNext();
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-semibold mb-3">Shipping Address</h2>

          {addresses.map((addr) => (
            <label key={addr.id} className="block border p-3 mb-3 rounded">
              <input
                type="radio"
                name="shipping"
                checked={shippingAddressId === addr.id}
                onChange={() => {
                  setShippingAddressId(addr.id);
                  if (sameAsShipping) {
                    setReceiptAddressId(addr.id);
                  }
                }}
                className="mr-2"
              />

              <strong>{addr.title}</strong>
              <p>
                {addr.name} {addr.surname}
              </p>
              <p>
                {addr.city} / {addr.district}
              </p>
              <p>{addr.neighborhood}</p>

              <div className="flex gap-3 mt-2 text-sm">
                <button
                  type="button"
                  onClick={() => handleEdit(addr)}
                  className="text-blue-600"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(addr.id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </div>
            </label>
          ))}

          <label className="flex items-center gap-2 mt-4 text-sm">
            <input
              type="checkbox"
              checked={sameAsShipping}
              onChange={(e) => {
                setSameAsShipping(e.target.checked);
                if (e.target.checked && shippingAddressId) {
                  setReceiptAddressId(shippingAddressId);
                }
              }}
            />
            Faturamı Aynı Adrese Gönder
          </label>
        </div>

        {/* RECEIPT */}
        <div>
          <h2 className="font-semibold mb-3">Receipt Address</h2>

          {addresses.map((addr) => (
            <label key={addr.id} className="block border p-3 mb-3 rounded">
              <input
                type="radio"
                name="receipt"
                checked={receiptAddressId === addr.id}
                onChange={() => setReceiptAddressId(addr.id)}
                className="mr-2"
                disabled={sameAsShipping}
              />

              <strong>{addr.title}</strong>
              <p>
                {addr.name} {addr.surname}
              </p>
              <p>
                {addr.city} / {addr.district}
              </p>
              <p>{addr.neighborhood}</p>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={() => setShowForm(true)}
        className="mt-6 bg-gray-200 px-4 py-2 rounded"
      >
        + Add Address
      </button>

      <button
        onClick={handleNext}
        className="mt-8 bg-orange-500 text-white px-6 py-3 rounded"
        disabled={!shippingAddressId || !receiptAddressId}
      >
        Continue to Payment →
      </button>
    </>
  );
}
