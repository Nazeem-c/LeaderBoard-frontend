import React from 'react'
import Styles from "./Pagination.module.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


function Pagination({ totalPages, currentPage, onPageChange }) {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  
    const visiblePages = pageNumbers.slice(
      Math.max(currentPage - 1, 0),
      Math.min(currentPage + 2, totalPages)
    );
  
    // const handlePageClick = (pageNumber) => {
    //   const pagesBefore = Math.floor(visiblePages.length / 2);
    //   const newCurrentPage = Math.max(1, Math.min(totalPages - visiblePages.length + 1, pageNumber - pagesBefore));
    //   onPageChange(newCurrentPage);
    // };
  
  
    const handlePageClick = (pageNumber) => {
      // Directly set the clicked page as the new current page
      onPageChange(pageNumber);
    };
  
  
    return (
      <div className={Styles.pagination}>
        <button
          className={currentPage === 1 ? `${Styles.arrow} ${Styles.arrowLeft} ${Styles.disabled}` : `${Styles.arrow} ${Styles.arrowLeft}`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <IoIosArrowBack  className={Styles.icons}/>
        </button>
  
        {visiblePages.map((pageNumber) => (
          <button
            key={pageNumber}
            className={pageNumber === currentPage ? `${Styles.active} ${Styles.button}` : Styles.button}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
  
        <button
          className={currentPage === totalPages ? `${Styles.arrow} ${Styles.arrowRight} ${Styles.disabled}` : `${Styles.arrow} ${Styles.arrowRight}`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <IoIosArrowForward className={Styles.icons}/>
        </button>
      </div>
    );
  }

export default Pagination