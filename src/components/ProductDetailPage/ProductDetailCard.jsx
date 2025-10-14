import { Eye, Heart, ShoppingCart } from "lucide-react";

export default function ProductDetailCard() {
  return (
    <div className="w-full flex justify-center text-gray-800 bg-[#FAFAFA]">
      <div className="w-full max-w-6xl px-10 py-10 mb-10">
        <div className="flex flex-col items-center text-center mb-8 lg:flex-row lg:text-left">
          <div className="text-sm text-gray-500">
            <span className="text-gray-800 font-medium">Home</span> &gt; Shop
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:items-start gap-10">
          <div className="flex flex-col w-full lg:w-1/2">
            <div className="relative w-full max-w-md">
              <img
                src="/images/ShopCards/card-cover-1.jpg"
                alt="Floating Phone"
                className="w-full h-auto "
              />
              <button className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl">
                &#10094;
              </button>
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl">
                &#10095;
              </button>
            </div>

            <div className="flex gap-5 mt-8">
              <img
                src="/images/ShopCards/card-cover-2.jpg"
                alt="chair"
                className="w-25 h-20 object-cover cursor-pointer"
              />
              <img
                src="/images/ShopCards/card-cover-3.jpg"
                alt="sofa"
                className="w-25 h-20 object-cover cursor-pointer"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-2xl font-semibold mb-2">Floating Phone</h2>

            <div className="flex items-center mb-3">
              <div
                className="flex text-yellow-400 text-3xl
              
              "
              >
                ★★★★☆
              </div>
              <span className="ml-2 text-gray-500 font-semibold text-lg">
                10 Reviews
              </span>
            </div>

            <p className="text-2xl font-bold mb-2">$1,139.33</p>

            <p className="text-gray-500 mb-4 font-semibold">
              Availability :{" "}
              <span className="text-[#23A6F0] font-medium">In Stock</span>
            </p>

            <p className="text-[#858585] mb-6 font-semibold text-[15px] leading-[20px] tracking-[0.3px]">
              Met minim Mollie non desert <br /> Alamo est sit cliquey dolor do
              <br />
              met sent. RELIT official consequent <br /> door ENIM RELIT Mollie.
              Excitation <br /> venial consequent sent nostrum met.
            </p>

            <hr className="mb-4" />

            <div className="flex items-center space-x-3 mb-6">
              <span className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-green-500 cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-orange-500 cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-gray-800 cursor-pointer"></span>
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600">
                Select Options
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <Heart />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <ShoppingCart />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <Eye />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
