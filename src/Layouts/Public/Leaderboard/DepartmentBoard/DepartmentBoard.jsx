import React, { useState, useEffect } from "react";
import Styles from "./DepartmentBoard.module.css";
// import Select from "react-select";
import {
  getLeaderboardDepartment,
  getCollege,
  getBatches,
} from "../../../../Services/Public/Public";

import SelectFIltersDepartments from "../../../../Components/Selectors/SelectFIltersDepartments/SelectFIltersDepartments";
import DepartmentLeaderBoardTable from "../../../../Components/Tables/DepartmentLeaderBoardTable/DepartmentLeaderBoardTable";
function DepartmentBoard() {
  const [error, setError] = useState(null);
  const [leaderboardData, setLeaderboardData] = useState(null);
  const [collegeOptions, setCollegeOptions] = useState([]);
  const [batchOptions, setBatchOptions] = useState([]);

  //---------------------------------------------------------
  const fetchColleges = async () => {
    try {
      const response = await getCollege();

      if (
        response &&
        response.statusCode === 200 &&
        response.responseData &&
        response.responseData.colleges
      ) {
        const colleges = response.responseData.colleges;
        // Transform data into react-select format
        console.log(colleges);
        const collegeOptions = colleges.map((college) => ({
          label: college,
        }));

        // Use collegeOptions as needed in your component state
        setCollegeOptions(collegeOptions);
      } else {
        console.error("Failed to fetch colleges:", response.error);
      }
    } catch (error) {
      console.error("Error fetching colleges:", error);
    }
  };

  // Call the fetchColleges function, for example in a useEffect
  useEffect(() => {
    fetchColleges();
  }, []);

  const fetchBatches = async () => {
    try {
      const response = await getBatches();
      // const data = await response.json();

      if (
        response &&
        response.statusCode === 200 &&
        response.responseData &&
        response.responseData.batches
      ) {
        const batches = response.responseData.batches;
        console.log(batches);
        // Transform data into react-select format
        const batchOptions = batches.map((batches) => ({
          label: batches,
        }));

        // Use collegeOptions as needed in your component state
        setBatchOptions(batchOptions);
      } else {
        console.error("Failed to fetch batches:", response.error);
      }
    } catch (error) {
      console.error("Error fetching batches:", error);
    }
  };

  // Call the fetchColleges function, for example in a useEffect
  useEffect(() => {
    fetchBatches();
  }, []);

  //--------------------------------------------------------
  const fetchData = async () => {
    try {console.log(clg_name);
      console.log(batch);
      const params = {
        clg_name: encodeURIComponent(clg_name),
        batch: batch,
        
      };

      
     
      const response = await getLeaderboardDepartment(params);

      if (response.statusCode === 404) {
        setError(response.responseData.error);
        // Clear the leaderboard data when there is an error
        setLeaderboardData(null);
      } else if (
        response &&
        response.statusCode === 200 &&
        response.responseData &&
        response.responseData.leaderboard
      ) {
        
        setLeaderboardData(response.responseData.leaderboard);
        // Clear the error when the data is successfully loaded
        setError(null);
      } else {
        console.error("Invalid API response structure:", response);
        // Set an error if the response structure is unexpected
        setError("Unexpected API response");
        // Clear the leaderboard data when there is an error
        setLeaderboardData(null);
      }
      
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
      setError("Error fetching leaderboard data. Please try again.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [clg_name, setclg_name] = useState("");
  const [batch, setbatch] = useState("");

  const handleInputChange = (selectedOption, inputNumber) => {
    const value = selectedOption ? selectedOption.label : "null"; // use label instead of value
     const defaultLabels = ["Select College", "Select Batch"];

    // If the selected label is one of the default labels, set the value to null
    const sanitizedValue = defaultLabels.includes(value) ? null : value;

    switch (inputNumber) {
      case 1:
        setclg_name(sanitizedValue);
        break;
      case 2:
        setbatch(sanitizedValue);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className={`${Styles.wrapper}`}>
        <div className={`${Styles.container} flexColStart innerWidth`}>
          <div className={`${Styles.headerbar} flexColStart`}>
            <span className={Styles.header}>Department Leaderboard</span>
            <span className={Styles.subtitle}>
              The Department Leaderboards showcase academic performance, providing
              features such as dynamic filtering based on college,
              and batch.
            </span>
          </div>

          <SelectFIltersDepartments
            collegeOptions={collegeOptions}
            batchOptions={batchOptions}
            handleInputChange={handleInputChange}
            fetchData={fetchData}
          />
          {error && <div className={`${Styles.errorclass}`}>
          <p className={`${Styles.Error}`}>{error}</p>
          <div className={`${Styles.Opps}`}></div>
          </div>}
          <DepartmentLeaderBoardTable leaderboardData={leaderboardData} error={error} />
          
        </div>
      </div>
    </div>
  );
}

export default DepartmentBoard;