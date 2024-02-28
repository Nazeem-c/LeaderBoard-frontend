import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../../Components/SideBar/Sidebar";
// import Leaderboard from "../Layouts/Public/Leaderboard/Leaderboard";
import Login from "../../Components/Login/Login";
import Home from "../../Components/Home/Home";
import { FaHome, FaList, FaSignInAlt } from "react-icons/fa";
import Styles from "./PublicRoutes.module.css";
import StudentBoard from "../../Layouts/Public/Leaderboard/StudentBoard/StudentBoard";
import CollegeBoard from "../../Layouts/Public/Leaderboard/CollegeBoard/CollegeBoard";
import DepartmentBoard from "../../Layouts/Public/Leaderboard/DepartmentBoard/DepartmentBoard";

import LeaderBoardRotes from "./LeaderBoardRotes";

function PublicRoutes() {
  const obj = [
    {
      icon: FaHome,
      name: "Home",
      link: "",
    },
    {
      icon: FaList,
      name: "Leaderboard",
      link: "leaderboard",
    },
    {
      icon: FaSignInAlt,
      name: "Login",
      link: "login",
    },
  ];
  return (
    <div className={`${Styles.Admin} flexStart innerWidth `}>
      <Sidebar obj={obj} className={`${Styles.Sidebar}`} />
      {/* <BrowserRouter> */}

      <div className={`${Styles.Dahsboard} innerWidth`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard/*" element={<LeaderBoardRotes />}/>
            {/* <Route index element={<StudentBoard />} />
            <Route path="college" element={<CollegeBoard />} />
            <Route
              path="department"
              element={<DepartmentBoard />}
            />
          </Route> */}

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default PublicRoutes;
