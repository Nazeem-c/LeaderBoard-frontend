// import React from "react";
import styles from "./Profile.module.css"; // Import CSS module with correct naming
import React, { useState, useEffect } from "react";
import {
  fetchStudentData,
  fetchScoreCard,
} from "../../Services/student/student";

import Select from "react-select";
const Profile = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [studentData, setStudentData] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState();
  const semesterOptions = [1, 2, 3, 4, 5, 6, 7, 8];
  const [marks, setMarks] = useState(null);
  const [sgpa, setSgpa] = useState(null);
  const [error, setError] = useState(null);

  const handleSemesterChange = (selectedOption) => {
    const selectedValue = selectedOption.value;
    console.log(selectedValue);

    console.log(selectedOption);
    setSelectedSemester(selectedValue);
    //  console.log(selectedSemester);
    // fetchscore();
  };
 
  const fetchscore = async () => {
    try {
      console.log("Selected Semester: " + selectedSemester);

      // Prepare parameters for the API call
      const params = {
        semester_number: selectedSemester,
      };

      // Make the API call to fetch score data
      const response = await fetchScoreCard(params);

      // Check the response status and structure
      if (response.statusCode === 404) {
        setMarks(null); 
        setSgpa(null);
        setError(response.responseData.message);
       
        // Clear the data when there is an error
      } else if (
        response &&
        response.statusCode === 200 &&
        response.responseData &&
        response.responseData.courses_scores &&
        response.responseData.average_score
      ) {
        console.log(response.responseData.courses_scores);
        setMarks(response.responseData.courses_scores);
        setSgpa(response.responseData.average_score);
        setError(null); // Clear the error when the data is successfully loaded
      } else {
        console.error("Invalid API response structure:", response);
        setError(response.responseData.message);

        setSgpa(null);
        setMarks(null); // Clear the data when there is an error
      }
    } catch (error) {
      console.error("Error fetching score data:", error);
      setError("Error fetching score data. Please try again.");
      setMarks(null);
      setSgpa(null);
    }
  };
  useEffect(() => {
    fetchscore();
    console.log(selectedSemester);
  }, [selectedSemester]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentData = await fetchStudentData();
        setStudentData(studentData.responseData.student_details);
        // Now you can use the studentData in your component state
        console.log(studentData.responseData.student_details);
      } catch (error) {
        console.error("Error fetching data in component:", error);
      }
    };
    // const data = studentData.responseData.student_details;
   
    fetchData();
    setError(null);

  }, []);
  useEffect(() => {
    // Update the current date every second
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className={styles.container}>
      <div className={`${styles.warpper} flexColStart paddings innerWidth`}>
        <div className={`${styles.topbanner} flexStart paddings`}>
          <div className={`${styles.left} flexColStart `}>
            <div className={`${styles.top} flexStart`}>
              <p className={styles.primary}>{currentDate.toDateString()}</p>
            </div>
            <div className="flexColStart">
              <p className={styles.secondary}>Welcome Back </p>
              <p className={styles.secondar}>{studentData?.student_name} </p>
              <p className={styles.tert}>
                Always stay updated in your student portal
              </p>
            </div>
          </div>
          <div className={`${styles.detailscontainer} flexColStart`}>
            <p className={`${styles.headtext}`}>{studentData?.student_name}</p>
            <p className={`${styles.subtext}`}>
              STDSTL{studentData?.student_id}
            </p>
            <br />
            <p className={`${styles.textcontent} ${styles.textcontent3}`}>
              Department : {studentData?.dep_name}{" "}
            </p>
            <p className={`${styles.textcontent} ${styles.textcontent3}`}>
              College : {studentData?.college_name}
            </p>
            <p className={`${styles.textcontent} ${styles.textcontent3}`}>
              College ID : {studentData?.college_id}
            </p>
            <p className={`${styles.textcontent} ${styles.textcontent3}`}>
              Batch : {studentData?.batch_name}
            </p>
            <br />
            <p className={`${styles.textcontent4}`}>
              CGPA : {studentData?.CGPA}
            </p>
            {/* <p className={`${styles.textcontent}`}>Mail : {studentData?.student_id}</p> */}
          </div>
          <div className={`${styles.right} innerWidth`}>
            <img
              className={styles.img}
              src={process.env.PUBLIC_URL + "/Assets/profile.png"}
              alt="banner"
            />
          </div>
        </div>
        <div className={`${styles.scoreboard} paddings innerWidth`}>
          <p className={`${styles.scoreheading}`}>Score Card</p>
          {/* <select name="" id="">
            <option value="" disabled selected>
              Select Semester
            </option>
            <option value="semester1">Semester 1</option>
            <option value="semester2">Semester 2</option>
          </select> */}

          <Select
            defaultValue={null} // Set to null to display placeholder by default
            onChange={(selectedOption) => handleSemesterChange(selectedOption)} // Uncomment and add your onChange function if needed
            options={semesterOptions.map((semester) => ({
              value: semester,
              label: `Semester ${semester}`,
            }))}
            className={styles.selectField}
            isSearchable
            placeholder="Select the semester" // Placeholder text
            styles={{
              control: (provided, state) => ({
                ...provided,
                height: 53,
                backgroundColor: "white",
                borderColor: state.isFocused ? "#9747FF" : "white",
                "&:hover": {
                  borderBottomColor: "#9747FF",
                },
              }),
              option: (provided, state) => ({
                ...provided,
                color: "#9747FF",
                backgroundColor: state.isSelected ? "white" : "white",
                "&:hover": {
                  backgroundColor: "#F0F0F0",
                },
              }),
              singleValue: (provided, state) => ({
                ...provided,
                color: "#9747FF",
              }),
            }}
          />
          <br />
          {error &&  <div>
          <p className={`${styles.Error}`}>{error}</p>
          </div>}
          <table className={`${styles.customTable} paddings`}>
           {!error && <thead className={styles.tablehead}>
              <tr>
                <th >Course Id</th>
                <th >Course Name</th>
                <th >Mark</th>
              </tr>
            </thead>}
            <tbody className={styles.tablebody}>
              {marks &&
                marks.map((score) => (
                  <tr key={score.course_id}>
                    <td>{score.course_id}</td>
                    <td>{score.course_name}</td>
                    <td>{score.score}</td>
                  </tr>
                ))}{sgpa &&
              <tr className={styles.tablebody2} colSpan="3">
                <td className={styles.sgpa}></td>
                <td className={styles.sgpa}>SGPA : {sgpa}</td>
                <td className={styles.sgpa}></td>
              </tr>}

              {/* <tr>
                <td>CST142</td>
                <td>DATA STRUCTURES</td>
                <td>89</td>
              </tr>
              <tr>
                <td>CST142</td>
                <td>DATA STRUCTURES</td>
                <td>89</td>
              </tr>
              <tr>
                <td>CST142</td>
                <td>DATA STRUCTURES</td>
                <td>89</td>
              </tr>
              <tr>
                <td>CST142</td>
                <td>DATA STRUCTURES</td>
                <td>89</td>
              </tr>
              <tr>
                <td>CST142</td>
                <td>DATA STRUCTURES</td>
                <td>89</td>
              </tr>
              <tr>
                <td>CST142</td>
                <td>DATA STRUCTURES</td>
                <td>89</td>
              </tr> */}
            </tbody>
          </table>
          {/* <table className={`${styles.customTable} paddings`}>
            <thead className={styles.tablehead}></thead>
            <tbody>
              <tr colSpan="3" className={styles.sgpa}>
                SGPA : {sgpa}
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
