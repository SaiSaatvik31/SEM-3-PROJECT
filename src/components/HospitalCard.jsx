// import React from 'react'
import { Link } from "react-router-dom";
import "../styles/HospitalCard.css";
// import logo from '../styles/1eUZSnIjT09CQq5Sj14XkBw.jpg'
import { Instagram, Twitter, YouTube } from "@mui/icons-material";

function HospitalCard() {
  const hospitalsData = [
    {
      name: "TrustCure Hospitals",
      city: "Hyderabad",
      type: "Multi-Speciality",
    },
    {
      name: "Apollo Hospitals",
      city: "Hyderabad",
      type: "Speciality",
    },
    {
      name: "Kamineni",
      city: "Hyderabad",
      type: "Clinic",
    },
  ];
  return (
    <>
      <section className="hos__card mt-4">
        <h3 style={{ marginTop: "10px", fontSize: "40px" }}>HOSPITALS</h3>
        <div className="hoscard__circle hoscard__circle1"></div>
        <div className="hoscard__circle hoscard__circle2"></div>
        <div className="hoscard__container bd-container">
          {hospitalsData.map((hospital, index) => (
            <div key={index} className="hoscard__glass">
              <center>
                <img alt="" className="hoscard__image text-center" />
              </center>

              <div className="hoscard__data">
                <h3>
                  <span className="hoscard__description">
                    {hospital.name},{hospital.city}
                  </span>
                </h3>
                <h3 className="hoscard__title">{hospital.type}</h3>
                <Link
                  to="#"
                  className="hoscard__button position-relative mt-5 "
                >
                  Read More
                </Link>
                <div className="hoscard__social">
                  <Link to="#" className="hoscard__link">
                    <Instagram />
                  </Link>
                  <Link to="#" className="hoscard__link">
                    <Twitter />
                  </Link>
                  <Link to="#" className="hoscard__link">
                    <YouTube />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HospitalCard;
