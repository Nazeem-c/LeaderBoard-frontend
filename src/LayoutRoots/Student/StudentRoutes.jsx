import React from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { Routes, Route ,useParams} from "react-router-dom";
import Styles from "./StudentRoutes.module.css";
import Sidebar from "../../Components/SideBar/Sidebar";
import Profile from "../../Components/Profile/Profile";

const StudentRoutes = () => {
  const { studentId } = useParams();
 const obj = [
    {
      icon: FaUser,
      name: "Profile",
      link: `students/${studentId}`,
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
      <div className={`${Styles.Dahsboard} innerWidth flexColStart`}>
        <Routes>
          <Route path="/" element={<Profile />} />
          {/* <Route path="leaderboard/*" element={<LeaderBoardRotes />} /> */}
          <Route path="logout" element={<Profile />}/>
        </Routes>
      </div>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default StudentRoutes;
