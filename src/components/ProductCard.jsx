export default function ProductCard({ image }) {
  return (
    <div className="max-w-sm mx-auto w-full bg-white overflow-hidden ">
      <div className="w-full">
        <img src={image} alt="Product" className="w-full h-auto object-cover" />
      </div>

      <div className="p-4 text-center">
        <h3 className="font-bold text-gray-900">Graphic Design</h3>
        <p className="text-sm text-gray-500">English Department</p>

        <div className="mt-2">
          <span className="text-gray-400 mr-2">$16.48</span>
          <span className="text-green-600 font-bold">$6.48</span>
        </div>

        <div className="flex justify-center gap-2 mt-3">
          <span className="w-4 h-4 rounded-full bg-[#23A6F0]"></span>
          <span className="w-4 h-4 rounded-full  bg-[#23856D]"></span>
          <span className="w-4 h-4 rounded-full  bg-[#E77C40]"></span>
          <span className="w-4 h-4 rounded-full  bg-[#252B42]"></span>
        </div>
      </div>
    </div>
  );
}
