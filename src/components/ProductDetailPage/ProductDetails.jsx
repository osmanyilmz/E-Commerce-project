import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function ProductDetails() {
  const paragraphs = [
    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  ];

  const listItems = [
    "the quick fox jumps over the lazy dog",
    "the quick fox jumps over the lazy dog",
    "the quick fox jumps over the lazy dog",
    "the quick fox jumps over the lazy dog",
  ];
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full flex justify-center bg-[#FFFFFF] py-10">
      <div className="w-full max-w-6xl px-15">
        <div className="flex items-center  justify-center space-x-6 border-b border-gray-200 mb-6">
          {["description", "additional", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium ${
                activeTab === tab
                  ? "text-gray-800 border-b-2 border-gray-800"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab === "description"
                ? "Description"
                : tab === "additional"
                ? "Additional Information"
                : "Reviews (0)"}
            </button>
          ))}
        </div>

        {activeTab === "description" && (
          <div className="text-gray-700">
            <img
              src="/images/ProductDetailPage/product-detail.png"
              alt="Product Detail"
              className="w-full rounded-lg mb-6"
            />

            <h2 className="text-xl font-bold text-gray-900 mb-3">
              the quick fox jumps over
            </h2>
            {paragraphs.map((text, index) => (
              <p key={index} className="text-gray-500 mb-4">
                {text}
              </p>
            ))}

            <h2 className="text-xl font-bold text-gray-900 mb-3">
              the quick fox jumps over
            </h2>
            <ul className="space-y-2 text-gray-500 mb-8">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-gray-400" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mb-3">
              the quick fox jumps over
            </h2>
            <ul className="space-y-2 text-gray-500">
              {listItems.slice(0, 3).map((item, index) => (
                <li key={index} className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-gray-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "additional" && (
          <div className="text-gray-500 text-center py-10">
            <p>Additional product information will appear here.</p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="text-gray-500 text-center py-10">
            <p>No reviews yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
