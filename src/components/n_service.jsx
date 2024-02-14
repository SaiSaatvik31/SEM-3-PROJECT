import { Link } from "react-router-dom";
import "../styles/n_card.css";
// import logo from '../styles/1eUZSnIjT09CQq5Sj14XkBw.jpg'
import v_room from "../v_room.jpeg";
import on_consultation from "../on_consultation.jpeg";
import find from "../find.jpeg";
import bot from "../botAI.jpeg";
import presc from "../presc.jpeg";
import appointment from "../appointment.jpeg";
import { Instagram, Twitter, YouTube } from "@mui/icons-material";

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
            <img src={appointment} alt="image" class="card__img" />

            <div class="card__data">
              {/* <span class="card__description">Vancouver Mountains, Canada</span> */}
              <h2 class="card__title">Appointments</h2>
              {/* <a href="#" class="card__button">Read More</a> */}
            </div>
          </article>

          <article class="card__article">
            <img src={online} alt="image" class="card__img" />

            <div class="card__data">
              {/* <span class="card__description">Poon Hill, Nepal</span> */}
              <h2 class="card__title">Online Consultation</h2>
              {/* <a href="#" class="card__button">Read More</a> */}
            </div>
          </article>

          <article class="card__article">
            <img src={on_consultation} alt="image" class="card__img" />

            <div class="card__data">
              {/* <span class="card__description">Bojcin Forest, Serbia</span> */}
              <h2 class="card__title">Advance Booking</h2>
              {/* <a href="#" class="card__button">Read More</a> */}
            </div>
          </article>
          <article class="card__article">
            <img src={bot} alt="image" class="card__img" />

            <div class="card__data">
              {/* <span class="card__description">Bojcin Forest, Serbia</span> */}
              <h2 class="card__title">Chat with AI</h2>
              {/* <a href="#" class="card__button">Read More</a> */}
            </div>
          </article>
          <article class="card__article">
            <img src={find} alt="image" class="card__img" />

            <div class="card__data">
              {/* <span class="card__description">Bojcin Forest, Serbia</span> */}
              <h2 class="card__title">Find a doctor</h2>
              {/* <a href="#" class="card__button">Read More</a> */}
            </div>
          </article>
          <article class="card__article">
            <img src={v_room} alt="image" class="card__img" />

            <div class="card__data">
              {/* <span class="card__description">Bojcin Forest, Serbia</span> */}
              <h2 class="card__title">Virtual Waiting Room</h2>
              {/* <a href="#" class="card__button">Read More</a> */}
            </div>
          </article>
          <article class="card__article">
            <img src={presc} alt="image" class="card__img" />

            <div class="card__data">
              {/* <span class="card__description">Bojcin Forest, Serbia</span> */}
              <h2 class="card__title">Prescriptions</h2>
              {/* <a href="#" class="card__button">Read More</a> */}
            </div>
          </article>
          <article class="card__article">
            <img src="" alt="image" class="card__img" />

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
