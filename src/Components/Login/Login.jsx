import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Styles from "./Login.module.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const setSessionData = (roll, user_id, username) => {
    // Use localStorage to store session data
    sessionStorage.setItem("roll", roll);
    sessionStorage.setItem("user_id", user_id);
    sessionStorage.setItem("username", username);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:5001/api/v1/login",
        formData, 
      );

      if (response.data.errorMessage) {
        console.error(response.data.responseData.error);
        setError(response.data.responseData.error);
        // Handle authentication error
      } else {
        const { roll, user_id, username } = response.data.responseData;
        setSessionData(roll, user_id, username);
        // document.cookie = `sessionToken=${username}; path=/`;

        // Generate the endpoint dynamically based on the user's role and username
        let endpoint;
        if(username !== sessionStorage.getItem("username")){
          navigate('/');
          console.log("not access")
        }
        
        if (roll === "student") {
          // Check if the entered username matches the authenticated student's username
          if (formData.username === username) {
            endpoint = `/students/${username}`;
          } else {
            console.error("Unauthorized access. Invalid username.");
            // Handle unauthorized access
            return;
          }
        } else if (roll === "admin") {
          endpoint = `/admin/${username}`;
        } else {
          console.error("Invalid user role:", roll);
          // Handle the case where the role is not student or admin
          return;
        }

        navigate(endpoint);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className={Styles.wrapper}>
      <div className={`${Styles.container} innerWidth`}>
        <div className={`${Styles.Banner} flexCenter`}>
          <div className={Styles.leftBanner}>
            <img
              src="Assets/logowhite.svg"
              alt=""
              className={Styles.imagepad}
            />

            <div className={`${Styles.Heading} flexColCenter`}>
              <h4 className={Styles.main}>Hey There!</h4>
              <div className={`${Styles.seconddivision} flexColCenter`}>
                <div className={`${Styles.innertext} flexColCenter`}>
                  <span>Welcome Back</span>
                  <span>You are one step away to your feed</span>
                </div>
                <img className={Styles.img} src="Assets/image1.svg" alt="" />
              </div>

             
            </div>
          </div>
          <div className={Styles.Login}>
            <div className={`${Styles.logcontainer} flexColStart`}>
              <h2 className={Styles.maintext}>Login</h2>
              <form onSubmit={handleFormSubmit}>
                <label>Username:</label>
                <input
                className={Styles.inputtext}
                  placeholder="username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                {/* <br /> */}
                <label>Password:</label>
                <input

className={Styles.inputtext}
                  placeholder="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <br />
                <button className={`${Styles.buttonstyles}`} type="submit">
                  Login
                </button>
                <br />
                {error &&  <div>
          <p className={`${Styles.Error}`}>{error}</p>
          </div>}
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
