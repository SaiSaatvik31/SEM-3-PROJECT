import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Avatar, Tab } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function ForWhom({ selectedOptions, updateSelectedOptions }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/book-appointment");
  };

  const namePage = (forWhom) => {
    const updatedOptions = { ...selectedOptions, forWhom: forWhom };
    updateSelectedOptions(updatedOptions);
    navigate("/name");

    console.log(updatedOptions);
  };

  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <Button
            onClick={() => namePage("FOR ME")}
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            <Avatar
              alt="Image"
              src="YOUR_IMAGE_SRC_HERE"
              variant="rounded"
              sx={{ marginRight: 1 }}
            ></Avatar>
            FOR ME
          </Button>
        </div>
        <div className="col-md-6 mb-4">
          <Button
            onClick={() => namePage("SOMEONE ELSE")}
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            <Avatar
              alt="Image"
              src="YOUR_IMAGE_SRC_HERE"
              sx={{ marginRight: 1 }}
            ></Avatar>
            SOMEONE ELSE
          </Button>
        </div>
        <div className="col-12">
          <Button
            variant="outlined"
            onClick={handleBack}
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ForWhom;
