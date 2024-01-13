// import React from 'react'

// import { Link } from 'react-router-dom'
import "../styles/home.css";
import "../styles/animTxt.css";
// import Layout from './Layout';
// import { useState } from 'react';
// import { Button } from '@mui/material';
import { Button } from "@mui/material";
import Banner from "../banner_big.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import M_model from "../n_compo/m_model";
function Home({ selectedOptions, updateSelectedOptions }) {
  const [updatedList, setUpdatedOptions] = useState(selectedOptions);
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
      const userName = token
        ? JSON.parse(atob(token.split(".")[1])).email
        : null;

      let updatedData = { ...updatedList, email: userName };
      setUpdatedOptions(updatedData);

      if (updatedData.email !== selectedOptions.email) {
        updateSelectedOptions(updatedData);
      }

      populateQuote();
    }
  }, [navigate, selectedOptions.email]);

  document.title = "Home";
  const dynamicStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100px",
  };

  return (
    <section className="home" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="content">
        <div className="headerContainer">
          <h1>Doctor Appointment Website</h1>
          <div className="buttons">
            <M_model />
            <Link to="/formPage">
              <div className="ml-4 mt-4">
                <Button variant="outlined">Form Page </Button>
              </div>
            </Link>
          </div>
        </div>
        {/* /book-appointment */}
      </div>
    </section>
  );
}

export default Home;
