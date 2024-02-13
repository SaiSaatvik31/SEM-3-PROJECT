import { React, useState, useEffect } from "react";
import "../styles/WaterCard.css";
import Stars from "./HomeStars.jsx";
import { Button } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
function Services() {
  const navigate = useNavigate();
  const handleClick = (nav) => {
    if (nav === "ChatBot") {
      navigate("/chatBot");
    } else if (nav === "Virtual Waiting Room") {
      navigate("/virtualRoom");
    } else navigate("/book-appointment");
  };
  const topDoctors = [
    {
      name: "ChatBot",
      info: "Provides automated responses to common queries.",
    },
    {
      name: "Virtual Waiting Room",
      info: "Allows patients to wait virtually for their appointments.",
    },
    {
      name: "Symptom Detection",
      info: "Helps in detecting symptoms if you are not sure about your disease",
    },
    {
      name: "Online Consultation",
      info: "Enables remote consultations with available doctors.",
    },
    {
      name: "Direct Booking",
      info: "Allows patients to book appointments directly with the doctors.",
    },
  ];

  return (
    <>
      <div className="img__container d-flex flex-column">
        <h1>Services We Offer</h1>
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
                    <span className="department hfont">{doc.info}</span>
                  </div>

                  <Button
                    className="img__btn"
                    onClick={() => {
                      handleClick(doc.name);
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

export default Services;
