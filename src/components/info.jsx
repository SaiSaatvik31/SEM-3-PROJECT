import React from "react";
import { Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Info() {
  const navigate = useNavigate();

  const redirectToNamePage = () => {
    navigate("/forWhom");
  };

  return (
    <div className="container">
      <Grid container spacing={3}>
        {/* Grid item for text content */}
        <Grid item xs={12} md={6}>
          {/* Typography for headers and paragraphs */}
          <Typography variant="h4" gutterBottom>
            Doctor Adviser Form
          </Typography>
          <Typography variant="body1" paragraph>
            Take a short (3 min) symptom assessment. The information you provide
            is safe and won’t be shared. Your results will include:
          </Typography>
          <ul>
            <li>
              {/* Typography for list items */}
              <Typography variant="body1">
                Possible causes of symptoms.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Recommendations on what to do next.
              </Typography>
            </li>
          </ul>
          {/* Button for navigation */}
          <Button
            onClick={redirectToNamePage}
            variant="contained"
            color="success"
          >
            Next
          </Button>
        </Grid>

        {/* Grid item for the image */}
        <Grid item xs={12} md={6}>
          {/* Placeholder image with defined styles */}
          <img
            src="https://via.placeholder.com/600x400" // Replace with your image URL
            alt="Doctor Adviser"
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Info;
