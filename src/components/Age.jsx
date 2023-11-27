import React from "react";
import { useState } from "react";
import { Slider } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Age() {
  const navigate = useNavigate();
  const [sliderValue, setSliderValue] = useState(0);
  const FormPage = () => {
    navigate("/formPage");
  };
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
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
      label: "Amoghs Age  ",
    },
  ];
  return (
    <>
      <div className="text-center" style={{ marginLeft: 50, marginTop: 50 }}>
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          style={{ width: 500 }}
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
    </>
  );
}

export default Age;
