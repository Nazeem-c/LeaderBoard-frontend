import React, { useState } from "react";
import Styles from "./Navmenu.module.css";
import { Link } from "react-router-dom";

function NavMenu() {
  const [isClickedStudent, setIsClickedStudent] = useState(true);
  const [isClickedCollege, setIsClickedCollege] = useState(false);
  const [isClickedDepartment, setIsClickedDepartment] = useState(false);

  const handleLinkClick = (linkType) => {
    switch (linkType) {
      case "student":
        setIsClickedStudent(true);
        setIsClickedCollege(false);
        setIsClickedDepartment(false);
        break;
      case "college":
        setIsClickedStudent(false);
        setIsClickedCollege(true);
        setIsClickedDepartment(false);
        break;
      case "department":
        setIsClickedStudent(false);
        setIsClickedCollege(false);
        setIsClickedDepartment(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className={`${Styles.NavMenu}`}>
      <div className={`${Styles.container}`}>
        <div className={`${Styles.menu}`}>
          <div className={`${Styles.menucontainer} flexStart`}>
            <Link to="/leaderboard" onClick={() => handleLinkClick("student")}>
              <div className={`${isClickedStudent ? Styles.clicked :Styles.menuItem }`}>
                <a>Student</a>
              </div>
            </Link>

            <Link to="/leaderboard/college" onClick={() => handleLinkClick("college")}>
              <div className={`${isClickedCollege ? Styles.clicked : Styles.menuItem1}`}>
                <a>College</a>
              </div>
            </Link>

            <Link to="/leaderboard/department" onClick={() => handleLinkClick("department")}>
              <div className={` ${isClickedDepartment ? Styles.clicked : Styles.menuItem2}`}>
                <a>Department</a>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
