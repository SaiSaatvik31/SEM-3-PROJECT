import React, { useState } from "react";
import Navbar from "./Navbar";
import N_footer from "../n_compo/n_footer";
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
      <div className="flex flex-col min-h-screen bg-white text-[rgb(40,48,115)]">
        <div className="flex-grow m-5">
          <Navbar />

          <div className="flex flex-col items-center justify-center mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-6 text-center"
            >
              <h1 className="text-4xl font-bold">Choose Your Booking Type</h1>
              <p className="text-lg mt-2 hfont">
                Select the type of appointment that suits your needs.
              </p>
            </motion.div>

            <div className="flex flex-row space-x-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <button
                  className="bg-[rgb(40,48,115)] text-white p-4 rounded-md hover:scale-110 duration-150"
                  onClick={() => handleNext("Advance Booking")}
                >
                  ADVANCE BOOKING
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <button
                  className="bg-[rgb(40,48,115)] text-white p-4 rounded-md hover:scale-110 duration-150"
                  onClick={() => handleNext("Normal Booking")}
                >
                  NORMAL BOOKING
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <button
                  className="bg-[rgb(40,48,115)] text-white p-4 rounded-md hover:scale-110 duration-150"
                  onClick={() => handleNext("Online Booking")}
                >
                  ONLINE CONSULTATION
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        <N_footer />
      </div>
    </>
  );
}

export default BookSelec;
