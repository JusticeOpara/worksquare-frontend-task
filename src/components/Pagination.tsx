import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({ 
  totalPages, 
  currentPage, 
  onPageChange,
  maxVisiblePages = 5
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    onPageChange(totalPages);
  };

  const handleFirstPage = () => {
    onPageChange(1);
  };

  // Calculate which page numbers to show
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const halfVisible = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);

    // Adjust if we're near the beginning or end
    if (currentPage <= halfVisible) {
      endPage = maxVisiblePages;
    } else if (currentPage + halfVisible >= totalPages) {
      startPage = totalPages - maxVisiblePages + 1;
    }

    // Add first page and ellipsis if needed
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push('...');
      }
    }

    // Add visible page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Add ellipsis and last page if needed
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center justify-center space-x-1">
      {/* First Page Button (only show if not on first few pages) */}
      {currentPage > 3 && totalPages > maxVisiblePages && (
        <button
          onClick={handleFirstPage}
          className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-200 text-gray-500 hover:bg-gray-300 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M10 4l-4 4 4 4V4zM6 4l-4 4 4 4V4z"/>
          </svg>
        </button>
      )}

      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-200 text-gray-500 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M10 12l-4-4 4-4v8z"/>
        </svg>
      </button>

      {/* Page Numbers */}
      {visiblePages.map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="flex items-center justify-center w-12 h-12 text-gray-500">
              ...
            </span>
          ) : (
            <button
              onClick={() => onPageChange(page as number)}
              className={`flex items-center justify-center w-12 h-12 rounded-lg font-medium transition-colors ${
                currentPage === page
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-200 text-gray-500 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M6 4l4 4-4 4V4z"/>
        </svg>
      </button>

      {/* Last Page Button (only show if not on last few pages) */}
      {currentPage < totalPages - 2 && totalPages > maxVisiblePages && (
        <button
          onClick={handleLastPage}
          className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-200 text-gray-500 hover:bg-gray-300 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6 4l4 4-4 4V4zM10 4l4 4-4 4V4z"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Pagination;