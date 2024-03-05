import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Styles from "./Login.module.css";
import { toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for react-toastify

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:5001/api/v1/login",
        formData
      );

      if (response.data.errorMessage) {
        setError(response.data.errorMessage);
        toast.error(response.data.errorMessage, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }); // Display error message as toast
      } else {
        const { roll, user_id, username } = response.data.responseData;

        sessionStorage.setItem("roll", roll);
        sessionStorage.setItem("user_id", user_id);
        sessionStorage.setItem("username", username);
        setLoginSuccess(true);
        showToastWithDelay();// Display success message as toast
        setTimeout(() => {
          if (roll === "student") {
            navigate(`/students/${username}`);
          } else if (roll === "admin") {
            navigate(`/admin/${username}`);
          } else {
            console.error("Invalid user role:", roll);
          }
        }, 2000);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Error during login. Please try again later.");
      toast.error("Error during login. Please try again later.", {
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
  };
  const showToastWithDelay = () => {
    setTimeout(() => {
      toast.success("Login Successful", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }, 2000); // Set the desired delay in milliseconds (e.g., 2000 milliseconds or 2 seconds)
  };
  return (
    <div className={Styles.wrapper}>
      <div className={`${Styles.container} innerWidth`}>
        <div className={`${Styles.Banner} flexCenter`}>
          <div
            className={`${Styles.leftBanner} ${
              loginSuccess ? Styles.successBackground : Styles.normalBackground
            }`}
          >
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
                <div className={`Styles.imagewrapper`}>
                <img className={Styles.img} src="Assets/login.svg" alt="" />
                {loginSuccess ? (
                  <>
                    {/* Rectangle on the left side */}
                    <div
                      className={`${Styles.rectangle} ${Styles.leftRectangle} ${Styles.moving}`}
                    ></div>

                    {/* Rectangle on the right side */}
                    <div
                      className={`${Styles.rectangle} ${Styles.rightRectangle} ${Styles.moving}`}
                    ></div>
                  </>
                ) : (
                  <>
                    <div
                      className={`${Styles.rectangle} ${Styles.notMovingleft}`}
                    ></div>
                    <div
                      className={`${Styles.rectangle} ${Styles.notMovingright}`}
                    ></div>
                  </>
                )}
                </div>
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
                {error && (
                  <div>
                    <p className={`${Styles.Error}`}>{error}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
