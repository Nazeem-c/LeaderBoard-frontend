import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../Components/SideBar/Sidebar";
// import Leaderboard from "../Layouts/Public/Leaderboard/Leaderboard";
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home";
import { FaHome, FaList, FaSignInAlt } from "react-icons/fa";
import Styles from './PublicRoutes.module.css'
// import StudentBoard from "../Components/Leaderboard/StudentBoard/StudentBoard";
// import CollegeBoard from "../Components/Leaderboard/CollegeBoard/CollegeBoard";
// import DepartmentBoard from "../Components/Leaderboard/DepartmentBoard/DepartmentBoard";


import LeaderBoardRotes from "./LeaderBoardRotes";

function PublicRoutes() {

  const obj = [
    {
      icon: FaHome,
      name: "Home",
      link: "home",
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
    <div className="flexStart innerWidth background">
      <BrowserRouter>
        <Sidebar obj={obj} className={Styles.Sidebar} />
        <div className={`${Styles.Dahsboard} innerWidth`}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/leaderboard/*" element={<LeaderBoardRotes />}/>
              {/* <Route path="/leaderboard/student" element={<StudentBoard />} />
              <Route path="/leaderboard/college" element={<CollegeBoard />} />
              <Route path="/leaderboard/department" element={<DepartmentBoard />} /> */}
            
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default PublicRoutes;
