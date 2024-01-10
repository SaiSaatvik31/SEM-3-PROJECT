import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Item = styled(Paper)(({ theme, index }) => ({
  // Gradient background with dynamic color choices
  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${
    index % 2 === 0 ? theme.palette.secondary.main : theme.palette.error.main
  })`,

  ...theme.typography.body2,
  padding: theme.spacing(10),
  textAlign: "center",
  color: "white",
  fontSize: "25px",

  borderRadius: 10,
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
  },
}));
const array = [
  "Todays bookings",
  "Todays Schedule",
  "Notes",
  "Online Consultation",
  "Emergency",
];
export default function doctor() {
  const navigate = useNavigate();
  async function populateQuote() {
    const req = await fetch("/api/doctor", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await req.json();
    console.log(data);
    console.log(data.doctor_name);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.removeItem("token");
    } else {
      populateQuote();
    }
  }, [navigate]);
  return (
    <div className="m-5">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {Array.from(Array(5)).map((_, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <Item index={index}>{array[index]}</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
