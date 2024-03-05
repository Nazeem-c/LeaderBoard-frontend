import React, { useState, useEffect } from "react";
import Styles from "./Dashboard.module.css";
import Select from "react-select";
import { mailing } from "../../Services/Admin/Admin";
import { toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; 
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";


function Dashboard() {

  const [selectedValue, setSelectedValue] = useState('');
  const [error, setError] = useState(null);
  const [stdId,setStdId] = useState();
  const [sem,setSem] = useState();
  const [data,setdata] = useState();
  const [showModal, setShowModal] = useState(false);

  
  const handlestdidChange = (event)=>{
    setStdId(event.target.value)
  }
  const handlesemChange = (selectedOption) => {
    setSem(selectedOption.value);
    
    // Perform any additional actions on selection change
  };
  console.log(sem);
  //-----------------------------logout------------------------
  const adminId = sessionStorage.getItem("username");
  console.log(adminId);
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (location.pathname.includes("/logout")) {
      setShowModal(true); // Show modal if URL contains '/logout'
    }
  }, [location.pathname]);
  useEffect(() => {
    if (!adminId) {
      navigate("/login");
      toast.error("Unauthorized Access: Please log in to access this feature.",{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    }
  }, [adminId, navigate]);
 
  // Remaining useEffect hooks and component logic
 
  const confirmLogout = () => {
    sessionStorage.clear();
    navigate("/");
    toast.success("LogOut Successful", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
 
  const closeModal = () => {
    setShowModal(false);
    navigate(`/admin/${adminId}`);
  };


 
//--------------------------------------------------------------------------------

const sendMail = async()=>{

  try{
    const params = {
      stud_id: stdId,
      sem_no: sem
    };
 const response = await mailing(params);


 if (response.statusCode === 404) {
  setError(response.responseData.error);
 
} else if (
  response &&
  response.statusCode === 200 &&
  response.responseData 
) {
  setdata("Email sent successfully!");
  toast.success("Email sent successfully", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    })
  // Clear the error when the data is successfully loaded
  setError(null);
} else {
  console.error("Invalid API response structure:", response);
  setdata("Unsuccessfull!");
  toast.error("Unsuccessfull!",{
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  // Set an error if the response structure is unexpected
  setError("Unexpected API response");
 
}

} catch (error) {
console.error("Error fetching leaderboard data:", error);
setError("Error fetching leaderboard data. Please try again.");
}
};
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
              <h4>Welcome to the admin portal</h4>
            </div>
            <br />
            <div className={`${Styles.student} flexColStart innerWidth`}>
              <h4>Mailing Score Card</h4>
              <div className={`${Styles.inputs} flexStart innerWidth`}>
                <div className={Styles.contain}>
                  <input
                    type="text"
                    className={`${Styles.inputfield} innerWidth`}
                    placeholder="Student Id"
                    onChange={handlestdidChange}
                    // value={input1}
                    // onChange={handleInput1Change}
                    
                  />
                </div>

                <Select
                  className={Styles.selectField}
                  value={semesterOptions.find(option => option.value === sem)}
                  onChange={handlesemChange}
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
                <button onClick={() => sendMail()} className={`${Styles.mailactionbutton} button`}>
                  <span>Send Score</span>
                </button>
              </div>
              <div className={`${Styles.status} flexStart`}>
                {/* <span>Status : &nbsp; </span> */}
                <span> {data}</span>
              </div>
              {error && <div className={`${Styles.errorclass}`}>
          <p className={`${Styles.Error}`}>{error}</p>
          <div className={`${Styles.Opps}`}></div>
          </div>}
            </div>
          </div>
          {showModal && (
            <Modal
              message="Are you sure you want to logout?"
              onConfirm={confirmLogout}
              onCancel={closeModal}
            />
          )}
        </div>
      ) : (
        navigate("/")
      )}
    </div>
  );
}

export default Dashboard;
