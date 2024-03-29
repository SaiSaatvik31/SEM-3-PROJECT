import React, { useEffect } from "react";
import { Table, TableCell, TableHead, TableBody } from "@mui/material";
import { useState } from "react";
function OnlinePatients() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userName = token ? JSON.parse(atob(token.split(".")[1])).name : null;
    const asyncFn = async () => {
      const response = await fetch("/api/onPatients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName }),
      });
      const m_data = await response.json();
      console.log(m_data);
      setData(m_data.data);
    };
    asyncFn();
  }, []);
  return (
    <>
      <div className="ml-4">
        <h1 className="mt-4 mb-3 ml-2 text-xl font-bold">
          Online Patient Record
        </h1>

        <Table>
          <TableHead>
            <TableCell>Patient Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Booking Date</TableCell>
            <TableCell>Booking Time</TableCell>
            <TableCell>Google Meet Link</TableCell>
          </TableHead>
          {data.map((elem, index) => (
            <TableBody>
              <TableCell>{elem.name}</TableCell>
              <TableCell>{elem.gender}</TableCell>
              <TableCell>{elem.Age}</TableCell>
              <TableCell>{elem.date}</TableCell>
              <TableCell>{elem.time}</TableCell>
              <TableCell>{elem.meet_link}</TableCell>
            </TableBody>
          ))}
        </Table>
      </div>
    </>
  );
}

export default OnlinePatients;
