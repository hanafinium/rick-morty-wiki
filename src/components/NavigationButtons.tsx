import React from "react";

function NavigationButtons({
  pageInfo,
  page,
  onNextPage,
  onPrevPage,
}: {
  pageInfo: any;
  page: number;
  onNextPage(): void;
  onPrevPage(): void;
}) {
  return (
    <div className=" dark:bg-sky-950">
      <div className="p-5 flex space-x-2 justify-center">
        <button
          className="px-3 rounded bg-gray-300"
          onClick={onPrevPage}
          disabled={pageInfo ? false : true}
        >
          {"\u2b60"}
        </button>
        <span className="p-2 rounded bg-gray-300">
          {page}/{pageInfo?.pages || 1}
        </span>
        <button
          className="px-3 rounded bg-gray-300"
          onClick={onNextPage}
          disabled={pageInfo ? false : true}
        >
          {"\u2b62"}
        </button>
      </div>
      <div>
        <span className="dark:text-gray-300 flex justify-center">
          {pageInfo?.count || 0} characters
        </span>
        <span></span>
      </div>
    </div>
  );
}

export default NavigationButtons;
