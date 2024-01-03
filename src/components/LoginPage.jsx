import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleValidation = () => {
    if (userName !== "" && password !== "") {
      setMessage("Successfully Logged In.. Redirecting in 2 seconds..");
    } else {
      setMessage("Invalid Credentials..Please Check again!");
    }
  };
  const handleLogin = () => {
    navigate("/loginPage");
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
            <form action="">
              {/* New input for username */}
              <input
                type="text"
                name="username" // You can adjust the name as needed
                id="username" // You can adjust the ID as needed
                required
                placeholder="Username"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              {/* Existing input for email */}
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
              {/* Existing input for password */}
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
              <Link to="/home">
                <button onClick={handleValidation}>Register</button>
              </Link>
              <p
                style={{
                  marginTop: "8px",
                  marginLeft: "25px",
                  color:
                    message ===
                    "Successfully Logged In.. Redirecting in 2 seconds.."
                      ? "green"
                      : "red",
                }}
              >
                {message}
              </p>
              <p>Already Have an Account?</p>
              <button onClick={handleLogin}>Login In</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
