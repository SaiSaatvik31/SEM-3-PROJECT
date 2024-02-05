import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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

export default function BasicModal({
  handleBookNow,
  selectedDoctor,
  updateState,
}) {
  const [selectDate, setSelectDate] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [slot, setSlot] = useState([]);
  const [time, setTime] = useState();
  const [mainList, setMainList] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (selectedDoctor) {
      setSelectDate(null);
    }
  }, [selectedDoctor]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const updateDoc = (doc, day) => {
    let updatedList = {
      ...updateState,
      doct_name: doc.doc_name,
      speciality: doc.speciality,
      hospital: doc.hospital_name,
      amt: "500 rupees",
      book_type: "Direct Booking",
      day: day,
    };
    setMainList(updatedList);
    console.log(updatedList);
  };
  const docHandle = async () => {
    const response = await fetch("/api/directBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mainList }),
    });
  };
  return (
    <div>
      <Button
        onClick={() => {
          handleOpen();
          handleBookNow();
        }}
      >
        Book Now
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Availability of the doctor
          </Typography>
          {selectedDoctor && (
            <>
              <h2>{selectedDoctor.doc_name}'s Availability</h2>
              {Object.keys(selectedDoctor.availability).map((day, index) => (
                <div key={index}>
                  <Button
                    disabled={!selectedDoctor.availability[day].availability}
                    onClick={() => {
                      let x =
                        selectedDoctor.availability[day].availability?.split(
                          ","
                        );
                      setSlot(x);
                      setSelectDate(
                        selectedDoctor.availability[day].availability
                      );
                      updateDoc(selectedDoctor, day);
                    }}
                  >
                    {day}:{" "}
                    {selectedDoctor.availability[day].availability ? (
                      selectedDoctor.availability[day].availability
                    ) : (
                      <>No Slots Available</>
                    )}
                  </Button>
                </div>
              ))}
            </>
          )}
          <p>Select a slot</p>
          {slot.map((elem, index) => (
            <Button
              key={index}
              onClick={() => {
                setTime(elem);
                let list_a = { ...mainList, booked_time: elem };
                setMainList(list_a);
                console.log(updateState);
              }}
            >
              {elem}
            </Button>
          ))}
          <p>{time}</p>
          {time ? (
            <Button
              onClick={() => {
                console.log(mainList);
                docHandle();
                navigate("/userInfo", { state: mainList });
              }}
              color="success"
            >
              Book Appointment
            </Button>
          ) : null}
        </Box>
      </Modal>
    </div>
  );
}
