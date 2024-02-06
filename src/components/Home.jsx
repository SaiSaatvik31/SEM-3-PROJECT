import React, { useEffect, useState } from "react";
import { Button, Modal } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import M_model from "../n_compo/m_model";
import HospitalCard from "./HospitalCard";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "./SearchBar";
import WaterCard from "./WaterCard";
import SubTitle from "./Subtitle";
import '../styles/home.css'
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
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <SubTitle subtitle={"Know Before You Go"} />
                </div>
                <h1>
                  Book Your Doctor <span className="highlight">With Us</span>
                </h1>
                <p className="text-2xl" style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente reiciendis illo molestiae, ullam iste velit quae
                  placeat, quo quisquam nemo facilis itaque. Esse quo debitis
                  numquam obcaecati dicta exercitationem quidem.
                </p>
                <Button
                  className="p-2"
                  color="success"
                  onClick={() => {
                    navigate("/book-appointment");
                  }}
                >
                  Book Now
                </Button>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src="ML/Cat.jpg" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <img src="ML/Shashi.jpg" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src="src\styles\WhatsApp Image 2024-02-05 at 14.49.13_ea9519f2.jpg" />
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <HospitalCard />
          </Row>
          <Row className="mt-4 invisible-md">
            <WaterCard />
          </Row>
          <SearchBar />
        </Container>
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
                  navigate("/recBook");
                }}
              >
                View Bookings
              </Button>
            </div>
          </Modal>
        )}
      </section>
    </>
  );
}

export default Home;
