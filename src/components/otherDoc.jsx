import Stars from "./Stars";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
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

function otherDoc() {
  const [data, setData] = useState({});
  const [combinedArray, setCombinedArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/flask/otherDoctors", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });

        const fetchedData = await response.json();
        console.log(fetchedData);
        console.log("hellll");
        setData(fetchedData);
        let combinedArray = [];
        for (let i = 0; i < 48; i++) {
          combinedArray.push({
            name: fetchedData.other_doctor_names[i],
            speciality: fetchedData.speciality[i],
            hospital: fetchedData.hospitals_name[i],
            rating: 4.8,
            review: "Excellent",
          });
        }
        setCombinedArray(combinedArray);
        console.log(combinedArray);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  const navigate = useNavigate();
  const location = useLocation();

  console.log("hiiii");

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
                <TableCell align="right">Estimated Time</TableCell>
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
                  <TableCell align="right"></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Footer style={footerStyle} />
      </div>
    </>
  );
}

export default otherDoc;
