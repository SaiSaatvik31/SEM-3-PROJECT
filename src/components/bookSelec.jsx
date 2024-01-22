import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function BookSelec({ selectedOptions, updateSelectedOptions }) {
  console.log(selectedOptions);
  const navigate = useNavigate();
  const [updatedOptions, setUpdatedOptions] = useState(selectedOptions);

  const handleNext = (booking) => {
    const updatedList = { ...updatedOptions, book_type: booking };
    setUpdatedOptions(updatedList);
    updateSelectedOptions(updatedList);
    console.log("0");
    console.log(updatedList);
    if (booking === "Advance Booking") {
      navigate("/advBook", { state: updatedList });
    } else if (booking === "Normal Booking") {
      navigate("/slotPage", { state: updatedList });
    } else {
   
      navigate("/onlineConsultation", { state: updatedList });
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#000000]">
        <div className="flex-grow m-5">
          <Navbar />
          <div className="flex flex-row">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="m-3 text-white"
            >
              <button
                className="bg-[#00df9a] p-3 rounded-md hover:scale-110 duration-150"
                onClick={() => handleNext("Advance Booking")}
              >
                ADVANCE BOOKING
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="m-3 text-white"
            >
              <button
                className="bg-[#00df9a] p-3 rounded-md hover:scale-110 duration-150"
                variant="contained"
                onClick={() => handleNext("Normal Booking")}
              >
                NORMAL BOOKING
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="m-3 text-white"
            >
              <button
                className="bg-[#00df9a] p-3 rounded-md hover:scale-110 duration-150"
                variant="contained"
                onClick={() => handleNext("Online Booking")}
              >
                ONLINE CONSULATION
              </button>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BookSelec;
