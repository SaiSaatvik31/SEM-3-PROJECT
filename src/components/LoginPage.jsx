import { useState } from "react";
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
            <img src="../src/TrustCure-nobg.png" width="400px" alt="logo" />
          </div>

          <div className="login-container">
            <h1>Login</h1>
            {/* <label htmlFor="userid">User Id: </label> */}
            <input
              type="email"
              name="userid"
              id="userid"
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
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button onClick={handleValidation}>Log In</button>
            {/* <p>Create Your Account</p> */}
            <p
              style={{
                color:
                  message ===
                  "Successfully Logged In.. Redirecting in 2 seconds.."
                    ? "green"
                    : "red",
              }}
            >
              {message}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
