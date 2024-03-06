import React, { useState, useEffect } from "react";
import Styles from "./Sidebar.module.css";
import { Link, useLocation } from "react-router-dom";
import { FaList } from "react-icons/fa";
import { useParams } from "react-router-dom"; // Import useParams

const Sidebar = ({ obj }) => {
  const { studentId } = useParams();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const closeSidebar = () => {
      setIsSidebarOpen(false);
    };

    // Add event listener to the document body to handle clicks outside of the sidebar
    document.body.addEventListener("click", closeSidebar);

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener("click", closeSidebar);
    };
  }, []);

  const toggleSidebar = (e) => {
    e.stopPropagation(); // Prevent click event from propagating to the document body
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <>
      {/* Toggle button for sidebar */}
      <button className={Styles.toggleButton} onClick={toggleSidebar}>
        <FaList />
      </button>

      {/* Sidebar content */}
      <div className={`${Styles.Sidebar} ${isSidebarOpen ? Styles.open : ""}`}>
        <div className={Styles.container}>
          <div className={Styles.wrapper}>
            <div className={`${Styles.logoDesign} flexStart`}>
              <img src="Assets/Logo.svg" alt="logo" />
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

export default Sidebar;