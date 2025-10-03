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
      <h2 className="text-3xl font-bold text-black mb-4 text-center">
        EDITOR’S PICK
      </h2>

      <p className="text-gray-400 mb-6 leading-snug text-center lg:text-l">
        Problems trying to resolve <br className="block lg:hidden" />
        the conflict between
      </p>

      <div className="flex flex-col gap-6 mt-[10px] w-full max-w-sm mx-auto lg:max-w-6xl lg:grid lg:grid-cols-4">
        <div className="relative lg:col-span-2">
          <img
            src="/images/card-men.png"
            alt="MEN"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-5 left-5">
            <button className="bg-white text-black text-base px-10 py-4 font-bold hover:bg-gray-100 transition">
              MEN
            </button>
          </div>
        </div>

        <div className="relative lg:col-span-1">
          <img
            src="/images/card-women.png"
            alt="WOMEN"
            className="w-full h-full object-cover "
          />
          <div className="absolute bottom-5 left-5">
            <button className="bg-white text-black text-base px-10 py-4 font-bold hover:bg-gray-100 transition">
              WOMEN
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-1">
          {items
            .filter(
              (item) =>
                item.buttonText === "ACCESSORIES" || item.buttonText === "KIDS"
            )
            .map((item, index) => (
              <div key={index} className="relative flex-1">
                <img
                  src={item.imageSrc}
                  alt={item.buttonText}
                  className="w-full h-full object-cover "
                />
                <div className="absolute bottom-5 left-3">
                  <button className="bg-white text-black text-sm px-5 py-3 font-bold hover:bg-gray-100 transition">
                    {item.buttonText}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
