import "./App.css";
import PublicRoutes from "./LayoutRoots/Public/PublicRoutes";
import StudentRoutes from "./LayoutRoots/Student/StudentRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App innerWIdth ">
      <BrowserRouter>
        <Routes>
        <Route exact path="/students/:studentId/*" element={<StudentRoutes />} />    
          <Route exact path="/*" element={<PublicRoutes />} />
     </Routes>
      </BrowserRouter>
      {/* <PublicRoutes /> */}
      {/* <StudentRoutes/> */}
      {/* <RoutesLayout/> */}
    </div>
  );
}

export default App;
