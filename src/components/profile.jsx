import React, { useState, useEffect } from "react";
import "../styles/profile.css";
import goku from "../goku.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ContactSupportOutlined } from "@mui/icons-material";

function Profile() {
  // const navigate = useNavigate()
  const [showContent, setShowContent] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const handleRecBook = () => {
    navigate("/recBook");
  };
  const handleCancelBook = () => {
    navigate("/cancellation");
  };
  const handleOthers = () => {
    navigate("/otherProfile");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      localStorage.removeItem("token");
    } else {
      const email = token ? JSON.parse(atob(token.split(".")[1])).email : null;
      const name = token ? JSON.parse(atob(token.split(".")[1])).name : null;
      setName(name);
      setEmail(email);
    }
  }, [setEmail]);
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
              <p className="text-white body-font">Name:{name}</p>
              <p className="text-white body-font">Email: {email}</p>
              <p className="text-white text-3xl header-font mt-3">
                Your Record:
              </p>
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ delay: 0, duration: 1 }}
            ></motion.div>

            <div className="flex flex-col items-center">
              <motion.button
                className="bg-[#00df9a] w-[200px] rounded-md font-medium px-6 py-3 m-3 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ delay: 0, duration: 1 }}
                whileTap={{ scale: 1 }}
                onClick={handleRecBook}
              >
                Previous Bookings
              </motion.button>
              <motion.button
                className="bg-[#00df9a] w-[200px] rounded-md font-medium px-6 py-3 m-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ delay: 0, duration: 1 }}
                whileTap={{ scale: 1 }}
                onClick={handleCancelBook}
              >
                Cancel Your Bookings
              </motion.button>
              <motion.button
                className="bg-[#00df9a] w-[200px] rounded-md font-medium px-6 py-3 m-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ delay: 0, duration: 1 }}
                whileTap={{ scale: 1 }}
                onClick={handleOthers}
              >
                book for Other Profile
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
