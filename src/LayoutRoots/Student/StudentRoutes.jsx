import React from "react";
import { FaList, FaUser, FaSignOutAlt } from "react-icons/fa";
import { BrowserRouter, Routes, Route ,useParams} from "react-router-dom";
import Styles from "./StudentRoutes.module.css";
import Sidebar from "../../Components/SideBar/Sidebar";
import LeaderBoardRotes from "../Public/LeaderBoardRotes";
import Profile from "../../Components/Profile/Profile";
import LoginForm from "../../Components/Login/Login";

const StudentRoutes = () => {
  const { studentId } = useParams();
 const obj = [
    {
      icon: FaUser,
      name: "Profile",
      link: `students/${studentId}`,
    },
    {
      icon: FaList,
      name: "Leaderboard",
      link: `students/${studentId}/leaderboard`,
    },
    {
      icon: FaSignOutAlt,
      name: "LogOut",
      link: `students/${studentId}/logout`,
    },
  ];
  return (
    <div className="flexStart innerWidth background">
      {/* <BrowserRouter> */}
      <Sidebar obj={obj} className={Styles.Sidebar} />
      <div className={`${Styles.Dahsboard} innerWidth`}>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="leaderboard/*" element={<LeaderBoardRotes />} />
          <Route path="logout" element={<LoginForm />} />
        </Routes>
      </div>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default StudentRoutes;
