import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer1 from "../n_compo/footer1";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/userInfo.css";
import boy from "../boy.jpg";
import girl from "../girl.jpg";
import middleAged from "../middle_aged.jpg";
import small_boy from "../small_boy.jpg";
import small_girl from "../small_girl.jpg";
import aged_women from "../above_60_men.jpg";
import aged_men from "../above_60_women.jpg";
import { HashLoader } from "react-spinners";
import { timeout } from "webgi";
import N_footer from "../n_compo/N_footer";

function UserInfo() {
  let [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [img, setImg] = useState("");
  console.log(location.state);
  const [symptoms, setSymptoms] = useState([""]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const symptomsList = () => {
    if (location.state.Age <= 6) {
      return;
    } else {
      return (
        <>
          {location.state.book_type === "Direct Booking" ? null : (
            <p>Symptoms are:</p>
          )}
          <ul style={{ fontSize: "18px" }}>
            {symptoms?.map((symptom) => (
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
  const time = () => {
    if (
      location.state.book_type === "Advance Booking" ||
      location.state.book_type === "Online Booking"
    ) {
      return location.state.time;
    } else {
      return location.state.booked_time;
    }
  };
  const waiting = () => {
    if (location.state.book_type === "Advance Booking") {
      return "No waiting Time(Advance Booking)";
    } else if (location.state.book_type === "Online Booking") {
      return "No waiting Time(Online Consultation)";
    } else {
      return location.state.time
        ? location.state.time + "minutes"
        : "No waiting Time(Direct Booking)";
    }
  };
  const callSpecialist = () => {
    if (location.state.Age <= 6) {
      return <p>We recommend you to consult Pediatrician</p>;
    } else if (location.state.book_type === "Direct Booking") {
      return "";
    } else {
      return <p>We recommend you to consult {location.state.speciality}</p>;
    }
  };

  useEffect(() => {
    const animateSymptoms = () => {
      if (
        Array.isArray(location.state?.symptoms) &&
        location.state.symptoms.length > 0
      ) {
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

  useEffect(() => {
    if (
      (location.state.gender === "female" ||
        location.state.gender === "FEMALE") &&
      location.state.Age > 60
    ) {
      setImg(aged_women);
    } else if (
      (location.state.gender === "female" ||
        location.state.gender === "FEMALE") &&
      location.state.Age < 60 &&
      location.state.Age > 30
    ) {
      setImg("");
    } else if (
      (location.state.gender === "male" || location.state.gender === "MALE") &&
      location.state.Age > 60
    ) {
      setImg(aged_men);
    } else if (
      (location.state.gender === "male" || location.state.gender === "MALE") &&
      location.state.Age < 60 &&
      location.state.Age > 30
    ) {
      setImg(middleAged);
    } else if (
      (location.state.gender === "female" ||
        location.state.gender === "FEMALE") &&
      location.state.Age < 20 &&
      location.state.Age > 10
    ) {
      setImg(girl);
    } else if (
      (location.state.gender === "male" || location.state.gender === "MALE") &&
      location.state.Age < 20 &&
      location.state.Age > 10
    ) {
      setImg(boy);
    } else if (
      (location.state.gender === "male" || location.state.gender === "MALE") &&
      location.state.Age < 10
    ) {
      setImg(small_boy);
    } else if (
      (location.state.gender === "female" ||
        location.state.gender === "FEMALE") &&
      location.state.Age < 10
    ) {
      setImg(small_girl);
    }
  }, [location.state]);
  return (
    <>
      <Navbar />
      <Outlet />
      <div
        className="container m-5 p-4 rounded-lg shadow-md text-large  "
        style={{ background: "#f3f9fc", marginBottom: "500px" }}
      >
        {loading ? (
          <div className="flex justify-center">
            <HashLoader
              color="#00df9a"
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <div className="row">
            <div className="col-md-6 text-xl">
              <h2 className="mb-4">Your Appointment Information</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Doctor:</strong> {location.state.doct_name}
                </li>
                <li className="list-group-item">
                  <strong>Hospital:</strong> {location.state.hospital}
                </li>
                <li className="list-group-item">
                  <strong>Slot Time:</strong>
                  {time()}
                </li>
                <li className="list-group-item">
                  <strong>Estimated Waiting Time:</strong> {waiting()}
                </li>
                <li className="list-group-item">
                  <strong>Booking Type:</strong> {location.state.book_type}
                </li>
                <li className="list-group-item">
                  <strong>Booking Day:</strong>{" "}
                  {location.state.day
                    ? location.state.day
                    : location.state.dayName}
                </li>
                <li className="list-group-item">
                  <strong>Your Doctor Consultation Fee:</strong>{" "}
                  {`${location.state.amt} rs/-`}
                </li>
              </ul>
              <p className="small text-muted mt-3">
                Please arrive at least 5 minutes before your slot time.
              </p>
            </div>
            <div className="col-md-6 text-xl">
              <h2 className="mb-4">Your Personal Information</h2>
              <div className="card mb-3">
                <div className="card-body flex justify-center mr-5">
                  <img
                    className="card-img-top rounded-circle w-50 mr-5"
                    src={img}
                    alt="User"
                  />
                  <ul className="list-group list-group-flush ml-5">
                    <li className="list-group-item">
                      <strong>Name:</strong> {location.state.name}
                    </li>
                    <li className="list-group-item">
                      <strong>Gender:</strong> {location.state.gender}
                    </li>
                    <li className="list-group-item">
                      <strong>Age:</strong> {location.state.Age}
                    </li>
                    <li className="list-group-item">
                      <strong>Booking For:</strong> {location.state.forWhom}
                    </li>
                  </ul>
                </div>
              </div>
              {symptomsList()}
              {callSpecialist()}
            </div>
          </div>
        )}
      </div>
      <div>
        <br />
        <br />
        <br />
      </div>
      <N_footer className="mt-auto" />
    </>
  );
}

export default UserInfo;
