import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentBoard from "../Components/Leaderboard/StudentBoard/StudentBoard";
import CollegeBoard from "../Components/Leaderboard/CollegeBoard/CollegeBoard";
import DepartmentBoard from "../Components/Leaderboard/DepartmentBoard/DepartmentBoard";
import NavMenu from "../Components/Leaderboard/NavMenu/NavMenu";

function LeaderBoardRotes() {
  return (
    <div>
      <div className="flexColStart">
        <NavMenu />
        <div className="Color fullwidth">
          {/* <h1>gfsdjs</h1> */}
          <Routes>
            <Route path="/student" element={<StudentBoard />} />
            <Route path="/college" element={<CollegeBoard />} />
            <Route
              path="/leaderboard/department"
              element={<DepartmentBoard />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoardRotes;
