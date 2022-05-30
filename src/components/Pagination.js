import React from "react";

const Pagination = ({ carparksPerPage, totalCarparks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCarparks / carparksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination pagination-sm">
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <a onClick={() => paginate(number)} href="!#" className="page-link">
            {number}
          </a>
        </li>
      ))}
      ;
    </nav>
  );
};

export default Pagination;
