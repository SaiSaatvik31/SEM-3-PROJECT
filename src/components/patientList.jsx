import React, { useState } from "react";
import { useEffect } from "react";

import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import Presc_modal from "./presc_modal";
function PatientList() {
  const [patientData, setPatientData] = useState([]);
  useEffect(() => {
    const asyncFn = async () => {
      try {
        const token = localStorage.getItem("token");
        const userName = token
          ? JSON.parse(atob(token.split(".")[1])).name
          : null;
        console.log(userName);
        const response = await fetch("/api/patient_list", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName }),
        });
        const data = await response.json();
        setPatientData(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    asyncFn();
  }, []);
  return (
    <>
      <h1>fhhbhfdbhf</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell>Symptoms</TableCell>
            <TableCell>Add Prescription</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patientData.map((elem, index) => (
            <TableRow>
              <TableCell>{elem.name}</TableCell>
              <TableCell>
                {elem.symptoms.map((item, index) => (
                  <p>{item.label}</p>
                ))}
              </TableCell>
              <Presc_modal />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default PatientList;
