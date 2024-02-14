import { Link } from "react-router-dom";
import "../styles/n_card.css";

import { Instagram, Twitter, YouTube } from "@mui/icons-material";
import virtual_room from "../virtual_room.jpg";
import on_consultation from "../on_consultation.jpg";
import find from "../find.jpg";
import bot from "../botAI.jpeg";
import appointment from "../appointment.jpeg";
function N_service() {
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
      <div class="container">
        <div class="card__container">
          <article class="card__article">
            <img
              src="src/31447E08-961F-44AF-AE8B-79060E38C81E_1_201_a.jpeg"
              alt="image"
              class="card__img"
            />

            <div class="card__data">
              {/* <span class="card__description">Vancouver Mountains, Canada</span> */}
              <h2 class="card__title">Appointments</h2>
              {/* <a href="#" class="card__button">Read More</a> */}
            </div>
          </article>

          <article class="card__article">
            <img
              src="src/719C5E38-80FF-4B49-A400-4073A26BCA44_1_201_a.jpeg"
              alt="image"
              class="card__img"
            />

            <div class="card__data">
              {/* <span class="card__description">Poon Hill, Nepal</span> */}
              <h2 class="card__title">Online Consultation</h2>
              {/* <a href="#" class="card__button">Read More</a> */}
            </div>
          </article>

          <article class="card__article">
            <img
              src="src/D0C4DA89-64D2-4733-8F04-96F614945D1A_1_201_a.jpeg"
              alt="image"
              class="card__img"
            />

            <div class="card__data">
              {/* <span class="card__description">Bojcin Forest, Serbia</span> */}
              <h2 class="card__title">Advance Booking</h2>
              {/* <a href="#" class="card__button">Read More</a> */}
            </div>
          </article>
          <article class="card__article">
            <img
              src="src/ECF22F20-57AC-48AD-8708-D59A7E7798A5_1_201_a.jpeg"
              alt="image"
              class="card__img"
            />

            <div class="card__data">
              {/* <span class="card__description">Bojcin Forest, Serbia</span> */}
              <h2 class="card__title">Chat with AI</h2>
              {/* <a href="#" class="card__button">Read More</a> */}
            </div>
          </article>
          <article class="card__article">
            <img
              src="src/684E1C42-FE17-4B56-9C82-93694EA47627_1_201_a.jpeg"
              alt="image"
              class="card__img"
            />

            <div class="card__data">
              {/* <span class="card__description">Bojcin Forest, Serbia</span> */}
              <h2 class="card__title">Find a doctor</h2>
              {/* <a href="#" class="card__button">Read More</a> */}
            </div>
          </article>
          <article class="card__article">
            <img
              src="src/34218796-788F-4BAE-9F93-74A58A0E81CC_4_5005_c.jpeg"
              alt="image"
              class="card__img"
            />

            <div class="card__data">
              {/* <span class="card__description">Bojcin Forest, Serbia</span> */}
              <h2 class="card__title">Virtual Waiting Room</h2>
              {/* <a href="#" class="card__button">Read More</a> */}
            </div>
          </article>
          <article class="card__article">
            <img
              src="src/C77A5138-0D75-4EEB-9EAF-3834B455C81C_4_5005_c.jpeg"
              alt="image"
              class="card__img"
            />

            <div class="card__data">
              {/* <span class="card__description">Bojcin Forest, Serbia</span> */}
              <h2 class="card__title">Prescriptions</h2>
              {/* <a href="#" class="card__button">Read More</a> */}
            </div>
          </article>
          <article class="card__article">
            <img
              src="src/DCA0FE24-9821-4DFC-8892-465659D0AE6B_1_201_a.jpeg"
              alt="image"
              class="card__img"
            />

            <div class="card__data">
              {/* <span class="card__description">Bojcin Forest, Serbia</span> */}
              <h2 class="card__title">Articles</h2>
              {/* <a href="#" class="card__button">Read More</a> */}
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default N_service;
