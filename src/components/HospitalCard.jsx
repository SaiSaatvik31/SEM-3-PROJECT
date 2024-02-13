import React from "react";
import { Link } from "react-router-dom";
import "../styles/HospitalCard.css"; // Assuming your CSS file path is correct

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
      name: "Kamineni Hospitals",
      city: "Hyderabad",
      type: "Clinic",
    },
  ];

  return (
    <>
      <section className="hos__card mt-4">
        <h3 className="hos__title">HOSPITALS</h3>
        <div className="hoscard__circles">
          <div className="hoscard__circle1"></div>
          <div className="hoscard__circle2"></div>
        </div>
        <div className="hoscard__container bd-container">
          {hospitalsData.map((hospital, index) => (
            <div key={index} className="hoscard__glass">
              <center>
                <img
                  alt={hospital.name}
                  className="hoscard__image text-center"
                  // Add a placeholder image or source here
                />
              </center>
              <div className="hoscard__data">
                <h3 className="hoscard__description">
                  {hospital.name}, {hospital.city}
                </h3>
                <h3 className="hoscard__type">{hospital.type}</h3>
                <Link
                  to="#"
                  className="hoscard__button btn btn-primary mt-5 float-end"
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
