import { useHistory } from "react-router-dom";

export default function ProductCard({ id, name, images, price }) {
  const history = useHistory();

  const productImage =
    Array.isArray(images) && images.length > 0
      ? images[0].url
      : "/images/no-image.png";

  const handleClick = () => {
    history.push(`/product-detail/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="max-w-sm mx-auto bg-white overflow-hidden cursor-pointer border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200
    >"
    >
      <img
        src={productImage}
        alt={name || "Product"}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="font-bold text-gray-900 truncate">{name}</h3>
        <p className="text-gray-700">${price}</p>
      </div>
    </div>
  );
}
