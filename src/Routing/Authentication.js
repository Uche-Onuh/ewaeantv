import React from "react";
import { Route, Routes } from "react-router-dom";
import { Signup, Login } from "../scenes";
import Layout from "./Layout";

const Authentication = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default Authentication;
