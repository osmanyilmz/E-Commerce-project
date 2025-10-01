export default function EditorsPick() {
  const items = [
    { imageSrc: "/images/card-men.png", buttonText: "MEN", size: "full" },
    { imageSrc: "/images/card-women.png", buttonText: "WOMEN", size: "full" },
    {
      imageSrc: "/images/accessories.png",
      buttonText: "ACCESSORIES",
      size: "half",
    },
    { imageSrc: "/images/card-kids.png", buttonText: "KIDS", size: "half" },
  ];

  return (
    <div className="bg-[#fafafa] py-10 px-4 w-full">
      {/* Başlık */}
      <h2 className="text-3xl font-bold text-black mb-4 text-center">
        EDITOR’S PICK
      </h2>

      {/* Açıklama */}
      <p className="text-gray-400 mb-6 leading-snug text-center">
        Problems trying to resolve <br />
        the conflict between
      </p>
      <div className="flex flex-col gap-6 mt-[10px] w-full max-w-sm mx-auto">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.imageSrc}
              alt={item.buttonText}
              className={`w-full object-cover rounded-lg ${
                item.size === "full" ? "w-full" : "h-85"
              }`}
            />
            <div
              className={`absolute ${
                item.buttonText === "WOMEN"
                  ? "bottom-5 left-22"
                  : "bottom-5 left-3"
              }`}
            >
              <button
                className={`bg-white text-black ${
                  item.size === "full"
                    ? "text-base px-10 py-4"
                    : "text-sm px-5 py-3"
                } font-bold hover:bg-gray-100 transition`}
              >
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
