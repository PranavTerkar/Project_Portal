import React from "react";
import { Routes, Route } from "react-router-dom";
import GroupInfo from "./GroupInfo";
import Project from "./Project";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/GroupInfo" element={<GroupInfo />} />
      <Route path="/Project" element={<Project />} />
    </Routes>
  );
};

export default AllRoutes;