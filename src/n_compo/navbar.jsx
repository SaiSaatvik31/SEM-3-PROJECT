import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const navbarVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.2 } },
};

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const token = localStorage.getItem("token");
  const userName = token ? JSON.parse(atob(token.split(".")[1])).name : null;
  console.log(userName);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <motion.div
      className="text-white flex justify-between items-center mx-auto px-4"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      style={{ position: showMenu ? "absolute" : "relative" }}
    >
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">TrustCure</h1>
      <div className="lg:flex hidden">
        {/* Your desktop navigation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={navbarVariants}
        >
          <ul className="flex uppercase font-bold">
            <li className="p-4 cursor-pointer">Home</li>
            <li className="p-4 cursor-pointer">About</li>
            <li className="p-4 cursor-pointer">FeedBack</li>
            {userName ? (
              <li className="p-3 cursor-pointer">{`Hey! ${userName}`}</li>
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className=" hover:scale-110 duration-500 text-dark bg-[#00df9a] w-[150px] rounded-md font-medium  mx-auto  text-dark mt-3  "
              >
                Login
              </button>
            )}
          </ul>
        </motion.div>
      </div>
      <div className="lg:hidden">
        {/* Hamburger menu for mobile */}
        {showMenu ? (
          <AiOutlineClose
            size={30}
            onClick={toggleMenu}
            className="cursor-pointer"
            title="Close Menu"
          />
        ) : (
          <AiOutlineMenu
            size={30}
            onClick={toggleMenu}
            className="cursor-pointer"
            title="Open Menu"
          />
        )}
      </div>
      {/* Mobile menu */}
      {showMenu && (
        <div className="fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-black ease-in-out duration-9000">
          <ul className="pt-24 uppercase">
            <li className="p-4 border-r cursor-pointer border-l m-3">Home</li>
            <li className="p-4 border-r cursor-pointer border-l m-3">About</li>
            <li className="p-4 border-r border-l m-3">FeedBack</li>
            {token ? (
              "hello"
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="bg-[#00df9a]"
              >
                <li className="p-4 border-r border-l m-3">Login</li>
              </button>
            )}
          </ul>
        </div>
      )}
    </motion.div>
  );
}

export default Navbar;
