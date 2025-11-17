import { LayoutGrid, List } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { setFilter, setSort } from "../redux/actions/productActions";

export default function FilterBar() {
  const dispatch = useDispatch();
  const {
    filter: filterFromStore,
    sort: sortFromStore,
    total,
  } = useSelector((state) => state.product);

  const [inputValue, setInputValue] = useState(filterFromStore || "");
  const debounceRef = useRef(null);

  useEffect(() => {
    setInputValue(filterFromStore || "");
  }, [filterFromStore]);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      if ((filterFromStore || "") !== (inputValue || "")) {
        dispatch(setFilter(inputValue));
      }
    }, 600);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [inputValue]);
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 text-[#737373] font-[600] mb-20">
      <p className="text-sm text-center ">Showing all {total} results</p>

      <div className="flex items-center justify-center gap-2">
        <span className="text-sm">Views:</span>
        <button className="p-2 border rounded-md hover:bg-gray-100 transition">
          <LayoutGrid size={18} />
        </button>
        <button className="p-2 border rounded-md hover:bg-gray-100 transition">
          <List size={18} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-3">
        <input
          type="text"
          placeholder="Filter..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-[#DDDDDD] rounded-md px-3 py-2 text-sm bg-[#ffffff] shadow-sm"
        />

        <select
          className="border border-[#DDDDDD] rounded-md px-3 py-2 text-sm bg-[#ffffff] shadow-sm"
          value={sortFromStore || ""}
          onChange={(e) => dispatch(setSort(e.target.value))}
        >
          <option value="">Sort</option>
          <option value="price:asc">Price: Low to High</option>
          <option value="price:desc">Price: High to Low</option>
          <option value="rating:asc">Rating: Low to High</option>
          <option value="rating:desc">Rating: High to Low</option>
        </select>
      </div>
    </div>
  );
}
