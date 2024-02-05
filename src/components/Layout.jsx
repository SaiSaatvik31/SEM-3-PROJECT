import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "../styles/layout.css";
import Footer1 from "../n_compo/footer1";
function Layout() {
  return (
    <div className="wrapper" >
      <div className="content">
        <Navbar />
        <Outlet />
      </div>
      <Footer1 />
    </div>
  );
}

export default Layout;
