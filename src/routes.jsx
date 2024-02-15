import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Public from "./Pages/Public/Public";
import Sidebar from "./Components/SideBar/Sidebar";
import Leaderboard from "./Components/Leaderboard/Leaderboard";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

const MyRoutes = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Sidebar/>
        <Routes>
          {/* <Route path="/" element={<Public />}> */}
              <Route index element={<Home />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/login" element={<Login />} />    
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MyRoutes;
