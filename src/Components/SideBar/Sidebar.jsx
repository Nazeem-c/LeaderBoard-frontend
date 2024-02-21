import React, { useState } from "react";
import Styles from "./Sidebar.module.css";
// import { FaHome, FaList, FaSignInAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";



const Sidebar = ({ obj }) => {
  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation();

  // Define a function to determine if the link is active
  const isActive = (path) => {
    // Check if the current path is exactly the provided path
    return location.pathname.startsWith(path);
  };
  

  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  //   console.log("pressed");
  // };

  return (
    <div className={Styles.Sidebar}>
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
                    // onClick={() => handleTabClick(item.name.toLowerCase())}
                    // className={`${Styles.item} ${
                    //   activeTab === item.name.toLowerCase()
                    //     ? "active-button"
                    //     : "button"
                    // } `}
                    className={`${Styles.item} ${isActive(`/${item.link}`) ? 'active-button' : 'button'}`}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
