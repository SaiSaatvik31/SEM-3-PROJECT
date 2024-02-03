import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stars from "./Stars";
import { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Modal_rate({
  updateStatus,
  docName,
  name,
  Age,
  book_type,
  main_status,
}) {
  const [open, setOpen] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rating, setRating] = React.useState(0);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const handleRating = async (m_rating, docName) => {
    const response = await fetch("/api/handleRating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ m_rating: m_rating, docName }),
    });
    const response1 = await fetch("/flask/rating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ docName }),
    });
  };
  return (
    <div>
      {main_status === "Completed" ? (
        <Button onClick={handleOpen} disabled>
          Booking Completed
        </Button>
      ) : (
        <Button onClick={handleOpen} disabled={buttonDisabled}>
          Booking Completed
        </Button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            If your Booking is Completed please rate The doctor
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            RATE THE DOCTOR:{docName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Stars stars={rating} onRatingChange={handleRatingChange} />
          </Typography>
          <Button
            onClick={() => {
              handleRating(rating, docName);
              setButtonDisabled(true);
              updateStatus(docName, name, Age, book_type);
            }}
            disabled={buttonDisabled}
          >
            Confirm Rating
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
