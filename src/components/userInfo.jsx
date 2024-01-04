import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/userInfo.css";
function UserInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const [img, setImg] = useState("");

  // Animate the symptom list
  const [symptoms, setSymptoms] = useState([""]);
  const symptomsList = () => {
    if (location.state.Age <= 6) {
      return;
    } else {
      return (
        <>
          <p>Symptoms are:</p>
          <ul style={{ fontSize: "18px" }}>
            {symptoms.map((symptom) => (
              <li
                key={symptom.key}
                style={{ opacity: symptom.visible ? 1 : 0 }}
              >
                {symptom.label}
              </li>
            ))}
          </ul>
        </>
      );
    }
  };
  const callSpecialist = () => {
    if (location.state.Age <= 6) {
      return <p>We recommend you to consult Pediatrician</p>;
    } else {
      return <p>We recommend you to consult {location.state.speciality}</p>;
    }
  };

  useEffect(() => {
    const animateSymptoms = () => {
      if (location.state.symptoms && location.state.symptoms.length > 0) {
        const animatedSymptoms = location.state.symptoms.map((symptom) => ({
          ...symptom,
          visible: false,
        }));
        setSymptoms(animatedSymptoms);

        let index = 0;
        const timer = setInterval(() => {
          if (index < animatedSymptoms.length) {
            const newSymptoms = [...animatedSymptoms];
            newSymptoms[index].visible = true;
            setSymptoms(newSymptoms);
            index++;
          } else {
            clearInterval(timer);
          }
        }, 100);
      }
    };
    animateSymptoms();
  }, [location.state.symptoms]);

  // Update user image based on gender
  useEffect(() => {
    if (location.state.gender === "FEMALE") {
      setImg(
        "https://harunmudak.com/wp-content/uploads/2020/12/girl-cartoon-characters-1.jpg"
      );
    } else if (location.state.gender === "MALE") {
      setImg(
        "https://cdn.pixabay.com/photo/2023/04/26/09/25/ai-generated-7951983_1280.png"
      );
    } else {
      setImg(
        "https://www.seekpng.com/png/detail/215-2159746_generic-user-icon-png.png"
      );
    }
  }, [location.state.gender]);

  return (
    <>
      <Navbar />
      <Outlet />
      <div
        className="m-5 p-5"
        style={{
          background: `linear-gradient(to right, #dfe9f3, #f3f9fc)`,
          borderRadius: "10px",
        }}
      >
        <div className="d-flex flex-row justify-content-between">
          <div className="w-full">
            <h1
              className="head animate__animated animate__fadeInLeft"
              style={{ fontWeight: "bold", fontSize: "35px" }}
            >
              YOUR FORM HAS BEEN SUCCESSFULLY SUBMITTED
            </h1>
            <div style={{ fontSize: "20px" }} className="mt-3">
              <p>Name of the person is: {location.state.name}</p>
              <p>Gender: {location.state.gender}</p>
              <p>Age of the person is: {location.state.Age}</p>
              <p>
                For whom the person is filling the Form:{" "}
                {location.state.forWhom}
              </p>
              {symptomsList()}
              {callSpecialist()}
              <p>Doctor:{location.state.doct_name}</p>
              <p>Hospital Name:{location.state.hospital}</p>
              <p>Your Estimated Waiting Time:{location.state.time} minutes</p>
            </div>
          </div>
          <div className="position-relative">
            <img
              className="w-50 shadow animate__animated animate__zoomIn"
              src={img}
              alt="User"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserInfo;
