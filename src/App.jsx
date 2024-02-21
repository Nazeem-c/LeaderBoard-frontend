import "./App.css";
import PublicRoutes from "./LayoutRoots/PublicRoutes";

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App innerWIdth ">
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<PublicRoutes />} />
        </Routes>
      </BrowserRouter> */}
      <PublicRoutes />
    </div>
  );
}

export default App;
