export default function ProductDetailCard({ product, onAddToCart }) {
  const rating = Math.round(product.rating || 0);

  return (
    <div className="w-full flex justify-center text-gray-800 bg-[#FAFAFA]">
      <div className="w-full max-w-6xl px-10 py-10 mb-10">
        <div className="flex flex-col items-center lg:flex-row lg:items-start gap-10">
          <div className="flex flex-col w-full lg:w-1/2">
            <div className="relative w-full max-w-md">
              <img
                src={product.images?.[0]?.url}
                alt={product.name}
                className="w-full h-auto"
              />
            </div>

            <div className="flex gap-5 mt-8">
              {product.images?.slice(0, 2).map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={product.name}
                  className="w-25 h-20 object-cover cursor-pointer"
                />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>

            <div className="flex items-center mb-3 text-yellow-400 text-2xl">
              {[...Array(5)].map((_, i) => (i < rating ? "★" : "☆"))}
              <span className="ml-2 text-gray-500 text-sm">
                ({product.rating || 0})
              </span>
            </div>

            <p className="text-2xl font-bold mb-2">${product.price}</p>

            <p className="text-gray-500 mb-4 font-semibold">
              Availability :{" "}
              <span className="text-[#23A6F0] font-medium">
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </p>

            <p className="text-[#858585] mb-6 font-semibold text-[15px] leading-[20px]">
              {product.description}
            </p>

            <hr className="mb-4" />

            <div className="flex items-center space-x-3 mb-6">
              <span className="w-6 h-6 rounded-full bg-blue-500"></span>
              <span className="w-6 h-6 rounded-full bg-green-500"></span>
              <span className="w-6 h-6 rounded-full bg-orange-500"></span>
              <span className="w-6 h-6 rounded-full bg-gray-800"></span>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={onAddToCart}
                className="bg-[#23A6F0] text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
