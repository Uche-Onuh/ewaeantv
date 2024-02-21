import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../scenes";
import { Navbar, Footer } from "../components";
import Layout from "./Layout";

const MainLayoutRoutes = () => {
  return (
    <>
      <nav className="bg-[#070707] w-full overflow-hidden p-4">
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayoutRoutes;
