import React, { useState } from "react";

import Styles from "./LeaderBoardTable.module.css";
import Pagination from "../../Pagination/Pagination";
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


// function Pagination({ totalPages, currentPage, onPageChange }) {
//   const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

//   const visiblePages = pageNumbers.slice(
//     Math.max(currentPage - 1, 0),
//     Math.min(currentPage + 2, totalPages)
//   );

//   // const handlePageClick = (pageNumber) => {
//   //   const pagesBefore = Math.floor(visiblePages.length / 2);
//   //   const newCurrentPage = Math.max(1, Math.min(totalPages - visiblePages.length + 1, pageNumber - pagesBefore));
//   //   onPageChange(newCurrentPage);
//   // };


//   const handlePageClick = (pageNumber) => {
//     // Directly set the clicked page as the new current page
//     onPageChange(pageNumber);
//   };


//   return (
//     <div className={Styles.pagination}>
//       <button
//         className={currentPage === 1 ? `${Styles.arrow} ${Styles.arrowLeft} ${Styles.disabled}` : `${Styles.arrow} ${Styles.arrowLeft}`}
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//       >
//         <IoIosArrowBack  className={Styles.icons}/>
//       </button>

//       {visiblePages.map((pageNumber) => (
//         <button
//           key={pageNumber}
//           className={pageNumber === currentPage ? `${Styles.active} ${Styles.button}` : Styles.button}
//           onClick={() => handlePageClick(pageNumber)}
//         >
//           {pageNumber}
//         </button>
//       ))}

//       <button
//         className={currentPage === totalPages ? `${Styles.arrow} ${Styles.arrowRight} ${Styles.disabled}` : `${Styles.arrow} ${Styles.arrowRight}`}
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//       >
//         <IoIosArrowForward className={Styles.icons}/>
//       </button>
//     </div>
//   );
// }

function LeaderBoardTable({ leaderboardData, error }) {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 12;

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