import React from "react";

import PublicRoutes from "./LayoutRoots/Public/PublicRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import LeaderBoardRotes from "./LayoutRoots/Public/LeaderBoardRotes";
import StudentBoard from "./Layouts/Public/Leaderboard/StudentBoard/StudentBoard";
import CollegeBoard from "./Layouts/Public/Leaderboard/CollegeBoard/CollegeBoard";
import DepartmentBoard from "./Layouts/Public/Leaderboard/DepartmentBoard/DepartmentBoard";
import LoginForm from "./Components/Login/Login";
import StudentRoutes from "./LayoutRoots/Student/StudentRoutes";

function RoutesLayout() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<LeaderBoardRotes />}>
              <Route path="/leaderboard/student" element={<StudentBoard />} />
              <Route path="/leaderboard/college" element={<CollegeBoard />} />
              <Route
                path="/leaderboard/department"
                element={<DepartmentBoard />}
              />
            </Route>
            <Route path="/login" element={<LoginForm />} />
          </Route>

          <Route path="/student" element={<StudentRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesLayout;
