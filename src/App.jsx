import "./App.css";
import PublicRoutes from "./LayoutRoots/Public/PublicRoutes";
import StudentRoutes from "./LayoutRoots/Student/StudentRoutes";
import AdminRoutes from "./LayoutRoots/Admin/AdminRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <div className="App innerWIdth ">
      
      <BrowserRouter>
        <Routes>
        <Route exact path="/students/:studentId/*" element={<StudentRoutes />} />   
        <Route exact path="/admin/:adminId/*" element={<AdminRoutes />} />   
          <Route exact path="/*" element={<PublicRoutes />} />
     </Routes>
      </BrowserRouter>
      <ToastContainer />
      {/* <PublicRoutes /> */}
      {/* <StudentRoutes/> */}
      {/* <RoutesLayout/> */}
    </div>
  );
}

export default App;