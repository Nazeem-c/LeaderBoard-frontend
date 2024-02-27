import React, { useState } from "react";
import Styles from "./SideBarStudent.module.css";
// import { FaHome, FaList, FaSignInAlt } from "react-icons/fa";
import { Link, useLocation} from "react-router-dom";



const SidebarStudent = ({ obj }) => {
  // const [activeTab, setActiveTab] = useState("home");
  const location = useLocation();

  // Define a function to determine if the link is active
 
  const isActive = (path) => {
    const currentPath = location.pathname;
    console.log("Current Path:", currentPath);
    console.log("Checking Path:", `${path}`);
    console.log("Comparison Result:", currentPath === `${path}` || currentPath.startsWith(`/${path}/`));
    return currentPath === `${path}` || currentPath.startsWith(`/${path}/`);
  };
  
  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  //   console.log("pressed");
  // };

  return (
    <>
     <div className={Styles.Sidebar}>
      <div className={Styles.container}>
        <div className={`${Styles.wrapper}`}>
          <div className={`${Styles.logoDesign} flexStart`}>
            <img src={process.env.PUBLIC_URL + "/Assets/Logo.svg"} alt="logo" />
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
    {/* <Outlet/> */}
    </>
   
  );
};

export default SidebarStudent;
