import React, { useState } from 'react';
import Styles from "./Sidebar.module.css";
import { FaHome, FaList, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {


  return (
    <div className="Sidebar">
      <div className={Styles.container}>
        <div className={`${Styles.wrapper}`}>
          <div className={`${Styles.logoDesign} flexStart`}>
            <img src="Assets/Logo.svg" alt="logo" />
          </div>
          <div className={Styles.menuColumns}>
            <div className={`${Styles.menulist} flexColStart`}>
              <Link to="/">
                <div className={`${Styles.item} button`}>
                  <div className={Styles.menuImahe}>
                    <FaHome className={Styles.icon} />
                  </div>
                  <div>
                    <h1 className={Styles.menutext}>Home</h1>
                  </div>
                </div>
              </Link>
              <Link to="/leaderboard">
                <div className={`${Styles.item} button`}>
                  <div className={Styles.menuImahe}>
                    <FaList className={Styles.icon} />
                  </div>
                  <div>
                    <h1 className={Styles.menutext}>Leaderboard</h1>
                  </div>
                </div>
              </Link>
              <Link to="/login">
                <div className={`${Styles.item} button`}>
                  <div className={Styles.menuImahe}>
                    <FaSignInAlt className={Styles.icon} />
                  </div>
                  <div>
                    <h1 className={Styles.menutext}>Login</h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
