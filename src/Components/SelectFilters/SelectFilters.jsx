// SelectFilters.jsx
import React ,{ useState} from "react";
import Select from "react-select";
import Styles from "./SelectFilters.module.css";


function SelectFilters({
  collegeOptions,
  departmentOptions,
  batchOptions,
  handleInputChange,
  fetchData,
}) {


    const [clg_name, setClg_name] = useState("");
    const [dep_name, setDep_name] = useState("");
    const [batch, setBatch] = useState("");


    
  return (
    <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchData();
            }}
          >
            <div className={`${Styles.filters} flexStart innerWidth`}>
              <div className={`${Styles.filterinputs} flexStart`}>
                <Select
                  value={collegeOptions.find(
                    (option) => option.value === clg_name
                  )}
                  onChange={(selectedOption) =>
                    handleInputChange(selectedOption, 1)
                  }
                  options={collegeOptions}
                  placeholder="Select College"
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

                {/* Repeat similar styles for other Select components */}

                <Select
                  value={departmentOptions.find(
                    (option) => option.value === dep_name
                  )}
                  onChange={(selectedOption) =>
                    handleInputChange(selectedOption, 2)
                  }
                  options={departmentOptions}
                  placeholder="Select Department"
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

                <Select
                  value={batchOptions.find((option) => option.value === batch)}
                  onChange={(selectedOption) =>
                    handleInputChange(selectedOption, 3)
                  }
                  options={batchOptions}
                  placeholder="Select Batch"
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
              <div className={`${Styles.filterbutton}`}>
                <button
                  className={Styles.button}
                  onClick={() => fetchData()} // Add this line
                >
                  Filter
                </button>
              </div>
            </div>

            {/* ... (existing code) */}
          </form>

  );
}

export default SelectFilters;
