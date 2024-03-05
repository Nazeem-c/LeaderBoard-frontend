import React from "react";
import styles from "./Logout.module.css";

import { useNavigate } from 'react-router-dom';

function Logout() {

    const navigate = useNavigate

    const handleLogout = () => {
      // Perform logout actions here, such as clearing user session, etc.
      const isConfirmed = window.confirm('Are you sure you want to logout?');
      if (isConfirmed) {
        // Perform logout actions, e.g., clear user session, etc.
        // ...
  
        navigate('/login');
      }}

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Logout</h2>
        <p>Are you sure you want to logout?</p>
        <br />
        <button className={`${styles.btn} button`} onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Logout;

