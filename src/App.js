import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Nabvar";
import Table from "./components/Table/Table";
import GetData from "./pages/GetData/GetData";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import RegisterCamp from "./pages/RegisterCamp/RegisterCamp";
import { useState } from "react";
import Notify from "./pages/Notify/Notify";
import FAQ from "./pages/FAQ/Faq";
import Upload from "./pages/Upload/Upload";
import Views from "./pages/Views/Views";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getData" element={<GetData />} />
          <Route path="/register" element={<RegisterCamp />} />
          <Route
            path="/login"
            element={
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route
            path="/signup"
            element={
              <SignUp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route path="/notify" element={<Notify />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/view" element={<Views />} />
          <Route path="/vaccine" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
