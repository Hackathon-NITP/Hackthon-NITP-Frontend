import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Nabvar";
import GetData from "./pages/GetData/GetData";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import RegisterCamp from "./pages/RegisterCamp/RegisterCamp";
import { useState } from "react";
import Notify from "./pages/Notify/Notify";
import FAQ from "./pages/FAQ/Faq";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
