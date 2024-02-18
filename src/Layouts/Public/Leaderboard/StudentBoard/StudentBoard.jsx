import React, { useState, useEffect } from "react";
import Styles from "./StudentBoard.module.css";
import Select from "react-select";
import {
  getLeaderboardStudent,
  getCollege,
  getDepartments,
  getBatches,
} from "../../../../Services/Public/Public";

import SelectFilters from "../../../../Components/SelectFilters/SelectFilters";
import LeaderBoardTable from "../../../../Components/LeaderrBoardTable/LeaderBoardTable";

function StudentBoard() {
  const [leaderboardData, setLeaderboardData] = useState(null);
  const [collegeOptions, setCollegeOptions] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);
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
      const params = {
        clg_name: encodeURIComponent(clg_name),
        dep_name: encodeURIComponent(dep_name),
        batch: batch,
      };

      const response = await getLeaderboardStudent(params);

      if (
        response &&
        response.statusCode === 200 &&
        response.responseData &&
        response.responseData.leaderboard
      ) {
        console.log(clg_name);
        setLeaderboardData(response.responseData.leaderboard);
      } else {
        console.error("Invalid API response structure:", response);
      }
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [clg_name, setclg_name] = useState("");
  const [dep_name, setdep_name] = useState("");
  const [batch, setbatch] = useState("");

  const handleInputChange = (selectedOption, inputNumber) => {
    const value = selectedOption ? selectedOption.label : ""; // use label instead of value

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
      <div className={`${Styles.wrapper}`}>
        <div className={`${Styles.container} flexColStart innerWidth`}>
          <div className={`${Styles.headerbar} flexColStart`}>
            <span className={Styles.header}>Student Leaderboard</span>
            <span className={Styles.subtitle}>
              The Student Leaderboards showcase academic performance, providing
              features such as dynamic filtering based on college, department,
              and batch.
            </span>
          </div>

          <SelectFilters
            collegeOptions={collegeOptions}
            departmentOptions={departmentOptions}
            batchOptions={batchOptions}
            handleInputChange={handleInputChange}
            fetchData={fetchData}
          />
          <LeaderBoardTable leaderboardData={leaderboardData} />
        </div>
      </div>
    </div>
  );
}

export default StudentBoard;
