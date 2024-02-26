import React, { useState, useEffect } from "react";
import Styles from "./Dashboard.module.css";

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
  return (
    <div className={Styles.Dashboard}>
      {adminId ? (
        <div className={Styles.container}>
          <div className={`${Styles.wrapper} flexColStart paddings`}>
            <div className={Styles.topbanner}>
              <h4>Welcome to the admin Portal</h4>
            </div>
            <br />
            <div className={`${Styles.student} flexColStart`}>
              <h4>Mailing Score Card</h4>
              <div className={`${Styles.inputs} flexStart`}>
                <input type="text" />
                <input type="text" />
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
