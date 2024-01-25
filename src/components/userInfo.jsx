import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer1 from "../n_compo/footer1"; 
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/userInfo.css";
import { HashLoader } from "react-spinners";
import { timeout } from "webgi";

function UserInfo() {
  let [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [img, setImg] = useState("");

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
  const time = () => {
    if (location.state.book_type === "Advance Booking") {
      return location.state.time;
    } else {
      return location.state.booked_time;
    }
  };
  const waiting = () => {
    if (location.state.book_type === "Advance Booking") {
      return "No waiting Time(Advance Booking)";
    } else {
      return location.state.time + "minutes";
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
        className="container m-5 p-4 rounded-lg shadow-md text-large "
        style={{ background: "#f3f9fc" }}
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
            <div className="col-md-6 text-lg">
              <h2 className="mb-4">Your Appointment Information</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Doctor:</strong> {location.state.doct_name}
                </li>
                <li className="list-group-item">
                  <strong>Hospital:</strong> {location.state.hospital}
                </li>
                <li className="list-group-item">
                  <strong>Appointment Time:</strong>
                  {time()}
                </li>
                <li className="list-group-item">
                  <strong>Estimated Waiting Time:</strong> {waiting()}
                </li>
                <li className="list-group-item">
                  <strong>Booking Type:</strong> {location.state.book_type}
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
            <div className="col-md-6 text-lg">
              <h2 className="mb-4">Your Personal Information</h2>
              <div className="card mb-3">
                <div className="card-body flex justify-center">
                  <img
                    className="card-img-top rounded-circle w-20"
                    src={img}
                    alt="User"
                  />
                  <ul className="list-group list-group-flush">
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
      <Footer1/>
    </>
  );
}

export default UserInfo;
