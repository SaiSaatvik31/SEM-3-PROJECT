// import React from 'react'

// import { Link } from 'react-router-dom'
import "../styles/home.css";
// import Layout from './Layout';
// import { useState } from 'react';
// import { Button } from '@mui/material';
import { Button } from "@mui/material";
import Banner from "../banner_big.png";
import { Link } from "react-router-dom";

function Home() {
  // const [btnColor, setBtnColor] = useState('primary');
  document.title = "Home";
  return (
    <section className="home" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="headerContainer">
        <h1>Doctor Appointment Website</h1>
        <Link to="/book-appointment">
          <Button variant="outlined">BOOK APPOINTMENT</Button>
        </Link>
        <Link to="/formPage">
          <Button variant="outlined">Form Page</Button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
