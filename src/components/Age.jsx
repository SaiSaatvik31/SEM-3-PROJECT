import React from "react";
import { useState } from "react";
import { Slider } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Age({ selectedOptions, updateSelectedOptions }) {
  const navigate = useNavigate();
  const [sliderValue, setSliderValue] = useState(0);

  const FormPage = () => {
    navigate("/formPage", { state: selectedOptions });
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
        backgroundColor: "#f0f0f0",
      }}
    >
      <Card
        style={{
          minWidth: "350px",
          maxWidth: "800px",
          display: "flex",
          alignItems: "center",
          height: "70%",
        }}
      >
        <CardContent
          style={{ textAlign: "center", padding: "40px", width: "100%" }}
        >
          <h1
            style={{
              marginBottom: "30px",
              fontFamily: "Arial, sans-serif",
              fontSize: "28px",
            }}
          >
            What's Your Age?
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Slider
              value={sliderValue}
              onChange={handleSliderChange}
              style={{ width: "700px", margin: "0 auto" }}
              valueLabelDisplay="auto"
              color="secondary"
              defaultValue={20}
              max={120}
              marks={mark}
            />
            <p
              style={{
                marginTop: "20px",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              Your Age is: {sliderValue}
            </p>
            <Button
              className="mt-3"
              onClick={FormPage}
              variant="contained"
              color="primary"
              style={{ marginTop: "30px" }}
            >
              NEXT
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Age;
