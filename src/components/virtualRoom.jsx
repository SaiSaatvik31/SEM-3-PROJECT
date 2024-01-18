import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { addMinutes, format, parse } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(6),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[2],
}));

export default function VirtualRoom() {
  const [todayDayName, setTodayDayName] = useState("");
  const [slot, setSlot] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [doctorName, setDoctorName] = useState("");
  const [m_data, setData] = useState({});

  useEffect(() => {
    const getTodayDayName = () => {
      const today = new Date();
      const options = { weekday: "long" };
      const dayName = new Intl.DateTimeFormat("en-US", options).format(today);
      setTodayDayName(dayName);
    };
    getTodayDayName();
  }, []);

  const handleSlotClick = (selectedSlot) => {
    setSelectedSlot(selectedSlot);
    console.log(m_data);
  };

  const asyncFn = async (value) => {
    try {
      console.log("hello");
      const response = await fetch("/api/virtual", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value }),
      });
      const data = await response.json();
      console.log("checking");
      console.log(data);
      setData(data);
      setDoctorName(data.m_data.doctor_name);
      setSlot(data.m_data.schedule[`${todayDayName}`].slot);
    } catch (err) {
      console.log(err);
    }
  };

  const addMinutesToCurrentDate = (minutesToAdd, slot) => {
    const currentDate = new Date();
    const [start, end] = slot.split("-").map((time) => time.trim());

    const startDate = parse(start, "hh:mm aa", new Date());
    const updatedDate = addMinutes(startDate, minutesToAdd);

    return format(updatedDate, "hh:mm aa");
  };

  return (
    <>
      <div className="m-3">
        <label className="block text-lg font-medium mb-2" htmlFor="doctor_name">
          Enter the Doctor Name:
        </label>
        <input
          onKeyDown={(e) => {
            e.key === "Enter" ? asyncFn(e.target.value) : null;
          }}
          type="text"
          id="doctor_name"
          placeholder="Enter doctor Name"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {Object.keys(slot).map((element, index) => (
          <Button onClick={() => handleSlotClick(element)} key={index}>
            {element}
          </Button>
        ))}
        <p>Slot Starts at: {selectedSlot}</p>
        <div className="m-5">
          <div className="flex flex-row justify-between">
            <div className="flex-grow-1">
              {
                <Box sx={{ flexGrow: 1 }}>
                  <Grid
                    container
                    spacing={{ xs: 2, md: 10 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    className={{ backgroundColor: "#00df9a" }}
                  >
                    <Grid xs={2} sm={4} md={7}>
                      <AnimatePresence>
                        {doctorName && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                          >
                            <Item style={{ backgroundColor: "#00df9a" }}>
                              <h1 className="text-white">{doctorName}</h1>
                            </Item>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Grid>
                  </Grid>
                </Box>
              }
            </div>
            <div className="flex-grow-1">
              <Grid
                container
                spacing={{ xs: 2, md: 10 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <AnimatePresence>
                  <Grid xs={2} sm={4} md={5}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 2 }}
                      exit={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <Item style={{ backgroundColor: "#00df9a" }}>
                        <h1 className="text-white">Receptionist</h1>
                      </Item>
                    </motion.div>
                  </Grid>
                </AnimatePresence>
              </Grid>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="col-9 m-5">
              <Grid
                container
                spacing={{ xs: 2, md: 10 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {selectedSlot &&
                  slot[selectedSlot].patient_list.map((patient, index) => (
                    <Grid xs={2} sm={4} md={4} key={index}>
                      <AnimatePresence>
                        {patient.patient_name && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                          >
                            <Item style={{ backgroundColor: "#00df9a" }}>
                              <p className="text-white">
                                Patient Name: {patient.patient_name}
                              </p>
                              <p className="text-white">
                                Patient Estimated Waiting Time:
                                {patient.waiting_time}
                              </p>
                              <p className="text-white">
                                Patient Visiting Time:{" "}
                                {addMinutesToCurrentDate(
                                  parseInt(patient.waiting_time, 10),
                                  selectedSlot
                                )}
                              </p>
                            </Item>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Grid>
                  ))}
              </Grid>
            </div>
            <div className="col-3 border-l-4 border-l-emerald-400 p-4">
              <h1 className="text-2xl font-bold text-decoration-underline">
                Summary
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
