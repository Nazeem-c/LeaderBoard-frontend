import React, { useState, useEffect } from "react";
import Styles from "./CollegeBoard.module.css";
import { getLeaderboardCollege } from "../../../Services/Public/Public";

function CollegeBoard() {
  const [leaderboardData, setLeaderboardData] = useState(null);
 
  const fetchData = async () => {
    try {
      const params = {
        dep_name: dep_name,
        batch: batch,
      };
  
      const response = await getLeaderboardCollege(params);
      
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


  const [dep_name, setdep_name] = useState("");
  const [batch, setbatch] = useState("");

  const handleInputChange = (e, inputNumber) => {
    const value = e.target.value;
    switch (inputNumber) {
      
      case 1:
        setdep_name(value);
        break;
      case 2:
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
                value={dep_name}
                onChange={(e) => handleInputChange(e, 1)}
                placeholder="Department"
                className={Styles.inputField}
              />

              <input
                type="text"
                value={batch}
                onChange={(e) => handleInputChange(e, 2)}
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
                  <th>College ID</th>
                  <th>College Name</th>
                  <th>Pass Percentage</th>
                </tr>
              </thead>
              <tbody className={Styles.tablebody}>
                {leaderboardData?.map((college) => (
                  <tr key={college.clg_id}>
                    <td>{college.ranking}</td>
                    <td>{college.clg_id}</td>
                    <td>{college.clg_name}</td>
                    <td>{college.pass_percentage}</td>
                    
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

export default CollegeBoard;
