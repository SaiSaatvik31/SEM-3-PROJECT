import Stars from "./Stars";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Footer1 from "../n_compo/footer1";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Box,
} from "@mui/material";
import Modal from "./Modal";

function SlotPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [updatedList, setUpdatedList] = useState(location.state);

  let combinedArray = [];
  console.log("hello");
  for (let i = 0; i < location.state.doct_list.length; i++) {
    combinedArray.push({
      name: location.state.doct_list[i],
      speciality: location.state.speciality,
      hospital: location.state.hospitals_list[i],
      rating: location.state.rating[i],
      review: "Excellent",
      time: location.state.time_list[i],
      slot: location.state.slot[i],
      amt: location.state.amt[i],
    });
  }
  console.log("0");
  console.log(combinedArray);
  const slotPageStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#000000",
  };

  const mainContentStyle = {
    flex: 1,
    paddingBottom: "60px",
  };

  const footerStyle = {
    flexShrink: 0,
  };
  const handleClick = () => {
    navigate("/otherDoctors");
  };
  return (
    <>
      <Outlet />
      <div style={slotPageStyle}>
        <Navbar />
        <div style={mainContentStyle} className="m-5 text-white bg-[#000000]">
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell className="text-white">Doctor Name</TableCell>
                <TableCell className="text-white" align="left">
                  Speciality
                </TableCell>
                <TableCell className="text-white" align="left">
                  Hospital
                </TableCell>
                <TableCell className="text-white" align="center">
                  Ratings
                </TableCell>
                <TableCell className="text-white" align="right">
                  Estimated Waiting Time
                </TableCell>
                <TableCell className="text-white" align="right">
                  Time Slot
                </TableCell>
                <TableCell className="text-white" align="right">
                  Book Appointment
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {combinedArray.map((doctor, index) => (
                <TableRow key={index}>
                  <TableCell className="text-white">{doctor.name}</TableCell>
                  <TableCell className="text-white" align="left">
                    {doctor.speciality}
                  </TableCell>
                  <TableCell className="text-white" align="left">
                    {doctor.hospital}
                  </TableCell>
                  <TableCell className="text-white" align="center">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Stars stars={doctor.rating} review={doctor.review} />
                    </Box>
                  </TableCell>
                  <TableCell className="text-white" align="right">
                    {doctor.time} minutes
                  </TableCell>
                  <TableCell className="text-white" align="right">
                    {doctor.slot}
                  </TableCell>
                  <TableCell align="right">
                    <Modal
                      stateObj={updatedList}
                      name={doctor.name}
                      hospital={doctor.hospital}
                      time={doctor.time}
                      slot={doctor.slot}
                      amt={doctor.amt}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            variant="contained"
            color="success"
            className="mt-3"
            style={{ backgroundColor: "#00df9a" }}
            onClick={handleClick}
          >
            Choose Other Doctors
          </Button>
          <p>
            *(Please Note that the Estimated waiting time is shown from the
            start of the slot time. )
          </p>
        </div>
        <Footer1 style={footerStyle} />
      </div>
    </>
  );
}

export default SlotPage;
