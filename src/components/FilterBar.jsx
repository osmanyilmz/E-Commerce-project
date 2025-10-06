import { Grid, LayoutGrid, List } from "lucide-react";

export default function FilterBar() {
  return (
    <div className="w-full flex flex-col items-center gap-6 text-[#737373] font-[600] mb-20">
      <p className="text-sm text-center">Showing all 12 results</p>

      <div className="flex items-center justify-center gap-2">
        <span className="text-sm ">Views:</span>
        <button className="p-2 border rounded-md hover:bg-gray-100 transition">
          <LayoutGrid size={18} />
        </button>
        <button className="p-2 border rounded-md hover:bg-gray-100 transition">
          <List size={18} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-3">
        <select className="border border-[#DDDDDD] rounded-md px-3 py-2 text-sm bg-[#F9F9F9] shadow-sm">
          <option>Popularity</option>
          <option>Newest</option>
        </select>
        <button className="bg-[#23A6F0] text-white rounded-md px-4 py-2 text-sm hover:bg-blue-600 transition">
          Filter
        </button>
      </div>
    </div>
  );
}
