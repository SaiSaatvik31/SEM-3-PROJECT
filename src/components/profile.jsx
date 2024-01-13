import React, { useEffect, useState } from "react";
import pic from "../pro-logo.png";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  makeStyles,
  Box,
  Container,
  Grid,
  CardMedia,
} from "@mui/material";
import { borderLeft } from "@mui/system";

function Profile() {
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const email = token
          ? JSON.parse(atob(token.split(".")[1])).email
          : null;
        console.log(email);
        const response = await fetch("/api/profile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPatientData(data);
        console.log("Data received:", data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [setPatientData]);

  return (
    <Container
      className="min-h-screen"
      maxWidth="w-full"
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundColor: "#F5F5F5",
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="center" alignItems="left">
            <CardMedia
              style={{
                marginTop: 30,
                width: 450,
                height: 300,
                borderRadius: "10px",
                overflow: "hidden",
              }}
              image={pic}
              title="Profile Picture"
            />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box alignItems="left" textAlign="left">
            <h2
              className="text-3xl"
              style={{
                fontSize: "4xl",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Profile
            </h2>
            <p
              className="text-2xl"
              style={{ fontSize: "2xl", marginBottom: "10px" }}
            >
              Recent Bookings:
            </p>
            {patientData.data?.map((element, index) => (
              <Card
                key={index}
                style={{
                  marginBottom: "20px",
                  backgroundColor:
                    element.book_type == "Advance Booking"
                      ? "#D3D3D3"
                      : "#00df9a",
                  borderRadius: "10px",
                  padding: "20px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
                }}
              >
                <CardActionArea>
                  <CardContent
                    style={{
                      color: "white",
                      backgroundColor:
                        element.book_type == "Advance Booking"
                          ? "#D3D3D3"
                          : "#00df9a",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      Patient Name: {element.name}
                    </Typography>
                    <Typography>
                      Gender: {element.gender}
                      <br />
                      Age: {element.Age}
                      <br />
                      forWhom: {element.forWhom}
                      <br />
                      Book Type: {element.book_type}
                      <br />
                      Hospital: {element.hospital}
                      <br />
                      Doctor Name: {element.doct_name}
                      <br />
                      {element.day ? `Booking Day: ${element.day}` : null}
                      <br />
                      {element.time ? `Booking Time: ${element.time}` : null}
                      <br />
                      {element.date ? `Booking Date: ${element.date}` : null}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Profile;
