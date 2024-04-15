import React from "react";
import { Button, Text } from "components";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  // Function to handle pagination button click
  const handlePageChange = (page) => {
    // Call the onPageChange function passed from the parent component
    onPageChange(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5; 

    let startPage = Math.max(currentPage - Math.floor(maxVisibleButtons / 2), 1);
    let endPage = Math.min(startPage + maxVisibleButtons - 1, totalPages);

    if (endPage - startPage < maxVisibleButtons - 1) {
      startPage = Math.max(endPage - maxVisibleButtons + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`cursor-pointer font-medium h-10 rounded-lg text-center ${
            currentPage === i ? "bg-red-300 " : "text-red-300"
          } text-sm w-10`}
          size="sm"
        >
          {i}
        </Button>
      );
    }

    return buttons;
  };

  return (
    <div className="flex items-center justify-center mt-4">
      {renderPaginationButtons()}
    </div>
  );
};

export default Pagination;
