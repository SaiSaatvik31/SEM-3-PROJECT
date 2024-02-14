import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Slider, Button, Typography } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import {motion} from "framer-motion"
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
      color:"white"
    },
    {
      value: 50,
      label: "Grown",
    },
    {
      value: 100,
      label: "Old",
    },
  ];

  return (
    <div className="text-white bg_all"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        // backgroundImage: "linear-gradient(to bottom, #f4f4f4, #e5e5e5)", 
        backgroundColor:"white",
      }}
    >
      <Card
      
        sx={{

          minWidth: 350,
          maxWidth: 800,
          bgcolor: "white",
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
          <Typography className= "text-[rgb(40,48,115)]" variant="h3" sx={{ mb: 3 }}>
            What's Your Age?
          </Typography>
         

            <Slider
              value={sliderValue}
              onChange={handleSliderChange}
              sx={{ 
                width: 700, 
                mt: 3,
                color: 'rgb(40,48,115)', // Set the color of the slider track
                '& .MuiSlider-thumb': {
                  backgroundColor: 'rgb(40,48,115)', // Set the color of the slider thumb
                },
                '& .MuiSlider-valueLabel': {
                  color: 'rgb(40,48,115)', // Set the color of the value label
                },
                '& .MuiSlider-markLabel': {
                  color: 'rgb(40,48,115)', // Set the color of the mark labels
                },
              }}
              valueLabelDisplay="auto"
              defaultValue={20}
              max={100}
              marks={mark}
            />



          <Typography className="text-rgb(40,48,115) " variant="h5" sx={{ mt: 3, mb: 2 }}>
           
            Your Age is: {sliderValue}
          </Typography>
          <motion.button
        className={`bg-[rgb(40,48,115)] text-white w-[200px] rounded-md font-medium px-6 mx-auto py-3 mt-3`}
        initial="hidden"
        onClick={FormPage}
        animate="buttonSlide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        NEXT
      </motion.button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Age;
