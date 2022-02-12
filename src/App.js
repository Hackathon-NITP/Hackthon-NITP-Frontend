// import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Nabvar";
import GetData from "./pages/GetData/GetData";
import Login from "./pages/Login/Login";
import Notify from "./pages/Notify/Notify";
import RegisterCamp from "./pages/RegisterCamp/RegisterCamp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getData" element={<GetData />} />
          <Route path="/register" element={<RegisterCamp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notify" element={<Notify />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
