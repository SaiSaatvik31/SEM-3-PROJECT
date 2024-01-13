import React, { useState } from "react";
import { Button, Modal } from "@mui/material";
import Adv_book_m from "./adv_book_m";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Box,
} from "@mui/material";
function Adv_booking({ selectedOptions, updateSelectedOptions }) {
  console.log(selectedOptions);
  const [day, setDay] = useState("");
  const [docData, setDocData] = useState([]);
  const [updatedList, setUpdatedList] = useState(selectedOptions);
  const handleDay = async (selectedDay) => {
    setDay(selectedDay);
    let updatedData = { ...updatedList, bookedDay: selectedDay };
    setUpdatedList(updatedData);
    console.log(updatedData);
    console.log(updatedList);
    await displayDoc(selectedDay);
  };
  async function displayDoc(day) {
    try {
      const response = await fetch("/api/advBook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ day: day }),
      });
      const data = await response.json();
      console.log(data.doc_list);
      setDocData(data.doc_list);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="ml-5">
        <h1 className="text-3xl font-bold text-emerald-300 mt-5 ">
          Advance Booking
        </h1>
        <br />
        <div className="p-4">
          <Button id="monday" onClick={() => handleDay("Monday")}>
            Monday
          </Button>
          <Button id="tuesday" onClick={() => handleDay("Tuesday")}>
            Tuesday
          </Button>
          <Button id="wednesday" onClick={() => handleDay("Wednesday")}>
            Wednesday
          </Button>
          <Button id="thursday" onClick={() => handleDay("Thursday")}>
            Thursday
          </Button>
          <Button id="friday" onClick={() => handleDay("Friday")}>
            Friday
          </Button>
          <Button id="saturday" onClick={() => handleDay("Saturday")}>
            Saturday
          </Button>
          <Button id="sunday" onClick={() => handleDay("Sunday")}>
            Sunday
          </Button>
        </div>
        <div>
          <h1 className="text-3xl font-bold mt-4 text-emerald-300">
            Available Doctor List
          </h1>
        </div>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Doctor Name</TableCell>
              <TableCell align="center">Speciality</TableCell>
              <TableCell align="center">Avaiable Slots</TableCell>
              <TableCell align="center">Book Appointment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {docData.map((doctor, index) => (
              <TableRow key={index}>
                <TableCell>{doctor.doc_name}</TableCell>
                <TableCell align="center">{doctor.speciality}</TableCell>
                <TableCell align="center">
                  {doctor.availability
                    ? doctor.availability
                    : "No Slot Available"}
                </TableCell>
                <TableCell align="center">
                  {doctor.availability ? (
                    <Adv_book_m
                      doc_name={doctor.doc_name}
                      speciality={doctor.speciality}
                      doc_avail={doctor.availability}
                      hospital={doctor.hospital}
                      data={updatedList}
                    />
                  ) : (
                    <Button disabled>No Slots</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
export default Adv_booking;
