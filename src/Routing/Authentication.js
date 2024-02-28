import React from "react";
import { Route, Routes } from "react-router-dom";
import { Signup, Login, Verify, Preference, Accounts, Add } from "../scenes";
import Layout from "./Layout";

const Authentication = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="verify-email" element={<Verify />} />
          <Route path="preference" element={<Preference />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="add-account" element={<Add />} />
        </Route>
      </Routes>
    </>
  );
};

export default Authentication;
