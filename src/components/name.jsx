import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Name({ selectedOptions, updateSelectedOptions }) {
  const [buttonColor1, setButtonColor1] = useState("#00df9a");
  const [buttonColor2, setButtonColor2] = useState("#00df9a");
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
    setButtonColor2("#000000");
    setButtonColor1("#00df9a");
    const updatedOptions = { ...selectedOptions, gender: gender };
    updateSelectedOptions(updatedOptions);
    console.log(updatedOptions);
  };

  const handleGenderSelection2 = (gender) => {
    setButtonColor1("#000000");
    setButtonColor2("#00df9a");
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
      (buttonColor1 === "#00df9a" || buttonColor2 === "#00df9a")
    ) {
      navigate("/Age");
    }
  };

  return (
    <>
      <div
        style={{ backgroundColor: "white", height: "100vh" }}
        className="p-3  name"
      >
        <br /><br /><br />
        <label className="mt-3 text-[rgb(40,48,115)] " htmlFor="name">
          Enter Your Name
        </label>
        <form
          onChange={(e) => {
            e.preventDefault();
          }}
        >
          <input
            onBlur={functionRequired}
            className="form-control mt-2 col-4"
            id="name"
            type="text"
            placeholder="Please Enter Your Name"
            required
          />
          <p className="text-red-600">{required}</p>
          <label className="mt-5 col-12 text-[rgb(40,48,115)]" htmlFor="gender">
            Select Your Gender
          </label>
          <div className="d-flex flex-row mt-4">
            <div className="mr-5">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleGenderSelection1("MALE");
                }}
                variant="contained"
                className="p-3"
                style={{ width: "150px",color:"white", backgroundColor: "rgb(40,48,115)" }}
              >
                <i class="fa-solid fa-mars-stroke-up p-2"></i>
                MALE
              </button>
            </div>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleGenderSelection2("FEMALE");
                }}
                variant="contained"
                className="p-3"
                style={{ width: "150px", color:"white", backgroundColor: "rgb(40,48,115)" }}
              >
                <i class="fa-solid fa-venus p-2"></i>
                FEMALE
              </button>
            </div>
          </div>
          <br />
          <div className="d-flex flex-row ">
            <div className="mr-5">
              <Button
                className="mt-5"
                onClick={forWhomPage}
                variant="contained"
                color="success"
                style={{ backgroundColor: "rgb(40,48,115)" }}
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
                type="submit"
                style={{ backgroundColor: "rgb(40,48,115)" }}
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
