import { React, useState, useEffect } from "react";
import "../styles/WaterCard.css";
import Stars from "./HomeStars.jsx";
import { Button } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

function WaterCard() {
  const navigate = useNavigate();
  const topDoctors = [
    {
      name: "Dr. Pranay",
      department: "Neurology",
      hospital: "TrustCure Hospitals",
      rating: 5,
    },
    {
      name: "Dr. Shashi",
      department: "Neurology",
      hospital: "Apollo Hospitals",
      rating: 5,
    },
    {
      name: "Dr. Saatvik",
      department: "Neurology",
      hospital: "Kamineni Hospitals",
      rating: 5,
    },
    {
      name: "Dr. Krishna",
      department: "Cardiology",
      hospital: "TrustCure Hospitals",
      rating: 5,
    },
    {
      name: "Dr. Kamal",
      department: "Neurology",
      hospital: "Apollo Hospitals",
      rating: 5,
    },
  ];

  // const isMobile = window.innerWidth <=768;

  return (
    <>
      <div className="img__container d-flex flex-column">
        <h1>Our Top Doctors</h1>
        <Swiper
          className="img__box "
          slidesPerView={3}
          spaceBetween={50}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          // grabCursor={true}
          // centeredSlides={true}
          modules={[Pagination, Navigation]}
        >
          <div className="img__content">
            {topDoctors.map((doc, index) => (
              <SwiperSlide key={index} className="img__card">
                <div className="img__card_content">
                  <div className="image">
                    <img src="src\styles\1eUZSnIjT09CQq5Sj14XkBw.jpg" />
                  </div>
                  <div className="name-profession">
                    <span className="name hfont">{doc.name}</span>
                    <span className="department hfont">{doc.department}</span>
                  </div>
                  <div className="hospital_name hfont">{doc.hospital}</div>
                  <div className="rating hfont">
                    <Stars stars={doc.rating} />
                  </div>
                  <Button
                    className="img__btn"
                    onClick={() => {
                      navigate("/directBook");
                    }}
                  >
                    View Info
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </>
  );
}

export default WaterCard;
