import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
    } else {
      navigate("/slotPage", { state: updatedList });
    }
  };
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow m-5">
          <Navbar />
          <Button onClick={() => handleNext("Advance Booking")}>
            ADVANCE BOOKING
          </Button>
          <Button onClick={() => handleNext("Normal Booking")}>
            NORMAL BOOKING
          </Button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BookSelec;
