import React, { useState } from "react";
import Styles from "./Sidebar.module.css";
// import { FaHome, FaList, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const Sidebar = ({ obj }) => {
  const [activeTab, setActiveTab] = useState("home");
  

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log("pressed");
  };

  return (
    <div className="Sidebar">
      <div className={Styles.container}>
        <div className={`${Styles.wrapper}`}>
          <div className={`${Styles.logoDesign} flexStart`}>
            <img src="Assets/Logo.svg" alt="logo" />
          </div>
          <div className={Styles.menuColumns}>
            <div className={`${Styles.menulist} flexColStart`}>
              {obj.map((item, index) => (
                <Link to={`/${item.link}`} key={index}>
                  <div
                    onClick={() => handleTabClick(item.name.toLowerCase())}
                    className={`${Styles.item} ${
                      activeTab === item.name.toLowerCase()
                        ? "active-button"
                        : "button"
                    } `}
                  >
                    <div className={Styles.menuImahe}>
                      {item.icon &&
                        React.createElement(item.icon, {
                          className: Styles.icon,
                        })}
                    </div>
                    <span className={`${Styles.menutext}`}>{item.name}</span>
                  </div>
                </Link>
              ))}

              {/* <Link to="/">
                <div className={`${Styles.item} button`}>
                  <div className={Styles.menuImahe}>
                    {item.icon && React.createElement(item.icon)}
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
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
