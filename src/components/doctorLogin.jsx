import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/login.css";
import {Email, Visibility, VisibilityOff} from '@mui/icons-material'
import { useNavigate } from "react-router-dom";

import { Button, TextField } from "@mui/material";
import useStyles from '../styles/customStyles'
let doc_num = 2000;
let adm_num = 2000;
function DocLogin() {

  const location = useLocation();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors,setErrors] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const navigate = useNavigate();
  const [user, setUser] = useState("hello");
  const navigate = useNavigate();
  const classes = useStyles();

  const handleValidation = () => {
    if (userName !== "" && password !== "") {
      setMessage("Successfully Logged In.. Redirecting in 2 seconds..");
    } else {
      setMessage("Invalid Credentials..Please Check again!");
    }
  };
  const handleUserChange = (e) => {
    setUserName(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setUserName(e.target.value);
  }
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword)=> !prevShowPassword);
  }
  // const handleLogin = () => {
  //   navigate("/loginPage");
  // };
  // useEffect(() => {

  // }, [user]);

  async function loginUser(event) {
    event.preventDefault();
    console.log(user);
    let m_user = "";
    if (user[0] === "D") {
      m_user = `D${doc_num}`;
      doc_num += 1;
    } else if (user[0] === "A") {
      m_user = `A${adm_num}`;
      adm_num += 1;
    }
    const response = await fetch("/api/docLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    });
    const data = await response.json();
    if (data.status === "ok") {
      alert("Login Successfull");
      if (user.startsWith("A")) {
        localStorage.setItem("token", data.user);
        navigate("/admin");
      } else {
        localStorage.setItem("token", data.user);
        navigate("/doctor");
      }
    } else {
      alert("Login unsuccessfull!");
    }
    console.log(data);
  }

  return (
    <>
      <div className="login-wrapper">
        <div className="loginForm-wrapper">
          <form onSubmit={loginUser}>
            <h1>Doctor Login</h1>
            <div className="input-box">
              <TextField
                className={classes.textField}
                error={errors}
                helperText={errors ? "Invalid Credentials" : ""}
                fullWidth
                type="text"
                name="userid"
                id="userid"
                required
                label="Email"
                value={userName}
                onChange={handleUserChange}
                InputProps={{
                  // style:{borderColor:'black'},
                  // notchedOutline:{borderColor:'black'},
                  endAdornment: <Email fontSize="small" />,
                }}
              />
              {/* <Email fontSize="small"/> */}
            </div>
            <div className="input-box">
              <TextField
                error={errors}
                className={classes.textField}
                helperText={errors ? "Invalid Credentials" : ""}
                fullWidth
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                required
                label="Password"
                value={password}
                onChange={handlePasswordChange}
                InputProps={{
                  endAdornment: showPassword ? (
                    <VisibilityOff
                      fontSize="small"
                      onClick={handleShowPassword}
                    />
                  ) : (
                    <Visibility fontSize="small" onClick={handleShowPassword} />
                  ),
                }}
              />
            </div>
            <div className="remember-me">
              <label>
                <input type="checkbox" name="" id="" />
                Remember Me
              </label>
              <Link to="#">Forgot Password?</Link>
            </div>
            <Button className="loginSubmit-button" type="submit">
              Login
            </Button>
            <div className="register">
              <p>
                Don't have an account?<Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>{" "}
      </div>
    </>
  );
}

export default DocLogin;
