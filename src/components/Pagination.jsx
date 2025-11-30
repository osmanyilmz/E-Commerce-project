import { useDispatch, useSelector } from "react-redux";
import { setOffset, fetchProducts } from "../redux/actions/productActions";

export default function Pagination() {
  const dispatch = useDispatch();
  const { total, limit, offset } = useSelector((state) => state.product);

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  const goToPage = (page) => {
    const newOffset = (page - 1) * limit;
    dispatch(setOffset(newOffset));
    dispatch(fetchProducts());
  };

  return (
    <div className="flex justify-center items-center gap-3 mt-10 mb-10">
      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, idx) => {
        const page = idx + 1;
        return (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`px-3 py-2 border rounded ${
              page === currentPage ? "bg-blue-500 text-white" : ""
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
