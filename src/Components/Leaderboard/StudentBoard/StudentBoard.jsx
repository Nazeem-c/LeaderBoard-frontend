import React from "react";
import Styles from "./StudentBoard.module.css";

function StudentBoard() {
  return (
    <div>
      <div className={`${Styles.wrapper}`}>
        <div className={`${Styles.container}`}>
          <div className={`${Styles.maintable}`}>
            <table>
              <thead>
                <tr>
                  <th>Ranking</th>
                  <th>Student ID</th>
                  <th>Student Name</th>
                  <th>Total Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>25</td>
                  <td>New York</td>
                  <td>chjbncs</td>
                </tr>
              
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentBoard;
