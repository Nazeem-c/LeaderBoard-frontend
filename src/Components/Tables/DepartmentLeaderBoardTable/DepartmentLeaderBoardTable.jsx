import React, { useState } from "react";

import Styles from "./DepartmentLeaderBoardTable.module.css";
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

function DepartmentLeaderBoardTable({ leaderboardData, error }) {
  const [currentPage, setCurrentPage] = useState(1);
  let rowsPerPage;

  // Adjust rowsPerPage based on screen size
  if (window.innerWidth <= 768) {
    rowsPerPage = 8; // Display 12 rows for larger screens (laptop/desktop)
  }
  else if (window.innerWidth >= 768) {
    rowsPerPage = 12;
  }
  else {
    rowsPerPage = 6; // Display 6 rows for smaller screens (tablet/mobile)
  }

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
    <div className={`${Styles.maintable} innerWidth flexColCenter`}>
      <table className={`${Styles.customTable} paddings`}>
        <thead className={Styles.tablehead}>
          <tr>
            <th>Ranking</th>
            <th>DepartmentID</th>
            <th>Department Name</th>
            <th>Pass Percentage</th>
          </tr>
        </thead>
        <tbody className={Styles.tablebody}>
          {slicedData.map((Department => (
            <tr key={Department.dep_id}>
              <td>{Department.rank}</td>
              <td>{Department.dep_id}</td>
              <td>{Department.dep_name}</td>
              <td>{Department.pass_percentage}</td>
            </tr>
          )))}
        </tbody>
      </table>
            <div className={Style.page}></div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange}/>
    </div>
  );
}

export default DepartmentLeaderBoardTable;