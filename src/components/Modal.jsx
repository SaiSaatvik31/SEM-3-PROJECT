import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ stateObj, name, hospital, time }) {
  const navigate = useNavigate();
  const [updatedList, setUpdatedList] = useState(stateObj);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = () => {
    let final_options = {
      ...updatedList,
      doct_name: name,
      hospital: hospital,
      time: time,
    };
    setUpdatedList(final_options);
    console.log(final_options);
    console.log(stateObj);
    console.log(updatedList);
    const response = fetch("/amg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, hospital: hospital, department: stateObj.speciality }),
    });
    navigate("/userInfo", { state: final_options });
  };
  return (
    <div>
      <Button onClick={handleOpen}>View Info</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {hospital}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            In China as well as France, the first people to perform dentistry
            were barbers. They have been categorized into 2 distinct groups:
            guild of barbers and lay barbers. The first group, the Guild of
            Barbers, was created to distinguish more educated and qualified
            dental surgeons from lay barbers. Guild barbers were trained to do
            complex surgeries. The second group, the lay barbers, were qualified
            to perform regular hygienic services such as shaving and tooth
            extraction as well as basic surgery. However, in 1400, France made
            decrees prohibiting lay barbers from practicing all types of
            surgery. In Germany as well as France from 1530 to 1575 publications
            completely devoted to dentistry were being published. Ambroise Paré,
            often known as the Father of Surgery, published his own work about
            the proper maintenance and treatment of teeth. Ambroise Paré was a
            French barber surgeon who performed de
          </Typography>
          <Button
            onClick={handleClick}
            className="mt-5"
            variant="contained"
            color="success"
          >
            BOOK APPOINTMENT
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
