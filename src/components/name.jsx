import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Name({ selectedOptions, updateSelectedOptions }) {
  const [buttonColor1, setButtonColor1] = useState("primary");
  const [buttonColor2, setButtonColor2] = useState("primary");
  const [required, setRequired] = useState("");
  const navigate = useNavigate();

  const forWhomPage = () => {
    navigate("/forWhom");
  };

  const namePage = (name) => {
    const updatedOptions = { ...selectedOptions, name: name };
    updateSelectedOptions(updatedOptions);
    console.log(updatedOptions);
  };

  const handleGenderSelection1 = (gender) => {
    setButtonColor1("secondary");
    setButtonColor2("primary");
    const updatedOptions = { ...selectedOptions, gender: gender };
    updateSelectedOptions(updatedOptions);
    console.log(updatedOptions);
  };

  const handleGenderSelection2 = (gender) => {
    setButtonColor2("secondary");
    setButtonColor1("primary");
    const updatedOptions = { ...selectedOptions, gender: gender };
    updateSelectedOptions(updatedOptions);
    console.log(updatedOptions);
  };

  const functionRequired = (event) => {
    if (event.target.value === "") {
      setRequired("*REQUIRED");
    } else if (event.target.value !== "") {
      setRequired("");
      namePage(event.target.value);
    }
  };

  const handleNextButtonClick = () => {
    if (
      required === "" &&
      (buttonColor1 === "secondary" || buttonColor2 === "secondary")
    ) {
      navigate("/Age");
    }
  };

  return (
    <>
      <div className="container">
        <label className="mt-5" htmlFor="name">
          Enter Your Name
        </label>
        <form>
          <input
            onBlur={functionRequired}
            className="form-control mt-3"
            id="name"
            type="text"
            placeholder="Please Enter Your Name"
            required
          />
          <p className="text-red-600">{required}</p>
          <label className="mt-5 col-12" htmlFor="gender">
            Select Your Gender
          </label>
          <div className="d-flex flex-row mt-4">
            <div className="mr-5">
              <Button
                onClick={() => handleGenderSelection1("MALE")}
                variant="contained"
                color={buttonColor1}
                className="p-3"
                style={{ width: "150px" }}
              >
                <i class="fa-solid fa-mars-stroke-up p-2"></i>
                MALE
              </Button>
            </div>
            <div>
              <Button
                onClick={() => handleGenderSelection2("FEMALE")}
                variant="contained"
                color={buttonColor2}
                className="p-3"
                style={{ width: "150px" }}
              >
                <i class="fa-solid fa-venus p-2"></i>
                FEMALE
              </Button>
            </div>
          </div>
          <br />
          <div className="d-flex flex-row">
            <div className="mr-5">
              <Button
                className="mt-5"
                onClick={forWhomPage}
                variant="contained"
                color="success"
              >
                BACK
              </Button>
            </div>
            <div>
              <Button
                className="mt-5"
                onClick={handleNextButtonClick}
                variant="contained"
                color="success"
              >
                NEXT
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Name;
