import React from "react";
import Home from "./page/home/Home";
import Profile from "./page/profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/login/Login";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* login page */}
          <Route path="login" element={<Login />} />
          {/* home page */}
          <Route exact path="/" element={<Home />} />
          {/* profile page */}
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
