import React, { useState, useEffect } from "react";
import Select from "react-select";
import Styles from "./SelectFilters.module.css";


// ... (other code)

function SelectFilters({
  collegeOptions,
  departmentOptions,
  batchOptions,
  handleInputChange,
  fetchData,
}) {
  
  // Default values for Select components
  const defaultCollegeOption = { value: "", label: "Select College" };
  const defaultDepartmentOption = { value: "", label: "Select Department" };
  const defaultBatchOption = { value: 0, label: "Select Batch" };

  // State for Select values
  const [clg_name, setClg_name] = useState(defaultCollegeOption);
  const [dep_name, setDep_name] = useState(defaultDepartmentOption);
  const [batch, setBatch] = useState(defaultBatchOption);

  const [resetTrigger, setResetTrigger] = useState(false);

  const [reloadSelects, setReloadSelects] = useState(false);
  // Function to reset Select values to defaults
  // Function to reset Select values to defaults
const resetSelectValues = () => {
  setClg_name(defaultCollegeOption);
  setDep_name(defaultDepartmentOption);
  setBatch(defaultBatchOption);
  console.log("Reset button triggered");
  console.log(defaultCollegeOption);
  console.log(defaultDepartmentOption);
  console.log(defaultBatchOption);
  setResetTrigger(true);
  setReloadSelects(true);

  

  // Reset the selected options for each Select component
  handleInputChange(defaultCollegeOption, 1);
  handleInputChange(defaultDepartmentOption, 2);
  handleInputChange(defaultBatchOption, 3);
};

useEffect(() => {
  if (resetTrigger) {
    setClg_name(defaultCollegeOption);
    setDep_name(defaultDepartmentOption);
    setBatch(defaultBatchOption);
    // Trigger the fetchData function after resetting values
    fetchData(defaultCollegeOption, defaultDepartmentOption, defaultBatchOption);
    setResetTrigger(false); // Reset the trigger
  }
}, [resetTrigger, fetchData, defaultCollegeOption, defaultDepartmentOption, defaultBatchOption]);


useEffect(() => {
  if (reloadSelects) {
    setReloadSelects(false);
  }
}, [reloadSelects]);

  // ... (other code)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetchData();
      }}
    >
      <div className={`${Styles.filters} flexStart innerWidth`}>
        <div className={`${Styles.filterinputs} flexStart`}>
          {/* College Select */}
          <Select
           key={reloadSelects ? "collegeReload" : "college"}
            defaultValue={clg_name}
            onChange={(selectedOption) => handleInputChange(selectedOption, 1)}
            options={[defaultCollegeOption, ...collegeOptions]}
            className={Styles.selectField}
            isSearchable
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

          {/* Department Select */}
          <Select
           key={reloadSelects ? "departmentReload" : "department"}
            defaultValue={dep_name}
            onChange={(selectedOption) => handleInputChange(selectedOption, 2)}
            options={[defaultDepartmentOption, ...departmentOptions]}
            className={Styles.selectField}
            isSearchable
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

          {/* Batch Select */}
          <Select
           key={reloadSelects ? "batchReload" : "batch"}
            defaultValue={batch}
            onChange={(selectedOption) => handleInputChange(selectedOption, 3)}
            options={[defaultBatchOption, ...batchOptions]}
            className={Styles.selectField}
            isSearchable
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
        </div>
        <div className={`${Styles.Buttons}`}></div>
        <div className={`${Styles.filterbutton} flexStart`}>
          {/* Filter Button */}
          <button
            type="submit"
            className={Styles.button}
            onClick={() => fetchData()}
          >
            Filter
          </button>
          {/* Reset Button */}
          <button
            type="button"
            className={Styles.button}
            onClick={resetSelectValues}
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}

export default SelectFilters;
