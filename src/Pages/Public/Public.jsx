import React from "react";
import Sidebar from "../../Components/SideBar/Sidebar";
import Home from "../../Components/Home/Home";

const Public = () => {
  return (
    <div className="flexStart">
      <Sidebar />
      <Home/>
    </div>
  );
};

export default Public;
