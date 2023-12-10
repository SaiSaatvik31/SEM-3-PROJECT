// import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const iconStyle = { "--fa-animation-duration": "0.5s", color: "red" };
  const redirectToHome = () => {
    navigate("/");
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"darkcyan"}
        component={"div"}
        sx={{ flexGrow: 1, my: 2 }}
        variant="h5"
      >
        <sup>
          Trust<sub>Cure</sub>
          <i className="fa-solid fa-heart fa-beat" style={{ iconStyle }}></i>
        </sup>
      </Typography>
      <Divider />
      {/* <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        sx={{ mr: 2, display: { sm: "none" } }}
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton> */}

      <ul className="mobile-navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/feedback">FeedBack</Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: "#0a0a0a" }}>
        <Toolbar>
          <Typography
            color={"darkcyan"}
            component={"div"}
            sx={{ flexGrow: 1 }}
            variant="h5"
          >
            <div
              style={{ color: "white", cursor: "pointer" }}
              onClick={redirectToHome}
            >
              <sup>
                Trust<sub>Cure</sub>
                <i className="fa-solid fa-heart fa-beat" style={iconStyle}></i>
              </sup>
            </div>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Box component={"div"} sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
              <li>
                <Link style={{ color: "white" }} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link style={{ color: "white" }} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link style={{ color: "white" }} to="/feedback">
                  FeedBack
                </Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "270px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
}

export default Navbar;
