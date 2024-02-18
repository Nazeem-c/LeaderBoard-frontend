// LeaderboardTable.jsx
import React from "react";
import Styles from "./LeaderBoardTable.module.css";

function LeaderBoardTable({ leaderboardData }) {
  return (
    <div className={`${Styles.maintable} innerWidth`}>
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
          {leaderboardData?.map((student) => (
            <tr key={student.stud_id}>
              <td>{student.ranking}</td>
              <td>{student.stud_id}</td>
              <td>{student.stud_name}</td>
              <td>{student.total_marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoardTable;
