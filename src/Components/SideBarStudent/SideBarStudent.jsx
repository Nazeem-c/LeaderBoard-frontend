import React, { useState } from "react";
import Styles from "./SideBarStudent.module.css"; // Correct import path
import { Link, useLocation } from "react-router-dom";

const SidebarStudent = ({ obj }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <>
      {/* Toggle button for sidebar */}
      <div className={Styles.toggleButton} onClick={toggleSidebar}>
        <div className={isSidebarOpen ? Styles.toggleIconOpen : Styles.toggleIcon}></div>
      </div>

      {/* Sidebar content */}
      <div className={`${Styles.Sidebar} ${isSidebarOpen ? Styles.open : ""}`}>
        <div className={Styles.container}>
          <div className={Styles.wrapper}>
            <div className={`${Styles.logoDesign} flexStart`}>
              <img src={process.env.PUBLIC_URL + "/Assets/Logo.svg"} alt="logo" />
            </div>
            <div className={Styles.menuColumns}>
              <div className={`${Styles.menulist} flexColStart`}>
                {obj.map((item, index) => (
                  <Link to={`/${item.link}`} key={index}>
                    <div className={`${Styles.item} ${isActive(`/${item.link}`) ? "active-button" : "button"}`}>
                      <div className={Styles.menuImahe}>
                        {item.icon && React.createElement(item.icon, { className: Styles.icon })}
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
    </>
  );
};

export default SidebarStudent;
