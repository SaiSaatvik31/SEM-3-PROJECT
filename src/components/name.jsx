import React, { useState } from "react";
import { Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./App.css";
function Name() {
  const [required, setRequired] = useState("");
  const navigate = useNavigate();
  const forWhomPage = () => {
    navigate("/Age");
  };
  const functionRequired = (event) => {
    if (event.target.value === "") {
      setRequired("*REQUIRED");
    } else {
      setRequired("");
      forWhomPage();
    }
  };
  return (
    <>
      <div className="container">
        <label className="mt-5" for="name">
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
          <p className=" text-red-600">{required}</p>
          <label className="mt-5 col-12" for="gender">
            Select Your Gender
          </label>
          <div className="d-flex flex-row mt-4">
            <div className="mr-5">
              <Button
                onClick={functionRequired}
                variant="contained"
                color="primary"
              >
                <i class="fa-solid fa-mars-stroke-up m-3 p-2"></i>
                MALE
              </Button>
            </div>
            <div>
              <Button
                onClick={functionRequired}
                variant="contained"
                color="primary"
              >
                <i class="fa-solid fa-venus m-3 p-2"></i>
                FEMALE
              </Button>
            </div>
          </div>
          <br />
          <Button
            className="mt-5"
            onClick={functionRequired}
            variant="contained"
            color="success"
          >
            NEXT
          </Button>
        </form>
      </div>
    </>
  );
}

export default Name;
