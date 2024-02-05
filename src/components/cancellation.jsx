import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Cancellation_m from "./cancellation_m";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(6),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[2],
}));
function Cancellation() {
  const [m_data, setData] = useState([]);

  useEffect(() => {
    const asyncFn = async () => {
      const token = localStorage.getItem("token");
      const email = token ? JSON.parse(atob(token.split(".")[1])).email : null;
      console.log(email);
      const response = await fetch("/api/cancellation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setData(data.data || []);
    };

    asyncFn();
  }, []);

  return (
    <div>
      <h1 className="text-[#00df9a] text-2xl">Cancel Your Bookings</h1>
      <p className="text-2xl">Select the booking that you want to cancel:</p>
      {m_data.map((element, index) => (
        <Grid key={index}>
          <Item>
            <p>Name: {element.name}</p>
            <p>Gender: {element.gender}</p>
            <p>Age: {element.Age}</p>
            <p>For Whom: {element.forWhom}</p>
            {element.symptoms.map((item, m_index) => (
              <p key={m_index}>Symptoms: {item.label}</p>
            ))}
            <p>Hospital Name: {element.hospital}</p>
            <p>Doctor Name: {element.doct_name}</p>
            <p>Slot time: {element.slot ? element.slot : element.time}</p>
            <p>Booked Day:{element.day}</p>
            <div className="flex justify-end">
              <Cancellation_m
                id={element.booking_id}
                doct_name={element.doct_name}
                day={element.day}
                slot={element.slot ? element.slot : element.time}
                name={element.name}
                waitingTime={element.waiting_time}
              />
            </div>
          </Item>
        </Grid>
      ))}
    </div>
  );
}

export default Cancellation;
