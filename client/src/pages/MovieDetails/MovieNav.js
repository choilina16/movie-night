import React from 'react';

export default function MovieNav({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#cast"
          onClick={() => handlePageChange('Cast')}
          className={currentPage === 'Cast' ? 'nav-link active' : 'nav-link'}
        >
          CAST
        </a>
      </li>
      <li>
        <a
          href="#genre"
          onClick={() => handlePageChange('Genre')}
          className={currentPage === 'Genre' ? 'nav-link active' : 'nav-link'}
        >
          GENRE
        </a>
      </li>
      <li>
        <a
          href="#language"
          onClick={() => handlePageChange('Language')}
          className={
            currentPage === 'Language' ? 'nav-link active' : 'nav-link'
          }
        >
          LANGUAGE
        </a>
      </li>
    </ul>
  );
}
