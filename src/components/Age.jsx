import React from "react";
import { useState } from "react";
import { Slider } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Age({ selectedOptions, updateSelectedOptions }) {
  const navigate = useNavigate();
  const [sliderValue, setSliderValue] = useState(0);

  const FormPage = () => {
    navigate("/formPage");
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    const updatedOptions = { ...selectedOptions, Age: newValue };
    updateSelectedOptions(updatedOptions);
    console.log(updatedOptions);
  };

  const mark = [
    {
      value: 0,
      label: "Baby",
    },
    {
      value: 60,
      label: "Grown",
    },
    {
      value: 120,
      label: "Amoghs Age",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "30px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          style={{ width: 900 }}
          valueLabelDisplay="auto"
          color="secondary"
          defaultValue={20}
          max={120}
          marks={mark}
        />
        <p>Your Age is: {sliderValue}</p>
        <Button
          className="mt-3"
          onClick={FormPage}
          variant="contained"
          color="success"
        >
          NEXT
        </Button>
      </div>
    </div>
  );
}

export default Age;
