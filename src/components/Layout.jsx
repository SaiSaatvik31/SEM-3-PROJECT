// import React from 'react'
// import { Outlet } from 'react-router-dom'
import Navbar from "./Navbar";

// import '../styles/layout.css'
import { Outlet } from 'react-router-dom'
import Footer from "./Footer";
// eslint-disable-next-line react/prop-types
function Layout() {
  return (
    <>
      <Navbar />

      {/* <div>{children}</div> */}
    <Outlet/>
    <Footer/>
    </>
  );
}

export default Layout;