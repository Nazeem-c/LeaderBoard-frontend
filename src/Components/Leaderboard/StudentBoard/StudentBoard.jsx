import React, { useState, useEffect } from "react";
import Styles from "./StudentBoard.module.css";
import { getLeaderboardStudent } from "../../../Services/Public/Public";

function StudentBoard() {
  const [leaderboardData, setLeaderboardData] = useState(null);
 
  const fetchData = async () => {
    try {
      const params = {
        clg_name: clg_name,
        dep_name: dep_name,
        batch: batch,
      };
  
      const response = await getLeaderboardStudent(params);
      
      // Check if the API response has the expected structure
      if (response && response.statusCode === 200 && response.responseData && response.responseData.leaderboard) {
        setLeaderboardData(response.responseData.leaderboard);
      } else {
        console.error('Invalid API response structure:', response);
      }
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [clg_name, setclg_name] = useState("");
  const [dep_name, setdep_name] = useState("");
  const [batch, setbatch] = useState("");

  const handleInputChange = (e, inputNumber) => {
    const value = e.target.value;
    switch (inputNumber) {
      case 1:
        setclg_name(value);
        break;
      case 2:
        setdep_name(value);
        break;
      case 3:
        setbatch(value);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <div className={`${Styles.wrapper} paddings`}>
        <div className={`${Styles.container} flexColStart innerWidth`}>
          <div className={`${Styles.filters} flexStart  innerWidth`}>
            <div className={`${Styles.filterinputs}`}>
              <input
                type="text"
                value={clg_name}
                onChange={(e) => handleInputChange(e, 1)}
                placeholder="College"
                className={Styles.inputField}
              />

              <input
                type="text"
                value={dep_name}
                onChange={(e) => handleInputChange(e, 2)}
                placeholder="Department"
                className={Styles.inputField}
              />

              <input
                type="text"
                value={batch}
                onChange={(e) => handleInputChange(e, 3)}
                placeholder="Batch"
                className={Styles.inputField}
              />
            </div>
            <div className={`${Styles.filterbutton} `}>
              <button onClick={fetchData} className={Styles.button}>
                Filter
              </button>
            </div>
          </div>
          <div className={`${Styles.maintable} innerWidth`}>
            <table className={Styles.customTable}>
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
        </div>
      </div>
    </div>
  );
}

export default StudentBoard;
