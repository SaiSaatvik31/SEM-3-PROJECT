import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Info() {
  const navigate = useNavigate();
  const redirectToNamePage = () => {
    navigate("/forWhom");
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="d-flex flex-row">
          <div>
            <p>Doctor Adviser form</p>
            <p>
              Take a short (3 min) symptom assessment. The information you give
              is safe and won’t be shared. Your results will include:
            </p>
            <ul>
              <li>Possible causes of symptoms.</li>
              <li>Recommendations on what to do next.</li>
            </ul>
          </div>
          <div>
            <img src="https://imgs.search.brave.com/XuthvWW4tsyJpAmw5n46_r9KCEPR53kNu5GlxVuKkVA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzgxLzk5LzM0/LzM2MF9GXzgxOTkz/NDAyX3ZiWWFJN2c3/RFl3OVhBVUcxSlE3/UmtBcEdBc1ZTV0dF/LmpwZw" />
          </div>
        </div>
        <Button
          onClick={redirectToNamePage}
          variant="contained"
          color="success"
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default Info;
