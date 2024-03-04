import React, { useState } from "react";

import Styles from "./LeaderBoardTable.module.css";
import Pagination from "../../Pagination/Pagination";

function LeaderBoardTable({ leaderboardData, error }) {
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