import { React, useState, useEffect } from "react";
import "../styles/WaterCard.css";
import Stars from "./HomeStars.jsx";
import { Button } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import botImg from "../chatbot.jpg";
import direct_book from "../direct_book.jpg";
import online_cons from "../online_cons.jpg";
import waiting from "../waiting.jpg";
import symptom from "../symptom_detect.jpg";
import v_room from "../v_room.jpeg";
import bot from "../botAI.jpeg";
import find from "../find.jpeg";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
function Services() {
  const navigate = useNavigate();
  const handleClick = (nav) => {
    if (nav === "ChatBot") {
      navigate("/chatBot");
    } else if (nav === "Virtual Waiting Room") {
      navigate("/virtualRoom");
    } else if (nav === "Find a Doctor") {
      navigate("/directBook");
    } else navigate("/book-appointment");
  };
  const topDoctors = [
    {
      name: "ChatBot",
      info: "Provides automated responses to common queries.",
      img: bot,
    },
    {
      name: "Virtual Waiting Room",
      info: "Allows patients to wait virtually for their appointments.",
      img: v_room,
    },
    {
      name: "Symptom Detection",
      info: "Helps in detecting symptoms.",
      img: symptom,
    },
    {
      name: "Online Consultation",
      info: "Enables remote consultations with available doctors.",
      img: online_cons,
    },
    {
      name: "Direct Booking",
      info: "Allows patients to book appointments directly with the doctors.",
      img: direct_book,
    },
    {
      name: "Find a Doctor",
      info: "Allows patients to Find the Doctor according to personal choice.",
      img: find,
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
                    <img src={doc.img} />
                  </div>
                  <div className="name-profession">
                    <span className="name">{doc.name}</span>
                    <span className="department">{doc.info}</span>
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
