import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Slider, Button, Typography } from "@mui/material";
function Age({ selectedOptions, updateSelectedOptions }) {
  const navigate = useNavigate();
  const [sliderValue, setSliderValue] = useState(0);

  const FormPage = () => {
    if (selectedOptions.Age <= 6) {
      navigate("/userInfo", { state: selectedOptions });
    } else {
      navigate("/formPage", { state: selectedOptions });
    }
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
        backgroundImage: "linear-gradient(to bottom, #f4f4f4, #e5e5e5)", 
      }}
    >
      <Card
        sx={{
          minWidth: 350,
          maxWidth: 800,
          bgcolor: "#fff",
          boxShadow: 2,
          borderRadius: 10,
          padding: 10,
        }}
      >
        <CardContent
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" sx={{ mb: 3 }}>
            What's Your Age?
          </Typography>
          <Slider
            value={sliderValue}
            onChange={handleSliderChange}
            sx={{ width: 700, mt: 3 }}
            valueLabelDisplay="auto"
            color="primary"
            defaultValue={20}
            max={120}
            marks={mark}
          />
          <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
            Your Age is: {sliderValue}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: 200, mt: 3 }} // Adjust button width and spacing
            onClick={FormPage}
          >
            NEXT
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Age;
