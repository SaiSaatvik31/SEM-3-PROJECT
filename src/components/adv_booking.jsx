import React from "react";
import { useState } from "react";
function Adv_booking() {
  const [date, setDate] = useState("");
  const handleDate = (e) => {
    console.log(e.target.value);
    let date = e.target.value;
    setDate(date);
  };

  return (
    <>
      <div className="ml-5">
        <h1 className="text-3xl font-bold text-emerald-300 mt-5 ">
          Advance Booking
        </h1>
        <input className="mt-3" onBlur={handleDate} type="date" />
        <br />
        <div className="mt-3">
          <span>Your Selected Date is:{date}</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold mt-4 text-emerald-300">
            Available Doctor List
          </h1>
        </div>
      </div>
    </>
  );
}

export default Adv_booking;
