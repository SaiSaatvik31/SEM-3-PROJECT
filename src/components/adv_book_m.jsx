import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

export default function Adv_book_m({
  doc_name,
  speciality,
  doc_avail,
  hospital,
  data,
}) {
  const [updatedList, setUpdatedList] = useState(data);
  const [slot, setSlot] = useState([]);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [color, setColor] = useState("secondary");
  const [text, setText] = useState("Book Slot");
  const asyncFunction = async () => {
    let updatedData = {
      ...updatedList,
      doct_name: doc_name,
      speciality: speciality,
      time: selectedTime,
      hospital: hospital,
    };
    console.log("checking");
    console.log(updatedData);
    setUpdatedList(updatedData);
    const i_date = updatedData.selectedDate;
    const dateObject = new Date(i_date);
    const formattedDate = dateObject.toISOString().split("T")[0];
    const response = await fetch("/api/advBookMain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hospital: updatedData.hospital,
        doct_name: updatedData.doct_name,
        book_type: updatedData.book_type,
        forWhom: updatedData.forWhom,
        name: updatedData.name,
        gender: updatedData.gender,
        Age: updatedData.Age,
        email: updatedData.email,
        time: updatedData.time,
        day: updatedData.bookedDay,
        date: formattedDate,
      }),
    });
  };
  const handleOpen = () => {
    let time = doc_avail.split(",");
    console.log(data);
    setSlot(time);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleButtonClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Book Slot</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {doc_name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {speciality}
          </Typography>
          {slot.map((time, index) => (
            <Button key={index} onClick={() => handleButtonClick(time)}>
              {time}
            </Button>
          ))}
          <Typography>
            Selected Time: {selectedTime ? selectedTime : "No selection"}
          </Typography>
          <Button color={color} onClick={asyncFunction}>
            {text}
          </Button>
          <Button
            onClick={() => {
              navigate("/userInfo", { state: updatedList });
            }}
          >
            Confirm Booking
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
