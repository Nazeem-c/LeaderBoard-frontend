
import React from "react";
import { FaChartBar, FaUser, FaSignOutAlt } from "react-icons/fa";
import { BrowserRouter, Routes, Route ,useParams} from "react-router-dom";
import Styles from "./AdminRoutes.module.css";
import Sidebar from "../../Components/SideBar/Sidebar";
import Profile from "../../Components/Profile/Profile";
import Dashboard from "../../Components/Dashboard/Dashboard";


function AdminRoutes() {
    const { adminId } = useParams();
 const obj = [
    {
      icon: FaChartBar,
      name: "Dashboard",
      link: `admin/${adminId}`,
    },
  
    {
      icon: FaSignOutAlt,
      name: "LogOut",
      link: `admin/${adminId}/logout`,
    },
  ];
  return (
    <div className={`${Styles.Admin} flexStart background innerWidth `}>
    {/* <BrowserRouter> */}
    <Sidebar obj={obj} className={Styles.Sidebar} />
    <div className={`${Styles.Dahsboard} innerWidth`}>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        {/* <Route path="leaderboard/*" element={<LeaderBoardRotes />} /> */}
        <Route path="logout" element={<Dashboard />}/>
      </Routes>
    </div>
    {/* </BrowserRouter> */}
  </div>
  )
}

export default AdminRoutes