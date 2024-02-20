import React, { useState } from "react";

import Styles from "./CollegeLeaderBoardTable.module.css";
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import Pagination from "../../Pagination/Pagination";
import { Style } from "@material-ui/icons";

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

function CollegeLeaderBoardTable({ leaderboardData, error }) {
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
            <th>College ID</th>
            <th>College Name</th>
            <th>Pass Percentage</th>
          </tr>
        </thead>
        <tbody className={Styles.tablebody}>
          {slicedData.map((College) => (
            <tr key={College.stud_id}>
              <td>{College.ranking}</td>
              <td>{College.clg_id}</td>
              <td>{College.clg_name}</td>
              <td>{College.pass_percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
            <div className={Style.page}></div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange}/>
    </div>
  );
}

export default CollegeLeaderBoardTable;