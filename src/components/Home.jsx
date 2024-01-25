import React, { useEffect, useState } from "react";
import { Button, Modal } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import M_model from "../n_compo/m_model";
import Banner from "../banner_big.png";
import "../styles/home.css";
import "../styles/animTxt.css";
function Home({ selectedOptions, updateSelectedOptions }) {
  const [updatedList, setUpdatedOptions] = useState(selectedOptions);
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  async function bookRemind(name) {
    const req = await fetch("/api/bookRemind", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    const data = await req.json();
    const bookingsCount = data.data;
    setCount(bookingsCount);

    if (bookingsCount > 0) {
      setShowModal(true);
    }
  }

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
      bookRemind(userName);
    }
  }, [navigate, selectedOptions.email]);

  document.title = "Home";

  const handleCloseModal = () => {
    setShowModal(false);
  };
  document.title = "Home";
  const dynamicStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100px",
  };
  return (
    <>
      <section className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="content">
          <div className="headerContainer">
            <h1>Doctor Appointment Website</h1>
            <div>
              <M_model />
            </div>
          </div>
        </div>

        {showModal && count > 0 && (
          <Modal open={showModal} onClose={handleCloseModal}>
            <div
              className="modal-content"
              style={{
                backgroundColor: "#f5f5f5",
                borderRadius: "5px",
                padding: "10px 15px",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.15)",
                position: "fixed",
                top: "80px",
                right: "10px",
                minWidth: "150px",
                maxWidth: "250px",
              }}
            >
              <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
                You have {count} pending slots booked.
              </p>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={() => {
                  navigate("/profile");
                }}
              >
                View Bookings
              </Button>
            </div>
          </Modal>
        )}
      </section>
      <div>
        <h1>Show Your Bookings:</h1>
        <Button
          onClick={() => {
            navigate("/profile");
          }}
        >
          Go To Bookings
        </Button>
        <h1>Book An Online Consulation Now:</h1>
        <Button>Book Consulation</Button>
        <h1>View Your previous Prescriptions:</h1>
        <Button>View Now</Button>
        <h1>Enter Virtual Room</h1>
        <Button
          onClick={() => {
            navigate("/virtualRoom");
          }}
        >
          Lets Go!!!
        </Button>
        <h1>Cancel Your Bookings</h1>
        <Button>Cancel Bookings</Button>
      </div>
    </>
  );
}

export default Home;
