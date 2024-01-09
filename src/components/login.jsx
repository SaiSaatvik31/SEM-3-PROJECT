import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
function Register() {
  const location = useLocation();
  const [email, setEmail] = useState("");
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
      navigate("/");
    } else {
      alert("Login unsuccessfull!");
    }
    console.log(data);
  }

  return (
    <>
      <div className="main-container">
        <div className="main-container2">
          <div className="image-container">
            <div className="d-flex flex-column justify-content-end">
              <div className="ml-5 d-flex justify-content-center">
                <img
                  style={{ mixBlendMode: "multiply" }}
                  src="../src/Trustcurelogo-1.png"
                  width="300px"
                  alt="logo"
                />
              </div>
            </div>
            <div className="ml-5 d-flex justify-content-center">
              <img src="../src/Trustcure-nobg.png" alt="logo" />
            </div>
          </div>

          <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={loginUser}>
              {/* Existing input for email */}
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
              <button type="submit">Login</button>
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
