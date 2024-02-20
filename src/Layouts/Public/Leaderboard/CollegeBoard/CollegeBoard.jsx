import React, { useState, useEffect } from "react";
import Styles from "./CollegeBoard.module.css";
// import Select from "react-select";
import {
  getLeaderboardCollege,
  getCollege,
  getDepartments,
  getBatches,
} from "../../../../Services/Public/Public";

import SelectFiltersCollege from "../../../../Components/Selectors/SelectFilterCollege/SelectFIltersCollege";
import CollegeLeaderBoardTable from "../../../../Components/Tables/CollegeLeaderBoardTable/CollegeLeaderBoardTable";

function StudentBoard() {
  const [error, setError] = useState(null);
  const [leaderboardData, setLeaderboardData] = useState(null);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [batchOptions, setBatchOptions] = useState([]);

  //---------------------------------------------------------
  
  const fetchDepartments = async () => {
    try {
      const response = await getDepartments();
      // const data = await response.json();

      if (
        response &&
        response.statusCode === 200 &&
        response.responseData &&
        response.responseData.departments
      ) {
        const departments = response.responseData.departments;
        console.log(departments);
        // Transform data into react-select format
        const departmentOptions = departments.map((departent) => ({
          label: departent,
        }));

        // Use collegeOptions as needed in your component state
        setDepartmentOptions(departmentOptions);
      } else {
        console.error("Failed to fetch departments:", response.error);
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  // Call the fetchColleges function, for example in a useEffect
  useEffect(() => {
    fetchDepartments();
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
    try {
      console.log(dep_name);
      console.log(batch);
      const params = {
        dep_name: encodeURIComponent(dep_name),
        batch: batch,
        
      };

      
     
      const response = await getLeaderboardCollege(params);

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

  const [dep_name, setdep_name] = useState("");
  const [batch, setbatch] = useState("");

  const handleInputChange = (selectedOption, inputNumber) => {
    const value = selectedOption ? selectedOption.label : "null"; // use label instead of value
     const defaultLabels = ["Select Department", "Select Batch"];

    // If the selected label is one of the default labels, set the value to null
    const sanitizedValue = defaultLabels.includes(value) ? null : value;

    switch (inputNumber) {
     
      case 1:
        setdep_name(sanitizedValue);
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
            <span className={Styles.header}>College Leaderboard</span>
            <span className={Styles.subtitle}>
              The College Leaderboards showcase academic performance, providing
              features such as dynamic filtering based on department,
              and batch.
            </span>
          </div>

          <SelectFiltersCollege
            departmentOptions={departmentOptions}
            batchOptions={batchOptions}
            handleInputChange={handleInputChange}
            fetchData={fetchData}
          />
          {error && <div className={`${Styles.errorclass}`}>
          <p className={`${Styles.Error}`}>{error}</p>
          <div className={`${Styles.Opps}`}></div>
          </div>}
          <CollegeLeaderBoardTable leaderboardData={leaderboardData} error={error} />
          
        </div>
      </div>
    </div>
  );
}

export default StudentBoard;