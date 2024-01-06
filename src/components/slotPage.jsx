import Stars from "./Stars";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
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
    });
  }
  const slotPageStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  const mainContentStyle = {
    flex: 1,
    paddingBottom: "60px", // Adjust the padding to accommodate the footer's height
  };

  const footerStyle = {
    flexShrink: 0, // Prevents the footer from being resized
  };
  const handleClick = () => {
    navigate("/otherDoctors");
  };
  return (
    <>
      <Outlet />
      <div style={slotPageStyle}>
        <Navbar />
        <div style={mainContentStyle} className="m-5">
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Doctor Name</TableCell>
                <TableCell align="left">Speciality</TableCell>
                <TableCell align="left">Hospital</TableCell>
                <TableCell align="center">Ratings</TableCell>
                <TableCell align="right">Estimated Waiting Time</TableCell>
                <TableCell align="right">Book Appointment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {combinedArray.map((doctor, index) => (
                <TableRow key={index}>
                  <TableCell>{doctor.name}</TableCell>
                  <TableCell align="left">{doctor.speciality}</TableCell>
                  <TableCell align="left">{doctor.hospital}</TableCell>
                  <TableCell align="center">
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
                  <TableCell align="right">{doctor.time} minutes</TableCell>
                  <TableCell align="right">
                    <Modal
                      stateObj={updatedList}
                      name={doctor.name}
                      hospital={doctor.hospital}
                      time={doctor.time}
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
            onClick={handleClick}
          >
            Choose Other Doctors
          </Button>
        </div>
        <Footer style={footerStyle} />
      </div>
    </>
  );
}

export default SlotPage;
