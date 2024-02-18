import React, { useState } from "react";
import Styles from "./LeaderBoardTable.module.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Pagination({ totalPages, currentPage, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  // Calculate the range of visible page numbers
  const visiblePages = pageNumbers.slice(
    Math.max(currentPage - 1, 0),
    Math.min(currentPage + 2, totalPages)
  );

  return (
    <div className={Styles.pagination}>
      <button
        className={currentPage === 1 ? `${Styles.arrow} ${Styles.disabled}` : `${Styles.arrow}   ${Styles.arrowkey}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack />
      </button>

      {visiblePages.map((pageNumber) => (
        <button
          key={pageNumber}
          className={pageNumber === currentPage ? `${Styles.active} ${Styles.button}` : Styles.button}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}

      <button
        className={currentPage === totalPages ? `${Styles.arrow}  ${Styles.disabled}` : `${Styles.arrow} `}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

function LeaderBoardTable({ leaderboardData, error }) {
  const rowsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  if (!leaderboardData || error) {
    return null; // or return some fallback UI if leaderboardData is null or there's an error
  }

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const slicedData = leaderboardData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(leaderboardData.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={`${Styles.maintable} innerWidth flexColStart`}>
      <table className={`${Styles.customTable} paddings`}>
        <thead className={Styles.tablehead}>
          <tr>
            <th>Ranking</th>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody className={Styles.tablebody}>
          {slicedData.map((student) => (
            <tr key={student.stud_id}>
              <td>{student.ranking}</td>
              <td>{student.stud_id}</td>
              <td>{student.stud_name}</td>
              <td>{student.total_marks}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}

export default LeaderBoardTable;
