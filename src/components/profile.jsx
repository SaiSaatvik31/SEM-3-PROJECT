import React, { useState, useEffect } from "react";
import "../styles/profile.css";
import goku from "../goku.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate()
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Set a timeout to show content after 2 seconds
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timeout);
  }, []);

  const handleRecBook = ()=>{
    navigate('/recBook')
  }
  const handleCancelBook = () => {
    navigate('/cancellation')
  }

  return (
    <>
      <div className="container">
        <div className="home__rectangle"></div>
        <div className={`perfil ${showContent ? "show-content" : ""}`}>
          <div className="perfil__content text-center">
            <img src={goku} className="perfil__img" alt="Goku" />
          </div>
        </div>
        <div className="text-content mt-10 ">
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
            >
              <p className="text-white text-3xl header-font">Profile</p>
              <p className="text-white body-font">Name: Your Name</p>
              <p className="text-white body-font">Age: Your Age</p>
              <p className="text-white body-font">Gender: Your Gender</p>
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
            >
              <p className="text-white text-3xl font-bold">Your Info</p>
            </motion.div>

            <div className="flex flex-col items-center">
              <motion.button
                className="bg-[#00df9a] w-[200px] rounded-md font-medium px-6 py-3 m-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ delay: 3, duration: 0.8 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleRecBook}
              >
                Previous Bookings
              </motion.button>
              <motion.button
                className="bg-[#00df9a] w-[200px] rounded-md font-medium px-6 py-3 m-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ delay: 3, duration: 0.8 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCancelBook}
              >
                Cancel Your Bookings
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
