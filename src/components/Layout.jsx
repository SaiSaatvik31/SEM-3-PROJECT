import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
// import "../styles/layout.css";
import Footer1 from "../n_compo/footer1";
import N_footer from "../n_compo/N_footer";
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <N_footer />
    </>
  );
}

export default Layout;
