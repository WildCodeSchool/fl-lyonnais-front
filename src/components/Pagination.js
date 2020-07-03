import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ freelancesPerPage, totalFreelances, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFreelances / freelancesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number}>
            <Link onClick={() => paginate(number)} to='#' className='page-link'>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
