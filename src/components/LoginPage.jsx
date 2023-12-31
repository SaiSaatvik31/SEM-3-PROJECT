import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleValidation = () => {
    if ((userName !== "") & (password !== "")) {
      setMessage("Successfully Logged In.. Redirecting in 2 seconds..");
    } else {
      setMessage("Invalid Credentials..Please Check again!");
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="main-container2">
          <div className="image-container">
            <img src="../src/Trustcure-nobg.png" width="400px" alt="logo" />
          </div>

          <div className="login-container">
            <h1>Login</h1>
            {/* <label htmlFor="userid">User Id: </label> */}
            <form action="" >
            <input
              type="email"
              name="userid"
              id="userid"
              required
              placeholder="abc12@gmail.com"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            {/* <label htmlFor="password">Password: </label> */}
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
            />
            <Link to='home'>
            <button onClick={handleValidation}>Log In</button>
            </Link>
            {/* <p>Create Your Account</p> */}
            <p
              style={{
                marginTop:'8px',
                marginLeft:'25px',
                color:
                  message ===
                  "Successfully Logged In.. Redirecting in 2 seconds.."
                    ? "green"
                    : "red",
              }}
            >
              {message}
            </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
