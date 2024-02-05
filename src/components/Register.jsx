import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStyles from "../styles/customStyles";
import { Button, TextField } from "@mui/material";

function Register() {
  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobNum, setMobNum] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    number: false,
    email: false,
    password: false,
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();

  const registerUser = async (event) => {
    event.preventDefault();
    const { username, mobnum, userid, password } = event.target.elements;
    const formData = {
      name: username.value,
      mobNum: mobnum.value,
      email: userid.value,
      password: password.value,
    };

    setErrors({
      name: false,
      number: false,
      email: false,
      password: false,
    });
    if (!formData.name) {
      setErrors((prevErrors) => ({ ...prevErrors, name: true }));
      return;
    }
    const regExp = /^\d{10}$/;
    if (!formData.mobNum || !regExp.test(mobNum)) {
      setErrors((prevErrors) => ({ ...prevErrors, number: true }));
      return;
    }
    if (!formData.email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: true }));
      return;
    }
    if (!formData.password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: true }));
      return;
    }
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.status === "ok") {
        navigate("/login");
      }
      console.log(data);
      setMessage("Successfully Registered!");
      // Redirect to login page after registration
      // setTimeout(() => {
      //   navigate("/loginPage");
      // }, 2000);
    } catch (error) {
      setMessage("Registration Failed. Please try again.");
      console.error("Error:", error);
    }
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleMobNumChange = (e) => {
    setMobNum(e.target.value);
  };

  const handleUserEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      {/* <div className="main-container">
        <div className="main-container2">
          <div className="login-container">
            <h1>Register</h1>
            <form onSubmit={registerUser}>
              <input
                type="text"
                name="username"
                id="username"
                required
                placeholder="Username"
                value={name}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <input
                type="email"
                name="userid"
                id="userid"
                required
                placeholder="abc12@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              /> */}
      {/* Register button */}
      {/* <button className="mb-4" type="submit">
                Register
              </button>
              <p
                style={{
                  marginTop: "10px",
                  marginLeft: "25px",
                  color:
                    message === "Successfully Registered!" ? "green" : "red",
                }}
              >
                {message}
              </p>
              <p className="text-center m-2">Already Have an Account?</p> */}
      {/* Link to login page */}
      {/* <button className="mt-3" onClick={() => navigate("/login")}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div> */}
      <div className="register-wrapper">
        <div className="registrationForm-wrapper">
          <form onSubmit={registerUser}>
            <h1>Register</h1>
            <div className="input-box">
              <TextField
                className={classes.textField}
                fullWidth
                type="text"
                name="username"
                id="username"
                required
                label="Name"
                value={name}
                onChange={handleUserNameChange}
                error={errors.name}
                helperText={errors.name ? "Enter valid Name" : ""}
              />
            </div>
            <div className="input-box">
              <TextField
                className={classes.textField}
                fullWidth
                type="text"
                name="mobnum"
                id="mobnum"
                required
                label="Mobile Number"
                value={mobNum}
                onChange={handleMobNumChange}
                error={errors.number}
                helperText={errors.number ? "Enter valid Mobile Number" : ""}
              />
            </div>
            <div className="input-box">
              <TextField
                className={classes.textField}
                fullWidth
                type="email"
                name="userid"
                id="userid"
                label="Email"
                value={email}
                onChange={handleUserEmailChange}
                required
                error={errors.email}
                helperText={errors.email ? "Enter valid Email" : ""}
              />
            </div>
            <div className="input-box">
              <TextField
                className={classes.textField}
                fullWidth
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                required
                label="Password"
                value={password}
                onChange={handlePasswordChange}
                error={errors.password}
                helperText={errors.password ? "Enter Strong Password" : ""}
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
            <Button className="registerSubmit-button" type="submit">
              Register
            </Button>
            <div className="login">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
