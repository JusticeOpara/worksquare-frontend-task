import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number; // how many pages to show before/after current page
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}) => {
  const createPageRange = () => {
    const totalPageNumbers = siblingCount * 2 + 1;
    const pages: number[] = [];

    let startPage = Math.max(1, currentPage - siblingCount);
    let endPage = Math.min(totalPages, currentPage + siblingCount);

    if (endPage - startPage + 1 < totalPageNumbers) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + totalPageNumbers - 1);
      } else if (endPage === totalPages) {
        startPage = Math.max(1, endPage - totalPageNumbers + 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = createPageRange();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
      >
        «
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
      >
        ‹
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 flex items-center justify-center rounded-md ${
            currentPage === page
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
      >
        ›
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
      >
        »
      </button>
    </div>
  );
};

export default Pagination;