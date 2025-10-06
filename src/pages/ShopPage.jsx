import ShopCards from "../components/ShopCards";

export default function ShopPage() {
  return (
    <div className="w-full min-h-screen flex justify-center bg-white text-gray-800">
      <div className="w-full max-w-3xl px-6 py-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold mb-5">Shop</h1>
          <div className="text-sm text-gray-500 mb-2">
            <span className="text-gray-800 font-medium">Home</span> &gt; Shop
          </div>
        </div>

        <ShopCards />
      </div>
    </div>
  );
}
