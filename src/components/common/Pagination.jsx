import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
  totalItems,
  startIndex,
  endIndex,
}) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 my-2 px-2">
      
      {/* LEFT SIDE: Info Text */}
      <div className="text-sm text-gray-600">
        Showing {startIndex} to {endIndex} of {totalItems} transactions | Page{" "}
        {currentPage} of {totalPages}
      </div>

      {/* RIGHT SIDE: Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          className="p-2 border rounded disabled:opacity-50"
        >
          <ChevronsLeft size={16} />
        </button>

        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 border rounded disabled:opacity-50"
        >
          <ChevronLeft size={16} />
        </button>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="p-2 border rounded disabled:opacity-50"
        >
          <ChevronRight size={16} />
        </button>

        <button
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
          className="p-2 border rounded disabled:opacity-50"
        >
          <ChevronsRight size={16} />
        </button>
      </div>
    </div>
  );
}