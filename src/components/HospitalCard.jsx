// import React from 'react'
import { Link } from "react-router-dom";
import "../styles/HospitalCard.css";
// import logo from "../styles/1eUZSnIjT09CQq5Sj14XkBw.jpg";
import { Instagram, Twitter, YouTube } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import hos from "../hos_trust1.jpg";
function HospitalCard() {
  const navigate = useNavigate();
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
  const handleClick = (hos) => {
    if (hos === "TrustCure Hospitals") {
      navigate("/trustcure");
    } else if (hos === "Apollo Hospitals") {
      navigate("/apollo");
    } else if (hos === "Kamineni Hospitals") {
      navigate("/kamineni");
    }
  };
  return (
    <>
      <section className="hos__card mt-4">
        <h3
          className="highlight"
          style={{ marginTop: "10px", fontSize: "40px" }}
        >
          HOSPITALS
        </h3>
        <div className="hoscard__circle hoscard__circle1"></div>
        <div className="hoscard__circle hoscard__circle2"></div>
        <div className="hoscard__container bd-container">
          {hospitalsData.map((hospital, index) => (
            <div key={index} className="hoscard__glass">
              <center>
                {" "}
                <img alt="" src={hos} />
              </center>

              <div className="hoscard__data ">
                <h3 className="hfont">
                  <span className="hoscard__description hfont">
                    {hospital.name},{hospital.city}
                  </span>
                </h3>
                <h3 className="hoscard__title hfont">{hospital.type}</h3>
                <button
                  className="hoscard__button btnall"
                  onClick={() => {
                    handleClick(hospital.name);
                  }}
                >
                  Read More
                </button>
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
