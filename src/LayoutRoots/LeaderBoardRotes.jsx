import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentBoard from "../Layouts/Public/Leaderboard/StudentBoard/StudentBoard";
import CollegeBoard from "../Layouts/Public/Leaderboard/CollegeBoard/CollegeBoard";
import DepartmentBoard from "../Layouts/Public/Leaderboard/DepartmentBoard/DepartmentBoard";
import NavMenu from "../Layouts/Public/Leaderboard/NavMenu/NavMenu";
import Styles from "./LeaderBoardRotes.module.css"

function LeaderBoardRotes() {
  return (
    <div>
      <div className="flexColStart">
        <NavMenu />
        <div className={`${Styles.dashboard} fullwidth`}>
          <Routes>
            <Route path="/" element={<StudentBoard />} />
            <Route path="/college" element={<CollegeBoard />} />
            <Route
              path="/department"
              element={<DepartmentBoard />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoardRotes;
