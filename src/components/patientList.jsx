import React, { useState } from "react";
import { useEffect } from "react";

import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Presc_modal from "./presc_modal";
function PatientList() {
  const [patientData, setPatientData] = useState([]);
  const navigate = useNavigate();
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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Add Prescription</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patientData.map((elem) => (
            <TableRow key={elem.id}>
              <TableCell>{elem.name}</TableCell>
              <TableCell>{elem.gender}</TableCell>
              <TableCell>{elem.Age}</TableCell>
              {/* <TableCell key={elem.id}>
                {elem.symptoms.map((item) => (
                  <p key={item.id}>{item.label}</p>
                ))}
              </TableCell> */}
              <Button
                key={elem.id}
                onClick={() => {
                  navigate("/prescription", { state: elem.name });
                }}
              >
                Add Prescription
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default PatientList;