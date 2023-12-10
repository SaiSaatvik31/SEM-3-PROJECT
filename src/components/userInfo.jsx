import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/userInfo.css";
function UserInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const [img, setImg] = useState("");

  const onHandle = () => {
    return location.state.symptoms.map((symptom) => (
      <li key={symptom.key}>{symptom.label}</li>
    ));
  };

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
      setImg("");
    }
  }, [location.state.gender]);

  return (
    <>
      <div className="m-5 p-5 d-flex flex-row justify-content-between">
        <div className="w-full">
          <h1 className="head" style={{ fontWeight: "bold", fontSize: "35px" }}>
            YOUR FORM HAS BEEN SUCCESSFULLY SUBMITTED
          </h1>
          <div style={{ fontSize: "30px" }} className="mt-3">
            <p>Name of the person is: {location.state.name}</p>
            <p>Gender: {location.state.gender}</p>
            <p>Age of the person is: {location.state.Age}</p>
            <p>
              For whom the person is filling the Form: {location.state.forWhom}
            </p>
            <p>Symptoms are:</p>
            <ul>{onHandle()}</ul>
          </div>
        </div>
        <div>
          <img className="w-50 pl-5" src={img} alt="User" />
        </div>
      </div>
    </>
  );
}

export default UserInfo;
