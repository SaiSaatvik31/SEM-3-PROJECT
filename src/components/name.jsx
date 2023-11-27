import React from "react";
import { Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./App.css";
function Name() {
  const navigate = useNavigate();
  const forWhomPage = () => {
    navigate("/Age");
  };
  return (
    <>
      <div className="container">
        <label className="mt-5" for="name">
          Enter Your Name
        </label>
        <input
          className="form-control mt-3"
          id="name"
          type="text"
          placeholder="Please Enter Your Name"
        />
        <label className="mt-5 col-12" for="gender">
          Select Your Gender
        </label>
        <div className="d-flex flex-row mt-4">
          <div className="mr-5">
            <Button onClick={forWhomPage} variant="contained" color="primary">
              <i class="fa-solid fa-mars-stroke-up m-3 p-2"></i>
              MALE
            </Button>
          </div>
          <div>
            <Button onClick={forWhomPage} variant="contained" color="primary">
              <i class="fa-solid fa-venus m-3 p-2"></i>
              FEMALE
            </Button>
          </div>
        </div>
        <br />
        <Button
          className="mt-5"
          onClick={forWhomPage}
          variant="contained"
          color="success"
        >
          NEXT
        </Button>
      </div>
    </>
  );
}

export default Name;
