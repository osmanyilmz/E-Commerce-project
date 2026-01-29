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
      className="max-w-sm mx-auto bg-white overflow-hidden cursor-pointer border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="w-full">
        <img
          src={productImage}
          alt={name || "Product"}
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="font-bold text-gray-900 truncate">{name}</h3>

        <p className="text-sm text-gray-500">English Department</p>

        <div className="mt-2">
          <span className="text-gray-400 mr-2">${price}</span>
        </div>

        <div className="flex justify-center gap-2 mt-3">
          <span className="w-4 h-4 rounded-full bg-[#23A6F0]"></span>
          <span className="w-4 h-4 rounded-full bg-[#23856D]"></span>
          <span className="w-4 h-4 rounded-full bg-[#E77C40]"></span>
          <span className="w-4 h-4 rounded-full bg-[#252B42]"></span>
        </div>
      </div>
    </div>
  );
}
