import React, { useState, useEffect } from "react";
import Styles from "./SideBarStudent.module.css";
import { Link, useLocation } from "react-router-dom";
import { FaList } from "react-icons/fa";

const SidebarStudent = ({ obj }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const closeSidebar = () => {
      setIsSidebarOpen(false);
    };

    document.body.addEventListener("click", closeSidebar);

    return () => {
      document.body.removeEventListener("click", closeSidebar);
    };
  }, []);

  const toggleSidebar = (e) => {
    e.stopPropagation();
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const handleItemClick = (e) => {
    e.stopPropagation(); // Prevent the event from reaching the document body
    // Add your logic here for item click if needed
  };

  const handleSidebarClick = (e) => {
    e.stopPropagation(); // Prevent the event from reaching the document body
    // Add your logic here for sidebar click if needed
  };

  return (
    <>
      {/* Toggle button for sidebar */}
      <button className={Styles.toggleButton} onClick={toggleSidebar}>
        <FaList />
      </button>

      {/* Sidebar content */}
      <div
        className={`${Styles.Sidebar} ${isSidebarOpen ? Styles.open : ""}`}
        onClick={handleSidebarClick}
      >
        <div className={Styles.container}>
          <div className={Styles.wrapper}>
            <div className={`${Styles.logoDesign} flexStart`}>
              <img src="Assets/Logo.svg" alt="logo" />
            </div>
            <div className={Styles.menuColumns}>
              <div className={`${Styles.menulist} flexColStart`}>
                {obj.map((item, index) => (
                  <Link to={`/${item.link}`} key={index}>
                    <div
                      className={`${Styles.item} ${
                        isActive(`/${item.link}`) ? "active-button" : "button"
                      }`}
                      onClick={handleItemClick}
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
    </>
  );
};

export default SidebarStudent;