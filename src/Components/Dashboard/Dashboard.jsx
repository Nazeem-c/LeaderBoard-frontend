import React, { useState, useEffect } from "react";
import Styles from "./Dashboard.module.css";
import Select from "react-select";

import { useLocation, useNavigate } from "react-router-dom";

function Dashboard() {
  //-----------------------------logout------------------------
  const adminId = sessionStorage.getItem("username");
  console.log(adminId);
  const location = useLocation();
  const navigate = useNavigate();
  //   const [showLogoutModal, setShowLogoutModal] = useState(false);
  useEffect(() => {
    // Check if the URL contains '/logout'
    if (location.pathname.includes("/logout")) {
      // If yes, show a browser-level notification
      const isConfirmed = window.confirm("Are you sure you want to logout?");

      if (isConfirmed) {
        sessionStorage.clear();
        navigate("/");
      } else {
        navigate(`/admin/${adminId}`); // Use backticks (`) for template literals
      }
    }
  }, [location.pathname, navigate, adminId]);

  useEffect(() => {
    // Check if adminId is not present (user is not authenticated)
    if (!adminId) {
      // Redirect to the home page
      navigate("/login");
    }
  }, [adminId, navigate]);

  const [selectedSemester, setSelectedSemester] = useState(null);

  const semesterOptions = [
    { value: 1, label: "Semester 1" },
    { value: 2, label: "Semester 2" },
    { value: 3, label: "Semester 3" },
    { value: 4, label: "Semester 4" },
    { value: 5, label: "Semester 5" },
    { value: 6, label: "Semester 6" },
    { value: 7, label: "Semester 7" },
    { value: 8, label: "Semester 8" },
    // Add more semesters as needed
  ];

  const handleSemesterChange = (selectedOption) => {
    setSelectedSemester(selectedOption);
    // Perform any additional actions on selection change
  };

  return (
    <div className={Styles.Dashboard}>
      {adminId ? (
        <div className={Styles.container}>
          <div className={`${Styles.wrapper} flexColStart paddings`}>
            <div className={Styles.topbanner}>
              <h4>Welcome to the admin Portal</h4>
            </div>
            <br />
            <div className={`${Styles.student} flexColStart innerWidth`}>
              <h4>Mailing Score Card</h4>
              <div className={`${Styles.inputs} flexStart innerWidth`}>
                <div>
                  <input
                    type="text"
                    className={`${Styles.inputfield} innerWidth`}
                    placeholder="Student Id"
                    // value={input1}
                    // onChange={handleInput1Change}
                    
                  />
                </div>

                <Select
                  className={Styles.selectField}
                  value={selectedSemester}
                  onChange={handleSemesterChange}
                  options={semesterOptions}
                  placeholder="Select Semester"
                  styles={{
                    control: (provided, state) => ({
                      ...provided,
                      height: 53,
                      backgroundColor: "white", // Set the background color
                      borderColor: state.isFocused ? "#9747FF" : "white", // Set border color on focus
                      "&:hover": {
                        borderBottomColor: "#9747FF", // Set border color on hover
                      }, // Set the border color
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      color: " #9747FF", // Set the text color of options
                      backgroundColor: state.isSelected ? "white" : "white",
                      "&:hover": {
                        backgroundColor: "#F0F0F0", // Set the hover color
                      },
                      // Set the background color of selected/unselected options
                    }),
                    singleValue: (provided, state) => ({
                      ...provided,
                      color: "#9747FF", // Set the text color of the selected value
                    }),
                  }}
                />
                <button className={`${Styles.mailactionbutton} button`}>
                  <span>Send Score</span>
                </button>
              </div>
              <div className={`${Styles.status} flexStart`}>
                <span>Status : </span>
                <span> Email sent successfully</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        navigate("/")
      )}
    </div>
  );
}

export default Dashboard;
