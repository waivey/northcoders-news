import React from "react";

const Paginator = ({ maxPage, page, handlePageChange }) => {
  console.log(maxPage, "<<maxPage", page, "<<page");
  return (
    <div className="pagination">
      <div className="downPageArrow">
        <button disabled={page === 1} onClick={() => handlePageChange(-1)}>
          <img
            src="https://image.flaticon.com/icons/svg/16/16049.svg"
            alt="down page arrow"
          />
        </button>
      </div>
      <p>{page}</p>
      <div className="upPageArrow">
        <button disabled={page === maxPage} onClick={() => handlePageChange(1)}>
          <img
            src="https://image.flaticon.com/icons/svg/16/16049.svg"
            alt="up page arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default Paginator;
