import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import Regiseter from "./Register/Register";
import { PrivateRoutes, PublicRoutes } from "./PrivateRoutes";



function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path="/register" element={<Regiseter />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
