import { useState } from "react";
import useStyles from "../styles/customStyles";
import {Email, Visibility, VisibilityOff} from "@mui/icons-material";
import { TextField, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
function Register() {

  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [messages, setMessages] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();

  const handleValidation = () => {
    if (userName !== "" && password !== "") {
      setMessage("Successfully Logged In.. Redirecting in 2 seconds..");
    } else {
      setMessage("Invalid Credentials..Please Check again!");
    }
  };
  // const handleLogin = () => {
  //   navigate("/loginPage");
  // };
  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login Successfull");
      navigate("/home");
    } else {
      setErrors(true);
    }
    console.log(data);
  }

  const handleUserChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword)=>!prevShowPassword)
  }
  return (
    // <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    //   <div className="max-w-md p-8 bg-white shadow-md rounded-md flex">
    //     <div className="flex-shrink-0 mr-6">
    //       <img
    //         className="w-16 h-16 object-contain"
    //         src="../src/Trustcurelogo-1.png"
    //         alt="logo"
    //       />
    //       <img
    //         className="w-12 h-12 mt-4 object-contain"
    //         src="../src/Trustcure-nobg.png"
    //         alt="logo"
    //       />
    //     </div>

    //     <div className="flex flex-col">
    //       <h1 className="text-3xl font-semibold mb-6">Login</h1>
    //       <form onSubmit={loginUser} className="flex flex-col space-y-4">
    //         <input
    //           type="text"
    //           name="userid"
    //           id="userid"
    //           required
    //           placeholder="Email"
    //           value={email}
    //           onChange={(e) => {
    //             setEmail(e.target.value);
    //             console.log(e.target.value);
    //           }}
    //           className="border p-2 rounded-md focus:outline-none focus:border-blue-500"
    //         />
    //         <input
    //           type="password"
    //           name="password"
    //           id="password"
    //           required
    //           placeholder="Password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           className="border p-2 rounded-md focus:outline-none focus:border-blue-500"
    //         />
    //         <button
    //           type="submit"
    //           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
    //         >
    //           Login
    //         </button>
    //         <p
    //           className={`mt-2 text-sm ${
    //             message ===
    //             "Successfully Logged In.. Redirecting in 2 seconds.."
    //               ? "text-green-500"
    //               : "text-red-500"
    //           }`}
    //         >
    //           {message}
    //         </p>
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <>
      <div className="login-wrapper">
      <div className="loginForm-wrapper">
        <form onSubmit={loginUser} >
          <h1>Login</h1>
          <div className="input-box">
            <TextField
            className={classes.textField}
            error={errors}
            helperText={errors?"Invalid Credentials":""}
            fullWidth
              type="text"
              name="userid"
              id="userid"
              required
              label="Email"
              value={email}
              onChange={handleUserChange}
              InputProps = {{
                // style:{borderColor:'black'},
                // notchedOutline:{borderColor:'black'},              
                endAdornment: <Email  fontSize="small"/>
              }}
            />
            {/* <Email fontSize="small"/> */}
          </div>
          <div className="input-box">
            <TextField
            error={errors}
            className={classes.textField}
            helperText={errors?"Invalid Credentials":""}
            fullWidth
            type={showPassword?'text':'password'}
            name="password"
            id="password"
            required
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            InputProps = {{
              endAdornment:(
              showPassword? (<VisibilityOff fontSize="small" onClick={handleShowPassword}/>) : (<Visibility fontSize="small" onClick={handleShowPassword}/>)
  )}}
             />
          </div>
          <div className="remember-me">
            <label><input type="checkbox" name="" id="" />Remember Me</label>
            <Link to='#'>Forgot Password?</Link>
          </div>
          <Button className="loginSubmit-button" type="submit">Login</Button>
          <div className="register">
            <p>Don't have an account?<Link to='/register'>Register</Link></p>
          </div>
        </form>
        
        </div> </div>
    </>
  );
}
export default Register;
