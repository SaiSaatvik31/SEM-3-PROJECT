import React from "react";
import { Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Info() {
  const navigate = useNavigate();

  const redirectToNamePage = () => {
    navigate("/forWhom");
  };

  return (
    <div
      className="container"
      style={{ fontSize: "20px", fontFamily: "'roboto', sans-serif" }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography className="mt-3" variant="h4" gutterBottom>
            Doctor Adviser Form
          </Typography>
          <Typography style={{ fontSize: "20px" }} variant="body1" paragraph>
            Take a short (3 min) symptom assessment. The information you provide
            is safe and won’t be shared. Your results will include:
          </Typography>
          <ul>
            <li>
              <Typography style={{ fontSize: "20px" }} variant="body1">
                Possible causes of symptoms.
              </Typography>
            </li>
            <li>
              <Typography style={{ fontSize: "20px" }} variant="body1">
                Recommendations on what to do next.
              </Typography>
            </li>
          </ul>
          <Typography className="mt-3" variant="h4" gutterBottom>
            Point to be Stated
          </Typography>
          <p className="mt-2 mb-4">
            Remember, a symptom checker serves as a helpful tool but should not
            replace professional medical advice. It should complement medical
            consultation and aid users in understanding potential health
            concerns. Always encourage users to consult with healthcare
            professionals for accurate diagnosis and treatment.
          </p>
          <Button
            onClick={redirectToNamePage}
            variant="contained"
            color="success"
          >
            Next
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <img
            src="https://imgs.search.brave.com/XuthvWW4tsyJpAmw5n46_r9KCEPR53kNu5GlxVuKkVA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzgxLzk5LzM0/LzM2MF9GXzgxOTkz/NDAyX3ZiWWFJN2c3/RFl3OVhBVUcxSlE3/UmtBcEdBc1ZTV0dF/LmpwZw"
            alt="Doctor Adviser"
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Info;
