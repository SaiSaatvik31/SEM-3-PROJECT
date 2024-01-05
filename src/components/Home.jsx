// import React from 'react'

// import { Link } from 'react-router-dom'
import "../styles/home.css";
// import Layout from './Layout';
// import { useState } from 'react';
// import { Button } from '@mui/material';
import { Button } from "@mui/material";
import Banner from "../banner_big.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  async function populateQuote() {
    const req = await fetch("http://localhost:1337/api/", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await req.json();
    console.log(data);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.removeItem("token");
    } else {
      populateQuote();
    }
  }, [navigate]);

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
